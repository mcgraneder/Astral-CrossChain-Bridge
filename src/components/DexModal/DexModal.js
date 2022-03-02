import React, { useState } from "react";
import styled from "styled-components";
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
         MintFormContainer, 
         MintToggleButton, 
         ReleaseToggleButton, 
         MinFormToggleButtonContainer, 
         MintFormTextWrapper2, 
         MintFormText2,
         Balancetext
} from "./DexModalStyles";
import {Settings, ChevronDown, ArrowDown, ArrowUpCircle, AlertTriangle} from "react-feather"
import { useWeb3React } from "@web3-react/core";


export const TokenAmountWrapper = styled.div`

    // width: 100%;
    height: ${(props) => props.height};
    background: rgb(27,32,52);
    border-radius: 15px;
    border: ${(props) => props.borderTrue ? "1px solid rgb(41, 50, 67)" : "none"};
    margin-top: ${(props) => props.marginTop};
    padding-left: 15px;
    padding-right: 20px;
    // margin-bottom: 10px;
    display: flex;
    justify-content: center;
    // align-items: center;

`

export const TokenAmount = styled.div`

    font-family: 'Open Sans', sans-serif;
    height: 100%;
    font-size: ${(props) => props.size};
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    float: ${(props) => props.float};
    color: White;
    line-height: ${(props) => props.lineHeight};
    margin-left: 5px;
`

export const ImgWrapper = styled.div`

    padding-top: ${(props) => props.padding};
    padding-bottom: ${(props) => props.paddingBottom};
    display: flex;
    align-items: center;
    justify-content: center;
    float: ${(props => props.float)};
`

export const ErrorText = styled.div`

  position: absolute;
  left: 4%;
  top: 4%;
  color: #adadad;
  font-size: 18px;
`

export const CloseIcon = styled(Settings)`

    position: absolute;
    left: 91%;
    top: 4%;
    cursor: pointer;
    color: White;
    width: 20px;
    color: #adadad;
`

export const ArrowDownContainer = styled.div`

    position: absolute;
    top: 44.5%;
    left: 46.3%;
    // color: White;
    background: White;
    background-color: rgb(27,32,52);
    border: 5px solid  rgb(14,22,39);
    border-radius: 10px;
    height: 23px;
    width: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Button = styled.div`

  height: 55px;
  width: 100%;
  background: rgb(27,32,52);
  border-radius: 20px;
  text-align: center;
  line-height: 55px;
  font-size: 18px;
  font-weight: bold;
  color: rgb(67,92,112);
  margin-bottom: 5px;

  &:hover {

    cursor: pointer;
    background: rgb(13,94,209);
}
`

export const ButtonWrapper = styled.div`

font-family: 'Open Sans', sans-serif;
   margin-top: 30px;
   margin-bottom: 10px;
    height: 30px;
    // margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

` 
export const DisclaimerContainer = styled.div`

    font-family: 'Open Sans', sans-serif;
    margin-top: 60px;
    width: 100%;
    height: 30px;
    font-size: 14px;
    // background: White;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #adadad
`


export const TokenInput = styled.input`

    height: 30px;
    width: 100%;
    background: transparent;
    border: none;
    font-size: 30px;
    color: #adadad;
    // background: White;
    margin-top: 10px;
    input[type=any]::-webkit-border { 
    -webkit-appearance: none; 
    }

    &::focus {

        border: none;
    }

    &::active {

        border: none;
    }
    
`


const DexModal = () => {

    const { active } = useWeb3React()


    return (

        <>
        <StyledContainer>
            <BridgeModalContainer>
            <ErrorText>Swap</ErrorText>
                <CloseIcon></CloseIcon>
                <ArrowDownContainer>
                    <ArrowDown color={"White"} size={"15px"}/>
                </ArrowDownContainer>
            <TokenAmountWrapper height={"100px"} marginTop={"40px"} marginBottom={"0px"} borderTrue={true}>
                   <TokenInput></TokenInput>
                </TokenAmountWrapper>
                <TokenAmountWrapper height={"70px"} marginTop={"7px"} marginBottom={"0px"} borderTrue={false}>
                    {/* <TokenAmount float={"left"} size={"20px"} lineHieght={"70px"}>{amount}</TokenAmount>
                    <TokenAmount float={"right"} size={"20px"} lineHieght={"70px"}>RenBTC</TokenAmount>
                    <ImgWrapper padding={"17px"} float={"right"}>
                        <img src={Bitcoin} width={"35px"}></img>
                    </ImgWrapper> */}
                </TokenAmountWrapper>
                {/* <TokenAmountWrapper height={"58px"} marginTop={"20px"} marginBottom={"0px"} borderTrue={false}>
                   
                </TokenAmountWrapper> */}
                <ButtonWrapper>
                    <Button>Enter An Amount</Button>
                </ButtonWrapper>
                {/* <DisclaimerContainer>Hello</DisclaimerContainer> */}
            </BridgeModalContainer>
            <DisclaimerContainer>Interfacing with the <div>{" "}</div><div style={{"color": "rgb(13,94,209)", "margin-left": "4px"}}> Uniswap protocl</div></DisclaimerContainer>
        </StyledContainer>
        </>
    )
}

export default DexModal;