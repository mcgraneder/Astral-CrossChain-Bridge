import React, { useState, useEffect } from "react";
import BitcoinLogo from "../assets/Bitcoin.svg"
import styled, { keyframes } from "styled-components";
import arrowDown from "../assets/arrowDown.svg"
import { getContract } from "../../utils/utils";
import abi from "../../utils/Abis/ABI.json"
import abi2 from "../../utils/Abis/AB12.json"
import Web3	 from "web3";
import Button from "./components/Button";
import walletIcon from "../assets/depositIcon2.png"
import axios from "axios";
import EthereumLogo from "../assets/Ethereum.svg"
import { StyledContainer, 
         BridgeModalContainer, 
         MintFormWrapper, 
         ButtonWrapper, 
         MintFormContainer, 
         MintToggleButton, 
         ReleaseToggleButton, 
         MinFormToggleButtonContainer, 
         MintFormTextWrapper2, 
         MintFormText2,
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
import DisplayBalance from "./components/DisplayBalance";
import DropdownMenu from "./components/DropdownMenu";
import usePendingTransaction from "../../hooks/usePendingTransaction";
import useBalance from "../../hooks/useBalance";
import Loader from "../Loader/Loader";
import { ArrowRight, ArrowUpCircle } from "react-feather"
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
   margin-top: 35px;
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
  bottom: ${(props) => props.position ? "6.8%" : "6.8%"};
  right: 32%;
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

const RenBTCPriceRequestURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=renbtc&order=market_cap_desc&per_page=100&page=1&sparkline=false"

const WalletModal = ({setConfirm, setText, text, TransactionType, setTransactionType, setGas, bridge, ren, loading}) => {

    const [toggle, setToggle] = useState(true)
    const [inputText, setInputText] = useState("Deposit ")
    const [transactionBlock, setTransactionBlock] = useState(true)
    const [sufficentBalance, setSufficentBalance] = useState(false)
    const [sufficentApproval, setSufficentApproval] = useState(true)
    const [renPrice, setRenPrice] = useState(0)
    
    const { library, account, active} = useWeb3React()
    const { balance } = useBalance()
  
    useEffect(() => {
        if(!localStorage.getItem("provider")) window.location.href = "/" 
      }, [])

      useEffect(() => {
        if(library) {
 
            axios.get(RenBTCPriceRequestURL).then((result) => {
                const currentPrice = (result.data[0].current_price) * balance
                var currentBal = new Number(currentPrice)
                currentBal = currentBal.toFixed(2)
                setRenPrice(currentBal) 
            }).catch(error => console.error(error))
        }

        if(inputText === "Deposit ") {
            if(ren) beginDeposit()
        } else {
            setSufficentApproval(true)
            getBalance(text)
        }
     }, [library, balance, text])

    const getMaxDeposit = async() => {
        if(TransactionType === "DEPOSIT") {
            var walletBalance = await ren.balanceOf(account)
            walletBalance = Web3.utils.fromWei(walletBalance.toString(), "Gwei")
            setText(walletBalance)
        } else if (TransactionType === "WITHDRAWAL") setText(balance) 
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
        console.log("ts")
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

    const preventMinus = (e) => {
        if (e.code === 'Minus')  e.preventDefault(); 
    };

    return (

        <>
        <StyledContainer >
            <BridgeModalContainer>
                <DropdownMenu 
                    Logo={EthereumLogo} 
                    name={"Ethereum"} 
                    marginBottom={"5px"}
                />
                <DropdownMenu 
                    Logo={BitcoinLogo} 
                    name={"Bitcoin"} 
                    marginBottom={"20px"}
                />
                <DisplayBalance balance={balance} renPrice={renPrice}/>
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
                           <StatusTextWrapper marginB={"20px"}>
                                <StatusText>You need to approve this deposit first</StatusText>
                            </StatusTextWrapper>}
                            {sufficentApproval && 
                           <StatusTextWrapper marginB={"20px"}>
                               <ArrowUpCircle size={"20px"} color={"rgb(33,114,229)"}/>
                                <StatusText>Confrim Deposit of {text} RenBTC</StatusText>
                            </StatusTextWrapper>}
                            {text.length > 0 && 
                            <StatusTextWrapper marginB={"20px"}>
                                <ArrowRight size={"20px"} color={"rgb(33,114,229)"}></ArrowRight>
                                <StatusText>Estimated Gas: 0.0001823 ETH</StatusText>
                            </StatusTextWrapper>}
                            {sufficentApproval && 
                            <StatusTextWrapper marginB={"5px"}>
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
            </BridgeModalContainer>
        </StyledContainer>
        </>
    )
}

export default WalletModal;