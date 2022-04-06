import React, { useContext } from "react"
import { ConnectButton, Logo, ButtonText } from "./ConnectWalletButtonStyles"
import styled, { keyframes } from "styled-components"
import metamask from "../../assets/metamask.svg"
import walletConnect from "../../assets/wallet_connect.svg"
import fortmatic from "../../assets/fortmatic.svg"
import torus from "../../assets/torus.svg"
import portis from "../../assets/portis.svg"
import { NavButton2 } from "../../Navbar/NavbarStyles"
import Loader from "../../Loader/Loader"
import { TransactionStateContext } from "../../../contexts/transactionContext"
import { useWeb3React } from "@web3-react/core";
export const Logo1 = styled.div`

    // position: absolute;

    display: flex;
//    float: left;
    align-items: left;
   justify-content: left;
   float: left;
   text-align: left;
   padding-right: 2px;
   padding-left: 5px;
    width: 25px;
    line-height: 40px;
    padding-top: 4px;
}`

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

const ConnectWalletButton = ({ close, color, fontsize, height, left, top }) => {

    const { pending } = useContext(TransactionStateContext)
    const { active, account } = useWeb3React()
    const loading = false;
    var logo
    var width1;
    var width2;
    console.log(active)

    if(localStorage.getItem("provider") === "injected") {
        logo = metamask;
        width1=40
        width2=22
    }
    if(localStorage.getItem("provider") === "walletconnect") {
        logo = walletConnect;
        width1=40
        width2=22
    }
    if(localStorage.getItem("provider") === "fortmatic") {
        logo = fortmatic;
        width1=32
        width2=20
    }
    if(localStorage.getItem("provider") === "portis") {
        logo = portis;
        width1=32
        width2=18
    }
    if(localStorage.getItem("provider") === "torus") {
        logo = torus;
        width1=32
        width2=20
    }

    const provider = localStorage.getItem("provider")
    const currentAccount = localStorage.getItem("currentAccount")
    return (

        <>
            {pending ? 
            <ConnectButton 
                height={height} 
                fontsize={fontsize} 
                col={color} 
                col2={true} 
                onClick={close}>
            <ButtonText 
                style={{"fontWeight": "bold"}}>
            <Logo1 
                left={left} 
                top={top}>
            <Loader 
                stroke="white" 
                size={"18px"}/>
            </Logo1>
                1 Pending....
            </ButtonText>
             </ConnectButton> 
            : 
            (!active ?  (provider ? <ConnectButton 
                height={height} 
                fontsize={fontsize} 
                col={color} 
                col2={true} 
                onClick={close}>
            <ButtonText 
                style={{"fontWeight": "bold"}}>
            <Logo1 
                left={left} 
                top={top}>
            <Loader 
                stroke="white" 
                size={"18px"}/>
            </Logo1>
                Connecting...
            </ButtonText>
             </ConnectButton>  : <NavButton2 active={active} color={"rgb(23,42,66)"} onClick={close}>Connect Wallet</NavButton2>) 
            :  <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><ButtonText ><Logo width={width1}><img src={logo} alt="#" width={width2} height={width2}/></Logo>{account?.substring(0, 6)}...{account?.substring(account?.length - 4)}</ButtonText></ConnectButton>)}
        </>
    )
}

export default React.memo(ConnectWalletButton);