import React, { useState } from "react"
import { ConnectButton, Logo, ButtonText, ButtonText1 } from "./ConnectWalletButtonStyles"
import useAuth from "../../../hooks/useAuth"
import logo1 from "../../assets/metamask.png"
import Loader from "react-loader-spinner"
import styled from "styled-components"
import metamask from "../../assets/metamask.svg"
import walletConnect from "../../assets/wallet_connect.svg"
import coinbase from "../../assets/coinbase.svg"
import fortmatic from "../../assets/fortmatic.svg"
import torus from "../../assets/torus.svg"
import portis from "../../assets/portis.svg"
import { NavButton2 } from "../../Navbar/NavbarStyles"

export const Logo1 = styled.div`

    position: absolute;

   float: left;

   justify-content: center;
    left: ${(props) => props.left};
    top: ${(props) => props.top};

}




   
`;

const ConnectWalletButton = ({ active, close, color, fontsize, height, left, top, onclick}) => {

    const { account, onPageLoading} = useAuth()
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

    
   

    return (

        <>

            {active ? 
            <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><Logo width={width1}><img src={logo} width={width2} height={width2}/></Logo><ButtonText >{account.substring(0, 6)}...{account.substring(account.length - 4)}</ButtonText></ConnectButton> 
            : (!onPageLoading ?  <NavButton2 active={active} color={"rgb(23,42,66)"} onClick={close}>Connect Wallet</NavButton2>
            :  <NavButton2 active={active} color={"rgb(23,42,66)"} onClick={close}><Logo1 left={left} top={top}><Loader style={{paddingTop: "5px"}} type="Oval" height={18} height={18} color="rgb(89,115,254)"></Loader></Logo1>Connecting...</NavButton2>)
            }
        </>
    )
}

export default ConnectWalletButton;