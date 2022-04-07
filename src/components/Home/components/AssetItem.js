import React from "react"
import styled from "styled-components"
import { currenciesConfig, 
         AllCurrencies,
         supportedLockCurrencies, 
         supportedMintDestinationChains, 
         chainsConfig 
} from "../../../utils/AssetConfigs";
import Grey from "../../assets/icons/empty-circle-icon.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { BrowsersConfig } from "../../../utils/AssetConfigs";
export const CurrencyItemContainer = styled.li`

display: list-item;
    text-align: -webkit-match-parent;
    list-style-type: none;
    padding-left: ${(props) => props.marginL};
    padding-right: ${(props) => props.marginR};

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

export const CurrencyLogo = styled(LazyLoadImage)`

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

const getOptions = (mode) => {
    const options =
      mode === "chain"
        ? Object.values(chainsConfig)
        : Object.values(currenciesConfig);
    return options;
};
  
const createAvailabilityFilter = (available) => (option) => {
    if (!available) {
      return true;
    }
    return available.includes(option.symbol);
};


const AssetItem = ({ assetType, type }) => {

    const available = assetType === "currency" ? supportedLockCurrencies : supportedMintDestinationChains

    const LegacyavailabilityFilter = React.useMemo(
        () => createAvailabilityFilter(available),
        [available]
    );

    const EvmavailabilityFilter = React.useMemo(
        () => createAvailabilityFilter(AllCurrencies),
        []
    );

    if (type === "LEGACY" | type === "EVM") {
        return (

            <>
                {getOptions(assetType)
                .filter(type === "LEGACY" ? LegacyavailabilityFilter : EvmavailabilityFilter)
                .map(({ MainIcon, full }, index) => {
                    return(
                        <CurrencyItemContainer key={index} marginL={type === "EVM" ? "6px" : "0px"} marginR={type === "EVM" ? "6px" : "0px"}>
                            <CurrencyItemWrapper>
                                <CurrencyLogoContainer>
                                    <CurrencyLogo src={MainIcon} effect="blur"></CurrencyLogo>
                                </CurrencyLogoContainer>
                                <CurrencyTitle>{full === "Binance Smart Chain" ? "Binance" : full}</CurrencyTitle>
                            </CurrencyItemWrapper>
                        </CurrencyItemContainer>
                    )})}
                    <CurrencyItemContainer marginL={type === "EVM" ? "6px" : "0px"} marginR={type === "EVM" ? "6px" : "0px"}>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={Grey} effect="blur"></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>+ More soon</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
            </>          
        )
    } else if (type === "BROWSER") {return (
        <>
            {Object.values(BrowsersConfig)
            .map(({ logo, name }, index) => {
                return(
                    <CurrencyItemContainer key={index} marginL={type === "EVM" ? "6px" : "0px"} marginR={type === "EVM" ? "6px" : "0px"}>
                        <CurrencyItemWrapper>
                            <CurrencyLogoContainer>
                                <CurrencyLogo src={logo} effect="blur"></CurrencyLogo>
                            </CurrencyLogoContainer>
                            <CurrencyTitle>{name}</CurrencyTitle>
                        </CurrencyItemWrapper>
                    </CurrencyItemContainer>
                )})}
        </>

    )}
}

export default AssetItem