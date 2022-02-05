import React, { useState, useEffect } from "react";
import chainLogo from "../assets/metamask.svg"
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import EthereumLogo from "../assets/Ethereum.svg"
import HomeConnectButton from "../Home/HomeConnectButton";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import arrowDown from "../assets/arrowDown.svg"
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import { getContract } from "../../utils/utils";
import abi from "../../utils/Abis/ABI.json"
import abi2 from "../../utils/Abis/AB12.json"
import Web3	 from "web3";
import { ethers } from 'ethers'

import Button from "./Button";
import { ArrowContainer12, 
         ArrowLogo12, 
         ArrowLogoContainer12, 
         StyledContainer, 
         BridgeModalContainer, 
         BridgeModalWrapper, 
         ChainSelector, 
         ChainSelectorWrapper, 
         ChainSelectorIcon, 
         ChainSelectorIconWrapper, 
         ChainSelectorText, 
         ChainSelectorTextWrapper, 
         DropdownContainer, 
         BalanceContainer, 
         BalanceWrapper, 
         MintFormWrapper, 
         ButtonWrapper, 
         MintFormContainer, 
         MintToggleButton, 
         ReleaseToggleButton, 
         MinFormToggleButtonContainer, 
         MintFormTextWrapper2, 
         MintFormText2,
         Balancetext,
         FromContainer,
         WalletInputWrapper,
         WalletInput,
         ArrowContainer,
         ArrowLogoContainer,
         ArrowLogo,
         Dropdown
} from "./WalletModalStyles";

export const MintForm = styled.div`

    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    height: 50px;
    // width: 100%;
    background: transparent;
    border: 1px solid rgb(34,43,68);
    border-radius: 10px;

    &:hover {

        background:  rgb(34,43,68);
    }
`

const WalletModal = ({close}) => {

    const [toggle, setToggle] = useState(true)
    const [dropDownActive, setDropDownActive] = useState(false)
    const [text, setText] = useState(" ")
    const [inputText, setInputText] = useState("Deposit")
    const [ren1, setRen1] = useState()
    const [bridge, setBridge] = useState()

    const { active, library } = useAuth()
    var bridgeContract
    var ren
    const amount = ethers.utils.parseUnits("10", 6);


    useEffect(() => {

        if(library) {

            setBridge(getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, "0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113"))
            setRen1(getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, "0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113"))
            console.log(ren1)
        }

    }, [library])
    const setToggleValue = () => {

        setToggle(!toggle);
        if(!toggle) {
            // setText("Deposit")
            setInputText("Deposit ")

        } else {
            // setText("Withdraw")
            setInputText("Withdraw ")

        }
    }

    const setDropdownValue = () => {

        setDropDownActive(!dropDownActive);
    }
    console.log(text)

    const setDropdownValue3 = () => {

        if(!dropDownActive) return
        setDropDownActive(!dropDownActive);
    }

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    const handleDeposit = async() => {


        console.log("hello")

        try {

            console.log(ren1)
            const approve = await ren1.approve("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", amount, { gasPrice: 20e9 });
            await approve.wait()

            const deposit = bridge.transferFrom("0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113", "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", 10, "BTC", { gasPrice: 20e9 })
    

        } catch(error) {

            console.error(error)
        }
       
       
       

    }

    const handleWithdraw = async() => {

        try {

            const withdraw = bridge.transfer("0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113", 10, "BTC", { gasPrice: 20e9 })
            

        } catch(error) {

            console.error(error)
        }
      
    //    await tx.wait()
       

    }

    return (

        <>
        <StyledContainer onClick={() => setDropdownValue3()}>
            
            <BridgeModalContainer>
            <BridgeModalWrapper>
                <ChainSelector onClick={() => setDropdownValue()}>
                    <ChainSelectorWrapper>
                        <ChainSelectorIconWrapper>
                            <ChainSelectorIcon src={BitcoinLogo} width={"30px"}></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText>Token</ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                       
                    </ChainSelectorWrapper>
                    { dropDownActive && <DropdownMenu height={"64px;"}></DropdownMenu>}
                </ChainSelector>
                <BalanceContainer>
                    <BalanceWrapper>
                        <Balancetext>Balance: 0.003 RenBTC</Balancetext>
                    </BalanceWrapper>
                </BalanceContainer>
                <ArrowContainer>
                    <ArrowLogoContainer>
                        <ArrowLogo src={arrowDown}></ArrowLogo>
                    </ArrowLogoContainer>
                </ArrowContainer>
                <MintFormContainer>
                    <MinFormToggleButtonContainer>
                        <MintToggleButton side={"left"} colour={"rgb(14, 22, 39)"} active={toggle} onClick={setToggleValue}>
                            <MintFormTextWrapper2>
                                <MintFormText2>Deposit</MintFormText2>
                            </MintFormTextWrapper2>
                        </MintToggleButton>
                        <ReleaseToggleButton side={"right"} active={toggle} onClick={setToggleValue}>
                            <MintFormTextWrapper2>
                                <MintFormText2>Withdraw</MintFormText2>
                            </MintFormTextWrapper2>
                        </ReleaseToggleButton>
                    </MinFormToggleButtonContainer>
                    <MintFormWrapper>
                        {/* <MintForm>
                        <MintFormmWrapper>
                            <MintFormTextWrapper>
                                <MintFormText>0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113</MintFormText>
                            </MintFormTextWrapper>
                            <DropdownContainer2>
                                <MintFormIcon src={chainLogo} width={"18px"}></MintFormIcon>
                            </DropdownContainer2>
                            </MintFormmWrapper>
                            
                        </MintForm> */}
                        <FromContainer>
                            <WalletInputWrapper>
                                <WalletInput onKeyPress={preventMinus} name="number" type="number" id="in"  onChange={(e) => setText(e.target.value)} placeholder="amount"></WalletInput>
                            </WalletInputWrapper>
                        </FromContainer>
                        <ButtonWrapper>
                            <HomeConnectButton width={"440px"} active={active} left={"82%"} top={"31%"} close={close} click={inputText === "Withdraw " ? handleWithdraw : handleDeposit} height="60px" fontsize="17" colour="rgb(20, 29, 49)" text={inputText +  " " + text + " BTC" }></HomeConnectButton>
                        </ButtonWrapper>
                    </MintFormWrapper>
                    
                </MintFormContainer>
            </BridgeModalWrapper>
            </BridgeModalContainer>
        </StyledContainer>
        </>
    )
}

export default WalletModal;