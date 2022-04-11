import React from "react"
import styled from "styled-components"
import NoMobile from "../components/assets/noMobile.svg"
import RenLogo1 from "../components/assets/icons/ren-logo-3f.svg"
import RenLogo4 from "../components/assets/icons/renvm-logo.svg"

export const PageContainer = styled.div`

font-family: SuisseIntl,Helvetica,Arial,sans-serif;
    padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh !important;
`
const NotFoundContainer = styled.div`

margin-top: -1px;
min-height: calc(100vh - 137px);
padding-top: 1px;
display: block;
`

export const NotFoundWrapper = styled.div`

margin-top: 20px;
max-width: 960px;
padding-left: 24px;
    padding-right: 24px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
`

export const Header = styled.h1`

font-size: 100px;
font-weight: bold;
    line-height: 1;
    color: White;
    text-align: center;

    @media(max-width: 450px) {

        font-size: 40px;
      }

      @media(max-width: 450px) {

        font-size: 40px;
      }

`

export const Title = styled.p`

    font-size: 45px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 20px;
    text-align: center;
    color: White;

    @media(max-width: 450px) {

        font-size: 23px;
    }

    @media(max-width: 450px) {

        font-size: 23px;
    }
`

export const SubTitle = styled.div`

font-size: 22px;
color: #adadad;
text-align: justify;
line-height: 1.5;


a {
    text-decoration: none;
    color: rgb(13,94,209);
}

@media(max-width: 450px) {

    margin-top: 50px;
    font-size: 16px;
}

@media(max-width: 450px) {

    margin-top: 50px;
    font-size: 16px;
}
`

export const WarningContainer = styled.div`

    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const NoMobileIcon = styled.img`

    // color: red;
    // background-color: red;
    // background: red;
    stroke-width: 0.01;
`

export const FooterContainer = styled.div`

    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    @media(max-width: 450px) {

        max-width: 200px;
       align-items: left;
       justify-content: left;
 }

 @media(max-width: 450px) {

    max-width: 200px;
   align-items: left;
   justify-content: left;
}
`

export const LeftIconContainer = styled.span`
    display: inline-flex;
    font-size: 40px;
    align-items: center;
    // border-right: 2px solid White;
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
    font-size: 40px;
    align-items: center;
    padding-top: 2px;
    padding-left: 25px;
`


const IsMobilePage = () => {

    
    return (
        <PageContainer>
            <FooterContainer>
                        <LeftIconContainer>
                            <Icon src={RenLogo1}/>
                        </LeftIconContainer>
                    </FooterContainer>
                <NotFoundWrapper>
                    <WarningContainer>
                        <NoMobileIcon src={NoMobile} width={"150px"} />
                    </WarningContainer>
                    <Header>Mobile Device Detected</Header>
                    <Title>RenBridge is not supported on Mobile</Title>
                    <SubTitle>For security reasons RenBridge V3 can not be used on mobile or tablet devices. Please open this
                        application on a desktop or personal computer to continue
                    </SubTitle>
                </NotFoundWrapper>
        </PageContainer>
    )
}

export default IsMobilePage