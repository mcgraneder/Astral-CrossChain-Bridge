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
import { TopeSectionWrapper, BottomSectionWrapper } from "./StyledContainer";
export const Wrapper = styled.div`

    height ${(props) => props.space}px;
`;
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

export const StyledTitle2 = styled.div`

font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    font-size: ${(props) => props.size}px;
    text-align: ${(props) => props.align};
    color: White;
    padding: 5px;
    max-width: 350px;
    margin: 0 auto;
    margin-bottom:  ${(props) => props.margin}px;
    font-weight: ${(props) => props.weight};
    // font-style: ${(props) => props.styleds};
    background-color: transparent;
    margin-top:  ${(props) => props.marginTop}px;
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
            <TopeSectionWrapper>
                <StyledTitle size={100} margin={0} weight={"bold"} styleds={"italic"} align={"center"}>Ren Bridge V3.</StyledTitle>
                <StyledTitle size={50} margin={20} marginTop={0} weight={400} align={"center"}>Crypto Liquidity Unchained</StyledTitle>
                <StyledSubTitle size={20}>Transfer your favouite crypto-currencies cross-chain. We support many assets such as BTC, ZEC, BCH, SOL, DOGE and more</StyledSubTitle>
                <ButtonWrapper>
                    <HomeConnectButton width={"500px"} active={active} left={"82%"} top={"31%"} close={close} onclick={close} height="50px" fontsize="20" colour="rgb(20, 29, 49)" text={"About This App"}></HomeConnectButton>
                </ButtonWrapper>
                <StyledTitle2 size={27} margin={0} marginTop={40} weight={400} align={"center"} >
                    We support all of top the tradtional Legacy Cyptos
                </StyledTitle2>
            
                <SupportedAssets type={"LEGACY"}/>
                <StyledTitle2 size={27} margin={0} marginTop={40} weight={400} align={"center"} >
                    Aswell as many EVM and Layer 2 based assets
                </StyledTitle2>
                <Wrapper space={"100px"}/>
                <SupportedAssets type={"EVM"}/>
                {active && <Switch> <Redirect exact to="/bridge"/></Switch>}
                </TopeSectionWrapper>
            </LoginStyledContainer>
        </>
    )
}

export default Home;
