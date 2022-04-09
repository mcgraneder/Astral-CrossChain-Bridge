import React, { useState, useEffect, useContext } from "react";
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import chevronDownLogo1 from "../assets/cheverondownB.png"
import EthereumLogo from "../assets/Ethereum.svg"
import { ChainSelectorIcon } from "../BridgeModal/BridgeModalStyles";
import DropdownMenu from "./components/Dropdown/DropdownMenu";
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
import TransactionList from "./components/TransactionList/TransactionList";
import { TransactionStateContext } from "../../contexts/transactionContext";

const TransactionModal = ({toggleTokenModal }) => {

    const [dropDownActive0, setDropDownActive0] = useState(false)
    const [dropDownActive, setDropDownActive] = useState(false)

    const { transactions } = useContext(TransactionStateContext)

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
                                onClick={() => setDropDownActive0(!dropDownActive0)}>
                                    Pending
                            </DropdownButton>
                            <DropdownContainer left={"215px"}>
                                <ChainSelectorIcon 
                                    src={chevronDownLogo} 
                                    width={"15px"}/>
                            </DropdownContainer>
                            <DropdownButton 
                                width={"170px"} 
                                background={"rgb(33,114,229)"} 
                                border={false} 
                                onClick={() => setDropDownActive(!dropDownActive)}>
                                    Deposit History
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