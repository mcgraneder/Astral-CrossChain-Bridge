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
         ToggleButtonWrapper,
         ToggleButton,
         ToggleButton2
} from "./TransactionModalStyles";
import DropdownMenu2 from "./DropDownMenu2";
import DropdownMenu3 from "./DropdownMenu3";
// import { ChainSelectorIconWrapper } from "../BridgeModal/BridgeModalStyles";
// import { ChainSelectorIcon } from "../BridgeModal/BridgeModalStyles";
import Nav from "../Navbar/Navbar";
import { Ethereum } from "@renproject/chains";
import TransactionList from "./TransactionList/TransactionList";
const TransactionModal = ({close, transactions, toggleTokenModal}) => {

    const [toggle, setToggle] = useState(true)
    const [dropDownActive0, setDropDownActive0] = useState(false)
    const [dropDownActive, setDropDownActive] = useState(false)
    const [dropDownActive1, setDropDownActive1] = useState(false)
    const [dropDownActive2, setDropDownActive2] = useState(false)
    const [text, setText] = useState("Deposit History")
    const [inputText, setInputText] = useState("Deposit Amount")


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

    const setDropdownValue0 = () => {

        setDropDownActive0(!dropDownActive0);
    }

    const setDropdownValue = () => {

        setDropDownActive(!dropDownActive);
    }

    const setDropdownValue3 = () => {
        if(!dropDownActive  && !dropDownActive0) return
        setDropDownActive0(false);
        setDropDownActive(false);
    }
    // console.log(text)

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
                        <ButtonContainer >
                            <DropdownButton width={"100px"} background={"rgb(14, 22, 39)"} border={true} onClick={e => setDropDownActive0(!dropDownActive0)}>Pending</DropdownButton>
                            <DropdownContainer left={"215px"}>
                                <ChainSelectorIcon src={chevronDownLogo} width={"15px"} ></ChainSelectorIcon>
                            </DropdownContainer>
                        <DropdownMenu3 active={dropDownActive0} width={"125px"} height={"100px"} top={"65px"} left={"215px"}></DropdownMenu3>
                            <DropdownButton  width={"170px"} background={"rgb(33,114,229)"} border={false} onClick={e => setDropDownActive(!dropDownActive)}>{text}</DropdownButton>
                            <DropdownContainer>
                                <ChainSelectorIcon src={chevronDownLogo1} width={"15px"} ></ChainSelectorIcon>
                            </DropdownContainer>
                            <DropdownMenu active={dropDownActive} width={"185px"} height={"100px"} top={"65px"} left={"10px"}></DropdownMenu>
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
                                    <HeaderButton onClick={toggleTokenModal}>
                                        <ChainSelectorIconWrapper>
                                            <ChainSelectorIcon src={BitcoinLogo} width={"30px"}></ChainSelectorIcon>
                                            Bitcoin
                                            <Spacer></Spacer>
                                            <ChainSelectorIcon src={chevronDownLogo} width={"13px"}></ChainSelectorIcon>
                                        </ChainSelectorIconWrapper>
                                    </HeaderButton>
                                </HeaderContainerr>
                                <Transactiontext>
                                    to
                                </Transactiontext>
                                <HeaderContainerr>
                                    <HeaderButton onClick={toggleTokenModal}>
                                        <ChainSelectorIconWrapper>
                                            <ChainSelectorIcon src={EthereumLogo} width={"30px"}></ChainSelectorIcon>
                                            Ethereum
                                            <Spacer></Spacer>
                                            <ChainSelectorIcon src={chevronDownLogo} width={"13px"}></ChainSelectorIcon>
                                        </ChainSelectorIconWrapper>
                                    </HeaderButton>
                                </HeaderContainerr>
                            </TransactionHeader>
                        </TransactionSelector>
                    </TransactionModalHeaderWrapper>
                    {/* <ToggleContainer>
                            <ToggleButtonWrapper>
                                <ToggleButton>Pending</ToggleButton>
                                <ToggleButton2>Completed</ToggleButton2>
                            </ToggleButtonWrapper>
                    </ToggleContainer> */}
                    <TransactionList transactions={transactions}/>
                </TransactionDetails>
            </BridgeModalContainer>
        </StyledContainer>
        </>
    )
}

export default TransactionModal;