import styled, { keyframes } from "styled-components"
import React, { useState, useCallback } from "react"
import { CheckCircle, X } from "react-feather"
import usePendingTransaction from "../../hooks/usePendingTransaction"
import { useEffect } from "react/cjs/react.development"
import usePendingTransactions from "../../hooks/usePendingTransaction"
import axios from "axios"
export const TransactionPopupWrapper = styled.div`

    position: absolute;
    bottom: 0;
    right: 0.75%;
    width: 360px;
    height: 87vh;
    // height: 575px;
    text-align: right;
    padding: 20px 20px;
    padding-top: 10px;
    //background: White;
    // z-index: -1;
    transition: width 0.15s ease-in-out;
`

export const Container = styled.div`

    position: relative;
    display: ${(props) => props.displayType ? "none" : "block"};
    overflow: hidden;
    animation: SlideLeft 0.35s;
    animation-fill-mode: left;

    @keyframes SlideLeft {

        100% {

            width: 100%;
            
        }

        0% {

            width: 0%;
        }
    }
`
export const TransactionPopupContainer = styled.div`

    
    height: 90px;
    width: 100%;
    background-color: rgb(7,10,29); //b 72
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 30px;
    // border: 1px solid  rgb(25,30,82);
    transition: width 0.15s ease-in-out;
    // white-space: nowrap;
  overflow: hidden;
`

export const IconContainer = styled.div`

    position: absolute;
    left: 0;
    top: 0;
    margin-left: 10px;
    margin-right: 10px;
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  overflow: hidden;
`

export const TextContainer = styled.div`

    position: absolute;
    left: 70px;
    top: 0;
    margin-top: 11px;
    margin-right: 20px;
    width: 230px;
    // height: 50%;
    // background: White;
    // white-space: nowrap;
  overflow: hidden;

`

export const Text = styled.div`

    margin-bottom: 10px;
    margin-right: 23px;
    width: 230px;
    font-family: 'Open Sans', sans-serif;
    text-align: left;
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight ? "bold" : "400"};
    // white-space: nowrap;
  overflow: hidden;
`

export const CloseIcon = styled(X)`

    position: absolute;
    left: 89%;
    top: 10%;
    cursor: pointer;
    color:White;
    z-index: 10;
    white-space: nowrap;
  overflow: hidden;
  z-index: 100000;

  &:hover {

    cursor: pointer;
  }
`

export const Progress = styled.div`

`

export const ProgressBar = styled.div`

    border-radius: 10px;
    // border: 1px solid White;
    animation animate-positive 2s;
    // position: absolute;
    top: 19.6%;
    right: 3.3%;
    margin-top: 91px;
    background: rgb(23,104,219);
    width:  ${(props) => props.active ? "0px" : "350px"};
    height: 3px;
    transition: width 31s ease-in-out;
    
`

export const ProgressValue = styled.div`

    // width: 350px;
    // height: 3px;
    // line-height: 5px;
    // background: black;

    // @-webkit-keyframes animate-positive{

    //     0% {

    //         width: 0;
    //     }
    // }

    // @keyframes animate-positive{

    //     100% {

    //         width: 350px;
    //     }
    // }


`

const RenBTCPriceRequestURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=renbtc&order=market_cap_desc&per_page=100&page=1&sparkline=false"


    const TransactionNotification = ({deposits, setDeposits, amount}) => {
    
    const [display, setDisplay]= useState(false)
    const [priceForAmount, setPriceForAmount] = useState(0)
    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setDisplay(true)
        }, 30000)
        
        return () => clearTimeout(timeoutId)
    }, [])

    useEffect(() => {
        axios.get(RenBTCPriceRequestURL).then((result) => {
            const currentPrice = Number((result.data[0].current_price + 0.25) * amount)
            setPriceForAmount((Number(currentPrice)).toFixed(2))
            
        }).catch(error => console.error(error))

    }, [])

    const click = () => {

        setDisplay(true)
    }


    return (

        <>
            <Container displayType={display}>
                <TransactionPopupContainer active={true}>
                    <CloseIcon
                         strokeWidth={3} 
                         onClick={click}/>
                    <IconContainer>
                        <CheckCircle 
                            strokeWidth={1.5} 
                            size="35" 
                            color={"rgb(38,162,91)"} />
                    </IconContainer>
                    <TextContainer>
                        <Text size={"15px"} color={"White"} weight={true}>
                            Deposited Exactly {Number(amount).toFixed(7)} Ren BTC at a price of ${priceForAmount}
                        </Text>
                        <Text size={"15px"} color={"rgb(13,94,209)"} weight={true}>
                            View on explorer
                        </Text>
                    </TextContainer>
                    <ProgressBar1 
                        deposits={deposits} 
                        setDeposits={setDeposits}/>        
                </TransactionPopupContainer>
            </Container>
            </>
           
       
    )
}

export const ProgressBar1 = ({deposits}) => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        setActive(false)
        setTimeout(() => {
            setActive(true)
        }, 100)
    }, [deposits])

    return(

        <Progress>
            <ProgressBar active={active}>
                <ProgressValue>

                </ProgressValue>
            </ProgressBar>
        </Progress>
    )

}

const DepositSummary = ({deposits, setDeposits, transactionBlock, setTransactionBlock}) => {

    return (
        <TransactionPopupWrapper active={deposits.length > 0 ? true : false}>
            { deposits.length > 0 && deposits.map((item, i) => {
                if(i > 0){
                    return <div key={item.id} className="objectname">
                                <TransactionNotification 
                                    key={item.id}
                                    deposits={deposits}
                                    setDeposits={setDeposits}
                                    amount={item.amount}
                                />
                            </div>
            }})}
        </TransactionPopupWrapper>
    )
}

export default DepositSummary;
