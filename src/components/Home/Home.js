import React, { useEffect } from "react";
import { StyledTitle, StyledSubTitle, ButtonWrapper, Container } from "./HomeStyles";
import { useHistory } from "react-router-dom";
import { Redirect, Switch } from 'react-router'
import ConnectWalletButton from "../Buttons/ConnectWalletButton/ConnjectWalletButton";
import { useWeb3React } from "@web3-react/core";

const Home = ({close}) => {

    const { active } = useWeb3React()
    let history = useHistory()

    useEffect(() => {
        if(localStorage.getItem("provider")) history.push("/bridge") 
    }, [history])
   
    return(
        <>
            <Container>
                <StyledTitle size={120} margin={0} weight={"bold"} styleds={"italic"} align={"center"}>Ren Bridge V3.</StyledTitle>
                <StyledTitle size={65} margin={20} weight={400} align={"center"}>Liquidity Unchained</StyledTitle>
                <StyledSubTitle size={24}>Transfer your favouite crypto-currencies cross-chain. We support BTC, ZEC, BCH and more</StyledSubTitle>
                <ButtonWrapper>
                <ConnectWalletButton active={active} left={"82.3%"} top={"31.5%"} close={close} onclick={close} height="200" fontsize="17" colour="rgb(20, 29, 49)" width="70"></ConnectWalletButton>
                </ButtonWrapper>
                {active && <Switch> <Redirect exact to="/bridge"/></Switch>}
            </Container>
        </>
    )
}

export default Home;
