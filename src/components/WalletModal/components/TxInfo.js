import React from "react"
import styled from "styled-components"
import { ArrowRight, ArrowUpCircle } from "react-feather"
export const StatusTextWrapper = styled.div`

    width: 100%;
    height: 20px;
    display: flex;
    // align-items: left;
    // justify-content: center;
    // background: White;
    margin-top: 10px;
    margin-bottom: ${(props) => props.marginB};
    padding-left: 10px;

`

export const StatustTextIcon = styled.img`

    width: 20px;
    height: 20px;
    display: flex;
    
`
export const StatusText = styled.div`

font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 
    height: 20px;
    display: flex;
    font-size: 15px;
    color: White;
    line-height: 20px;
    padding-left: 20px;
    // font-weight: bold;
    // padding-right: 100px;
`

const TxInfo = ({ marginB, status, showArrow, showCircle }) => {

    return(

        <StatusTextWrapper marginB={marginB}>
            {showCircle && <ArrowUpCircle size={"20px"} color={"rgb(33,114,229)"}/>}
            { showArrow && <ArrowRight ize={"20px"} color={"rgb(33,114,229)"}/>}
            <StatusText>{status}</StatusText>
        </StatusTextWrapper>
    )
}

export default TxInfo