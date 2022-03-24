import React from "react"
import styled from "styled-components"
import TxInfo from "./TxInfo"
import Loader from "../../Loader/Loader";
import arrowDown from "../../assets/arrowDown.svg"
import { TRANSACTION_TYPES } from "../WalletModal";
import { SpinnerWrapper,  ArrowContainer, ArrowLogoContainer, ArrowLogo, } from "../WalletModalStyles";
import { useWeb3React } from "@web3-react/core";

export const Button1 = styled.div`

  height: 50px;
  width: 100%;
  background: rgb(33,114,229);
  border-radius: 15px;
  text-align: center;
  line-height: 50px;
  font-size: 17px;
//   font-weight: bold;
  color: White;

  &:hover {

    cursor: pointer;
    background: rgb(13,94,209);
}
`

export const ButtonWrapper1 = styled.div`

font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 
   margin-top: 35px;
   margin-bottom: 10px;
//    margin-ledt: 10px;
//    margin-right: 10px;
    // padding: 10px;
    // width: 100%;
    // margin: 0 auto;
    height: 30px;
    // margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

` 

const WalletTxDetails = ({ sufficentApproval, sufficentBalance, text, loading, start }) => {

    const { active } = useWeb3React()
    return (
        <>
             {text != "" && !sufficentBalance &&  
             <ArrowContainer>
                <ArrowLogoContainer>
                    <ArrowLogo src={arrowDown}></ArrowLogo>
                </ArrowLogoContainer>
            </ArrowContainer>}
            {text != "" && !sufficentBalance && <SpinnerWrapper>  
            {!sufficentApproval && 
            <TxInfo marginB={"20px"} status={`You need to approve this deposit first`} showArrow={false} showCircle={false}/>}
            {sufficentApproval && 
            <TxInfo marginB={"20px"} status={`Confrim Deposit of ${text} RenBTC`} showArrow={false} showCircle={true}/>}
            {text.length > 0 && 
            <TxInfo marginB={"20px"} status={`Estimated Gas: 0.0001823 ETH`} showArrow={true} showCircle={false}/>}
            {sufficentApproval && 
            <TxInfo marginB={"20px"} status={`Bridge Fee: 0.0001 ETH`} showArrow={true} showCircle={false}/>}
            {!sufficentApproval && 
            <ButtonWrapper1>
                <Button1 onClick={() => start(TRANSACTION_TYPES.APPROVAL)}>
                    { active ? (!loading ? "Approve Token Deposit" 
                    :  <div>1 Pending... </div>) 
                    :  <div>Connecting...<Loader stroke="white" size={"18px"}/></div>}
                    </Button1>
            </ButtonWrapper1>}
        </SpinnerWrapper>}
     </>
    )
}

export default WalletTxDetails