import React, { useEffect } from "react";
import { StyledTitle, StyledSubTitle, ButtonWrapper, Container } from "./HomeStyles";
import { useHistory } from "react-router-dom";
import { Redirect, Switch } from 'react-router'
import ConnectWalletButton from "../Buttons/ConnectWalletButton/ConnjectWalletButton";
import { useWeb3React } from "@web3-react/core";
import styled from "styled-components"
import { NavLink } from "react-router-dom";
import SupportedAssets from "./components/SupportedAssets";
import { LoginStyledContainer } from "./StyledContainer";

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


export const NavButton2 = styled(NavLink)`

font-family: 'Open Sans', sans-serif;
    
    display: inline;
    line-style: none;
    background: rgb(13,94,209);
    width: ${(props) => props.width};
    border-radius: 18px;
    height: ${(props) => props.height};
    text-align: center;
    line-height: ${(props) => props.height};
    color:  White;
    margin-left: ${(props) => props.active ? "7px" : "0px"};
    margin-right: ${(props) => props.active ? "7px" : "0px"};
    // font-weight: bold;
    font-size: 16px;
    text-decoration: none;

    // border: 1px solid rgb(3,184,189);

    &:hover {

        cursor: pointer;
        background: rgb(0,80,195);
        // color: rgb(23,42,66);
       
    }


`


const HomeConnectButton = ({ active, height, width, text, click}) => {


    return (

        <>
            <NavButton2  width={width} to="/about" height={height} active={active} color={"rgb(23,42,66)"} onClick={click}>{text}</NavButton2>
        </>
    )
}

const Home = ({close}) => {

    const { active } = useWeb3React()
    let history = useHistory()

    useEffect(() => {
        if(localStorage.getItem("provider")) history.push("/bridge") 
    }, [history])
   
    return(
        <>
        <LoginStyledContainer>
            <Container>
                <StyledTitle size={110} margin={0} weight={"bold"} styleds={"italic"} align={"center"}>Ren Bridge V3.</StyledTitle>
                <StyledTitle size={55} margin={20} weight={400} align={"center"}>Crypto Liquidity Unchained</StyledTitle>
                <StyledSubTitle size={22}>Transfer your favouite crypto-currencies cross-chain. We support BTC, ZEC, BCH, SOL, DOGE and more</StyledSubTitle>
                <ButtonWrapper>
                    <HomeConnectButton width={"400px"} active={active} left={"82%"} top={"31%"} close={close} onclick={close} height="50px" fontsize="20" colour="rgb(20, 29, 49)" text={"About This App"}></HomeConnectButton>
                </ButtonWrapper>
                {active && <Switch> <Redirect exact to="/bridge"/></Switch>}
                <SupportedAssets/>
            </Container>
            </LoginStyledContainer>
        </>
    )
}

export default Home;
