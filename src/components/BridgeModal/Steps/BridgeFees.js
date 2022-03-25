import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HomeConnectButton from "../../Home/HomeConnectButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "react-feather"
import { useWeb3React } from "@web3-react/core";
import BitcoinLogo from "../../assets/Bitcoin.svg"
import chevronDownLogo from "../../assets/cheverondown.png"
import EthereumLogo from "../../assets/Ethereum.svg"
import { StyledContainer, 
    BridgeModalContainer, 
    BridgeModalWrapper, 
    ChainSelector, 
    ChainSelectorWrapper, 
    ChainSelectorText, 
    ChainSelectorTextWrapper, 
    DropdownContainer, 
    // BalanceContainer, 
    BalanceWrapper, 
    MintFormWrapper, 
    ButtonWrapper, 
    MintFormContainer, 
    MintToggleButton, 
    ReleaseToggleButton, 
    MinFormToggleButtonContainer, 
    MintFormTextWrapper2, 
    MintFormText2,
    Balancetext
} from "../BridgeModalStyles";

export const BalanceContainer = styled.div`

    margin-top: 10px;
    // margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    // height: 60px;
    // width: 100%;
    display: flex;
    align-items center;
    justify-content: center;
    background: transaprent;
    border: 1px solid rgb(34,43,68);
    border-radius: 10px;
`

export const HeaderContainer = styled.div`

    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    justify-content: space-between;
`
export const BackContainer = styled.div`

    min-width: 72px;
    display: flex;
    justify-content: left;
`

export const BackArrow = styled(ArrowLeft)`

    padding: 3px;
    font-size: 1.125rem;
    lex: 0 0 auto;
    color: rgba(0, 0, 0, 0.54);
    padding: 12px;
    overflow: visible;
    font-size: 1.5rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    color: inherit;
    border: 0;
    cursor: pointer;
    margin-left: 5px;
    display: inline-flex;
    outline: 0;
    padding: 0;
    position: relative;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    -moz-appearance: none;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
`

export const HeaderText = styled.div`

    width: 100%;
    text-align: center;
    justify-self: center;
    display: block;
`
export const HeaderRight = styled.div`

    min-width: 72px;
    justify-self: flex-end;
    dislay: block;
`

export const FeesSection = styled.div`
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    // display: block;
`

export const FeeCalculatorContainer = styled.div`

    align-items: flex-end;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
`
export const FeeCalculatorWrapper = styled.div`

    flex-grow: 0;
    max-width: 58.333333%;
    // flex-basis: 58.333333%;
    // margin-left: 10px;
    box-sizing: border-box;
    // display: block;
`

export const FeeCalculatorText = styled.p`

    margin-bottom: 0.35em;
    font-size: 1rem;
    // font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    font-weight: 400;
    line-height: 0.8;
    font-size: 20px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    // display: block;
`

export const FeeCalculatorInputContainer = styled.div`

    flex-grow: 0;
    border-radius: 10px;
    justify-content: space-between;
    max-width: 41.666667%;
    flex-basis: 41.666667%;
    margin-left: 85px;
    box-sizing: border-box;
    // display: block;
`
export const FeeCalculatorInputWrapper = styled.div`

    width: 100%;
    border: none;
    border-radius: 10px;
    margin-top: 5px;
    display: inline-flex;
    padding: 0;
    position: relative;
    // min-width: 0;
    font-size: 14px;
    // flex-direction: column;
    vertical-align: top;
`
export const FeeCalculatorInputText = styled.label`

    transform: translate(12px, 10px) scale(0.75);
    z-index: 1;
    transform: translate(12px, 20px) scale(1);
    pointer-events: none;
    transition: color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    // transform: translate(0, 1.5px) scale(0.75);
    transform-origin: top left;
    top: 0;
    left: 0;
    color: #adadad;
    position: absolute;
    // display: block;

`

export const FeeInput = styled.div`

osition: relative;
    transition: background-color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
    background: rgb(27,32,52);;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
    color: #3F3F48;
    cursor: text;
    display: inline-flex;
    position: relative;
    font-size: 1rem;
    box-sizing: border-box;
    align-items: center;
    font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.1876em;

`

export const FeeCalculatorInput = styled.input`

background: rgb(27,32,52);
    cursor: text;
    border-radius: 10px;
    border: 2px solid  rgb(47,52,72);
    display: inline-flex;
    position: relative;
    color: #adadad;
    font-size: 1rem;
    box-sizing: border-box;
    align-items: center;
    font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.1876em;
    padding: 20px 12px 10px;
`

export const Spacer = styled.hr`

    margin-top: 15px;
    border: none;
    height: 1px;
    flex-shrink: 0;
    background-color: rgb(47,52,72);
`

export const FeeDetailsHeaderText = styled.p`
    margin-bottom: 0.35em;
    font-size: 1rem;
    // font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.5;
    display: flex;
    
    // margin-block-start: 1em;
    // margin-block-end: 1em;
    // margin-inline-start: 0px;
    // margin-inline-end: 0px;
    margin-top: 0;
    font-size: 20px;
`

export const FeeDetailsTextContainer = styled.div`

    display: flex;
    font-size: 13px;
    margin-bottom: 8px;
    justify-content: space-between;
` 

export const FeeDetailsTextWrapper = styled.div`

    color: #737478;
    max-width: 50%;
    flex-shrink: 0;
    display: block;
    font-size: 15px;
`
export const FeeDetailsAssetConatiner = styled.div`

    color: #000;
    overflow: hidden;
    flex-grow: 1;
    text-align: right;
    font-size: 13px;
    display: block;
`
export const FeeDetailsAssetText = styled.span`

    white-space: nowrap;
    color: #000;
    overflow: hidden;
    flex-grow: 1;
    text-align: right;
    font-size: 15px;
    color: #adadad;
    font-family: SuisseIntl,Helvetica,Arial,sans-serif;
`

export const ChainSelectorIconWrapper = styled.div`

    height: 20px;
    width: 20px;
    display: flex;
    justify-content: right;
    align-items: right;
`

export const ChainSelectorIcon = styled.img`

    // display: flex;
    // justify-content: center;
    // align-items: center;
    width: ${(props) => props.width};
    height:  ${(props) => props.width};
    // line-height: px;
    border-radius: 50%;

    // float: left;
`
export const ImgWrapper = styled.div`

    padding-top: ${(props) => props.padding};
    padding-bottom: ${(props) => props.paddingBottom};
    display: flex;
    align-items: center;
    justify-content: center;
    float: ${(props => props.float)};
`

export const TokenAmountWrapper = styled.div`

    // width: 100%;
    height: ${(props) => props.height};
    background: rgb(14,22,39);
    border-radius: 15px;
    border: 1px solid rgb(41, 50, 67);
    margin-top: ${(props) => props.marginTop};
    padding-left: 15px;
    padding-right: 20px;
    // margin-bottom: 10px;

`
export const ArrowDownContainer = styled.div`

    position: absolute;
    top: 23.5%;
    left: 46%;
    // color: White;
    background: White;
    background-color:rgb(14,22,39);
    border: 5px solid  rgb(27,32,52);
    border-radius: 10px;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const TokenAmount = styled.div`

    height: 100%;
    font-size: ${(props) => props.size};
    // font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    float: ${(props) => props.float};
    color: White;
    line-height: ${(props) => props.lineHeight};
    margin-left: 5px;
`
export const SummarySectionContainer = styled.div`

    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`

const BridgeFees = ({ back }) => {

    let history = useHistory()

    useEffect(() => {
        if(!localStorage.getItem("provider")) history.push("/") 
    }, [history])

    
    return (

        <>
        <HeaderContainer>
            <BackContainer>
                <BackArrow size={"20px"} onClick={back}/>
            </BackContainer>
            <HeaderText>Fees And Confirm</HeaderText>
            <HeaderRight/>
        </HeaderContainer>
        <BalanceContainer>
            <BalanceWrapper>
                <Balancetext size={"45px"} colour={"#adadad"}>0.000 renBTC</Balancetext>
                <Balancetext size={"17px"} colour={"White"}>= $368.46 </Balancetext>
            </BalanceWrapper>                
        </BalanceContainer>
        <FeesSection>
            <FeeCalculatorContainer>
                <FeeCalculatorWrapper>
                    <FeeCalculatorText>Fee Calculator</FeeCalculatorText>
                </FeeCalculatorWrapper>
                <FeeCalculatorInputContainer>
                    <FeeCalculatorInputWrapper>
                        <FeeCalculatorInputText>
                            Enter An Amount
                        </FeeCalculatorInputText>
                    </FeeCalculatorInputWrapper>
                    <FeeInput>
                        <FeeCalculatorInput/>
                    </FeeInput>
                </FeeCalculatorInputContainer>
            </FeeCalculatorContainer>
            <Spacer/>
            <FeeDetailsHeaderText>Details</FeeDetailsHeaderText>
            <FeeDetailsTextContainer>
                <FeeDetailsTextWrapper>Sending</FeeDetailsTextWrapper>
                <FeeDetailsAssetConatiner>
                    <FeeDetailsAssetText>
                    {/* <ChainSelectorIcon src={BitcoinLogo} width={"20px"}/> */}
                        BTC
                    </FeeDetailsAssetText>
                </FeeDetailsAssetConatiner>
            </FeeDetailsTextContainer>
            <FeeDetailsTextContainer>
                <FeeDetailsTextWrapper>To</FeeDetailsTextWrapper>
                <FeeDetailsAssetConatiner>
                    <FeeDetailsAssetText>Ethereum</FeeDetailsAssetText>
                </FeeDetailsAssetConatiner>
            </FeeDetailsTextContainer>
            <FeeDetailsTextContainer>
                <FeeDetailsTextWrapper>Recipient Address</FeeDetailsTextWrapper>
                <FeeDetailsAssetConatiner>
                    <FeeDetailsAssetText>0x4a013...a90Da9D8B</FeeDetailsAssetText>
                </FeeDetailsAssetConatiner>
            </FeeDetailsTextContainer>
            <Spacer/>
            <FeeDetailsHeaderText>Fees</FeeDetailsHeaderText>
            <FeeDetailsTextContainer>
                <FeeDetailsTextWrapper>RenVM Fee</FeeDetailsTextWrapper>
                <FeeDetailsAssetConatiner>
                    <FeeDetailsAssetText>0.2%</FeeDetailsAssetText>
                </FeeDetailsAssetConatiner>
            </FeeDetailsTextContainer>
            <FeeDetailsTextContainer>
                <FeeDetailsTextWrapper>Bitcoin Miner Fee</FeeDetailsTextWrapper>
                <FeeDetailsAssetConatiner>
                    <FeeDetailsAssetText>0.000064 BTC ($2.86)</FeeDetailsAssetText>
                </FeeDetailsAssetConatiner>
            </FeeDetailsTextContainer>
            <FeeDetailsTextContainer>
                <FeeDetailsTextWrapper>Esti. ETH Fee</FeeDetailsTextWrapper>
                <FeeDetailsAssetConatiner>
                    <FeeDetailsAssetText>0.0058 ETH ($18.5332)</FeeDetailsAssetText>
                </FeeDetailsAssetConatiner>
            </FeeDetailsTextContainer>
        </FeesSection>
        <SummarySectionContainer>
        <TokenAmountWrapper height={"70px"} marginTop={"5px"} marginBottom={"0px"}>
                    <TokenAmount float={"left"} size={"20px"} lineHieght={"70px"}>Receiving</TokenAmount>
                    <TokenAmount float={"right"} size={"20px"} lineHieght={"70px"}>RenBTC</TokenAmount>
                    <ImgWrapper padding={"17px"} float={"right"}>
                        <img src={BitcoinLogo} width={"35px"}></img>
                    </ImgWrapper>
                </TokenAmountWrapper>
                </SummarySectionContainer>
                <MintFormWrapper paddingBottom={"15px"}>
                        <ButtonWrapper width={"94%"}>
                            <HomeConnectButton width={"460px"} left={"70%"} top={"31%"}  onclick={back} height="60px" fontsize="17" colour="rgb(20, 29, 49)" text={"Start Mint"}></HomeConnectButton>
                        </ButtonWrapper>
                </MintFormWrapper>
        

        </>
    )
}

export default BridgeFees;