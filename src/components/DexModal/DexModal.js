import React, { useState, useEffect } from "react";
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
import EthereumLogo from "../assets/ethereum-logo.png"
import {Settings, ChevronDown, ArrowDown, ArrowUpCircle, AlertTriangle} from "react-feather"
import { useWeb3React } from "@web3-react/core";
import UniswapLogoPink from "../assets/logo_pink.svg"
import UniswapLogo from "../assets/logo.svg"


export const TokenAmountWrapper = styled.div`

    // width: 100%;
    height: ${(props) => props.height};
    background: rgb(27,32,52);
    border: 1.5px solid  rgb(27,32,52);
    border-radius: 15px;
    margin-top: ${(props) => props.marginTop};
    padding-left: 15px;
    padding-right: 20px;

    &:hover {

        border: 1.2px solid rgb(61, 70, 87);
    }

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
  left: 10.5%;
  top: 5%;
  color: #adadad;
  font-size: 18px;
`

export const CloseIcon = styled(Settings)`

    position: absolute;
    left: 91%;
    top: 5%;
    cursor: pointer;
    color: White;
    width: 20px;
    color: #adadad;
`

export const UniswapIcon = styled.img`

    position: absolute;
    left: 4%;
    top: 4%;
    cursor: pointer;
    color: White;
    width: 23px;
    color: #adadad;
`

export const ArrowDownContainer = styled.div`

    position: absolute;
    top: ${(props) => props.swapState == 0 ? "44.5%" : "36.5%"};
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

    &:hover {

        cursor: pointer;
    }
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
    margin-top: 70px;
    width: 100%;
    height: 30px;
    font-size: 15px;
    // background: White;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #adadad
    font-weight: bold;
`

export const InfoWrapper = styled.div`

    display: flex;
    padding: 1rem 0;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;
    // background: white;
`   

export const TokenInput = styled.input`

font-family: 'Inter custom',sans-serif;
    width: 100%;
    background: transparent;
    border: none;
    font-size: 30px;
    color: #adadad;
    outline: none;
`

export const TokenSelectButton = styled.div`

font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    background: ${(props) => props.color};
    color: rgb(255, 255, 255);
    cursor: pointer;
    border-radius: 16px;
    box-shadow: rgb(0 0 0 / 8%) 0px 6px 10px;
    outline: none;
    user-select: none;
    border: none;
    font-size: 24px;
    font-weight: 500;
    height: 2.4rem;
    // width: 100%;
    // width: 100%;
    padding: 0px 8px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-left: 12px;
    visibility: visible;
    
`
export const SelectedTokenContainer = styled.div`

    width: 100%;
    display: flex;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
`

export const TokenImg = styled.img`

    width: 24px;
    height: 24px;
    background: radial-gradient(white 50%, rgba(255, 255, 255, 0) calc(75% + 1px), rgba(255, 255, 255, 0) 100%);
    border-radius: 50%;
    box-shadow: white 0px 0px 1px;
    border: 0px solid rgba(255, 255, 255, 0);
    margin-right: 5px;
`

export const SelectedToken = styled.span`

    margin: 0px 0.25rem;
    font-size: 18px;
    width: ${(props) => props.initialWidth ? "initial" : "120px"};
    
`

export const ChevronDownImg = styled.img`

    margin: 0px 0.25rem 0px 0.35rem;
    height: 35%;
`

export const ButtonContents = styled.span`

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 100%;
`



const DexModal = ({ close }) => {

    const [swapState, setSwapState] = useState(0)
    const toggleSwapState = () => setSwapState(!swapState)
    const { active } = useWeb3React()

    useEffect(() => {
        if(!localStorage.getItem("provider")) window.location.href = "/" 
      }, [])
    


    return (

        <>
        <StyledContainer>
            <BridgeModalContainer>
            <UniswapIcon src={UniswapLogoPink}></UniswapIcon>
            <ErrorText>Swap</ErrorText>
                <CloseIcon></CloseIcon>
                <ArrowDownContainer onClick={toggleSwapState} swapState={swapState}>
                    <ArrowDown color={"White"} size={"15px"}/>
                </ArrowDownContainer>
            <TokenAmountWrapper height={swapState == 0 ? "100px" : "70px"} marginTop={"45px"} marginBottom={"0px"} borderTrue={true}>
                    <InfoWrapper>
                        <TokenInput placeholder={"0.0"}></TokenInput>
                        <TokenSelectButton color={swapState == 0 ? "rgb(57,62,82)" : "rgb(13,94,209)"} onClick={close}>
                            <ButtonContents>
                                {swapState == 0 ?
                                <SelectedTokenContainer>
                                    <TokenImg src={EthereumLogo}></TokenImg>
                                    <SelectedToken initialWidth={true}>ETH</SelectedToken>
                                </SelectedTokenContainer> :
                                <SelectedTokenContainer>
                                    <SelectedToken initialWidth={false}>Select a token</SelectedToken>
                                </SelectedTokenContainer>}
                                <ChevronDown size={"25px"}></ChevronDown>
                            </ButtonContents>
                        </TokenSelectButton>
                    </InfoWrapper>
                </TokenAmountWrapper>
                <TokenAmountWrapper height={swapState == 1 ? "100px" : "70px"} marginTop={"7px"} marginBottom={"0px"} borderTrue={false}>
                <InfoWrapper>
                        <TokenInput placeholder={"0.0"}></TokenInput>
                        <TokenSelectButton color={swapState == 1 ? "rgb(57,62,82)" : "rgb(13,94,209)"} onClick={close}>
                            <ButtonContents>
                            {swapState == 1 ?
                                <SelectedTokenContainer>
                                    <TokenImg src={EthereumLogo}></TokenImg>
                                    <SelectedToken initialWidth={true}>ETH</SelectedToken>
                                </SelectedTokenContainer> :
                                <SelectedTokenContainer>
                                    <SelectedToken initialWidth={false}>Select a token</SelectedToken>
                                </SelectedTokenContainer>}
                                <ChevronDown size={"25px"}></ChevronDown>
                            </ButtonContents>
                        </TokenSelectButton>
                    </InfoWrapper>
                </TokenAmountWrapper>
                <ButtonWrapper>
                    <Button>Enter An Amount</Button>
                </ButtonWrapper>
            </BridgeModalContainer>
            <DisclaimerContainer>Interfacing with the <div>{" "}</div><div style={{"color": "rgb(13,94,209)", "margin-left": "4px", "fontWeight": "bold"}}> Uniswap protocol</div><img style={{"margin-left": "4px", "margin-top": "0px"}} src={UniswapLogo} width={"15px"}></img></DisclaimerContainer>
        </StyledContainer>
        </>
    )
}

export default DexModal;