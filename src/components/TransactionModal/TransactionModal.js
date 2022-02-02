import React, { useState, useEffect } from "react";
import chainLogo from "../assets/metamask.svg"
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import chevronDownLogo1 from "../assets/cheverondownB.png"
import EthereumLogo from "../assets/Ethereum.svg"
import HomeConnectButton from "../Home/HomeConnectButton";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import arrowDown from "../assets/arrowDown.svg"
import { ChainSelectorIcon } from "../BridgeModal/BridgeModalStyles";
import DropdownMenu from "./DropdownMenu";

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
         DropdownContainer,
         TransactionSelector,
         TransactionHeader,
         Transactiontext,
         HeaderContainerr,
         HeaderButton,
         ChainSelectorIconWrapper,
         Spacer,
         ToggleContainer,
         ToggleButtonWrapper
} from "./TransactionModalStyles";
// import { ChainSelectorIconWrapper } from "../BridgeModal/BridgeModalStyles";
// import { ChainSelectorIcon } from "../BridgeModal/BridgeModalStyles";
import Nav from "../Navbar/Navbar";
import { Ethereum } from "@renproject/chains";

const TransactionModal = ({close}) => {

    const [toggle, setToggle] = useState(true)
    const [dropDownActive, setDropDownActive] = useState(false)
    const [text, setText] = useState("Deposit History")
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
                        <ButtonContainer onClick={e => setDropDownActive(!dropDownActive)}>
                            <DropdownButton>{text}</DropdownButton>
                            <DropdownContainer>
                                <ChainSelectorIcon src={chevronDownLogo1} width={"15px"}></ChainSelectorIcon>
                            </DropdownContainer>
                            {dropDownActive && (<DropdownMenu width={"200px"} height={"100px"}></DropdownMenu>)}
                        </ButtonContainer>
                    </TransactionModalHeaderWrapper>
                </TransactionModalHeaderContainer>
                <TransactionDetails>
                    <TransactionModalHeaderWrapper>
                        <TransactionSelector>
                            <TransactionHeader>
                                <Transactiontext>
                                    Viewing history for
                                </Transactiontext>
                                <HeaderContainerr>
                                    <HeaderButton>
                                        <ChainSelectorIconWrapper>
                                            <ChainSelectorIcon src={BitcoinLogo} width={"30px"}></ChainSelectorIcon>
                                            <Spacer></Spacer>
                                            <ChainSelectorIcon src={chevronDownLogo} width={"13px"}></ChainSelectorIcon>
                                        </ChainSelectorIconWrapper>
                                        {/* <DropdownMenu width={"80px"} height={"100px"}></DropdownMenu> */}
                                    </HeaderButton>
                                </HeaderContainerr>
                                <Transactiontext>
                                    to
                                </Transactiontext>
                                <HeaderContainerr>
                                    <HeaderButton>
                                        <ChainSelectorIconWrapper>
                                            <ChainSelectorIcon src={EthereumLogo} width={"30px"}></ChainSelectorIcon>
                                            <Spacer></Spacer>
                                            <ChainSelectorIcon src={chevronDownLogo} width={"13px"}></ChainSelectorIcon>
                                        </ChainSelectorIconWrapper>
                                    </HeaderButton>
                                </HeaderContainerr>
                            </TransactionHeader>
                        </TransactionSelector>
                    </TransactionModalHeaderWrapper>
                    <ToggleContainer>
                        <TransactionModalHeaderWrapper>
                            <ToggleButtonWrapper></ToggleButtonWrapper>
                        </TransactionModalHeaderWrapper>
                    </ToggleContainer>
                </TransactionDetails>
            </BridgeModalContainer>
        </StyledContainer>
        </>
    )
}

export default TransactionModal;