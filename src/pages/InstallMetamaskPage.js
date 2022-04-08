import React, { useEffect } from "react"
import styled from "styled-components"
import RenLogo1 from "../components/assets/icons/ren-logo-3f.svg"
import RenLogo4 from "../components/assets/icons/renvm-logo.svg"
import { ArrowLeft } from "react-feather"
import { useHistory } from "react-router-dom"
import AssetItem from "../components/Home/components/AssetItem"
import { ButtonWrapper } from "../components/Home/HomeStyles"
import Metamask from "../components/assets/metamask.svg"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const PageContainer = styled.div`

font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 100px;
`
export const PageWrapper = styled.div`

// margin: 0;
    // box-sizing: border-box;
    // width: 100%;
    // display: flex;
    // flex-wrap: wrap;
`

export const AboutPageContentsConainer = styled.div`

margin-top: -1px;
    min-height: calc(100vh - 137px);
    padding-top: 1px;
    display: block;
`
export const AboutPageContentsWrapper = styled.div`
    margin-top: 45px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 1000px;
    padding-left: 24px;
    padding-right: 24px;

`

export const Title = styled.h1`

font-size: 27px;
margin-bottom: 5px;
margin-top: 20px;
font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    font-weight: bold;
    line-height: 1.2;
    display: block;
    color: White;
`
export const Text = styled.p`

    margin-bottom: ${(props) => props.marginB};
    font-size: 17px;
    font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #adadad;

    a {
        text-decoration: none;
        color: rgb(13,94,209);
    }

    span {
        text-decoration: none;
        color: orange;
    }
`

export const FooterContainer = styled.div`

    display: flex;
    margin-top: 35px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`

export const LeftIconContainer = styled.span`
    display: inline-flex;
    font-size: 70px;
    align-items: center;
    border-right: 2px solid White;
    padding-right: 25px;
`
export const Icon = styled.img`

width: 2.32692em;
font-size: inherit;
fill: currentColor;
    height: 1em;
    display: inline-block;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
    pointer-events: none;
    overflow: hidden;

`

export const RightIconContainer = styled.span`

    display: inline-flex;
    font-size: 58px;
    align-items: center;
    padding-top: 2px;
    padding-left: 25px;
`

export const HeaderContainer = styled.div`

    display: flex;
    align-items: center;
    padding-bottom: 25px;
    justify-content: space-between;
`
export const BackContainer = styled.div`

    min-width: 72px;
    display: flex;
    justify-content: left;

    &:hover {
        cursor: pointer;
    }
`

export const BackArrow = styled(ArrowLeft)`

    font-size: 1.125rem;
    lex: 0 0 auto;
    color: White;
    margin-right: 8px;

`

export const HeaderText = styled.div`

    width: 100%;
    text-align: center;
    display: flex;
    justify-self: center;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    color: White;
    // line-height: 25px;
`

export const SupportedAssetsContainer = styled.div`


    max-width: ${(props) => props.maxWidth};
    // width: 100%;
    // display: flex;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 24px;
    
`

export const SupportedAssetsWrapper = styled.div`

    display: flex;
    // flex-direction: row;
    // justify-content: stretch;
    margin-top: 35px;
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
    // max-width: 40vw;
    padding: 0;
    list-style-type: none;
`

export const NavButton2 = styled.div`

font-family: 'Open Sans', sans-serif;
    
    display: inline;
    line-style: none;
    background: rgb(13,94,209);
    width: ${(props) => props.width};
    border-radius: 18px;
    height: ${(props) => props.height};
    text-align: center;
    line-height: ${(props) => props.height};
    color:  White;
    margin-left: ${(props) => props.active ? "7px" : "0px"};
    margin-right: ${(props) => props.active ? "7px" : "0px"};
    // font-weight: bold;
    font-size: 16px;
    text-decoration: none;

    // border: 1px solid rgb(3,184,189);

    &:hover {

        cursor: pointer;
        background: rgb(0,80,195);
        // color: rgb(23,42,66);
       
    }

`

export const MetamaskContainer = styled.div`

    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const MetamaskLogo = styled(LazyLoadImage)`

    height: 150px;
    width: 150px;
`


const HomeConnectButton = ({ height, width, text, click}) => {


    return (

        <>
            <NavButton2  width={width} height={height} color={"rgb(23,42,66)"} onClick={click} target="blank">{text}</NavButton2>
        </>
    )
}
const InstallMetamaskPage = () => {

    let history = useHistory()

    useEffect(() => {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        history.push("/")
      } 
    }, [history])

    const Back = () => {
        window.open("https://metamask.io/", "_blank", "width=800,height=900")
    }

    return (
        <PageContainer>
            <AboutPageContentsConainer>
                <AboutPageContentsWrapper>
                <FooterContainer>
                        <LeftIconContainer>
                            <Icon src={RenLogo1}/>
                        </LeftIconContainer>
                        <RightIconContainer>
                            <Icon src={RenLogo4}/>
                        </RightIconContainer>
                    </FooterContainer>
                    <Title>1) Unsupported Browser</Title>
                    <Text marginB={"23px"}>
                      If you have been redirected to this page it can be for two possibilities. The first is that you are using this
                      app from an unsupported browser that does not support the Metamask wallt extension. If your current browser 
                      is not included in the list of supported browsers below, please change and use this app on any of the browsers 
                      provider below.
                    </Text>
                    <SupportedAssetsContainer maxWidth={"700px"}>
            <SupportedAssetsWrapper>
                <CurrencysContainer paddingR={"0px"} paddingL={"0px"}>
                    <CurrenciesList>
                        <AssetItem assetType={"browser"} type={"BROWSER"} />
                    </CurrenciesList>
                </CurrencysContainer>
            </SupportedAssetsWrapper>
        </SupportedAssetsContainer>
                    <Title>2) Install Metamask Wallet Extension</Title>
                    <Text marginB={"10px"}>
                        If you are using this app with a supported browser then you have been redirected to this page because you dont
                        have Metamask installed. In order to be able to use his app to transfer and recieve cryptocurrencies you need
                        the Metamask wallet. You can get it from the link below!
                    </Text>
                    <MetamaskContainer>
                      <MetamaskLogo src={Metamask} effect={"blur"}/>
                    </MetamaskContainer>
                    <ButtonWrapper>
                    <HomeConnectButton width={"500px"} left={"82%"} top={"31%"} close={Back} click={Back} height="50px" fontsize="20" colour="rgb(20, 29, 49)" text={"Get Metamask Wallet"}></HomeConnectButton>
                </ButtonWrapper>
                </AboutPageContentsWrapper>
            </AboutPageContentsConainer>
        </PageContainer>
    )
}

export default InstallMetamaskPage