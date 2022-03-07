import React, { useState } from "react";
import logo1 from "../assets/metamask.svg"
import Loader from "react-loader-spinner";
import { 
    FormWrapper,
    Backdrop,
    TitleContainer,
    ModalTitle,
    ModalTextWrapper,
    ModalText,
    ButtonWrapper,
    VerifyButton,
    IconWrapper,
    Icon,
    TextContainer,
    IconText,
    IconContainer,
    IconContents,
    IconContents2,
    SeperatorText
 } from "./AccountsChangeModalStyles";


const AccountsChangeModal = (props) => {


    const [loading, setLoading] = useState(false);
    const [text, setText] = useState("Link Your Wallet To Proceed")
   
    return (

        <>
         <Backdrop visible={!true}></Backdrop>
            <FormWrapper visible={!true}>
            <IconContents className="fa-stack-1x text-primary">1</IconContents>
            <IconContents2 className="fa-stack-1x text-primary">2</IconContents2>
                <TitleContainer>
                    <img src={logo1} width={30} style={{"paddingRight": "10px", "paddingLeft": "10px"}} />
                    <ModalTitle>{text}</ModalTitle>
                </TitleContainer>
                <ModalTextWrapper>
                    <ModalText>This Wallet is not registered with this account. In order to continue using this DApp Either switch back to your other wallet or add this wallet to your account by clicking the "VERIFY" button below to proove your ownership</ModalText>
                </ModalTextWrapper>
                <IconWrapper>
                    <IconContainer>
                        <Icon>
                        </Icon>
                        <TextContainer>
                            <IconText colour={"rgb(221,221,229);"} size={18} bold={"bold"}>Switch back to other wallet</IconText>
                            <IconText size={14}>Switch back to other wallet to continue trading</IconText>
                        </TextContainer>   
                    </IconContainer>  
                </IconWrapper>
                <SeperatorText size={17} bold={"bold"}>OR</SeperatorText>
                <IconWrapper style={{"paddingBottom": "50px"}}>
                    <IconContainer>
                        <Icon>
                        </Icon>
                        <TextContainer>
                            <IconText colour={"rgb(221,221,229);"} size={18} bold={"bold"}>Verify your new wallet</IconText>
                            <IconText size={14}>To use this wallet confirm that you are the owner</IconText>
                        </TextContainer>   
                    </IconContainer>  
                </IconWrapper>
                    {loading ?  <ButtonWrapper><Loader type="ThreeDots" color={`rgb(77, 102, 235)`} height={30} width={70}/></ButtonWrapper> : <VerifyButton>Verify Wallet</VerifyButton>}        
            </FormWrapper>
        </>
       
        
    )
}

export default AccountsChangeModal;