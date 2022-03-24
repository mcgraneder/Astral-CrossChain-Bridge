import React, { useState, useEffect } from "react";
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import chevronDownLogo1 from "../assets/cheverondownB.png"
import EthereumLogo from "../assets/Ethereum.svg"
import { ChainSelectorIcon } from "../BridgeModal/BridgeModalStyles";
import DropdownMenu from "./DropdownMenu";
import { StyledContainer, 
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
} from "./TransactionModalStyles";
import DropdownMenu3 from "./DropdownMenu3";
import TransactionList from "./TransactionList/TransactionList";

const TransactionModal = ({ transactions, toggleTokenModal }) => {

    const [dropDownActive0, setDropDownActive0] = useState(false)
    const [dropDownActive, setDropDownActive] = useState(false)
    const [text, setText] = useState("Deposit History")

    const setDropdownValue3 = () => {
        if(!dropDownActive  && !dropDownActive0) return
        setDropDownActive0(false);
        setDropDownActive(false);
    }

    useEffect(() => {
        if(!localStorage.getItem("provider")) window.location.href = "/" 
      }, [])
    

    return (

        <>
        <StyledContainer onClick={() => setDropdownValue3()}>
            <BridgeModalContainer>
                <TransactionModalHeaderContainer>
                    <TransactionModalHeaderWrapper>
                        <LogoContainer>
                            <LogoLink>
                                Transaction Details
                            </LogoLink>
                        </LogoContainer>
                        <ButtonContainer >
                            <DropdownButton 
                                width={"100px"} 
                                background={"rgb(14, 22, 39)"} 
                                border={true} 
                                onClick={e => setDropDownActive0(!dropDownActive0)}>
                                    Pending
                            </DropdownButton>
                            <DropdownContainer left={"215px"}>
                                <ChainSelectorIcon 
                                    src={chevronDownLogo} 
                                    width={"15px"}/>
                            </DropdownContainer>
                            <DropdownMenu3 
                                active={dropDownActive0} 
                                width={"125px"} 
                                height={"100px"} 
                                top={"65px"} 
                                left={"215px"}
                            />
                            <DropdownButton 
                                width={"170px"} 
                                background={"rgb(33,114,229)"} 
                                border={false} 
                                onClick={e => setDropDownActive(!dropDownActive)}>
                                    {text}
                            </DropdownButton>
                            <DropdownContainer>
                                <ChainSelectorIcon 
                                    src={chevronDownLogo1} 
                                    width={"15px"}/>
                            </DropdownContainer>
                            <DropdownMenu 
                                active={dropDownActive} 
                                width={"185px"} 
                                height={"100px"} 
                                top={"65px"} 
                                left={"10px"}
                            />
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
                                            <ChainSelectorIcon src={BitcoinLogo} width={"30px"}/>
                                            Bitcoin
                                            <Spacer></Spacer>
                                            <ChainSelectorIcon src={chevronDownLogo} width={"13px"}/>
                                        </ChainSelectorIconWrapper>
                                    </HeaderButton>
                                </HeaderContainerr>
                                <Transactiontext>
                                    to
                                </Transactiontext>
                                <HeaderContainerr>
                                    <HeaderButton onClick={toggleTokenModal}>
                                        <ChainSelectorIconWrapper>
                                            <ChainSelectorIcon src={EthereumLogo} width={"30px"}/>
                                            Ethereum
                                            <Spacer></Spacer>
                                            <ChainSelectorIcon src={chevronDownLogo} width={"13px"}/>
                                        </ChainSelectorIconWrapper>
                                    </HeaderButton>
                                </HeaderContainerr>
                            </TransactionHeader>
                        </TransactionSelector>
                    </TransactionModalHeaderWrapper>
                    <TransactionList transactions={transactions}/>
                </TransactionDetails>
            </BridgeModalContainer>
        </StyledContainer>
        </>
    )
}

export default TransactionModal;