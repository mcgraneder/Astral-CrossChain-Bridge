import React from "react";
import styled, { css, keyframes } from "styled-components";
import Circle from "../assets/blue-loader.svg"
import { TitleContainer } from "../Web3Modal/Web3ModalStyles";
// import { walletconnect } from "web3modal/dist/providers/connectors";
import {X, ChevronDown, ArrowDown, ArrowUpCircle, AlertTriangle} from "react-feather"
import metaMask from "../assets/metamask.png"
import ConnectWalletButton from "../Buttons/ConnectWalletButton/ConnjectWalletButton";
import Bitcoin from "../assets/Bitcoin.svg"
import Dollar from "../assets/dollar.png"
export const FormWrapper = styled.div`


    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 380px;
    // height: 30px;
    opacity: 0;
    background-color: rgb(27,32,52);
    padding: 28px 15px;
    border: 1.5px solid rgb(41, 50, 67);
    border-radius: 20px;
    pointer-events: none;
    transition: ${(props) => props.trueFade ? "opacity 0.3s ease-in-out !important;": "none"};
    ${(props) => props.visible && css`
        z-index: 10000;
        opacity: 1;
        pointer-events: all;
        transition: ${(props) => props.trueFade ? "opacity 0.3s ease-in-out !important;": "none"};
    `}

`
// <ArrowUpCircle strokeWidth={0.5} size={inline ? '40px' : '90px'} color={theme.primary1} />
export const CloseIcon = styled(X)`

    position: absolute;
    left: 90%;
    top: 5%;
    cursor: pointer;
    color: White;
`



export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    backdrop-filter: blur(3px);
    background: rgba(2,8,26, 0.65);
// background: -webkit-linear-gradient(top, #23233999, #040717);
// background: -moz-linear-gradient(top, #23233999, #040717);
// background: linear-gradient(to bottom, rgba(112,128,136, 0.1), rgba(2,8,26, 0.75));
transition: ${(props) => props.trueFade ? "opacity 0.2s ease-in-out !important;": "none"};
    z-index: 10000;
    ${(props) => props.visible && css`

        opacity: 1;
        pointer-events: all;
        transition: ${(props) => props.trueFade ? "opacity 0.2s ease-in-out !important;": "none"};
    `}

   
`;

export const ImgWrapper = styled.div`

    padding-top: ${(props) => props.padding};
    padding-bottom: ${(props) => props.paddingBottom};
    display: flex;
    align-items: center;
    justify-content: center;
    float: ${(props => props.float)};
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const Spinner = styled.img`

animation: 2s ${rotate} linear infinite;
  width: 16px;
  height: 16px;
`
export const CustomLightSpinner = styled(Spinner)`
  
 
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

export const TitleWrapper = styled.div`

font-family: 'Open Sans', sans-serif;
    margin: ${(props) => props.margin};
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

`   
export const Title = styled.h1`

  font-size: ${(props) => props.size};
//   text-align: center;
  align-items: center;
  color: ${(props) => props.color};
` 

export const AddTokenWrapper = styled.div`

    font-family: 'Open Sans', sans-serif;
    margin: ${(props) => props.margin};
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    

`   
export const AddTokenTitle = styled.div`

  font-size: ${(props) => props.size};
  align-items: center;
  height: 100%;
  line-height: 35px;
  color: ${(props) => props.color};
  background: rgb(23,42,66);
    border-radius: 20px;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
    color: rgb(79,143,233);
` 

export const SubTitle = styled.div`

  padding-top: 10px;
  font-size: ${(props) => props.size};
//   text-align: center;
  align-items: center;
  color: ${(props) => props.color};
` 



export const Button = styled.div`

  height: 55px;
  width: 100%;
  background: rgb(33,114,229);
  border-radius: 20px;
  text-align: center;
  line-height: 55px;
  font-size: 20px;
  font-weight: bold;
  color: White;
  margin-bottom: 5px;

  &:hover {

    cursor: pointer;
    background: rgb(13,94,209);
}
`

export const ButtonWrapper = styled.div`

font-family: 'Open Sans', sans-serif;
   margin-top: ${(props) => props.margin};
    height: 30px;
    // margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

` 

export const ErrorText = styled.div`

  position: absolute;
  left: 5%;
  top: 5%;
  color: White;
  font-size: 22px;
`

export const TokenAmountWrapper = styled.div`

    // width: 100%;
    height: ${(props) => props.height};
    background: rgb(14,22,39);
    border-radius: 15px;
    border: 1px solid rgb(41, 50, 67);
    margin-top: ${(props) => props.marginTop};
    padding-left: 15px;
    padding-right: 20px;
    // margin-bottom: 10px;

`
export const ArrowDownContainer = styled.div`

    position: absolute;
    top: 23.5%;
    left: 46%;
    // color: White;
    background: White;
    background-color:rgb(14,22,39);
    border: 5px solid  rgb(27,32,52);
    border-radius: 10px;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
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
export const SubTitle2 = styled.div`

  padding-top: 10px;
  width: 100%;
  font-size: ${(props) => props.size};
  align-items: left;
  padding-left: 5px;
  color: ${(props) => props.color};
` 
export const TokenAmount2 = styled.div`

    font-family: 'Open Sans', sans-serif;
    color: ${(props) => props.colour};
    font-size: ${(props) => props.size};
    // width: 100%;
    padding-left: 5px;
    padding-top: ${(props) => props.paddingTop};
    padding-right: ${(props) => props.paddingRight};
    display: block !important;
    vertical-align: bottom;
    // align-items: center;
    // justify-content: center;
    float: ${(props) => props.float};
`
export const Divider = styled.div`

    position: absolute;
    width: 91%;
    height: 0.3px;
    background: #adadad;
    top: 55%;
`

export const Wrapper = styled.div`

    position: relative;
`




export const RejectionModal = ({visible, close, amount}) => {
    
    // const { connectOn, disconnect, active, loading } = useAuth()
  
    const provider = localStorage.getItem("provider")

   
    return (
        <>
         <Backdrop visible={visible} onClick={close} trueFade={false}></Backdrop>
            <FormWrapper visible={visible} trueFade={false}>
                <ErrorText>Error</ErrorText>
                <CloseIcon onClick={close}></CloseIcon>
                <ImgWrapper padding={"50px"} paddingBottom={"0px"} float={""}>
                    <AlertTriangle strokeWidth={1.2} size={'80px'} color={"red"} />
                </ImgWrapper>
                <TitleWrapper>
                    <SubTitle style={{"font-weight": "bold"}} color={"red"} size={"16px"} margin={"0"}>Transaction Failed</SubTitle>
                </TitleWrapper>
                <TitleWrapper>
                    <SubTitle color={"White"} size={"18px"}>Close this modal to try again</SubTitle>
                </TitleWrapper>
                <ButtonWrapper margin={"40px"}>
                    <Button onClick={close}>Dismiss</Button>
                </ButtonWrapper>
                
               
            </FormWrapper>
        </>
    )
}

export const PendingModal = ({visible, close, amount}) => {

    return (
        <>
         <Backdrop visible={visible} onClick={close} trueFade={false}></Backdrop>
            <FormWrapper visible={visible} trueFade={false}>
                <CloseIcon onClick={close}></CloseIcon>
                <ImgWrapper padding={"40px"}  paddingBottom={"40px"} float={""}>
                    <CustomLightSpinner src={Circle} size={"100px"}></CustomLightSpinner>
                </ImgWrapper>
                <TitleWrapper>
                    <Title color={"White"} size={"21px"}>Waiting For Confirmation</Title>
                </TitleWrapper>
                <TitleWrapper margin={"5px"}>
                    <SubTitle color={"White"} size={"18px"} margin={"0"}>Approving spend of {amount} RenBTC</SubTitle>
                </TitleWrapper>
                <TitleWrapper>
                    <SubTitle color={"#adadad"} size={"15px"} margin={"0"}>Confirm this transaction in your wallet</SubTitle>
                </TitleWrapper>
            </FormWrapper>
        </>
    )
}

export const TransactionSubmittedModal = ({visible, close, amount}) => {
    
    // const { connectOn, disconnect, active, loading } = useAuth()
  
    const provider = localStorage.getItem("provider")

   
    return (
        <>
         <Backdrop visible={visible} onClick={close} trueFade={false}></Backdrop>
            <FormWrapper visible={visible} trueFade={false}>
                <CloseIcon onClick={close}></CloseIcon>
                <ImgWrapper padding={"25px"}  paddingBottom={"25px"} float={""}>
                    <ArrowUpCircle strokeWidth={0.5} size={'110px'} color={"rgb(33,114,229)"} />
                </ImgWrapper>
                <TitleWrapper>
                    <Title color={"White"} size={"21px"}>Transaction Submitted</Title>
                </TitleWrapper>
                <TitleWrapper>
                    <SubTitle style={{"font-weight": "bold"}} color={"rgb(33,114,229)"} size={"15px"}>view on explorer</SubTitle>
                </TitleWrapper>
                <AddTokenWrapper>
                    <AddTokenTitle size={"18px"}>Add RenBTC To Metamask <img src={metaMask} width={"35px"}></img></AddTokenTitle>
                </AddTokenWrapper>
                <ButtonWrapper margin={"40px"}>
                    <Button onClick={close}>Close</Button>
                </ButtonWrapper>
                
               
            </FormWrapper>
        </>
    )
}

export const ConfirmationModal = ({visible, close, amount, handleDeposit}) => {

    const transactionType = handleDeposit
    
    return (
        <>
         <Backdrop visible={visible} onClick={close} trueFade={false}></Backdrop>
            <FormWrapper visible={visible} trueFade={true}>
                <ErrorText>Confirm Transaction</ErrorText>
                <CloseIcon onClick={close}></CloseIcon>
                <ArrowDownContainer>
                    <ArrowDown color={"White"} size={"15px"}/>
                </ArrowDownContainer>
                <TokenAmountWrapper height={"70px"} marginTop={"40px"}>
                    <TokenAmount float={"left"} size={"20px"} lineHieght={"70px"}>0.0003826</TokenAmount>
                    <TokenAmount float={"right"} size={"20px"} lineHieght={"70px"}>RenBTC</TokenAmount>
                    <ImgWrapper padding={"17px"} float={"right"}>
                        <img src={Bitcoin} width={"35px"}></img>
                    </ImgWrapper>
                </TokenAmountWrapper>
                <TokenAmountWrapper height={"70px"} marginTop={"4px"}>
                    <TokenAmount float={"left"} size={"20px"} lineHieght={"70px"}>432.78</TokenAmount>
                    <TokenAmount float={"right"} size={"20px"} lineHieght={"70px"}>Dollars</TokenAmount>
                    <ImgWrapper padding={"20px"} float={"right"}>
                        <img src={Dollar} height={"30px"}></img>
                    </ImgWrapper>
                </TokenAmountWrapper>
                <TitleWrapper margin={"10px"}>
                    <SubTitle2 style={{"font-weight": "bold"}} color={"White"} size={"15px"} margin={"0"}>1 RenBTC = $43,647.47</SubTitle2>
                </TitleWrapper>
                <Wrapper>
                    <TokenAmountWrapper height={"125px"}>
                        <TokenAmount2 float={"left"} size={"15px"} colour={"White"} lineHieght={"80px"} paddingTop={"10px"} paddingRight={"50px"}>Estimated Gas:</TokenAmount2>
                        <TokenAmount2 float={"right"} size={"15px"} colour={"White"} lineHieght={"70px"}paddingTop={"10px"} paddingRight={"0"} style={{"font-weight": "bold"}}>0.0001823 ETH</TokenAmount2>
                        <TokenAmount2 float={"left"} size={"15px"} colour={"White"} lineHieght={"80px"}paddingTop={"3px"} paddingRight={"50px"}>Token Bridge Fee:</TokenAmount2>
                        <TokenAmount2 float={"right"} size={"15px"} colour={"White"} lineHieght={"70px"}paddingTop={"3px"} paddingRight={"0"} style={{"font-weight": "bold"}}>0.00382 ETH</TokenAmount2>
                        <TokenAmount2 float={"left"} size={"13px"} colour={"#adadad"} lineHieght={"80px"}paddingTop={"20px"} paddingRight={"50px"}>Expected balance after</TokenAmount2>
                        <TokenAmount2 float={"right"} size={"13px"} colour={"#adadad"} lineHieght={"70px"}paddingTop={"20px"} paddingRight={"0"} style={{"font-weight": "bold"}}>0.00382 ETH</TokenAmount2>
                        <TokenAmount2 float={"left"} size={"13px"} colour={"#adadad"} lineHieght={"80px"}paddingTop={"0"} paddingRight={"50px"}>calculation</TokenAmount2>
                        <Divider></Divider>
                    </TokenAmountWrapper>
                </Wrapper>
                <TitleWrapper margin={"10px"}>
                <SubTitle2 style={{"font-weight": "bold"}} color={"#adadad"} size={"12.5px"}>This Output is estimated. You will receive at least 0.0003812 RenBTC after the Bridge fee.</SubTitle2>
                </TitleWrapper>
                <ButtonWrapper margin={"40px"}>
                    <Button onClick={handleDeposit}>Confirm Transaction</Button>
                </ButtonWrapper>
                
               
            </FormWrapper>
        </>
    )
}

const TransactionProcess = (
    {
        confirm, 
        pending, 
        submitted, 
        rejected, 
        visible, 
        close, 
        amount,
        handleDeposit
    }
) => {


    return (

        <>
            {pending && <PendingModal 
                close={close} 
                amount={amount} 
                visible={visible}
            />}
            {confirm && <ConfirmationModal
                close={close} 
                amount={amount} 
                visible={visible}
                handleDeposit={handleDeposit}
            />}
            {submitted && <TransactionSubmittedModal
                close={close} 
                amount={amount} 
                visible={visible}
            />}
            {rejected && <RejectionModal
                close={close} 
                amount={amount} 
                visible={visible}
            />}
        
        </>
    )
}


export default TransactionProcess;