import React, { useState, useEffect } from "react";
import chainLogo from "../assets/metamask.svg"
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import EthereumLogo from "../assets/Ethereum.svg"
import HomeConnectButton from "../Home/HomeConnectButton";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import arrowDown from "../assets/arrowDown.svg"
import { ChainSelectorWrapper, ChainSelectorIconWrapper, ChainSelectorIcon, ChainSelectorTextWrapper, ChainSelectorText } from "./DropdownStyles";
const DropdownItem = () => {

    return (

        <ChainSelectorWrapper>
        <ChainSelectorIconWrapper>
            <ChainSelectorIcon src={BitcoinLogo} width={"30px"}></ChainSelectorIcon>
        </ChainSelectorIconWrapper>
        <ChainSelectorTextWrapper>
            <ChainSelectorText>Token</ChainSelectorText>
        </ChainSelectorTextWrapper>
    </ChainSelectorWrapper>

    )

}

export default DropdownItem