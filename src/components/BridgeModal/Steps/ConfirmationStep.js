import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import HomeConnectButton from "../../Home/HomeConnectButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-feather"
import { useWeb3React } from "@web3-react/core";
import BitcoinLogo from "../../assets/Bitcoin.svg"
import BTC from "../../assets/BTC.svg"
import BTC2 from "../../assets/BTC2.svg"
import {X, CheckCircle, Copy, ExternalLink} from "react-feather"
import EthereumLogo from "../../assets/Ethereum.svg"
import { 
    BalanceWrapper, 
    MintFormWrapper, 
    ButtonWrapper, 
    Balancetext
} from "../BridgeModalStyles";

export const BalanceContainer = styled.div`

    margin-top: 10px;
    // margin-bottom: 5px;
    margin-left: 20px;
    margin-right: 20px;
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
    font-size: 20px;
`
export const HeaderRight = styled.div`

    min-width: 72px;
    justify-self: flex-end;
    dislay: block;
`

export const GatewaySection = styled.div`
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    // display: block;
`

export const GatewaySectionWrapper = styled.div`

    position: relative;
    display: block;
`
export const AssetContainer = styled.div`

    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: center;
`
export const AssetLogoContainer = styled.div`

    font-size: 48px;
    color: rgb(255, 153, 0);
    display: inline-flex;
    position: relative;
`
export const AssetLogoWrapper = styled.div`

width: 75px;
    height: 75px;
    transform: rotate(0deg);
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    display: inline-block;
`

export const Asset = styled.img`

// display: block;
overflow: hidden;
width: 75px;
`
export const Asset2 = styled.img`

// position: absolute;
display: flex;
left: 0%;
top: 50%;
`
export const AssetTitleContainer = styled.div`
margin-bottom: 20px;
display: block;
`
export const AssetTitle = styled.div`
font-size: 32px;
text-align: center;
`
export const AssetTitleText = styled.span`
font-size: 32px;
text-align: center;
`
export const AssetSubTitle = styled.div`
color: #adadad;
font-family: SuisseIntl,Helvetica,Arial,sans-serif;
text-align: center;
font-size: 0.9rem;
`
export const AssetSubTitleText = styled.span`
color: #adadad;
text-align: center;
font-family: SuisseIntl,Helvetica,Arial,sans-serif;
font-size: 0.9rem;
`

export const GatewayBoxContainer = styled.div`

    // background: White;
    display: flex;
    justify-content: center;
    align-items: stretch;
    max-width: 420px;
    height: 45px;
    margin-left: 10px;
    margin-bottom: 20px;
`
export const GatewayAddressContainer = styled.div`

color: #006FE8;
    display: flex;
    flex-grow: 2;
    font-size: 13px;
    max-width: 330px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius: 20px;
    justify-content: center;
    background:  rgb(27,32,52);
    border: 1px solid  rgb(47,52,72);
`

export const GatewayAddressTextContainer = styled.div`

max-width: 100%;
    padding-left: 9px;
    padding-right: 9px;
    display: block;
    color: #006FE8;
    display: flex;
    flex-grow: 2;
    font-size: 13px;
    max-width: 300px;
    align-items: center;
    margin-right: 10px;
    border-radius: 20px;
    justify-content: center;
    background:  rgb(27,32,52);
`

export const GatewayAddressTextWrapper = styled.div`

display: block;
    max-width: 100%;
`
export const Div = styled.div`

display: block
color: #006FE8;
    display: flex;
    flex-grow: 2;
    font-size: 13px;
    max-width: 285px;
    align-items: center;
    margin-right: 10px;
    border-radius: 20px;
    justify-content: center;
    background:  rgb(27,32,52);
`
export const GatewayAddressText = styled.div`
// display: none;
    overflow: hidden;
    user-select: all;
    padding-left: 15px;
    text-overflow: ellipsis;
    color: black;
    color: #006FE8;
    font-size: 15px;
    font-family: SuisseIntl,Helvetica,Arial,sans-serif;
`

export const CopyContainer = styled.div`

flex-grow: 0;
    flex-shrink: 0;
    display: block;
    
`
export const CopyButtonWrapper = styled.div`

color: #006FE8;
    font-size: 14px;
    background:  rgb(27,32,52);
    border: 1px solid  rgb(47,52,72);
    padding: 3px;
    flex: 0 0 auto;
    color: rgba(0, 0, 0, 0.54);
    padding: 7px;
    overflow: visible;
    font-size: 1.1rem;
    text-align: center;
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 50%;
    color: inherit;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    padding: 0;
    position: relative;
    
`

export const CopyLogoContainer = styled.span`
width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
    padding: 10px;
`

export const CopyLogo = styled(Copy)`

    	// fill: currentColor;
    width: 1em;
    color: #006FE8;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    pointer-events: none;
`
export const LinkLogo = styled(ExternalLink)`

    	// fill: currentColor;
    width: 1em;
    color: #006FE8;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    pointer-events: none;
`

export const Spacer = styled.hr`

    position: absolute;
    margin-top: 15px;
    // margin-left: 20px;
    // margin-right: 20px;
    border: none;
    width: 100%;
    height: 1px;
    left: 0;
    flex-shrink: 0;
    background-color: rgb(47,52,72);
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

export const DetailsSection = styled.div`

    background:  rgb(27,32,52);
    border: 1px solid  rgb(47,52,72);
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 15px;
    margin-top: 40px;
    margin-bottom: 10px;
`
export const FeesSection = styled.div`
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    // display: block;
`

const ConfirmationStep = ({ back, balance }) => {

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
            <HeaderText>Gateway Address</HeaderText>
            <HeaderRight/>
        </HeaderContainer>
        <GatewaySection>
            <GatewaySectionWrapper>
                <AssetContainer>
                    <AssetLogoContainer>
                        <AssetLogoWrapper>
                           
                            <Asset src={BTC2}/>
                        </AssetLogoWrapper>
                    </AssetLogoContainer>
                </AssetContainer>
                <AssetTitleContainer>
                    <AssetTitle>
                        <AssetTitleText>
                            Send BTC to
                        </AssetTitleText>
                    </AssetTitle>
                    <AssetSubTitle>
                        Minimum amount:
                        <AssetSubTitleText>
                            0.000128 BTC
                        </AssetSubTitleText>
                    </AssetSubTitle>
                </AssetTitleContainer>
                <GatewayBoxContainer>
                <GatewayAddressContainer>
                        <GatewayAddressTextContainer>
                            <GatewayAddressTextWrapper>
                                <Div>
                                <GatewayAddressText>
                                3K2GeVWqxAUUzufRmQH4kRrBzdQSTnWuXN
                                </GatewayAddressText>
                                </Div>
                            </GatewayAddressTextWrapper>
                        </GatewayAddressTextContainer>
                    </GatewayAddressContainer>
                    <CopyContainer>
                    <CopyButtonWrapper>
                        <CopyLogoContainer>
                            <CopyLogo size={"15px"}></CopyLogo>
                        </CopyLogoContainer>
                    </CopyButtonWrapper>
                </CopyContainer>
                </GatewayBoxContainer>
                <GatewayBoxContainer>
                <GatewayAddressContainer>
                        <GatewayAddressTextContainer>
                            <GatewayAddressTextWrapper>
                                <Div>
                                <GatewayAddressText>
                                <span style={{"color": "#adadad"}}>Recipient Address:</span> 0x13480...63A94113
                                </GatewayAddressText>
                                </Div>
                            </GatewayAddressTextWrapper>
                        </GatewayAddressTextContainer>
                    </GatewayAddressContainer>
                    <CopyContainer>
                    <CopyButtonWrapper>
                        <CopyLogoContainer>
                            <LinkLogo size={"10px"}></LinkLogo>
                        </CopyLogoContainer>
                    </CopyButtonWrapper>
                </CopyContainer>
                </GatewayBoxContainer>
            </GatewaySectionWrapper>
        </GatewaySection>
        <Spacer/>
        <FeesSection>
            <DetailsSection>
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
            <FeeDetailsTextContainer>
                <FeeDetailsTextWrapper>Recipient Address</FeeDetailsTextWrapper>
                <FeeDetailsAssetConatiner>
                    <FeeDetailsAssetText>0x4a013...a90Da9D8B</FeeDetailsAssetText>
                </FeeDetailsAssetConatiner>
            </FeeDetailsTextContainer>
            </DetailsSection>
            </FeesSection>
        </>
    )
}

export default ConfirmationStep;