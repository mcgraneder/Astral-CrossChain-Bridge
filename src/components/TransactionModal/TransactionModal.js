import React, { useState, useEffect } from "react";
import chainLogo from "../assets/metamask.svg"
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondownB.png"
import EthereumLogo from "../assets/Ethereum.svg"
import HomeConnectButton from "../Home/HomeConnectButton";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import arrowDown from "../assets/arrowDown.svg"
import { ChainSelectorIcon } from "../BridgeModal/BridgeModalStyles";

import { HeaderContainer,
         StyledContainer, 
         BridgeModalContainer,
         TransactionModalHeaderContainer,
         TransactionModalHeaderWrapper,
         LogoContainer,
         LogoLink,
         TransactionDetails,
         DropdownButton,
         ButtonContainer,
         DropdownContainer
} from "./TransactionModalStyles";
import Nav from "../Navbar/Navbar";

const TransactionModal = ({close}) => {

    const [toggle, setToggle] = useState(true)
    const [dropDownActive, setDropDownActive] = useState(false)
    const [text, setText] = useState("Deposit")
    const [inputText, setInputText] = useState("Deposit Amount")
    const { active, onPageLoading, account } = useAuth()

    const setToggleValue = () => {

        setToggle(!toggle);
        if(!toggle) {
            setText("Deposit")
            setInputText("Deposit Amount")

        } else {
            setText("Withdraw")
            setInputText("Withdraw Amount")

        }
    }

    const setDropdownValue = () => {

        setDropDownActive(!dropDownActive);
    }
    console.log(text)

    return (

        <>
        <StyledContainer>
            
            {/* <HeaderContainer>
                <TransactionModalHeader colour={"rgb(27,32,52);;"} colour1={"rgb(14, 22, 39)"} colour2={"rgb(14, 22, 39)"} bcolour={"rgb(34,43,68)"} bcolour1={"rgb(14, 22, 39)"} bcolour2={"rgb(14, 22, 39)"} visible={true}></TransactionModalHeader>
            </HeaderContainer> */}
            <BridgeModalContainer>
                <TransactionModalHeaderContainer>
                    <TransactionModalHeaderWrapper>
                        <LogoContainer>
                            <LogoLink>
                                Transaction Details
                            </LogoLink>
                        </LogoContainer>
                        <ButtonContainer>
                            <DropdownButton>Deposit History</DropdownButton>
                            <DropdownContainer>
                                <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                            </DropdownContainer>
                        </ButtonContainer>
                    </TransactionModalHeaderWrapper>
                </TransactionModalHeaderContainer>
                <TransactionDetails></TransactionDetails>
            </BridgeModalContainer>
        </StyledContainer>
        </>
    )
}

export default TransactionModal;