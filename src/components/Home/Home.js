import React, { useEffect } from "react";
import { StyledTitle, StyledSubTitle, ButtonWrapper } from "./HomeStyles";
// import { Button, ButtonWrapper } from "../ButtomStyles";
import { Wrapper } from "./HomeStyles";
import Disconnect from "../Web3Modal/Disconnect";
import useAuth from "../../hooks/useAuth";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router'
import { Link } from "react-router-dom";
import BridgePage from "../../pages/BridgePage";
const Home = () => {

    const { active } = useAuth()
    
   
    return(
        <div>
            <div>
                <Wrapper space={50}/>
                <StyledTitle size={100} margin={0} weight={900} styleds={"italic"} align={"center"}>Ren Bridge V3.</StyledTitle>
                <StyledTitle size={65} margin={20} weight={600} align={"center"}>Liquidity Unchained</StyledTitle>
                <StyledSubTitle size={35}>Transfer crypto cross-chain</StyledSubTitle>
            </div>
           {active && <Switch> <Redirect exact to="/bridge"/></Switch>}
        </div>
    )
}

export default Home;
