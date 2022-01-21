pragma solidity >= 0.5.0;
pragma abicoder v2;

import "./SafeMath.sol";

//interface functions needed to get info on RenBTC for current user after mint is successful
//we also need the interface to be able to transfer tokens to and from this contract address
interface IERC20 {

    function balanceOf(address account) external view returns (uint256);

    function symbol() external view returns (string memory);

    function totalSupply() external view returns (uint256);

    function approve(address spender, uint256 amount) external returns (bool);

    function allowance(address owner, address spender) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);

    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}


//Ren Gateway Interface needed to access the mint and burn functions which we use to bridge RenBTC
//to and from the destination chain
interface IGateway {

    function mint(bytes32 _pHash, uint256 _amount, bytes32 _nHash, bytes calldata _sig) external returns(uint256);
    function burn(bytes calldata _to, uint256 _amount) external returns(uint256);
}


//Interface for the GateWay registry which allows us to get the contract address of supported bridging
//tokens offered by Ren
interface IGatewayRegistry {

    function getGatewayBySymbol(string calldata _tokenSymbol) external view returns (IGateway);
    function getTokenBySymbol(string calldata _tokenSymbol) external view returns (IERC20);
}


contract RenBridge {

    using SafeMath for uint256;

    IGatewayRegistry public registry;

    uint256 lockAndMintId = 0;
    uint256 burnAndReleaseId = 0;

    //token struct which we can use to add supported tokens to our bridge
    struct Token {

        string ticker;
        address tokenAddress;
    }

    //lock and mint struct which we use to initialise a lock and mint event
    struct LockAndMints {

        uint256 id;
        string asset;
        uint256 amount;
        uint256 timeOfCreation;
    }

    //burn and release struct which we use to init a burn and release event
    struct BurnAndReleases {

        uint256 id;
        string asset;
        uint256 amount;
        uint256 timeOfCreation;
    }

    string[] tokenList;
    address contractOwner;
    address[] owners;

    //mappings for various things like user token balances and lists of current lockAndMintId
    // and burn and release events for a given user
    mapping(string => Token) tokenMapping;
    mapping(address => mapping(string => uint)) tokenBalance;
    mapping(address => LockAndMints[]) depositList;
    mapping(address => BurnAndReleases[]) withdrawalList;


    //we init the list of supported tokens in the constructor which we can add too with the addToken function
    //also init the gateway address
    constructor(IGatewayRegistry _registry, string[] memory _tokens) {

        registry = _registry;
        contractOwner = msg.sender;
        owners.push(contractOwner);

        for (uint i = 0; i < _tokens.length; i++) {

            require(address(registry.getTokenBySymbol(_tokens[i])) != address(0), "this token is not supported by Ren!");

            tokenMapping[_tokens[i]] = Token(_tokens[i], address(registry.getTokenBySymbol(_tokens[i])));
            tokenList.push(_tokens[i]);
        }
       
    }

    //modifier to check if a token exists. we need this to prevet adding non supported bridge tokens
    //or conversley tokens that dont exists at all
    modifier tokenExists(string memory _ticker) {

        require(tokenMapping[_ticker].tokenAddress != address(0));
        _;
    }

    //admin only owner modifier. only the contract creator and people he chooses can add supporting tokens
    modifier onlyOwner() {
    
        for (uint i = 0; i < owners.length; i++) {

            if(owners[i] == msg.sender) revert("only the admin can call this function");
        }
        _; 
    }

    //events
    event Deposit(uint256 _amount, bytes _msg);
    event Withdraw(bytes _to, uint256 _amount, bytes _msg);
    event tokenAdded(string ticker, address tokenAddress);
    event ownerAdded(address owner, uint256 time);
    event ownerRemoved(address owner, uint256 time);

    event depositInitialized(
        string asset, 
        uint256 id, 
        uint256 amount, 
        address depositedBy, 
        uint256 timeOfCreation);

    event withdrawalInitialized(
        string asset, 
        uint256 id, 
        uint256 amount, 
        address withdrawedBy, 
        uint256 timeOfCreation);

    
    //function that allows the admins to update the list of supported brifge tokens. this alllows
    //the contract to be relevant as ren support new tokens in the future
    function addToken(
        string memory _ticker, 
        address tokenAddress
        ) public 
        tokenExists(_ticker) 
        onlyOwner() 
        returns (bool) {

        for (uint i = 0; i < tokenList.length; i++) {

            require(keccak256(bytes(tokenList[i])) != keccak256(bytes(_ticker)), "token has already been added"); 
        }
        require(keccak256(bytes(IERC20(tokenAddress).symbol())) == keccak256(bytes(_ticker)), "inputted ticker does not match the token symbol");

        tokenMapping[_ticker] = Token(_ticker, tokenAddress);
        tokenList.push(_ticker);

        emit tokenAdded(_ticker, tokenAddress);

        return true;
    }

    //function that allows the contract creator to give admin status to other people so that they can
    //execute admin functions such as adding tokens
     function addOwner(
        address _owner) 
        public 
        onlyOwner() 
        returns (bool) {

        for (uint user = 0; user < owners.length; user++) {

            require(owners[user] != _owner, "Already registered");
        }

        require(owners.length <= 5);
        owners.push(_owner);

        emit ownerAdded(_owner, block.timestamp);

        return true;
    }

    //function that allows contract creator to remove admin status from existing owners
    function removeOwner(address owner) public onlyOwner() returns (bool) {

        bool hasBeenFound = false;
        uint256 ownerIndex;
        for (uint i = 0; i < owners.length; i++) {

            if (owners[i] == owner) {

                hasBeenFound = true;
                ownerIndex = i;
                break;
            }
        }

        require(hasBeenFound, "owner does not exist");

        owners[ownerIndex] = owners[owners.length - 1];
        owners.pop();

        emit ownerAdded(owner, block.timestamp);

        return true;
    }

    // this function inits the lockAndMint struct whenever a user attempts to bridge tokens
    //we use this function to init a stuct array. we can use this to prevent the user from
    //initing multiple mints at once therefore reducing their capacting to only be able to 
    //init one bridge operation at a time
    function lockAndMintInitialized(string memory asset, uint256 amount, bool data) external returns (bool) {

        LockAndMints[] storage deposits = depositList[msg.sender];
        if (data) deposits.pop();

        require(deposits.length == 0, "can only have one LockAndMint operation at a time");

        deposits.push(
            LockAndMints(
            lockAndMintId, 
            asset, 
            amount, 
            block.timestamp
        ));

        emit depositInitialized(asset, lockAndMintId, amount, msg.sender, block.timestamp);

        lockAndMintId++;

        return true;
    }

    //this function is the same as above for the lockAndMint. We prevent the user from executing multiple
    //withdrawals at once
    function burnAndReleaseInitialized(string memory asset, uint256 amount, bool data) external returns (bool) {

        BurnAndReleases[] storage widthdrawals = withdrawalList[msg.sender];
        if (data) widthdrawals.pop();
        
        require(widthdrawals.length == 0, "can only have one burnAndRelease operation at a time");
        widthdrawals.push(
            BurnAndReleases(
            burnAndReleaseId, 
            asset, 
            amount, 
            block.timestamp
        ));

        emit withdrawalInitialized(asset, burnAndReleaseId, amount, msg.sender, block.timestamp);

        burnAndReleaseId++;

        return true;
    }

    //deposit function that executes LockAndMint from RenJs in the client
    function deposit(
        bytes calldata _msg,
        uint256 _amount, 
        bytes32 _nHash, 
        bytes calldata _sig) 
        external  {

        LockAndMints[] storage deposits = depositList[msg.sender];
        string memory ticker =  deposits[0].asset;
        bytes32 pHash = keccak256(abi.encode(_msg));

        require(deposits.length == 1, "can only have one LockAndMint operation at a time");

        uint256 mintedAmount = registry.getGatewayBySymbol(ticker).mint(pHash, _amount, _nHash, _sig);
        tokenBalance[msg.sender][ticker] +=_amount;

        deposits.pop();

        emit Deposit(mintedAmount, _msg);
    }

    //withdrawal function that executes burnAndRelease from RenJs in the client
    function withdraw(
        bytes calldata _msg, 
        bytes calldata _to, 
        uint256 _amount) 
        external {

        BurnAndReleases[] storage widthdrawals = withdrawalList[msg.sender];
        string memory ticker = widthdrawals[0].asset;

        require(widthdrawals.length == 1, "can only have one burnAndRelease operation at a time");
        require(tokenBalance[msg.sender][ticker] >= _amount, "insufficent balance");
        require(_amount != 0, "cannot withdraw zero tokens");

        tokenBalance[msg.sender][ticker] -=_amount;

        uint256 burnedAmount = registry.getGatewayBySymbol(ticker).burn(_to, _amount);

        widthdrawals.pop();

        emit Withdraw(_to, burnedAmount, _msg);
    }

    //function that allows the user to withdraw their token balance from this smart
    //contract to their wallet address or anyone elses
    function transfer(
        address recipient, 
        uint256 amount, 
        string memory _ticker) 
        public 
        tokenExists(_ticker) 
        returns (bool) {

        tokenBalance[msg.sender][_ticker] -= amount;
        registry.getTokenBySymbol(_ticker).transfer(recipient, amount);

        return true;
    }

    //function that allows the user to deposit their tokens into this smart contract for the
    //purpose of transfering the, back to the tokens origunal chain. (need to call approve from the client)
    function transferFrom(
        address sender, 
        address recipient, 
        uint256 amount, 
        string memory _ticker) 
        public 
        tokenExists(_ticker) 
        returns (bool) {

        registry.getTokenBySymbol(_ticker).transferFrom(sender, recipient, amount);
        tokenBalance[msg.sender][_ticker] += amount;

        return true;
    }
 

   //////////////////////////Getter functions/////////////////////////////////

    function getContractTokenbalance(string memory _ticker) public view returns (uint256) {

        return registry.getTokenBySymbol(_ticker).balanceOf(address(this));
    }

    function getUserbalanceInContract(string memory _ticker) public view returns (uint256) {

        return tokenBalance[msg.sender][_ticker];
    }

    function getUserTokenBalance(string memory _ticker, address _owner) public view returns (uint256) {

        return registry.getTokenBySymbol(_ticker).balanceOf(_owner);
    }

    function totalSupplyofToken(string memory _ticker) public view returns (uint256) {

        return registry.getTokenBySymbol(_ticker).totalSupply();
    }


    function tokenAllowance(
        address owner, 
        address spender, 
        string memory _ticker) 
        public view 
        returns (uint256) {

        return  registry.getTokenBySymbol(_ticker).allowance(owner, spender);
       
    }

    function getLockAndMints() public view returns (LockAndMints[] memory) {

        return depositList[msg.sender];
    }

     function getLockBurnAndReleases() public view returns (BurnAndReleases[] memory) {

        return withdrawalList[msg.sender];
    }

    function getTokenSymbol(
        address sender, 
        address recipient, 
        uint256 amount, 
        string memory _ticker) 
        public 
        returns (bool) {

        registry.getTokenBySymbol(_ticker).transferFrom(sender, recipient, amount);
        return true;
    }

     function getTokenList() public view returns (string[] memory) {

        return tokenList;
    }

    function getTokenAddressBySymbol(string memory _ticker) public view returns (IERC20) {

        return registry.getTokenBySymbol(_ticker);
    }

    function getAdmins() public view returns (address[] memory) {

        return owners;
    }
}