import React from "react";
import styled, { css } from "styled-components";
import { useWeb3React } from "@web3-react/core";

export const ConnectButton = styled.div`

    height: 60px;
    width: 100%;
    background: rgb(35,35,52);
    border-radius: 10px;
    margin-top: 20px;
    border: 1px solid rgb(45,45,62);
   
    &:hover {

        border: 1px solid rgb(77, 102, 235);
    }

    ${(props) => props.active && css`

    background: rgb(45,45,62);
    border: 1px solid rgb(75,75,92);;
    
`}
`

export const TitleContainer = styled.div`

    height: 40px;
    margin-right: ${(props) => props.margin};
`;

export const Logo = styled.div`

   width: ${(props) => props.width}px;
   height: ${(props) => props.width}px;
   float: right;
   line-height: 75px;
`;

export const ModalTitle = styled.div`

    font-size: 20px;
    font-weight: bold;
    align-items: left;
    color: white;
    display: flex;
    padding-left: 20px;
    line-height: 60px;
    // float-left;
    left: 0%;

    .sp {

        padding-right: 10px;
    }
    
`;



const providers = [

    {
        to: "/trade/wallet",
        icon: "fas fa-wallet",
        label: "Wallet"
    },
    {
        to: "/trade/trade",
        icon: "fa fa-exchange",
        label: "Trade"
    },
    {
        to: "/trade/history",
        icon: "fa fa-history",
        label: "Transactions"
    },
    {
        to: "/trade/tokeninfo",
        icon: "fas fa-coins",
        label: "Token Info"
    },
]


const Provider = ({width1, logo, width2, title, connect }) => {

    const { active } = useWeb3React()

    const provider = localStorage.getItem("provider")

    return (
        <ConnectButton active={active && provider=== provider} onClick={connect}>
            <TitleContainer margin={"20px"}>
                <Logo width={width1}><img src={logo} width={width2} /></Logo>
                <ModalTitle>
                    {provider === provider && <a href='https://svgshare.com/s/A_d' ><img width="10px" src='https://svgshare.com/i/A_d.svg' title='green-dot' /></a>}
                    <span className="sp"></span>
                    {title}
                </ModalTitle>
            </TitleContainer>
        </ConnectButton>
    )
}

export default Provider;