import React, { useContext } from "react"
import { ConnectButton, Logo, ButtonText } from "./ConnectWalletButtonStyles"
import styled, { keyframes } from "styled-components"
import { WALLETS } from "../../../constants/wallets"
import { NavButton2 } from "../../Navbar/NavbarStyles"
import Loader from "../../Loader/Loader"
import { TransactionStateContext } from "../../../contexts/transactionContext"
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

const ConnectWalletButton = ({ close, color, fontsize, height, left, top }) => {

    const { pending } = useContext(TransactionStateContext)
    const { active, account } = useWeb3React()
    const provider = localStorage.getItem("provider")

    const getWalletOptions = () => {
        const options = Object.values(WALLETS);
        return options;
    };
      
    const getWalletByProvider = (provider) =>
        getWalletOptions().find((option) => option.provider === provider);
    
    const activeWallet = getWalletByProvider(provider)
    const logo = activeWallet ? activeWallet.icon : null

    return (

        <>
            {pending ? 
            <ConnectButton 
                height={height} 
                fontsize={fontsize} 
                col={color} 
                col2={true} 
                onClick={close}>
            <ButtonText 
                style={{"fontWeight": "bold"}}>
            <Logo1 
                left={left} 
                top={top}>
            <Loader 
                stroke="white" 
                size={"18px"}/>
            </Logo1>
                1 Pending....
            </ButtonText>
             </ConnectButton> 
            : 
            (!active ?  (provider ? <ConnectButton 
                height={height} 
                fontsize={fontsize} 
                col={color} 
                col2={true} 
                onClick={close}>
            <ButtonText 
                style={{"fontWeight": "bold"}}>
            <Logo1 
                left={left} 
                top={top}>
            <Loader 
                stroke="white" 
                size={"18px"}/>
            </Logo1>
                Connecting...
            </ButtonText>
             </ConnectButton>  : <NavButton2 active={active} color={"rgb(23,42,66)"} onClick={close}>Connect Wallet</NavButton2>) 
            :  <ConnectButton height={height} fontsize={fontsize} col={color} onClick={close}><ButtonText ><Logo width={22}><img src={logo} alt="#" width={22} height={22}/></Logo>{account?.substring(0, 6)}...{account?.substring(account?.length - 4)}</ButtonText></ConnectButton>)}
        </>
    )
}

export default React.memo(ConnectWalletButton);