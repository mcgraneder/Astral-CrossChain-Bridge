import React, { useState, useEffect, useCallback } from "react";
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import styled, { keyframes } from "styled-components";
import useAuth from "../../hooks/useAuth";
import arrowDown from "../assets/arrowDown.svg"
import DropdownMenu from "./DropdownMenu";
import { getContract } from "../../utils/utils";
import abi from "../../utils/Abis/ABI.json"
import abi2 from "../../utils/Abis/AB12.json"
import Web3	 from "web3";
import Button from "./Button";
import walletIcon from "../assets/depositIcon2.png"
import { generate } from "shortid";
import { CheckCircle } from "react-feather"
import MyListbox from "./ListBox";
import axios from "axios";
import { PendingModal, RejectionModal, TransactionSubmittedModal, ConfirmationModal} from "../TransactionConfirmationModal/PendingModal"
import { StyledContainer, 
         BridgeModalContainer, 
         BridgeModalWrapper, 
         ChainSelector, 
         ChainSelectorWrapper, 
         ChainSelectorIcon, 
         ChainSelectorIconWrapper, 
         ChainSelectorText, 
         ChainSelectorTextWrapper, 
         DropdownContainer, 
         BalanceContainer, 
         BalanceWrapper, 
         MintFormWrapper, 
         ButtonWrapper, 
         MintFormContainer, 
         MintToggleButton, 
         ReleaseToggleButton, 
         MinFormToggleButtonContainer, 
         MintFormTextWrapper2, 
         MintFormText2,
         Balancetext,
         FromContainer,
         WalletInputWrapper,
         WalletInput,
         ArrowContainer,
         ArrowLogoContainer,
         ArrowLogo,
         SpinnerWrapper,
         StatusTextWrapper,
         StatusText,
         MaxOption,
         ForumIcon,
         ForumImg
} from "./WalletModalStyles";
import { v4 } from "uuid"
import DepositSummary from "../AccountDetails/TransactionSummary";
import usePendingTransaction from "../../hooks/usePendingTransaction";
import useBalance from "../../hooks/useBalance";
import Loader from "../Loader/Loader";
import { ArrowRight, ArrowUpCircle } from "react-feather"
import AccountDetailsModal from "../AccountDetails/AccountDetailsModal";
import { Loading, SelectMarket } from "@renproject/react-components";
import { useWeb3React } from "@web3-react/core"
export const MintForm = styled.div`

    margin-top: 10px;
    // margin-bottom: -20px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    height: 50px;
    // width: 100%;
    height: 100%;
    background: transparent;
    border: 1px solid rgb(34,43,68);
    border-radius: 10px;

    &:hover {

        background:  rgb(34,43,68);
    }
`

export const Button1 = styled.div`

  height: 50px;
  width: 100%;
  background: rgb(33,114,229);
  border-radius: 15px;
  text-align: center;
  line-height: 50px;
  font-size: 17px;
//   font-weight: bold;
  color: White;

  &:hover {

    cursor: pointer;
    background: rgb(13,94,209);
}
`

export const ButtonWrapper1 = styled.div`

font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 
   margin-top: 40px;
   margin-bottom: 10px;
//    margin-ledt: 10px;
//    margin-right: 10px;
    // padding: 10px;
    // width: 100%;
    // margin: 0 auto;
    height: 30px;
    // margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

` 

export const ImgWrapper = styled.div`

    padding-top: ${(props) => props.padding};
    // padding-bottom: ${(props) => props.padding};
    display: flex;
    align-items: center;
    justify-content: center;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Spinner = styled.img`

animation: 2s ${rotate} linear infinite;
  width: 16px;
  height: 16px;
`
export const CustomLightSpinner = styled(Spinner)`
  
 
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

export const LoaderWrapper = styled.div`

  position: absolute;
  bottom: ${(props) => props.position ? "9.8%" : "7%"};
  right: 32%;
`
const SelectMarket1 = styled(SelectMarket)`

  background: black;
  color: black;
  cursor: pointer;
  z-index: 10000000;
`

const RenAddress = "0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"
const BridgeAddress = "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B"

export const TRANSACTION_TYPES = {
    APPROVAL: "APPROVAL",
    DEPOSIT: "DEPOSIT",
    WITHDRAWAL: "WITHDRAWAL"
};

export const Asset = {
    BTC: "BTC",
    ZEC: "ZEC",
    BCH: "BCH",
    FIL: "FIL",
    LUNA: "LUNA",
    DOGE: "DOGE",
}
const Assets = [

    {
        name: "Bitcoin",
        symbol: Asset.BTC
        
    },
    {
        name: "Zcash",
        symbol: Asset.ZEC
        
    }
]

const RenBTCPriceRequestURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=renbtc&order=market_cap_desc&per_page=100&page=1&sparkline=false"

const WalletModal = ({setShow, visible, close, setLoading, loading}) => {

    const [isActive, setIsActive] = useState(false)
    const [showNotifications, setShowNotifications] = useState(false)
    const [toggle, setToggle] = useState(true)
    const [dropDownActive, setDropDownActive] = useState(false)
    const [text, setText] = useState("")
    const [inputText, setInputText] = useState("Deposit ")
    const [error, setError] = useState("")
    const [confirm, setConfirm] = useState(false)
    const [pending1, setPending1] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [rejected, setRejected] = useState(false)
    const [amount, setAmount] = useState()
    const [transactionBlock, setTransactionBlock] = useState(true)
    const [ren, setRen] = useState()
    const [bridge, setBridge] = useState()
    const [sufficentBalance, setSufficentBalance] = useState(false)
    const [TransactionType, setTransactionType] = useState("DEPOSIT")
    const [sufficentApproval, setSufficentApproval] = useState(true)
    const [renPrice, setRenPrice] = useState(0)
    const [gas, setGas] = useState(0)
    const [asset, setAsset] = React.useState(Asset.BTC);

    
      const { library, account, active } = useWeb3React()
      const { balance, setBalance } = useBalance()
      const { setDeposits, deposits,  transactions, setTransactions} = usePendingTransaction()

    // localStorage.setItem("deposits", "hello")
      
      useEffect(() => {
            if(library) {
                const bridgeContract = getContract(BridgeAddress, abi, library, account);
                const renContract = getContract(RenAddress, abi2, library, account);

                setRen(renContract)
                setBridge(bridgeContract)
            }

            if(inputText === "Deposit ") {
                if(ren) beginDeposit()
            } else {
                setSufficentApproval(true)
                getBalance(text)
            }

    
      }, [library, text]) 

      useEffect(() => {

        if(library) {
 
             axios.get(RenBTCPriceRequestURL).then((result) => {
                 const currentPrice = (result.data[0].current_price + 0.25) * balance
                 var currentBal = new Number(currentPrice)
                 currentBal = currentBal.toFixed(2)
                 setRenPrice(currentBal)
                 
             }).catch(error => console.error(error))
        }
 
     }, [library, balance])
 
    //    useEffect(() => {
        
    //       deposits.map((deposit, i) => {
    //          if(i > 0) {
    //              console.log(deposit.txHash)
    //              library.getTransaction(deposit.txHash).then((result) => {
    //                  console.log(result)
    //                  if(result.blockNumber) {
 
    //                      // setTransactionBlock(true)
    //                  } 
    //              })
    //          }
    //       })
    //    }, [deposits])


    const setDropdownValue = () => {

        setDropDownActive(!dropDownActive);
    }


    const setDropdownValue3 = () => {

        if(!dropDownActive) return
        setDropDownActive(!dropDownActive);
    }

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    const getMaxDeposit = async() => {

        if(TransactionType === "DEPOSIT") {
            var walletBalance = await ren.balanceOf(account)
            walletBalance = Web3.utils.fromWei(walletBalance.toString(), "Gwei")
            setText(walletBalance)

        } else if (TransactionType === "WITHDRAWAL") {
            var walletBalance = await bridge.getContractTokenbalance("BTC")
            walletBalance = Web3.utils.fromWei(walletBalance.toString(), "Gwei")
            setText(walletBalance)
        }
    }

    const getAllowance = async(amount) => {

        try {
            var allowance = await ren.allowance(account, BridgeAddress)
            allowance = Web3.utils.fromWei(allowance.toString(), "Gwei")

            if(Number(amount) > Number(allowance)) {
                setSufficentApproval(false)
            } else {
                setSufficentApproval(true)
            }

        } catch (error) {
            setSufficentApproval(true)
            console.error(error)
        }

    }

    const getGas = async() => {

        try {
            var gass = await ren.estimateGas.approve(account, BridgeAddress)
            gass = Web3.utils.fromWei(gass.toString(), "Gwei")
            console.log(gass)
            setGas(gass)

        } catch(error) {
            console.error(error)
        }
    }

    const getBalance = async(amount) => {

        console.log(TransactionType)
        try {
            if (TransactionType === "DEPOSIT" || TransactionType === "APPROVAL") {

                var balance = await ren.balanceOf(account)
                balance = Web3.utils.fromWei(balance.toString(), "Gwei")

                if(Number(balance) >= Number(amount)) {
                    setSufficentBalance(false)
                } else {
                    setSufficentBalance(true)
                }

            } else if (TransactionType === "WITHDRAWAL") {

                var balance = await bridge.getContractTokenbalance("BTC")
                balance = Web3.utils.fromWei(balance.toString(), "Gwei")

                if(Number(balance) >= Number(amount)) {
                    setSufficentBalance(false)
                } else {
                    setSufficentBalance(true)
                }
            }     

        } catch (error) {
            setSufficentApproval(true)
            console.error(error)
        }

    }

    const start = (type) => { 

        if(text === "" || !transactionBlock) return
        getGas()
        setConfirm(true)
        setTransactionType(type)

    }
    const beginDeposit = () => {


        getBalance(text)
        getAllowance(text)
        getGas()

    }

    const setToggleValue = () => {
        setToggle(!toggle);

        if(!toggle) {
            setInputText("Deposit ")
            setTransactionType("DEPOSIT") 
            beginDeposit()
        } else {
            setInputText("Withdraw ")
            setSufficentApproval(true)
            setTransactionType("WITHDRAWAL")  
        }
        setText("")
    }

    const handleApproval = async() => {

        setConfirm(false)
        setPending1(true)
//make this into generic function which based on trans type takes a payload
        if(text === "") return

        var walletBalance = await ren.balanceOf(account)
        walletBalance = Web3.utils.toWei(walletBalance.toString(), "wei")
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
       
        try {
            await ren.approve("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", amount)
            .then(async(result) => {
                setLoading(true)
                setPending1(false)
                setSubmitted(true)
                setTransactionBlock(false)

               
                await result.wait().then((result) => {
                    beginDeposit()
                    setLoading(false)
                    setTransactionBlock(true)
                    const id = v4()
                    setDeposits([

                        ...deposits,
                        {
                            id: id,
                            type: "APPROVAL",
                            from: account,
                            amount: text,
                            txHash: result.transactionHash,
                            time: 2
                        },
                    ]);

                    setTransactions([

                        ...transactions,
                        {
                            id: v4(),
                            type: "APPROVAL",
                            from: account,
                            amount: text,
                            txHash: result.transactionHash,
                            time: 2
                        },
                    ]);
                })
            });
        
        } catch (error) {
            setPending1(true)
            setRejected(true)
            setLoading(false)

            if (error.code == 4001) {
                setError("User denied transaction!")
            } else {
                setError(error.message)
            }

        }
    }
    const handleDeposit = async() => {

        setConfirm(false)
        setPending1(true)
        
        if(text === "") return

        var walletBalance = await ren.balanceOf(account)
        walletBalance = Web3.utils.toWei(walletBalance.toString(), "wei")
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
        
        try {
            await bridge.transferFrom(account, BridgeAddress, amount, "BTC")
            .then(async(result) => {
                setLoading(true)
                setPending1(false)
                setSubmitted(true)
                setTransactionBlock(false)

               
                await result.wait().then((result) => {
                    setLoading(false)
                    setTransactionBlock(true)
                    const id= v4()
                    setDeposits([

                        ...deposits,
                        {
                            id: id,
                            type: "DEPOSIT",
                            from: account,
                            amount: text,
                            txHash: result.transactionHash,
                            time: 2
                        },
                    ]);

                    setTransactions([

                        ...transactions,
                        {
                            id: id,
                            type: "APPROVAL",
                            from: account,
                            amount: text,
                            txHash: result.transactionHash,
                            time: 2
                        },
                    ]);
                    
                    bridge.getContractTokenbalance("BTC")
                    .then((balance) => {
                        balance = Web3.utils.fromWei(balance.toString(), "Gwei")
                        var bal = new Number(balance)
                        bal = bal.toFixed(6)
                        setBalance(bal)
                      
                    });
                })
            })

            
        } catch(error) {
            setLoading(true)
            setPending1(false)
            setRejected(true)
            setTransactionBlock(true)

            if (error.code == 4001) {
                setError("User denied transaction!")
            } else {
                setError(error.message)
            }
            
        }
    }

    const handleWithdraw = async() => {

        setConfirm(false)
        setPending1(true)
      
        if(text === "") return

        var walletBalance = await bridge.getContractTokenbalance("BTC")
        walletBalance = Web3.utils.toWei(walletBalance.toString(), "wei")
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
        
        try {
            await bridge.transfer(account, amount, "BTC")
            .then(async (result) => {
                setLoading(true)
                setPending1(false)
                setSubmitted(true)
                setTransactionBlock(false)

                await result.wait().then((result) => {
                    setLoading(false)
                    setTransactionBlock(true)
                    const id = v4()
                    setDeposits([

                        ...deposits,
                        {
                            id: id,
                            type: "WITHDRAWAL",
                            from: account,
                            amount: text,
                            txHash: result.transactionHash,
                            time: 2
                        },
                    ]);

                    setTransactions([

                        ...transactions,
                        {
                            id: id,
                            type: "APPROVAL",
                            from: account,
                            amount: text,
                            txHash: result.transactionHash,
                            time: 2
                        },
                    ]);

                    bridge.getContractTokenbalance("BTC")
                    .then((balance) => {
                        balance = Web3.utils.fromWei(balance.toString(), "Gwei")
                        var bal = new Number(balance)
                        bal = bal.toFixed(6)
                        setBalance(bal)
                    });
                })
    
            });

        } catch(error) {
            setPending1(false)
            setRejected(true)
            setLoading(false)
            setTransactionBlock(true)

            if (error.code == 4001) {
                setError("User denied transaction!")
            } else {
                setError(error.message)
            }
        }
      
    }

    const closeSbmissionModal = () => {
        setSubmitted(false)
        if(TransactionType !== "APPROVAL") {
            setTimeout(() => {
                setText("")
            }, 300)
        }
    }

    return (

        <>
            <DepositSummary 
                deposits={deposits} 
                setIsActive={setIsActive} 
                setDeposits={setDeposits} 
                transactionBlock={transactionBlock} 
                setTransactionBlock={setTransactionBlock}
            />   
            <PendingModal 
                close={() => setPending1(!pending1)} 
                amount={text} 
                visible={pending1}
            />
            <ConfirmationModal
                close={() => setConfirm(!confirm)} 
                amount={text} 
                visible={confirm}
                handleDeposit={
                    TransactionType === "APPROVAL" ? handleApproval 
                    : TransactionType === "DEPOSIT" ? handleDeposit 
                    : handleWithdraw
                }
                TransactionType={setTransactionType}
                gass={gas}
            />
            <TransactionSubmittedModal
                close={() => closeSbmissionModal()} 
                amount={amount} 
                visible={submitted}
            />
            <RejectionModal
                close={() => setRejected(!rejected)} 
                amount={amount} 
                visible={rejected}
            />
        <StyledContainer onClick={() => setDropdownValue3()}>
            
            <BridgeModalContainer>
            <BridgeModalWrapper>
                <ChainSelector onClick={() => setDropdownValue()}>
                    <ChainSelectorWrapper>
                        <ChainSelectorIconWrapper>
                            <ChainSelectorIcon src={BitcoinLogo} width={"30px"}></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText>RenBTC</ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                       
                    </ChainSelectorWrapper>
                    { dropDownActive && <DropdownMenu height={"64px;"}></DropdownMenu>}
             
                </ChainSelector>
                <BalanceContainer>
                    <BalanceWrapper>
                        <Balancetext size={"45px"} colour={"#adadad"}>{balance} renBTC</Balancetext>
                        <Balancetext size={"17px"} colour={"White"}>= ${renPrice} </Balancetext>
                    </BalanceWrapper>                
                </BalanceContainer>
                
                <ArrowContainer>
                    <ArrowLogoContainer>
                        <ArrowLogo src={arrowDown}></ArrowLogo>
                    </ArrowLogoContainer>
                </ArrowContainer>
                <MintFormContainer>
                    <MinFormToggleButtonContainer>
                        <MintToggleButton side={"left"} colour={"rgb(14, 22, 39)"} active={toggle} onClick={setToggleValue}>
                            <MintFormTextWrapper2>
                                <MintFormText2>Deposit</MintFormText2>
                            </MintFormTextWrapper2>
                        </MintToggleButton>
                        <ReleaseToggleButton side={"right"} active={toggle} onClick={setToggleValue}>
                            <MintFormTextWrapper2>
                                <MintFormText2>Withdraw</MintFormText2>
                            </MintFormTextWrapper2>
                        </ReleaseToggleButton>
                    </MinFormToggleButtonContainer>
                    <MintFormWrapper>
                        <FromContainer>
                            <WalletInputWrapper>
                                <WalletInput 
                                    onKeyPress={preventMinus} 
                                    name="number" 
                                    type="number" 
                                    id="in"  
                                    value={text} 
                                    onChange={(e) => setText(e.target.value)} 
                                    placeholder="amount">
                                </WalletInput>
                                <ForumIcon>
                                    <ForumImg src={walletIcon}></ForumImg>
                                </ForumIcon>
                                <MaxOption onClick={getMaxDeposit}>max</MaxOption>
                            </WalletInputWrapper>
                        </FromContainer>
                        {text != "" && !sufficentBalance &&  <ArrowContainer>
                            <ArrowLogoContainer>
                                <ArrowLogo src={arrowDown}></ArrowLogo>
                            </ArrowLogoContainer>
                        </ArrowContainer>}
                        {text != "" && !sufficentBalance && <SpinnerWrapper>  
                           {!sufficentApproval && 
                           <StatusTextWrapper>
                                <StatusText>You need to approve this deposit first</StatusText>
                            </StatusTextWrapper>}
                            {!sufficentApproval && 
                            <StatusTextWrapper>
                                <ArrowRight size={"20px"} color={"rgb(33,114,229)"}></ArrowRight>
                                <StatusText>Estimated Gas: 0.0001823 ETH</StatusText>
                            </StatusTextWrapper>}
                            {sufficentApproval && 
                           <StatusTextWrapper>
                               <ArrowUpCircle size={"20px"} color={"rgb(33,114,229)"}/>
                                <StatusText>Confrim Deposit of {text} RenBTC</StatusText>
                            </StatusTextWrapper>}
                            {sufficentApproval && 
                            <StatusTextWrapper>
                                <ArrowRight size={"20px"} color={"rgb(33,114,229)"}></ArrowRight>
                                <StatusText>Estimated Gas: 0.0001823 ETH</StatusText>
                            </StatusTextWrapper>}
                            {sufficentApproval && 
                            <StatusTextWrapper>
                                <ArrowRight 
                                    size={"20px"} 
                                    color={"rgb(33,114,229)"
                                    }
                                />
                                <StatusText>Bridge Fee: 0.0001 ETH</StatusText>
                            </StatusTextWrapper>}
                         {!sufficentApproval && 
                              <ButtonWrapper1>
                                  <Button1 
                                    onClick={
                                        () => start(TRANSACTION_TYPES.APPROVAL)
                                    }>
                                    { active ? (!loading ? 
                                    "Approve Token Deposit" 
                                    :  <div>1 Pending... 
                                            {/* <LoaderWrapper position={Boolean(text === "")}>
                                                <Loader stroke="white" size={"20px"}/>
                                            </LoaderWrapper> */}
                                        </div>) 
                                    :   <div>
                                            Connecting...
                                            <Loader stroke="white" size={"18px"}/>
                                        </div>}
                                    </Button1>
                              </ButtonWrapper1>}
                        </SpinnerWrapper>}
                        <ButtonWrapper>
                            <Button 
                            state={sufficentApproval} 
                            balanceState={sufficentBalance}
                            width={"440px"} 
                            active={active} 
                            close={close} 
                            input={text}
                            click={
                                inputText === "Withdraw " ? 
                                () => start(TRANSACTION_TYPES.WITHDRAWAL) : 
                                () => start(TRANSACTION_TYPES.DEPOSIT)} 
                            height="60px" 
                            fontsize="17"  
                            transactionBlock={transactionBlock}
                            text={
                                transactionBlock ? 
                                (active ? 
                                (sufficentBalance ? 
                                "Insufficent Balance" 
                                :(sufficentApproval ? 
                                ( text === "" ? "Enter an Amount" 
                                : inputText +  " " + text + " BTC") 
                                : "Approve token spend first")) 
                                : <div>Connecting... 
                                    <LoaderWrapper>
                                        <Loader stroke="white" size={"20px"}/>
                                    </LoaderWrapper>
                                  </div>) 
                                : <div>1 Pending... 
                                    <LoaderWrapper position={Boolean(text === "")}>
                                        <Loader stroke="white" size={"20px"}/>
                                    </LoaderWrapper>
                                   </div>}
                            ></Button>
                        </ButtonWrapper>
                    </MintFormWrapper>
                </MintFormContainer>
            </BridgeModalWrapper>
            </BridgeModalContainer>
        </StyledContainer>
        </>
    )
}

export default WalletModal;