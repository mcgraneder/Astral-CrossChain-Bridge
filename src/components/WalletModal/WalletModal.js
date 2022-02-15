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
import { hash } from "immutable";
import { CHAIN_IDS_TO_NAMES, SupportedChainId } from "../../constants/chains";
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


const WalletModal = ({close, balance, setBalance, setAmount, togglePending, setPending}) => {

    const [toggle, setToggle] = useState(true)
    const [dropDownActive, setDropDownActive] = useState(false)
    const [text, setText] = useState("")
    const [inputText, setInputText] = useState("Deposit")
    const [ren1, setRen1] = useState()
    const [bridge, setBridge] = useState()
    // const [balance, setBalance] = useState(0);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [approvalLoading, setApprovalLoading] = useState(false);
    const [depositLoading, setDepositLoading] = useState(false);
    const [approvalText, setApprovalText] = useState("")
    const [depositText, setDepositText] = useState("")
    const [transactionText, setTransactionText] = useState("")
    const [approvalFinished, setApprovalFinished] = useState(false)
    const [depositFinished, setDepositFinished] = useState(false)
    const [errorTrue, setErrorTrue] = useState(false)
    // amount = text
    const [deposit, setDeposit] = React.useState();
    console.log([SupportedChainId.MAINNET])

    // const addDeposit = React.useCallback(() => {
    //         setDeposit((deposits) =>
    //             deposits.get(txHash)
    //                 ? deposits
    //                 : deposits.set(txHash, {
    //                       type: "MINT",
    //                       deposit: deposit,
    //                       status: DepositStatus.DETECTED,
    //                   })
    //         );
    //     },
    //     [setDeposits]
    // );

    // const updateDeposit = React.useCallback(() => {
    //         setDeposit((deposits) => {
    //             const currentDeposit = deposits.get(txHash);
    //             if (!currentDeposit) {
    //                 return deposits;
    //             }
    //             if (currentDeposit.type === "MINT") {
    //                 if (newDetails.status === DepositStatus.DONE) {
    //                     updateBalance(
    //                         currentDeposit.deposit.params.asset
    //                     );
    //                 }
    //                 return deposits.set(txHash, {
    //                     ...currentDeposit,
    //                     ...newDetails,
    //                 });
    //             } else {
    //                 if (newDetails.status === BurnStatus.BURNT) {
    //                     updateBalance(
    //                         currentDeposit.burn.params.asset
    //                     );
    //                 }
    //                 return deposits.set(txHash, {
    //                     ...currentDeposit,
    //                     ...newDetails,
    //                 });
    //             }
    //         });
    //     },
    //     [setDeposits, updateBalance]
    // );


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

      console.log(pendingDeposits[0].id)

    const [deposits, setDeposits] = React.useState([
        {
            id: unrankedId,
            from: "address",
            amount: "number",
            time: "Date"
          }
      ]);
    
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

    const addPendingDeposit = async(text) => {

        setPendingDeposits([
            {
              id: generate(),
              from: account,
              amount: Number(text),
              approved: false,
              status: "DETECTED",
              time: 5
            },
          ]);

    }
    

    const { active, library, account } = useAuth()

    useEffect(() => {

        if(library) {

        const renContract = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);

        const hash = localStorage.getItem("hash")
        renContract.on("Approval", (from, to , value, hash) => console.log(from, to, value, hash))
        let txn_test = library.getTransaction(hash).then((result) => {

        console.log(result)

        });
        }
    }, [library])


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
    console.log(text)

    const setDropdownValue3 = () => {

        if(!dropDownActive) return
        setDropDownActive(!dropDownActive);
    }

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    const handleDeposit = async() => {

        togglePending()
        setDeposits([
            {
              id: generate(),
              label: "",
              urls: []
            },
            ...deposits
          ]);

        addPendingDeposit(text)
        const bridge = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account);
        const ren1 = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);

        if(text === "") return
        var walletBalance = await ren1.balanceOf(account)
        walletBalance = Web3.utils.toWei(walletBalance.toString(), "wei")
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
        console.log( amount)
        console.log(walletBalance)

        if(amount > walletBalance || amount == 0) {

            setLoading(true)
            setErrorTrue(true)
            setError("insufficient balance")
            setTimeout(() => {

                setLoading(false)
                setLoading(false)
                setDepositLoading(false)
                setApprovalLoading(false)
                setApprovalFinished(false)
                setDepositFinished(false)
                setErrorTrue(false)

            }, 4000)
            console.log("hey")
            return
        }
        
       
        setLoading(true)
        setApprovalLoading(true)
        setDepositLoading(false)
        setApprovalText("Pending")
        setTransactionText("Awaiting Approval")
        try {

            const tx1 = await ren1.approve("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", amount)
            .then(async(result) => {

                console.log(result.hash)
                localStorage.setItem("hash", result.hash)
                setTransactionText("Approving")

                await result.wait().then(() => {

                    setApprovalText("Complete")
                    setApprovalFinished(true)
                    setDepositLoading(true)
                    setDepositText("Pending")
                    setTransactionText("Awaiting Deposit")
                })
            });
            // const txReceipt = await tx1.wait()
           

            console.log(amount)
            const tx2 = await bridge.transferFrom(account, "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", amount, "BTC")
            .then(async(result) => {
                setTransactionText("Depositing RenBTC");

                await result.wait().then(() => {

                    bridge.getContractTokenbalance("BTC")
                    .then((balance) => {
                        console.log(balance)
                        const n = Web3.utils.fromWei(balance.toString(), "Gwei")
                        setBalance(n)
                        setDepositText("Complete")
                        setDepositFinished(true)
                        setTransactionText("Deposit Successful")

                        setTimeout(() => {

                            setLoading(false)
                            setDepositLoading(false)
                            setApprovalLoading(false)
                            setApprovalFinished(false)
                            setDepositFinished(false)
                        }, 3000)
                    });
                })
            })

            
        } catch(error) {

            setPending(false)
            setErrorTrue(true)
            console.error(error)
            if (error.code == 4001) {

                setError("User denied transaction!")

            } else {

                setError(error.message)
            }
            
            console.log(error)
            setTimeout(() => {

                setLoading(false)
                setLoading(false)
                setDepositLoading(false)
                setApprovalLoading(false)
                setApprovalFinished(false)
                setDepositFinished(false)
                setErrorTrue(false)

            }, 4000)
            
        }


    }

    const handleWithdraw = async() => {

        const bridge1 = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account);
        const renContract = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);

        if(text === "") return
        var walletBalance = await bridge1.getContractTokenbalance("BTC")
        walletBalance = Web3.utils.toWei(walletBalance.toString(), "wei")
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
        
        if(amount > walletBalance || amount == 0) {

            setLoading(true)
            setErrorTrue(true)
            setError("insufficient balance")
            setTimeout(() => {

                setLoading(false)
                setLoading(false)
                setDepositLoading(false)
                setApprovalLoading(false)
                setApprovalFinished(false)
                setDepositFinished(false)
                setErrorTrue(false)

            }, 4000)
            console.log("hey")
            return
        }
        
        setLoading(true)
        setDepositLoading(true)
        setDepositText("Pending")
        setTransactionText("Awaiting Withdrawal")

        try {

            const withdraw = await bridge1.transfer(account, amount, "BTC")
            .then(async (result) => {

                
                setTransactionText("Withdrawing RenBTC")
                await result.wait().then(() => {

                    setDepositFinished(true)
                    setDepositText("Complete")

                    bridge1.getContractTokenbalance("BTC")
                    .then((balance) => {
                        console.log(balance)
                        const n = Web3.utils.fromWei(balance.toString(), "Gwei")
                        setBalance(n)
                        setTransactionText("Withdrawal Successful")
                        
                        setTimeout(() => {

                            setLoading(false)
                            setDepositLoading(false)
                            setApprovalLoading(false)
                            setApprovalFinished(false)
                            setDepositFinished(false)
                        }, 4000)
                    });
                })
    
            });

        } catch(error) {

            setErrorTrue(true)
            console.error(error)
            if (error.code == 4001) {

                setError("User denied transaction!")

            } else {

                setError(error.message)
            }
            
            console.log(error)
            setTimeout(() => {

                setLoading(false)
                setLoading(false)
                setDepositLoading(false)
                setApprovalLoading(false)
                setApprovalFinished(false)
                setDepositFinished(false)
                setErrorTrue(false)

            }, 4000)
        }
      
    }

    const getMaxDeposit = async() => {

        const bridge1 = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account);
        const renContract = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);

        console.log(inputText)
        var walletBalance = await renContract.balanceOf(account)
        walletBalance = Web3.utils.fromWei(walletBalance.toString(), "Gwei")
        setText(walletBalance)
        if(inputText === "Deposit ") {

            
            console.log("hey")
           

        } else if (inputText === "Withdraw ") {

            var walletBalance = await bridge1.getContractTokenbalance("BTC")
            walletBalance = Web3.utils.fromWei(walletBalance.toString(), "Gwei")
            setText(walletBalance)
            console.log(text)
            console.log("hey")

        }

    }

    const getGas = async(e) => {

        setText(e.target.value)
        setAmount(Number(e.target.value))
        const bridge = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account);

        const gas = await bridge.estimateGas.transferFrom(account, "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", 2000, "BTC")
        const n = Web3.utils.fromWei(gas.toString(), "Gwei")
        console.log(n)
       
    }

    return (

        <>
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
                                <WalletInput onKeyPress={preventMinus} name="number" type="number" id="in"  value={text} onChange={getGas} placeholder="amount"></WalletInput>
                                <ForumIcon>
                                    <ForumImg src={walletIcon}></ForumImg>
                                </ForumIcon>
                                <MaxOption onClick={getMaxDeposit}>max</MaxOption>
                            </WalletInputWrapper>
                        </FromContainer>
                        <ArrowContainer>
                            <ArrowLogoContainer>
                                <ArrowLogo src={arrowDown}></ArrowLogo>
                            </ArrowLogoContainer>
                        </ArrowContainer>
                        <SpinnerWrapper>
                               
                            { !approvalLoading && (<StatusTextWrapper>
                                <StatustTextIcon src={numberOne}/>
                                <StatusText>Estimated Gas: 0.0001823 ETH</StatusText>
                                {/* { approvalFinished ? <LoaderContainer><Loader type="Oval" height={20} width={20}color="rgb(77, 102, 235)"></Loader></LoaderContainer> :  <StatustTextIcon src={greenTick}/>} */}
                            </StatusTextWrapper>)}
                            { depositLoading && (<StatusTextWrapper>
                                <StatustTextIcon src={numberTwo}/>
                                <StatusText>Deposit Status: {depositText}...</StatusText>
                                { !depositFinished ? <LoaderContainer><Loader type="Oval" height={20} width={20}color="rgb(77, 102, 235)"></Loader></LoaderContainer> :  <StatustTextIcon src={greenTick}/>}
                            </StatusTextWrapper>)}
                              {/* <ArrowContainer>
                            <ArrowLogoContainer>
                                <ArrowLogo src={arrowDown}></ArrowLogo>
                            </ArrowLogoContainer>
                        </ArrowContainer> */}
                              <ButtonWrapper1>
                                  <Button1 onClick={handleDeposit}>Approve Token Deposit <CheckCircle/></Button1>
                              </ButtonWrapper1>
                              {/* <ButtonWrapper1> */}
                                  {/* <Button1 onClick={handleDeposit}>Confirm RenBTC Deposit</Button1> */}
                              {/* </ButtonWrapper1> */}
                        </SpinnerWrapper>
                        <ButtonWrapper>
                            <HomeConnectButton width={"440px"} active={active} left={"82%"} top={"31%"} close={close} click={inputText === "Withdraw " ? handleWithdraw : handleDeposit} height="60px" fontsize="17" colour="rgb(20, 29, 49)" text={inputText +  " " + text + " BTC" }></HomeConnectButton>
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