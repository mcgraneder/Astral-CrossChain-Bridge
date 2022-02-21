import react from "react";
import styled, { css } from "styled-components";
import { X } from "react-feather"

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
    transition: ${(props) => props.trueFade ? "opacity 0.2s ease-in-out !important;": "none"};
    z-index: 10000;
    ${(props) => props.visible && css`

        opacity: 1;
        pointer-events: all;
        transition: ${(props) => props.trueFade ? "opacity 0.2s ease-in-out !important;": "none"};
    `}
   
`;


const AccountDetailsModal = () => {

    return(

        <Backdrop visible={true}>
            <FormWrapper visible={true}>

            </FormWrapper>
        </Backdrop>

    )
}

export default AccountDetailsModal