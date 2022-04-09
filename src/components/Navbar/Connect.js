import React  from "react"
import styled, { keyframes } from "styled-components"
import { NavButton2 } from "./NavbarStyles"
import { useWeb3React } from "@web3-react/core";

export const Logo1 = styled.div`

    // position: absolute;

    display: flex;
//    float: left;
    align-items: left;
   justify-content: left;
   float: left;
   text-align: left;
   padding-right: 2px;
   padding-left: 5px;
    width: 25px;
    line-height: 40px;
    padding-top: 4px;
}`

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

const Connect = ({ close }) => {

    const { active } = useWeb3React()
    return (

        <>
            <NavButton2 active={active} color={"rgb(23,42,66)"} onClick={close}>Connect Wallet</NavButton2>
        </>
    )
}

export default React.memo(Connect);