import React, { useEffect } from "react";
import { StyledTitle, StyledSubTitle, ButtonWrapper, VideoBackground, Container } from "./HomeStyles";
// import { Button, ButtonWrapper } from "../ButtomStyles";
import { Wrapper } from "./HomeStyles";
import Disconnect from "../Web3Modal/Disconnect";
import useAuth from "../../hooks/useAuth";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router'
import { Link } from "react-router-dom";
import BridgePage from "../../pages/BridgePage";
import Video from "../assets/videos/video - Copy.mp4"
import ConnectWalletButton from "../Buttons/ConnectWalletButton/ConnjectWalletButton";
import HomeConnectButton from "./HomeConnectButton";

const Home = ({close}) => {

    const { active } = useAuth()
    
   
    return(
        <>
        {/* <VideoBackground autoPlay loop muted src={Video} type="video/mp4"></VideoBackground> */}
        <Container>
            
            
                <StyledTitle size={120} margin={0} weight={"bold"} styleds={"italic"} align={"center"}>Ren Bridge V3.</StyledTitle>
                <StyledTitle size={65} margin={20} weight={400} align={"center"}>Liquidity Unchained</StyledTitle>
                <StyledSubTitle size={24}>Transfer your favouite crypto-currencies cross-chain. We support BTC, SEC, BCH and more</StyledSubTitle>
                <ButtonWrapper>
                    <HomeConnectButton width={"250px"} active={active} left={"82%"} top={"31%"} close={close} onclick={close} height="50px" fontsize="17" colour="rgb(20, 29, 49)"></HomeConnectButton>
                </ButtonWrapper>
            
           {active && <Switch> <Redirect exact to="/bridge"/></Switch>}
        </Container>
        </>
    )
}

export default Home;
