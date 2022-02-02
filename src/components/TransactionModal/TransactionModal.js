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
import DropdownMenu2 from "./DropDownMenu2";
// import { ChainSelectorIconWrapper } from "../BridgeModal/BridgeModalStyles";
// import { ChainSelectorIcon } from "../BridgeModal/BridgeModalStyles";
import Nav from "../Navbar/Navbar";
import { Ethereum } from "@renproject/chains";

const TransactionModal = ({close}) => {

    const [toggle, setToggle] = useState(true)
    const [dropDownActive, setDropDownActive] = useState(false)
    const [dropDownActive1, setDropDownActive1] = useState(false)
    const [dropDownActive2, setDropDownActive2] = useState(false)
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

    const setDropdownValue1 = () => {

        setDropDownActive(!dropDownActive);
    }

    const setDropdownValue2 = () => {

        setDropDownActive(!dropDownActive);
    }

    const setDropdownValue3 = () => {

        if(!dropDownActive && !dropDownActive1 && !dropDownActive2) return
        setDropDownActive(false);
        setDropDownActive1(false);
        setDropDownActive2(false);
    }
    console.log(text)

    return (

        <>
        <StyledContainer onClick={() => setDropdownValue3()}>
            
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
                            <DropdownMenu active={dropDownActive} width={"200px"} height={"100px"} top={"65px"}></DropdownMenu>
                        </ButtonContainer>
                    </TransactionModalHeaderWrapper>
                </TransactionModalHeaderContainer>
                <TransactionDetails>
                    <TransactionModalHeaderWrapper>
                        <TransactionSelector>
                            <TransactionHeader>
                                <Transactiontext>
                                    Viewing history from
                                </Transactiontext>
                                <HeaderContainerr>
                                    <HeaderButton onClick={e => setDropDownActive1(!dropDownActive1)}>
                                        <ChainSelectorIconWrapper>
                                            <ChainSelectorIcon src={BitcoinLogo} width={"30px"}></ChainSelectorIcon>
                                            <Spacer></Spacer>
                                            <ChainSelectorIcon src={chevronDownLogo} width={"13px"}></ChainSelectorIcon>
                                        </ChainSelectorIconWrapper>
                                    </HeaderButton>
                                    <DropdownMenu2 active={dropDownActive1} width={"80px"} height={"100px"} top={"143px"}></DropdownMenu2>
                                </HeaderContainerr>
                                <Transactiontext>
                                    to
                                </Transactiontext>
                                <HeaderContainerr>
                                    <HeaderButton onClick={e => setDropDownActive2(!dropDownActive2)}>
                                        <ChainSelectorIconWrapper>
                                            <ChainSelectorIcon src={EthereumLogo} width={"30px"}></ChainSelectorIcon>
                                            <Spacer></Spacer>
                                            <ChainSelectorIcon src={chevronDownLogo} width={"13px"}></ChainSelectorIcon>
                                        </ChainSelectorIconWrapper>
                                    </HeaderButton>
                                    <DropdownMenu2 active={dropDownActive2} width={"90px"} height={"100px"} top={"143px"}></DropdownMenu2>
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