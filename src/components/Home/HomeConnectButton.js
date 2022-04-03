import React from "react"
import styled from "styled-components"
import metamask from "../assets/metamask.svg"
import walletConnect from "../assets/wallet_connect.svg"
import fortmatic from "../assets/fortmatic.svg"
import torus from "../assets/torus.svg"
import portis from "../assets/portis.svg"
import { ExternalLink } from "react-feather"
import { NavButton2 } from "./HomeConnectButtonStyles"

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

const External = styled(ExternalLink)`
    line-height: 10px;
    color: black;
`
const HomeConnectButton = ({ active, height, width, text, click}) => {


    return (

        <>
            <NavButton2  width={width} height={height} active={active} color={"rgb(23,42,66)"} onClick={click}>{text}<External strokeWidth={1.5} size={"20px"}/></NavButton2>
        </>
    )
}

export default HomeConnectButton;