import React from "react"
import styled from "styled-components"

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

margin-top: 124px;
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
`

export const Title = styled.p`

    font-size: 45px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 20px;
    text-align: center;
    color: White;
`

export const SubTitle = styled.div`

font-size: 22px;
color: #adadad;
text-align: center;
line-height: 1.5;

a {
    text-decoration: none;
    color: rgb(13,94,209);
}
`


const IsMobilePage = () => {

    return (
        <PageContainer>
            <NotFoundContainer>
                <NotFoundWrapper>
                    <Header>Mobile Device Detected</Header>
                    <Title>RenBridge is not supported on Mobile</Title>
                    <SubTitle>For security reasons RenBridge V3 can not be used on mobile or tablet devices. Please open this
                        application on a desktop or personal computer to continue
                    </SubTitle>
                </NotFoundWrapper>
            </NotFoundContainer>
        </PageContainer>
    )
}

export default IsMobilePage