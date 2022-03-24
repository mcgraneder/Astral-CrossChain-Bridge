import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { Backdrop, 
         FormWrapper, 
         TitleContainer, 
         ModalTitle,
         Logo
} from "./Web3ModalStyles";

const ConnectSpinner = (props) => {

    const [text, setText] = useState("Connecting...")

    useEffect(() => {
        if(props.loading) {
            setTimeout(() => {
                setText("Please Wait...")
            }, 5000)
        }
    }, [props.loading])

    return (

        <>
         <Backdrop visible={props.visible}></Backdrop>
            <FormWrapper visible={props.visible}>
                <TitleContainer>
                        <ModalTitle>{text}</ModalTitle>
                    </TitleContainer>
                <Logo><Loader type="Oval" height={60} color="rgb(77, 102, 235)"></Loader></Logo>
            </FormWrapper>
        </> 
    )
}

export default ConnectSpinner;