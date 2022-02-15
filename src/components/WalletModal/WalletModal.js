import React, { useState, useEffect, useCallback } from "react";
import chainLogo from "../assets/metamask.svg"
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import EthereumLogo from "../assets/Ethereum.svg"
import HomeConnectButton from "../Home/HomeConnectButton";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import arrowDown from "../assets/arrowDown.svg"
import numberOne from "../assets/number-one.png"
import numberTwo from "../assets/number-2.png"
import greenTick from "../assets/greenTick.png"
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import { getContract } from "../../utils/utils";
import abi from "../../utils/Abis/ABI.json"
import abi2 from "../../utils/Abis/AB12.json"
import Web3	 from "web3";
import { ethers } from 'ethers'
import Loader from "react-loader-spinner";
import { Spacer } from "../TransactionModal/TransactionModalStyles";
import Button from "./Button";
import walletIcon from "../assets/depositIcon2.png"
import { generate } from "shortid";
import { CheckCircle } from "react-feather"
import { PendingModal, RejectionModal, TransactionSubmittedModal, ConfirmationModal} from "../TransactionConfirmationModal/PendingModal"
import { ArrowContainer12, 
         ArrowLogo12, 
         ArrowLogoContainer12, 
         StyledContainer, 
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
         Dropdown,
         SpinnerWrapper,
         StatusTextWrapper,
         StatustTextIcon,
         StatusText,
         CompletionTextWrapper,
         CompletionTextContainer,
         LoaderContainer,
         MaxOption,
         ForumIcon,
         ForumImg
} from "./WalletModalStyles";
import { getOwnBalance } from "../../hooks/useBalance";
import { hash, set } from "immutable";
import { CHAIN_IDS_TO_NAMES, SupportedChainId } from "../../constants/chains";
import TransactionProcess from "../TransactionConfirmationModal/PendingModal";
import { clear } from "@testing-library/user-event/dist/clear";
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


const aId = generate()
const unrankedId = generate();
const RenAddress = "0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"
const BridgeAddress = "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B"

const WalletModal = ({setShow, visible, close}) => {


    // useEffect(() => {

    //     if(library) {

    //     const renContract = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);

    //     const hash = localStorage.getItem("hash")
    //     renContract.on("Approval", (from, to , value, hash) => console.log(from, to, value, hash))
    //     let txn_test = library.getTransaction(hash).then((result) => {

    //     console.log(result)

    //     });
    //     }
    // }, [library])
    const [toggle, setToggle] = useState(true)
    const [dropDownActive, setDropDownActive] = useState(false)
    const [text, setText] = useState("")
    const [inputText, setInputText] = useState("Deposit")
    const [error, setError] = useState("")
    const [confirm, setConfirm] = useState(false)
    const [pending1, setPending1] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [rejected, setRejected] = useState(false)
    const [amount, setAmount] = useState()
    const [ren, setRen] = useState()
    const [bridge, setBridge] = useState()
    const [gas, setGas] = useState(0)
    const [sufficentApproval, setSufficentApproval] = useState(true)

    const [pendingDeposits, setPendingDeposits] = React.useState([
        {
          id: String,
          from: String,
          amount: Number,
          approved: Boolean,
          status: String,
          time: Number
        }
      ]);

    const [deposits, setDeposits] = React.useState([
        {
            id: unrankedId,
            from: "address",
            amount: "number",
            time: "Date"
          }
      ]);

      const { library, account, active } = useAuth()
      const { balance, setBalance } = useBalance()

      useEffect(() => {

            if(library) {

                const bridgeContract = getContract(
                    BridgeAddress, 
                    abi, 
                    library,
                    account)
                ;
                const renContract = getContract(
                    RenAddress, 
                    abi2, 
                    library, 
                    account)
                ;

                setRen(renContract)
                setBridge(bridgeContract)
            }
      }, [library, setRen, setBridge])

    
      React.useEffect(() => {

        const depositData = localStorage.getItem("deposits");

        if (depositData) {
          setDeposits(JSON.parse(depositData));
        }

        const pendingDepositData = localStorage.getItem("pending-deposits");
        if (pendingDepositData) {
          setPendingDeposits(JSON.parse(pendingDepositData));
        }

      }, []);
    
      React.useEffect(() => {

        localStorage.setItem("deposits", JSON.stringify(deposits));
        localStorage.setItem("pending-deposits", JSON.stringify(pendingDeposits));

      });

      useEffect(() => {

        beginDeposit()
      }, [text])

    const addPendingDeposit = async(text) => {

        setPendingDeposits([
            {
              id: generate(),
              from: account,
              amount: Number(text),
              confirmed: false,
              status: "DETECTED",
              time: 5
            },
            ...pendingDeposits
          ]);

    }


    const setToggleValue = () => {

        setToggle(!toggle);
        if(!toggle) {
            // setText("Deposit")
            setInputText("Deposit ")

        } else {
            // setText("Withdraw")
            setInputText("Withdraw ")

        }
    }

    const setDropdownValue = () => {

        setDropDownActive(!dropDownActive);
    }
    // console.log(text)

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

        console.log(inputText)
        var walletBalance = await ren.balanceOf(account)
        walletBalance = Web3.utils.fromWei(walletBalance.toString(), "Gwei")
        setText(walletBalance)
        setAmount(walletBalance)
        if(inputText === "Deposit ") {

            
            console.log("hey")
           

        } else if (inputText === "Withdraw ") {

            var walletBalance = await bridge.getContractTokenbalance("BTC")
            walletBalance = Web3.utils.fromWei(walletBalance.toString(), "Gwei")
            setText(walletBalance)
            console.log(text)
            console.log("hey")

        }

    }

    const getAllowance = async(amount) => {

        try {

            var allowance = await ren.allowance(account, BridgeAddress)
            allowance = Web3.utils.fromWei(allowance.toString(), "Gwei")

        //    console.log(amount, allowance)
            if(Number(amount) > Number(allowance)) {

                setSufficentApproval(false)
            } else {

                setSufficentApproval(true)
            }

            return allowance

        } catch (error) {

            setSufficentApproval(true)
            console.error(error)
        }

    }

    const getGas = async() => {

        try {

            const gas = await ren.estimateGas.approve(account, BridgeAddress)
            const n = Web3.utils.fromWei(gas.toString(), "Gwei")
            setGas(n)

            return gas

        } catch(error) {

            console.error(error)
        }
       
    }

    const beginDeposit = () => {

        console.log(text)

        const allowance = getAllowance(text)
        const gas = getGas()

        console.log(sufficentApproval)

    }

    const beginTransactionProcess = () => {

        clearAllStates()
        setConfirm(true)
        close()
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
        addPendingDeposit(text)

        if(text === "") return
        var walletBalance = await ren.balanceOf(account)
        walletBalance = Web3.utils.toWei(walletBalance.toString(), "wei")
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
       
        try {

            const tx1 = await ren.approve("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", amount)
            .then(async(result) => {

                setPending1(false)
                setSubmitted(true)
                await result.wait().then(() => {

                    beginDeposit()
                })
            });
        
        } catch (error) {

            clearAllStates()
            setRejected(true)
            
        
            if (error.code == 4001) {

                setError("User denied transaction!")

            } else {

                setError(error.message)
            }

        }
    }
    const handleDeposit = async() => {

        // // togglePending()
        // setDeposits([
        //     {
        //       id: generate(),
        //       label: "",
        //       urls: []
        //     },
        //     ...deposits
        //   ]);

        addPendingDeposit(text)
        
        if(text === "") return

        var walletBalance = await ren.balanceOf(account)
        walletBalance = Web3.utils.toWei(walletBalance.toString(), "wei")
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
        
        try {
           
            const tx2 = await bridge.transferFrom(account, RenAddress, amount, "BTC")
            .then(async(result) => {

                await result.wait().then(() => {

                    bridge.getContractTokenbalance("BTC")
                    .then((balance) => {
                        console.log(balance)
                        const n = Web3.utils.fromWei(balance.toString(), "Gwei")
                        setBalance(n)
                    });
                })
            })

            
        } catch(error) {

            clearAllStates()
            if (error.code == 4001) {

                setError("User denied transaction!")

            } else {

                setError(error.message)
            }
            
        }


    }

    const handleWithdraw = async() => {

        if(text === "") return
        var walletBalance = await bridge.getContractTokenbalance("BTC")
        walletBalance = Web3.utils.toWei(walletBalance.toString(), "wei")
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
        

        try {

            const withdraw = await bridge.transfer(account, amount, "BTC")
            .then(async (result) => {

                await result.wait().then(() => {

                    bridge.getContractTokenbalance("BTC")
                    .then((balance) => {
                        console.log(balance)
                        const n = Web3.utils.fromWei(balance.toString(), "Gwei")
                        setBalance(n)
                    });
                })
    
            });

        } catch(error) {

            if (error.code == 4001) {

                setError("User denied transaction!")

            } else {

                setError(error.message)
            }
        }
      
    }

    return (

        <>
       
            <PendingModal 
                close={() => setPending1(!pending1)} 
                amount={amount} 
                visible={pending1}
            />
            <ConfirmationModal
                close={() => setConfirm(!confirm)} 
                amount={amount} 
                visible={confirm}
                handleDeposit={handleApproval}
            />
            <TransactionSubmittedModal
                close={() => setSubmitted(!submitted)} 
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
                        {text != "" && <ArrowContainer>
                            <ArrowLogoContainer>
                                <ArrowLogo src={arrowDown}></ArrowLogo>
                            </ArrowLogoContainer>
                        </ArrowContainer>}
                        {text != "" && <SpinnerWrapper>
                               
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
                                <ArrowRight size={"20px"} color={"rgb(33,114,229)"}></ArrowRight>
                                <StatusText>Bridge Fee: 0.0001 ETH</StatusText>
                            </StatusTextWrapper>}
                            {/* { depositLoading && (<StatusTextWrapper>
                                <StatustTextIcon src={numberTwo}/>
                                <StatusText>Deposit Status: {depositText}...</StatusText>
                                { !depositFinished ? <LoaderContainer><Loader type="Oval" height={20} width={20}color="rgb(77, 102, 235)"></Loader></LoaderContainer> :  <StatustTextIcon src={greenTick}/>}
                            </StatusTextWrapper>)} */}
                              {/* <ArrowContainer>
                            <ArrowLogoContainer>
                                <ArrowLogo src={arrowDown}></ArrowLogo>
                            </ArrowLogoContainer>
                        </ArrowContainer> */}
                         {!sufficentApproval && 
                              <ButtonWrapper1>
                                  <Button1 onClick={beginTransactionProcess}>Approve Token Deposit <CheckCircle/></Button1>
                              </ButtonWrapper1>}
                              {/* <ButtonWrapper1> */}
                                  {/* <Button1 onClick={handleDeposit}>Confirm RenBTC Deposit</Button1> */}
                              {/* </ButtonWrapper1> */}
                        </SpinnerWrapper>}
                        <ButtonWrapper>
                            <Button state={sufficentApproval} width={"440px"} active={active} left={"82%"} top={"31%"} close={close} click={inputText === "Withdraw " ? handleWithdraw : handleDeposit} height="60px" fontsize="17" colour="rgb(20, 29, 49)" text={sufficentApproval ? ( inputText +  " " + text + " BTC") : "Approve token spend first" }></Button>
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