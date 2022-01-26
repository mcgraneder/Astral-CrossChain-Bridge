import React, { useState, useEffect } from "react";
import { FormWrapper, StyledContainer, BridgeModalContainer, BridgeModalWrapper, ChainSelector, ChainSelectorWrapper, ChainSelectorIcon, ChainSelectorIconWrapper, ChainSelectorText, ChainSelectorTextWrapper, DropdownContainer, ChainSelectorContainter, BalanceContainer, BalanceWrapper, MintFormmWrapper, MintFormWrapper, ButtonWrapper, MintFormIcon, MintFormIconWrapper, MintFormText, MintFormTextWrapper, MintFormContainer, DropdownContainer2 } from "./BridgeModalStyles";
import chainLogo from "../assets/metamask.svg"
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import EthereumLogo from "../assets/Ethereum.svg"
import HomeConnectButton from "../Home/HomeConnectButton";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
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

const BrideModal = () => {

    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);
    const { active, onPageLoading, account } = useAuth()

    return (

        <>
        <StyledContainer>
            
            <BridgeModalContainer>
            <BridgeModalWrapper>
                <ChainSelector>
                    <ChainSelectorWrapper>
                        <ChainSelectorIconWrapper>
                            <ChainSelectorIcon src={BitcoinLogo} width={"30px"}></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText>Origin Chain</ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                    </ChainSelectorWrapper>
                </ChainSelector>
                <ChainSelector>
                    <ChainSelectorWrapper>
                        <ChainSelectorIconWrapper>
                            <ChainSelectorIcon src={EthereumLogo} width={"30px"}></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText> Destination Chain</ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                    </ChainSelectorWrapper>
                </ChainSelector>
                <BalanceContainer>
                    <BalanceWrapper>
                        Balance
                    </BalanceWrapper>
                </BalanceContainer>
                <MintFormContainer>
                    <MintFormWrapper>
                        <MintForm>
                        <MintFormmWrapper>
                            <MintFormTextWrapper>
                                <MintFormText>0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113</MintFormText>
                            </MintFormTextWrapper>
                            <DropdownContainer2>
                                <MintFormIcon src={chainLogo} width={"18px"}></MintFormIcon>
                            </DropdownContainer2>
                            </MintFormmWrapper>
                        </MintForm>
                    </MintFormWrapper>
                </MintFormContainer>
                <ButtonWrapper>
                    <HomeConnectButton width={"440px"} active={active} left={"82%"} top={"31%"} close={toggle1} onclick={toggle1} height="60px" fontsize="17" colour="rgb(20, 29, 49)"></HomeConnectButton>
                </ButtonWrapper>
            </BridgeModalWrapper>
            </BridgeModalContainer>
        </StyledContainer>
        {/* <form
           
            className={"disabled"}
        >
            <div className="send">
                <input
                    className="no-right-border"
                    value={""}
                   
                    placeholder={`Recipient`}
                />
                <div
                    role="button"
                    className={`box box-action no-left-border ${""}`}
                   
                >
                   
                </div>
            </div>
            <div className="send">
                
                    <button
                        type="button"
                        className={`button light-blue`}
                    >
                        Connect  wallet
                    </button>
            </div>
           
                <>
                    <div className="deposit-address">
                        Deposit at least 100
                        <b>{"btc"}</b> to
                            <p>
                                <b>Address:</b>{" "}
                            </p>
                    </div>
                    <div className="deposit-loading">
                        Watching for deposits...{" "}
                        {/* <Loading style={{ display: "inline-block" }} /> */}
                    {/* </div> */}
                {/* </> */}
          

            {/* {errorMessage ? <p className="box red">{errorMessage}</p> : <></>} */}
        {/* </form> */} 
        </>
    )
}

export default BrideModal;