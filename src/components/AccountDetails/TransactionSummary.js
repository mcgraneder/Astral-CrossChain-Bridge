import styled from "styled-components"
import React from "react"
import { CheckCircle, X } from "react-feather"
export const TransactionPopupWrapper = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    width: 350px;
    height: 100vh;
    // height: 575px;
    text-align: right;
    padding: 20px 20px;
    padding-top: 110px;
`

export const TransactionPopupContainer = styled.div`

    position: relative;
    height: 80px;
    // width: 100%;
    background-color: rgb(33,37,57); //b 72
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 30px;
    border: 1px solid  rgb(13,17,37);
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
`

export const TextContainer = styled.div`

    position: absolute;
    left: 70px;
    top: 0;
    margin-top: 11px;
    margin-right: 20px;
    // width: 100%;
    // height: 50%;
    // background: White;

`

export const Text = styled.div`

    margin-bottom: 5px;
    margin-right: 23px;
    font-family: 'Open Sans', sans-serif;
    text-align: left;
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight ? "bold" : "400"};
`

export const CloseIcon = styled(X)`

    position: absolute;
    left: 89%;
    top: 10%;
    cursor: pointer;
    color: rgb(14,22,39);
    z-index: 10;
`



// function DepositSummary({ info }: { info: ExactInputSwapTransactionInfo | ExactOutputSwapTransactionInfo }) {
//   if (info.tradeType === TradeType.EXACT_INPUT) {
//     return (
//       <Trans>
//         Swap exactly{' '}
//         <FormattedCurrencyAmountManaged
//           rawAmount={info.inputCurrencyAmountRaw}
//           currencyId={info.inputCurrencyId}
//           sigFigs={6}
//         />{' '}
//         for{' '}
//         <FormattedCurrencyAmountManaged
//           rawAmount={info.expectedOutputCurrencyAmountRaw}
//           currencyId={info.outputCurrencyId}
//           sigFigs={6}
//         />
//       </Trans>
//     )
//   } else {
//     return (
//       <Trans>
//         Swap{' '}
//         <FormattedCurrencyAmountManaged
//           rawAmount={info.expectedInputCurrencyAmountRaw}
//           currencyId={info.inputCurrencyId}
//           sigFigs={6}
//         />{' '}
//         for exactly{' '}
//         <FormattedCurrencyAmountManaged
//           rawAmount={info.outputCurrencyAmountRaw}
//           currencyId={info.outputCurrencyId}
//           sigFigs={6}
//         />
//       </Trans>
//     )
//   }
// }

const DepositSummary = () => {


    return (

        <TransactionPopupWrapper>
            <TransactionPopupContainer>
                <CloseIcon strokeWidth={3}/>
                <IconContainer>
                    <CheckCircle strokeWidth={1.5} size="35" color={"rgb(38,162,91)"} />
                </IconContainer>
                <TextContainer>
                    <Text size={"16px"} color={"White"} weight={true}>
                        Deposited Exactly 0.00036 Ren BTC at a price of $100
                    </Text>
                    <Text size={"15px"} color={"rgb(13,94,209)"} weight={true}>
                        View on explorer
                    </Text>
                </TextContainer>
            </TransactionPopupContainer>
            <TransactionPopupContainer>
                <CloseIcon/>
                <IconContainer>
                    <CheckCircle strokeWidth={1.5} size="35" color={"rgb(38,162,91)"} />
                </IconContainer>
                <TextContainer>
                    <Text size={"16px"} color={"White"} weight={true}>
                        Deposited Exactly 0.00036 Ren BTC at a price of $100
                    </Text>
                    <Text size={"15px"} color={"rgb(13,94,209)"} weight={true}>
                        View on explorer
                    </Text>
                </TextContainer>
            </TransactionPopupContainer>
        </TransactionPopupWrapper>
    )
}

export default DepositSummary;
