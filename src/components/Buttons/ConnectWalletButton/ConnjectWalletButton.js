import React, { useState } from "react"
import { ConnectButton, Logo, ButtonText, ButtonText1 } from "./ConnectWalletButtonStyles"
import useAuth from "../../../hooks/useAuth"
import logo1 from "../../assets/metamask.png"

import styled, { keyframes } from "styled-components"
import metamask from "../../assets/metamask.svg"
import walletConnect from "../../assets/wallet_connect.svg"
import coinbase from "../../assets/coinbase.svg"
import fortmatic from "../../assets/fortmatic.svg"
import torus from "../../assets/torus.svg"
import portis from "../../assets/portis.svg"
import { NavButton2 } from "../../Navbar/NavbarStyles"
import Circle from "../../assets/blue-loader.svg"
import Loader from "../../Loader/Loader"
import { useWeb3React } from "@web3-react/core"
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


   


const ConnectWalletButton = ({ active, close, color, fontsize, height, left, top, onclick }) => {

    const loading = false;
    var logo
    var width1;
    var width2;

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

    
   // <ConnectButton height={height} fontsize={fontsize} col={color} col2={true} onClick={close}><ButtonText style={{"fontWeight": "bold"}}><Logo1 left={left} top={top}><Loader stroke="white" size={"18px"}/></Logo1>1 Pending....</ButtonText></ConnectButton> 
    const currentAccount = localStorage.getItem("currentAccount")
    return (

        <>

            {loading ? 
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
            {/* </ConnectButton> 
            : 
            (active ? <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><ButtonText ><Logo width={width1}><img src={logo} width={width2} height={width2}/></Logo>{account.substring(0, 6)}...{account.substring(account.length - 4)}</ButtonText></ConnectButton>
            : (onPageLoading ?  <NavButton2 active={active} color={"rgb(23,42,66)"} onClick={close}>Connect Wallet</NavButton2> 
            :  <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><ButtonText ><Logo width={width1}><img src={logo} width={width2} height={width2}/></Logo>{currentAccount?.substring(0, 6)}...{currentAccount?.substring(currentAccount?.length - 4)}</ButtonText></ConnectButton>))} */}
             </ConnectButton> 
            : 
            (!active ?  (provider ? <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><ButtonText ><Logo width={width1}><img src={logo} width={width2} height={width2}/></Logo>{currentAccount?.substring(0, 6)}...{currentAccount?.substring(currentAccount?.length - 4)}</ButtonText></ConnectButton> : <NavButton2 active={active} color={"rgb(23,42,66)"} onClick={close}>Connect Wallet</NavButton2>) 
            :  <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><ButtonText ><Logo width={width1}><img src={logo} width={width2} height={width2}/></Logo>{currentAccount?.substring(0, 6)}...{currentAccount?.substring(currentAccount?.length - 4)}</ButtonText></ConnectButton>)}
        </>
    )
}

export default ConnectWalletButton;