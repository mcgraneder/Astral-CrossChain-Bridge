import styled, { keyframes } from "styled-components"
import React, { useState, useCallback } from "react"
import { CheckCircle, X } from "react-feather"
import axios from "axios"
export const TransactionListContainer = styled.div`

    
    height: 460px;
    // padding-top: 20px;
    // padding-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
    background: rgb(27,32,52);
    border-radius: 10px;
    border: 1px solid rgb(47,43,65);
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {

        ////linear-gradient(rgb(53,134,249), transparent);
        border-radius: 5px;
        background: rgb(53,134,249);
        // border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        // background: #555;
            
    }
`

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

    // position: relative;
    display: ${(props) => props.displayType ? "block" : "block"};
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


export const TextContainer = styled.div`

    // position: absolute;
    margin-right: 20px;
    // display: block;
    margin-left: 15px;
    // height: 50%;
    // background: White;
    // white-space: nowrap;
//   overflow: hidden;
  height: 35px;

`

export const Text = styled.div`

    margin-bottom: ${(props) => props.marginB};
    margin-right: 23px;
    font-family: 'Open Sans', sans-serif;
    text-align: left;
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight ? "bold" : "400"};
    // white-space: nowrap;
  overflow: hidden;
`

export const CloseIcon = styled(X)`

    // position: absolute;
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

export const TransactionItemContainer = styled.div`

    margin: 20px 15px;
    padding: 10px;
    // width: 100%;
    display: flex;
    // height: 80px;
    height: 100px;
    background: rgb(21, 29, 46);
    border: 0.5px solid rgb(53,134,249);
    border-radius: 10px;

    &:hover {

        background: rgb(22, 27, 44);
    }
`

export const IconContainer = styled.div`

    
    margin-left: 10px;
    margin-right: 10px;
    height: 100%;
    width: 50px;
    // background: White;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    overflow: hidden;
`

export const SubtitleContainer = styled.div`

  width: 580px;
  display: flex;
//   background: White;
`
const TransactionList = () => {

    return (

        <TransactionListContainer>
            <TransactionItemContainer>
                <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer>
                <TextContainer>
                <Text size={"19px"} marginB={"20px"} color={"White"} weight={true}>
                            Deposit ID: 372553 
                        </Text>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>From:</span> 0x1234...9273
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Asset:</span> RenBTC
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Amount:</span> 0.0003457 ($ 7:46)
                        </Text>
                        </SubtitleContainer>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                            <span style={{"fontWeight": "bold"}}>Time:</span> 25 minutes ago
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Tx Hash:</span> 1A735E...2G45
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(53,134,249)"} weight={true}>
                            View on explorer
                        </Text>
                        </SubtitleContainer>
                </TextContainer>
                {/* <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer> */}
            </TransactionItemContainer>
           
            <TransactionItemContainer>
                <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer>
                <TextContainer>
                <Text size={"19px"} marginB={"20px"} color={"White"} weight={true}>
                            Deposit ID: 372553 
                        </Text>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>From:</span> 0x1234...9273
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Asset:</span> RenBTC
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Amount:</span> 0.0003457 ($ 7:46)
                        </Text>
                        </SubtitleContainer>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                            <span style={{"fontWeight": "bold"}}>Time:</span> 25 minutes ago
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Tx Hash:</span> 1A735E...2G45
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(53,134,249)"} weight={true}>
                            View on explorer
                        </Text>
                        </SubtitleContainer>
                </TextContainer>
                {/* <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer> */}
            </TransactionItemContainer>
           
            <TransactionItemContainer>
                <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer>
                <TextContainer>
                <Text size={"19px"} marginB={"20px"} color={"White"} weight={true}>
                            Deposit ID: 372553 
                        </Text>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>From:</span> 0x1234...9273
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Asset:</span> RenBTC
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Amount:</span> 0.0003457 ($ 7:46)
                        </Text>
                        </SubtitleContainer>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                            <span style={{"fontWeight": "bold"}}>Time:</span> 25 minutes ago
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Tx Hash:</span> 1A735E...2G45
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(53,134,249)"} weight={true}>
                            View on explorer
                        </Text>
                        </SubtitleContainer>
                </TextContainer>
                {/* <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer> */}
            </TransactionItemContainer>
            <TransactionItemContainer>
                <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer>
                <TextContainer>
                <Text size={"19px"} marginB={"20px"} color={"White"} weight={true}>
                            Deposit ID: 372553 
                        </Text>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>From:</span> 0x1234...9273
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Asset:</span> RenBTC
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Amount:</span> 0.0003457 ($ 7:46)
                        </Text>
                        </SubtitleContainer>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                            <span style={{"fontWeight": "bold"}}>Time:</span> 25 minutes ago
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Tx Hash:</span> 1A735E...2G45
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(53,134,249)"} weight={true}>
                            View on explorer
                        </Text>
                        </SubtitleContainer>
                </TextContainer>
                {/* <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer> */}
            </TransactionItemContainer>
            <TransactionItemContainer>
                <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer>
                <TextContainer>
                <Text size={"19px"} marginB={"20px"} color={"White"} weight={true}>
                            Deposit ID: 372553 
                        </Text>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>From:</span> 0x1234...9273
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Asset:</span> RenBTC
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Amount:</span> 0.0003457 ($ 7:46)
                        </Text>
                        </SubtitleContainer>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                            <span style={{"fontWeight": "bold"}}>Time:</span> 25 minutes ago
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Tx Hash:</span> 1A735E...2G45
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(53,134,249)"} weight={true}>
                            View on explorer
                        </Text>
                        </SubtitleContainer>
                </TextContainer>
                {/* <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer> */}
            </TransactionItemContainer>
            <TransactionItemContainer>
                <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer>
                <TextContainer>
                <Text size={"19px"} marginB={"20px"} color={"White"} weight={true}>
                            Deposit ID: 372553 
                        </Text>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>From:</span> 0x1234...9273
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Asset:</span> RenBTC
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Amount:</span> 0.0003457 ($ 7:46)
                        </Text>
                        </SubtitleContainer>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                            <span style={{"fontWeight": "bold"}}>Time:</span> 25 minutes ago
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Tx Hash:</span> 1A735E...2G45
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(53,134,249)"} weight={true}>
                            View on explorer
                        </Text>
                        </SubtitleContainer>
                </TextContainer>
                {/* <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer> */}
            </TransactionItemContainer>
            <TransactionItemContainer>
                <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer>
                <TextContainer>
                <Text size={"19px"} marginB={"20px"} color={"White"} weight={true}>
                            Deposit ID: 372553 
                        </Text>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>From:</span> 0x1234...9273
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Asset:</span> RenBTC
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Amount:</span> 0.0003457 ($ 7:46)
                        </Text>
                        </SubtitleContainer>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                            <span style={{"fontWeight": "bold"}}>Time:</span> 25 minutes ago
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Tx Hash:</span> 1A735E...2G45
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(53,134,249)"} weight={true}>
                            View on explorer
                        </Text>
                        </SubtitleContainer>
                </TextContainer>
                {/* <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer> */}
            </TransactionItemContainer>
            <TransactionItemContainer>
                <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer>
                <TextContainer>
                <Text size={"19px"} marginB={"20px"} color={"White"} weight={true}>
                            Deposit ID: 372553 
                        </Text>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>From:</span> 0x1234...9273
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Asset:</span> RenBTC
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Amount:</span> 0.0003457 ($ 7:46)
                        </Text>
                        </SubtitleContainer>
                        <SubtitleContainer>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                            <span style={{"fontWeight": "bold"}}>Time:</span> 25 minutes ago
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(166, 166, 166)"} weight={false}>
                        <span style={{"fontWeight": "bold"}}>Tx Hash:</span> 1A735E...2G45
                        </Text>
                        <Text size={"14px"} marginB={"5px"} color={"rgb(53,134,249)"} weight={true}>
                            View on explorer
                        </Text>
                        </SubtitleContainer>
                </TextContainer>
                {/* <IconContainer>
                <CheckCircle 
                            strokeWidth={1.5} 
                            size="40" 
                            color={"rgb(38,162,91)"} />
                </IconContainer> */}
            </TransactionItemContainer>
           
           


        </TransactionListContainer>
    )
}

export default TransactionList