import React, { useState } from "react"
import { ConnectButton, Logo, ButtonText, ButtonText1 } from "../Home/HomeConnectButtonStyles"
import useAuth from "../../hooks/useAuth"
import logo1 from "../assets/metamask.png"
import Loader from "react-loader-spinner"
import styled from "styled-components"
import metamask from "../assets/metamask.svg"
import walletConnect from "../assets/wallet_connect.svg"
import coinbase from "../assets/coinbase.svg"
import fortmatic from "../assets/fortmatic.svg"
import torus from "../assets/torus.svg"
import portis from "../assets/portis.svg"


export const NavButton2 = styled.div`

    
    display: inline;
    background: ${(props) => props.state ? "rgb(33,114,229);" : " rgb(48,58,78)"};
    width: ${(props) => props.width};
    border-radius: 18px;
    height: ${(props) => props.height};
    text-align: center;
    line-height: ${(props) => props.height};
    color:  White;
    margin-left: ${(props) => props.active ? "7px" : "0px"};
    margin-right: ${(props) => props.active ? "7px" : "0px"};
    font-weight: bold;

    // border: 1px solid rgb(3,184,189);

    &:hover {

        cursor:  ${(props) => props.state ? "pointer" : "auto"};
        // border: 1px solid rgb(75,135,220);
        background: ${(props) => props.state ? "rgb(13,94,209);" : " rgb(38,58,88)"};
        // color: rgb(23,42,66);
       
    }


`

export const Logo1 = styled.div`

    position: absolute;

   float: left;

   justify-content: center;
//    line-height: 60px;
    left: ${(props) => props.left};
    top: ${(props) => props.top};
//    background: rgb(89, 115, 254);
    
   &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(77, 102, 235);
}




   
`;

const Button = ({ state, active, height, click, width, text}) => {

    var logo
    var width1;
    var width2;


    return (

        <>

            <NavButton2  state={state} width={width} height={height} active={active} color={"rgb(23,42,66)"} onClick={click} >{text}</NavButton2>
           
        </>
    )
}

export default Button;