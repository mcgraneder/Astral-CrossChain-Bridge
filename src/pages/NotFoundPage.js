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

font-size: 300px;
font-weight: bold;
    line-height: 1;
    color: White;
    text-align: center;
`

export const Title = styled.p`

    font-size: 52px;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 20px;
    text-align: center;
    color: White;
`

export const SubTitle = styled.p`

font-size: 22px;
color: #adadad;
text-align: center;
line-height: 1.5;

a {
    text-decoration: none;
    color: rgb(13,94,209);
}
`


const NotFoundPage = () => {

    return (
        <PageContainer>
            <NotFoundContainer>
                <NotFoundWrapper>
                    <Header>404</Header>
                    <Title>We couldn't find this page</Title>
                    <SubTitle>Try visiting <a href="https://bridge.renproject.io/">RenBridge</a> - or <a href="https://bridge.renproject.io/">get in touch</a> if you believe there is an issue</SubTitle>
                </NotFoundWrapper>
            </NotFoundContainer>
        </PageContainer>
    )
}

export default NotFoundPage