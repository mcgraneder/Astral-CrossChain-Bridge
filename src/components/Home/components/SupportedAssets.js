import React from "react"
import styled from "styled-components"
import AssetItem from "./AssetItem"

export const SupportedAssetsContainer = styled.div`


    max-width: 960px;
    // width: 100%;
    display: flex;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-left: 24px;
    padding-right: 24px;
`

export const SupportedAssetsWrapper = styled.div`

    display: flex;
    // flex-direction: row;
    // justify-content: stretch;
    margin-top: 50px;
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

const SupportedAssets = () => {

    return (

        <SupportedAssetsContainer>
            <SupportedAssetsWrapper>
                <CurrencysContainer paddingR={"42px"} paddingL={"0px"} border={true}>
                    <CurrenciesHeader>Supported Assets</CurrenciesHeader>
                    <CurrenciesList>
                        <AssetItem assetType={"currency"}/>
                    </CurrenciesList>
                </CurrencysContainer>

                <CurrencysContainer paddingR={"0px"} paddingL={"42px"} border={false}>
                    <CurrenciesHeader>Supported Chains</CurrenciesHeader>
                    <CurrenciesList>
                        <AssetItem assetType={"chain"}/>
                    </CurrenciesList>
                </CurrencysContainer>
                </SupportedAssetsWrapper>
        </SupportedAssetsContainer>
    )
}

export default SupportedAssets