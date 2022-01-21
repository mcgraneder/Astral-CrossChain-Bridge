pragma solidity >= 0.5.0;
pragma abicoder v2;

import "./utils/SafeMath.sol";

interface IERC20 {

    function balanceOf(address account) external view returns (uint256);
    function symbol() external view returns (string memory);
    function totalSupply() external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function transfer(address recipient, uint256 amount) external returns (bool);
    event Transfer(address indexed from, address indexed to, uint256 value);
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

interface IGateway {

    function mint(bytes32 _pHash, uint256 _amount, bytes32 _nHash, bytes calldata _sig) external returns(uint256);
    function burn(bytes calldata _to, uint256 _amount) external returns(uint256);
}

interface IGatewayRegistry {

    function getGatewayBySymbol(string calldata _tokenSymbol) external view returns (IGateway);
    function getTokenBySymbol(string calldata _tokenSymbol) external view returns (IERC20);
}


contract RenBridge {

    using SafeMath for uint256;

    IGatewayRegistry public registry;
    uint256 lockAndMintId = 0;
    uint256 burnAndReleaseId = 0;

    struct Token {

        string ticker;
        address tokenAddress;
    }

    struct LockAndMints {

        uint256 id;
        string asset;
        uint256 amount;
        uint256 timeOfCreation;
    }

    struct BurnAndReleases {

        uint256 id;
        string asset;
        uint256 amount;
        uint256 timeOfCreation;
    }

    string[] tokenList;
    address contractOwner;
    address[] owners;

    mapping(string => Token) tokenMapping;
    mapping(address => mapping(string => uint)) tokenBalance;
    mapping(address => LockAndMints[]) depositList;
    mapping(address => BurnAndReleases[]) withdrawalList;


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

    modifier tokenExists(string memory _ticker) {

        require(tokenMapping[_ticker].tokenAddress != address(0));
        _;
    }

    modifier onlyOwner() {
    
        for (uint i = 0; i < owners.length; i++) {

            if(owners[i] == msg.sender) revert("only the admin can call this function");
        }
        _; 
    }

    event Deposit(uint256 _amount, bytes _msg);
    event Withdraw(bytes _to, uint256 _amount, bytes _msg);
    event tokenAdded(string ticker, address tokenAddress);
    event ownerAdded(address owner);

    
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

        emit ownerAdded(_owner);

        return true;
    }

    function lockAndMintInitialized(string memory asset, uint256 amount) private returns (bool) {

        LockAndMints[] storage deposits = depositList[msg.sender];
        deposits.push(
            LockAndMints(
            lockAndMintId, 
            asset, 
            amount, 
            block.timestamp
        ));

        lockAndMintId++;

        return true;
    }

    function burnAndReleaseInitialized(string memory asset, uint256 amount) private returns (bool) {

        BurnAndReleases[] storage widthdrawals = withdrawalList[msg.sender];
        widthdrawals.push(
            BurnAndReleases(
            burnAndReleaseId, 
            asset, 
            amount, 
            block.timestamp
        ));

        burnAndReleaseId++;

        return true;
    }

    function deposit(
        bytes calldata _msg, 
        bytes calldata _ticker,
        uint256 _amount, 
        bytes32 _nHash, 
        bytes calldata _sig) 
        external  {

        string memory ticker = string(abi.encodePacked(_ticker));
        bytes32 pHash = keccak256(abi.encode(_msg));

        lockAndMintInitialized(ticker, _amount);
        require(depositList[msg.sender].length == 0, "can only have one LockAndMint operation at a time");
        

        uint256 mintedAmount = registry.getGatewayBySymbol(ticker).mint(pHash, _amount, _nHash, _sig);
        tokenBalance[msg.sender][ticker].add(_amount);

        depositList[msg.sender].pop();

        emit Deposit(mintedAmount, _msg);
    }

    function withdraw(
        bytes calldata _msg, 
        bytes calldata _ticker,
        bytes calldata _to, 
        uint256 _amount) 
        external {

        string memory ticker = string(abi.encodePacked(_ticker));
        burnAndReleaseInitialized(ticker, _amount);

        require(withdrawalList[msg.sender].length == 0, "can only have one burnAndRelease operation at a time");
        require(depositList[msg.sender].length == 0, "can only have one LockAndMint operation at a time");
        require(tokenBalance[msg.sender][ticker] >= _amount, "insufficent balance");
        require(_amount != 0, "cannot withdraw zero tokens");

        tokenBalance[msg.sender][ticker].sub(_amount);

        uint256 burnedAmount = registry.getGatewayBySymbol(ticker).burn(_to, _amount);

        withdrawalList[msg.sender].pop();

        emit Withdraw(_to, burnedAmount, _msg);
    }

    function transfer(
        address recipient, 
        uint256 amount, 
        string memory _ticker) 
        public 
        tokenExists(_ticker) 
        returns (bool) {

        tokenBalance[msg.sender][_ticker].sub(amount);
        registry.getTokenBySymbol("BTC").transfer(recipient, amount);

        return true;
    }

    function transferFrom(
        address sender, 
        address recipient, 
        uint256 amount, 
        string memory _ticker) 
        public 
        tokenExists(_ticker) 
        returns (bool) {

        registry.getTokenBySymbol("BTC").transferFrom(sender, recipient, amount);
        tokenBalance[msg.sender][_ticker].add(amount);

        return true;
    }
 
    function getContractTokenbalance(string memory _ticker) public view returns (uint256) {

        return registry.getTokenBySymbol(_ticker).balanceOf(address(this));
    }

    function getUserbalanceInContract(string memory _ticker) public view returns (uint256) {

        return tokenBalance[msg.sender][_ticker];
    }

    function getUserTokenBalance(string memory _ticker, address _owner) public view returns (uint256) {

        return registry.getTokenBySymbol(_ticker).balanceOf(_owner);
    }

    function totalSupply() public view returns (uint256) {

        return registry.getTokenBySymbol("BTC").totalSupply();
    }


    function allowance(address owner, address spender) public view returns (uint256) {

        return  registry.getTokenBySymbol("BTC").allowance(owner, spender);
       
    }

    function getLockAndMints() public view returns (LockAndMints[] memory) {

        return depositList[msg.sender];
    }

     function getLockBurnAndReleases() public view returns (BurnAndReleases[] memory) {

        return withdrawalList[msg.sender];
    }

    function getSymbol(address sender, address recipient, uint256 amount) public returns (bool) {

        registry.getTokenBySymbol("BTC").transferFrom(sender, recipient, amount);
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