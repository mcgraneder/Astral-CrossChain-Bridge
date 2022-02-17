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
import DepositSummary from "../AccountDetails/TransactionSummary";
import usePendingTransaction from "../../hooks/usePendingTransaction";
import useBalance from "../../hooks/useBalance";
import { ArrowRight, ArrowUpCircle } from "react-feather"

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

font-family: 'Open Sans', sans-serif;
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
const aId = generate()
const unrankedId = generate();
const RenAddress = "0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"
const BridgeAddress = "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B"

export const TRANSACTION_TYPES = {
    APPROVAL: "APPROVAL",
    DEPOSIT: "DEPOSIT",
    WITHDRAWAL: "WITHDRAWAL"
};
   
const WalletModal = ({setShow, visible, close, setLoading, loading}) => {


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
    const [ren, setRen] = useState()
    const [bridge, setBridge] = useState()
    const [sufficentBalance, setSufficentBalance] = useState(false)
    const [TransactionType, setTransactionType] = useState("DEPOSIT")
    const [sufficentApproval, setSufficentApproval] = useState(true)


      const { library, account, active } = useAuth()
      const { balance, setBalance } = useBalance()
      const { setDeposits, deposits, currentHash, setCurrentHash} = usePendingTransaction()

        console.log(currentHash)
    
      useEffect(() => {
        setDeposits(deposits.filter(items => items.txHash==="hash"))
      }, [])
      
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

        var walletBalance = await ren.balanceOf(account)
        walletBalance = Web3.utils.fromWei(walletBalance.toString(), "Gwei")
        setText(walletBalance)

        if(inputText === "Deposit ") {

        } else if (inputText === "Withdraw ") {

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
            var gas = await ren.estimateGas.approve(account, BridgeAddress)
            gas = Web3.utils.fromWei(gas.toString(), "Gwei")

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
        setText(text)

        if(!toggle) {
            setInputText("Deposit ")
            setTransactionType("DEPOSIT") 
            beginDeposit()
            setText("") 
        } else {
            setInputText("Withdraw ")
            setSufficentApproval(true)
            setTransactionType("WITHDRAWAL")  
            setText("")
        }
    }

    const clearAllStates = () => {

        setPending1(false)
        setConfirm(false)
        setSubmitted(false)
        setRejected(false)
    }

    const handleApproval = async() => {

        setConfirm(false)
        setPending1(true)

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

                await result.wait().then((result) => {
                    beginDeposit()
                    setLoading(false)

                    setDeposits([
                        {
                            id: deposits.length,
                            type: "APPROVAL",
                            from: account,
                            amount: amount,
                            txHash: result.transactionHash,
                            time: 2
                        },
                        ...deposits
                    ]);

                    setTimeout(() => {
                        setDeposits(deposits.filter(items => items.id!==deposits.length))
                    }, 15000)
                })
            });
        
        } catch (error) {
            clearAllStates()
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
               
                await result.wait().then((result) => {
                    setLoading(false)
                    console.log(result)
                    setDeposits([

                        ...deposits,
                        {  
                          id: deposits.length,
                          type: "DEPOSIT",
                          from: account,
                          amount: amount,
                          txHash: result.transactionHash,
                          time: 2
                        },
                    ]);
                    
                    bridge.getContractTokenbalance("BTC")
                    .then((balance) => {
                        balance = Web3.utils.fromWei(balance.toString(), "Gwei")
                        setBalance(balance)

                        setTimeout(() => {
                            setDeposits(deposits.filter(items => items.id!==deposits.length))
                        }, 15000)
                      
                    });
                })
            })

            
        } catch(error) {
            setLoading(false)
            clearAllStates()
            setRejected(true)

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

                await result.wait().then((result) => {
                    setLoading(false)

                    setDeposits([

                        ...deposits,
                        {
                            id: deposits.length,
                            type: "WITHDRAWAL",
                            from: account,
                            amount: amount,
                            txHash: result.transactionHash,
                            time: 2
                        },
                    ]);

                    bridge.getContractTokenbalance("BTC")
                    .then((balance) => {
                        balance = Web3.utils.fromWei(balance.toString(), "Gwei")
                        setBalance(balance)

                        setTimeout(() => {
                            setDeposits(deposits.filter(items => items.id!==deposits.length))
                        }, 15000)
                    });
                })
    
            });

        } catch(error) {
            clearAllStates()
            setRejected(true)
            setLoading(false)

            if (error.code == 4001) {
                setError("User denied transaction!")
            } else {
                setError(error.message)
            }
        }
      
    }

    const a = () => {

        clearAllStates()
        if(TransactionType !== "APPROVAL") {
            setTimeout(() => {
                setText("")
            }, 300)
        }
       
    }

    return (

        <>
       
       <DepositSummary deposits={deposits}></DepositSummary>
            <PendingModal 
                close={() => setPending1(!pending1)} 
                amount={text} 
                visible={pending1}
            />
            <ConfirmationModal
                close={() => setConfirm(!confirm)} 
                amount={amount} 
                visible={confirm}
                handleDeposit={
                    TransactionType === "APPROVAL" ? handleApproval 
                    : TransactionType === "DEPOSIT" ? handleDeposit 
                    : handleWithdraw
                }
            />
            <TransactionSubmittedModal
                close={() => a()} 
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
                            <ChainSelectorText>Token</ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                       
                    </ChainSelectorWrapper>
                    { dropDownActive && <DropdownMenu height={"64px;"}></DropdownMenu>}
                </ChainSelector>
                <BalanceContainer>
                    <BalanceWrapper>
                        <Balancetext>Balance: {balance} RenBTC</Balancetext>
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
                                <WalletInput onKeyPress={preventMinus} name="number" type="number" id="in"  value={text} onChange={(e) => setText(e.target.value)} placeholder="amount"></WalletInput>
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
                                    Approve Token Deposit 
                                    <CheckCircle/>
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
                            text={
                                sufficentBalance ? 
                                "Insufficent Balance" :
                                (sufficentApproval ? 
                                ( text === "" ? "Enter an Amount" 
                                : inputText +  " " + text + " BTC") : "Approve token spend first")}
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