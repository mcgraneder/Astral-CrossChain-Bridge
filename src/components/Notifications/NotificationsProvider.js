import { v4 } from "uuid"
import styled from "styled-components"
import React, { useState } from "react"
import { CheckCircle, X } from "react-feather"
import { useEffect } from "react/cjs/react.development"

export const TransactionPopupWrapper = styled.div`

    position: absolute;
    top: 0;
    right: 0.75%;
    width: 350px;
    height: 100vh;
    // height: 575px;
    text-align: right;
    padding: 20px 20px;
    padding-top: 100px;
    // background: White;
    // z-index: -1;
    transition: width 0.15s ease-in-out;
    display: ${(props) => props.display ? "none" : "block"};
    
`

export const Container = styled.div`

    position: relative;
    display: ${(props) => props.display}
    z-index: 100000;
    overflow: hidden;

    animation: SlideLeft 0.2s;
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
    background-color: rgb(17,20,39); //b 72
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 30px;
    border: 1px solid  rgb(25,30,82);
    transition: width 0.15s ease-in-out;
    // white-space: nowrap;
  overflow: visible;


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
    // white-space: nowrap;
//   overflow: visible;
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
    // white-space: nowrap;
  overflow: visible;


`

export const Text = styled.div`

    margin-bottom: 10px;
    margin-right: 23px;
    font-family: 'Open Sans', sans-serif;
    text-align: left;
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight ? "bold" : "400"};
    // white-space: nowrap;
    overflow: visible;
    opacity: ${(props) => props.opacity ? "1" : "0"};
    transation: opacity: 0.4s ease-in-out;
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
    width:  ${(props) => props.width}%;
    height: 3px;
    transition: width 15s ease-in-out;
    
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

const TransactionNotification = () => {

    const [loadBar, setLoadBar] = useState(false)
    const [exit, setExit] = useState(false);
    const [width, setWidth] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    const handleStartTimer = () => {
        const id = setInterval(() => {
        setWidth(prev => {
            if (prev < 50) {
            return prev + 3;
            }

            clearInterval(id);
            return prev;
        });
        }, 50);

        setIntervalID(id);
    };


    React.useEffect(() => {
        handleStartTimer();
      }, []);

      React.useEffect(() => {
        if(width > 50) {
            setTimeout(() => {
                setExit(true)
                console.log(exit)
            }, 1000)
        }
        console.log(exit)
      }, [width]);

    return (

        <>
            <Container display={"block"}>
                <TransactionPopupContainer display={exit} active={true}>
                    <CloseIcon strokeWidth={3}/>
                    <IconContainer>
                        <CheckCircle strokeWidth={1.5} size="35" color={"rgb(38,162,91)"} />
                    </IconContainer>
                    <TextContainer>
                        <Text opacity={width > 5} size={"15px"} color={"White"} weight={true}>
                            Deposited Exactly 0.00036 Ren BTC at a price of $100
                        </Text>
                        <Text opacity={width > 5} size={"14px"} color={"rgb(13,94,209)"} weight={true}>
                            View on explorer
                        </Text>
                    </TextContainer>    
                    <ProgressBar1 width={width} active={loadBar}/>                
                </TransactionPopupContainer>
                
            </Container>
            </>
           
       
    )
}

export const ProgressBar1 = ({deposits, id, width}) => {

    const [active, setActive] = useState(false)

    console.log(id)
    useEffect(() => {

        setActive(false)
        setTimeout(() => {

            setActive(true)
        }, 100)
    }, [deposits])

    return(

        <Progress>
            <ProgressBar width={width} active={active}>
                <ProgressValue>
                </ProgressValue>
            </ProgressBar>
        </Progress>
    )

}


const NotificationProvider = ({children}) => {

    const notifications = [
        {
            id: v4(),
            type: "DEPOSIT",
            message: ""
        },

        {
            id: v4(),
            type: "DEPOSIT",
            message: ""
        },

        {
            id: v4(),
            type: "DEPOSIT",
            message: ""
        },
        


    ]

    console.log(notifications)
    return(
        
        
        <div> {children}
        <TransactionPopupWrapper active={true}>
            {notifications.map(notification => {
                return <TransactionNotification key={notification.id}/>
            })}
        </TransactionPopupWrapper>
        </div>
    )
}

export default NotificationProvider