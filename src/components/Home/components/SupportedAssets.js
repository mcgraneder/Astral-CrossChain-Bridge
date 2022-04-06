import React from "react"
import styled from "styled-components"
import Bitcoin from "../../assets/icons/btc-icon.svg"
import BitcoinCash from "../../assets/icons/bch-icon.svg"
import ZCash from "../../assets/icons/zec-icon.svg"
import Doge from "../../assets/icons/doge-icon.svg"
import FilCoin from "../../assets/icons/fil-icon.svg"
import DigiByte from "../../assets/icons/dgb-icon.svg"
import Luna from "../../assets/icons/luna-icon.svg"
import Grey from "../../assets/icons/empty-circle-icon.svg"

import Ethereum from "../../assets/icons/ethereum-circle-icon.svg"
import Ploygon from "../../assets/icons/polygon-circle-icon.svg"
import Fantom from "../../assets/icons/fantom-circle-icon.svg"
import Avalanche from "../../assets/icons/avalanche-chain-circle-icon.svg"
import Solana from "../../assets/icons/bch-icon.svg"
import Arbitrum from "../../assets/icons/arbitrum-circle.svg"
import BinanceSmartChain from "../../assets/icons/binancesmartchain-circle-icon.svg"


export const SupportedAssetsContainer = styled.div`


    max-width: 960px;
    // width: 100%;
    // display: block;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
`

export const SupportedAssetsWrapper = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: stretch;
    margin-top: 470px;
`

export const CurrencysContainer = styled.div`

    flex-grow: 5;
    border-right: ${(props) => props.border ? "2px solid #c1c2c4" : "none"};
    padding-right: ${(props) => props.paddingR};
    padding-left: ${(props) => props.paddingL};
    display: block;
    // max-width: 430px;
`

export const CurrenciesHeader = styled.h2`

    text-align: center;
    font-weight: bold;
    color: #adadad;
    display: block;
    font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    color: White;
    font-size: 18px;
`

export const CurrenciesList = styled.ul`

justify-content: space-between;
    margin: 12px auto;
    display: flex;
    flex-wrap: wrap;
    max-width: 40vw;
    padding: 0;
    list-style-type: none;
`
export const CurrencyItemContainer = styled.li`

padding: 0;
display: list-item;
    text-align: -webkit-match-parent;
    list-style-type: none;
`
export const CurrencyItemWrapper = styled.span`

display: inline-flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: -webkit-match-parent;
    list-style-type: none;
`
export const CurrencyLogoContainer = styled.span`

    height: 66px;
    width: 70px;
    font-size: 66px;
    line-height: 1;
    text-align: -webkit-match-parent;
    list-style-type: none;
`

export const CurrencyLogo = styled.img`

    fill: currentColor;
    width: 65px;
    height: 65px;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    pointer-events: none;
`

export const CurrencyTitle = styled.p`

color: #adadad;
font-size: 14px;
margin-top: 12px;
text-align: left;
font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

const SupportedAssets = () => {

    return (

        <SupportedAssetsContainer>
            <SupportedAssetsWrapper>
                <CurrencysContainer paddingR={"42px"} paddingL={"0px"} border={true}>
                    <CurrenciesHeader>Supported Assets</CurrenciesHeader>
                    <CurrenciesList>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Bitcoin}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Bitcoin</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={BitcoinCash}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Bitcoin Cash</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={ZCash}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Zcash</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={DigiByte}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>DigiByte</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={FilCoin}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>FilCoin</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Luna}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Luna</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Doge}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Doge Coin</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Grey}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>+ More soon</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                </CurrenciesList>
                </CurrencysContainer>

                <CurrencysContainer paddingR={"0px"} paddingL={"42px"} border={false}>
                    <CurrenciesHeader>Supported Chains</CurrenciesHeader>
                    <CurrenciesList>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Ethereum}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Ethereum</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Ploygon}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Polygon (Matic)</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Fantom}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Fantom</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Avalanche}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Avalanche</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Solana}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Solana</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Arbitrum}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Arbitrum</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={BinanceSmartChain}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>Binance Smart Chain</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                    <CurrencyItemContainer>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Grey}></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>+ More soon</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                </CurrenciesList>
                </CurrencysContainer>
                </SupportedAssetsWrapper>
        </SupportedAssetsContainer>


    )
}

export default SupportedAssets