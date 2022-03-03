import React, { useState} from "react";
import styled, { css, keyframes } from "styled-components";
import Circle from "../assets/blue-loader.svg"
import { TitleContainer } from "../Web3Modal/Web3ModalStyles";
// import { walletconnect } from "web3modal/dist/providers/connectors";
import {X, ChevronDown, ArrowDown, ArrowUpCircle, AlertTriangle, CheckCircle, Copy, ExternalLink} from "react-feather"
import metamask from "../assets/metamask.svg"
import walletConnect from "../assets/wallet_connect.svg"
import coinbase from "../assets/coinbase.svg"
import fortmatic from "../assets/fortmatic.svg"
import torus from "../assets/torus.svg"
import portis from "../assets/portis.svg"
import ConnectWalletButton from "../Buttons/ConnectWalletButton/ConnjectWalletButton";
import Bitcoin from "../assets/Bitcoin.svg"
import Dollar from "../assets/dollar.png"
import { useEffect } from "react/cjs/react.development";
import axios from "axios"
import useAuth from "../../hooks/useAuth";
import { getContract } from "../../utils/utils";
import abi from "../../utils/Abis/ABI.json"
import abi2 from "../../utils/Abis/AB12.json"
import Web3	 from "web3";
import Loader from "../Loader/Loader";
import { useWeb3React } from "@web3-react/core";
import usePendingTransaction from "../../hooks/usePendingTransaction";
const BridgeAddress = "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B"
const renAddress = "0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"


export const FormWrapper = styled.div`


    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    // height: 30px;
    opacity: 0;
    background-color: rgb(27,32,52);
    // padding: 28px 15px;
    padding-top: 30px;
    border: 1.5px solid rgb(41, 50, 67);
    border-radius: 20px;
    pointer-events: none;
    z-index: 10000;
    transition: ${(props) => props.trueFade ? "opacity 0.3s ease-in-out !important;": "none"};
    ${(props) => props.visible && css`
        z-index: 10000;
        opacity: 1;
        pointer-events: all;
        transition: ${(props) => props.trueFade ? "opacity 0.3s ease-in-out !important;": "none"};
    `}

`
// <ArrowUpCircle strokeWidth={0.5} size={inline ? '40px' : '90px'} color={theme.primary1} />
export const CloseIcon = styled(X)`

    position: absolute;
    left: 90%;
    top: 5%;
    cursor: pointer;
    color: White;
`



export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    backdrop-filter: blur(3px);
    background: rgba(2,8,26, 0.65);
// background: -webkit-linear-gradient(top, #23233999, #040717);
// background: -moz-linear-gradient(top, #23233999, #040717);
// background: linear-gradient(to bottom, rgba(112,128,136, 0.1), rgba(2,8,26, 0.75));
transition: ${(props) => props.trueFade ? "opacity 0.2s ease-in-out !important;": "none"};
    z-index: 1;
    ${(props) => props.visible && css`

        z-index: 1;
        opacity: 1;
        pointer-events: all;
        transition: ${(props) => props.trueFade ? "opacity 0.2s ease-in-out !important;": "none"};
    `}

   
`;

export const ImgWrapper = styled.div`

    padding-top: ${(props) => props.padding};
    padding-bottom: ${(props) => props.paddingBottom};
    display: flex;
    align-items: center;
    justify-content: center;
    float: ${(props => props.float)};
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  will-change: transfrom;
`
const Spinner = styled.img`

animation: 1.8s ${rotate} linear infinite;
  width: 16px;
  height: 16px;
  will-change: transfrom;
`
export const CustomLightSpinner = styled(Spinner)`
  
 
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

export const TitleWrapper = styled.div`

font-family: 'Open Sans', sans-serif;
    margin: ${(props) => props.margin};
    margin-bottom: 5px;
    height: 30px;
    width: 100%;
    display: flex;
    // // float: left;
    align-items: center;
    justify-content: ${(props) => props.spacing};

`   
export const Title = styled.div`

  font-size: ${(props) => props.size};
//   text-align: center;
  align-items: center;
  display: flex;
  margin-right: 20px;
  font-weight: bold;
  justify-content: space-between;;
  color: ${(props) => props.color};

  &:hover {

    color: White;
    cursor: pointer;
  }

` 

export const AddTokenWrapper = styled.div`

    font-family: 'Open Sans', sans-serif;
    margin: ${(props) => props.margin};
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    

`   
export const AddTokenTitle = styled.div`

  font-size: ${(props) => props.size};
  align-items: center;
  height: 100%;
  line-height: 35px;
  color: ${(props) => props.color};
  background: rgb(23,42,66);
    border-radius: 20px;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
    color: rgb(79,143,233);
` 

export const SubTitle = styled.div`

  padding-top: 10px;
  font-size: ${(props) => props.size};
//   text-align: center;
  align-items: center;
  color: ${(props) => props.color};
` 



export const Button = styled.div`

  height: 55px;
  width: 100%;
  background: rgb(33,114,229);
  border-radius: 20px;
  text-align: center;
  line-height: 55px;
  font-size: 20px;
  font-weight: bold;
  color: White;
  margin-bottom: 5px;

  &:hover {

    cursor: pointer;
    background: rgb(13,94,209);
}
`

export const ButtonWrapper = styled.div`

font-family: 'Open Sans', sans-serif;
   margin-top: ${(props) => props.margin};
   margin-bottom: 5px;
    height: 30px;
    // margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

` 

export const ErrorText = styled.div`

  position: absolute;
  left: 4%;
  top: 4%;
  color: White;
  font-size: 22px;
`

export const TokenAmountWrapper = styled.div`

    // width: 100%;
    // background: rgb(14,22,39);
    border-radius: 15px;
    border: 1.5px solid rgb(41, 50, 67);
    // display: flex;
    margin-top: ${(props) => props.marginTop};
    margin-left: 25px;
    margin-right: 20px;
    margin-bottom: 30px;
    margin-top: 20px;
    padding-left: 20px;
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 5px;

`
export const ArrowDownContainer = styled.div`

    position: absolute;
    top: 23.5%;
    left: 46%;
    // color: White;
    background: White;
    background-color:rgb(14,22,39);
    border: 5px solid  rgb(27,32,52);
    border-radius: 10px;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TokenAmount = styled.div`

    font-family: 'Open Sans', sans-serif;
    height: 100%;
    font-size: ${(props) => props.size};
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    float: ${(props) => props.float};
    color: White;
    line-height: ${(props) => props.lineHeight};
    margin-left: 5px;
`
export const SubTitle2 = styled.div`

  padding-top: 10px;
  width: 100%;
  font-size: ${(props) => props.size};
  align-items: left;
  padding-left: 5px;
  color: ${(props) => props.color};
` 
export const TokenAmount2 = styled.div`

    font-family: 'Open Sans', sans-serif;
    color: ${(props) => props.colour};
    font-size: ${(props) => props.size};
    // width: 100%;
    padding-left: 5px;
    padding-top: ${(props) => props.paddingTop};
    padding-right: ${(props) => props.paddingRight};
    display: block !important;
    vertical-align: bottom;
    // align-items: center;
    // justify-content: center;
    float: ${(props) => props.float};
`
export const Divider = styled.div`

    position: absolute;
    width: 91%;
    height: 0.3px;
    background: #adadad;
    top: 50%;
`
export const TransactionWrapper = styled.div`

    padding: 20px 25px;
    background: rgb(57,62,82);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;


`

export const Wrapper = styled.div`

    position: relative;
`

export const DisconnectButtonWrapper = styled.div`

    height: 25px;
    // width: 30px;

    border-radius: 20px;
    padding-left: 10px;
    padding-right: 10px;
    ?justify-content: space-between;;
    display: flex;
    border-radius: 20px;
    border:  1px solid rgba(22,92,192, 0.5);

    &:hover {

        border:  1px solid rgb(52,122,222);
        cursor: pointer;

    }
`

export const DisconnectButtonText = styled.div`

    display: flex;
    font-size: 13px;
    align-items: center;
    justify-content: center;
    line-height: 25px;
    color: rgb(32,102,202);
    font-weight: bold;

    &:hover {

        color: rgb(52,122,222);
        cursor: pointer;

    }
`

export const AcoountTitleWrapper = styled.div`

    height: 30px;
    width: 100%;
    display: flex;
    background: White;
`

const LogoWrapper = styled.div`

    height: 30px;
    margin-right: ${(props) => props.marginRight};
    display: flex;
    align-items: center;
    justify-content: center;
    // background: White;
`

export const Container = styled.div`

    
`


const AccountDetailsModal = ({close, visible, toggle2, transactions}) => {

    const {account} = useWeb3React()

    const [load, setLoad] = useState(true)

    //  const { transactions } = usePendingTransaction()

    var logo

    if(localStorage.getItem("provider") === "injected") {
        logo = metamask;
    }
    if(localStorage.getItem("provider") === "walletconnect") {
        logo = walletConnect;
    }
    if(localStorage.getItem("provider") === "fortmatic") {
        logo = fortmatic;
    }
    if(localStorage.getItem("provider") === "portis") {
        logo = portis;
    }
    if(localStorage.getItem("provider") === "torus") {
        logo = torus;
    }

    const closeAll = () => {

        close()
        toggle2()
    }
    return(

        <>
        <Backdrop visible={visible} onClick={close} trueFade={true}/>
           
            <FormWrapper visible={visible} trueFade={false}>
                <ErrorText>Account</ErrorText>
                <CloseIcon></CloseIcon>
                <TokenAmountWrapper height={"120px"} marginTop={"40px"} marginBottom={"0px"}>
                    <TitleWrapper spacing={"space-between"}>
                        <Title size={"13px"} color={"#adadad"}>Connected With Metamask</Title>
                        <DisconnectButtonWrapper onClick={closeAll}>
                            <DisconnectButtonText>Change Wallet</DisconnectButtonText>
                        </DisconnectButtonWrapper>
                    </TitleWrapper>
                    <TitleWrapper spacing={"left"}>
                    <LogoWrapper marginRight={"8px"}>
                        {account ? <img src={logo} width={"25px"}></img> : <Loader stroke="white" size={"25px"}/>}
                    </LogoWrapper>
                        <Title size={"20px"} color={"White"}>
                            {account ? (account.substring(0, 6) + "..." +account.substring(account.length - 4)) : "connecting"}
                        </Title>
                    </TitleWrapper>
                    <TitleWrapper spacing={"left"}>
                        <LogoWrapper marginRight={"5px"}>
                            <Copy size={18} color={"#adadad"}></Copy>
                        </LogoWrapper>
                        <Title size={"13px"} color={"#adadad"}>Copy Address</Title>
                        <LogoWrapper marginRight={"5px"}>
                        <ExternalLink size={18} color={"#adadad"}></ExternalLink>
                        </LogoWrapper>
                        <Title size={"13px"} color={"#adadad"}>View on explorer</Title>
                    </TitleWrapper>
    
                </TokenAmountWrapper>
               
                <TransactionWrapper>
                <TitleWrapper spacing={"space-between"}>
                        <Title size={"17px"} color={"White"}>Recent Transactions</Title>
                        <Title size={"14px"} color={"rgb(2,52,152)"}>(Clear All)</Title>                        
                </TitleWrapper>

                <TitleWrapper spacing={"space-between"}>
                                <Title style={{"fontWeight": "bold"}} size={"14px"} color={"rgb(32,102,202)"}>Deposit {2} RenBTC 25 minutes ago</Title>
                                <LogoWrapper marginRight={"5px"}>
                                    <CheckCircle size={20} color={"rgb(35,145,85)"}></CheckCircle>
                                </LogoWrapper>             
                                </TitleWrapper>
               
                {/* {transactions.length > 0 && transactions.map((item, i) => {
                if(i > transactions.length - 5){
                    return <TitleWrapper spacing={"space-between"}>
                                <Title style={{"fontWeight": "bold"}} size={"14px"} color={"rgb(32,102,202)"}>Deposit {item.amount} RenBTC 25 minutes ago</Title>
                                <LogoWrapper marginRight={"5px"}>
                                    <CheckCircle size={20} color={"rgb(35,145,85)"}></CheckCircle>
                                </LogoWrapper>             
                                </TitleWrapper>
                    }})} */}
                                
               

                </TransactionWrapper>
               
            </FormWrapper>
            </>
       

    )
}

export default AccountDetailsModal