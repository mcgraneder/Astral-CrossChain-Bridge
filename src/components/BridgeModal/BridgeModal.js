import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import BitcoinLogo from "../assets/BTC.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import EthereumLogo from "../assets/Ethereum.svg"
import HomeConnectButton from "../Home/HomeConnectButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledContainer, 
         BridgeModalContainer, 
         BridgeModalWrapper, 
         ChainSelector, 
         ChainSelectorWrapper, 
         ChainSelectorIcon, 
         ChainSelectorIconWrapper, 
         ChainSelectorText, 
         ChainSelectorTextWrapper, 
         DropdownContainer, 
         BalanceContainer, 
         BalanceWrapper, 
         MintFormWrapper, 
         ButtonWrapper, 
         MintFormContainer, 
         MintToggleButton, 
         ReleaseToggleButton, 
         MinFormToggleButtonContainer, 
         MintFormTextWrapper2, 
         MintFormText2,
         Balancetext
} from "./BridgeModalStyles";
import { PendingModal } from "../TransactionConfirmationModal/PendingModal";
import { useWeb3React } from "@web3-react/core";
import BridgeFees from "./Steps/BridgeFees";
import ConfirmationStep from "./Steps/ConfirmationStep";
import { ConfirmationModal } from "../TransactionConfirmationModal/PendingModal";
import { currenciesConfig } from "../../utils/AssetConfigs";
import { chainsConfig } from "../../utils/AssetConfigs";
export const MintForm = styled.div`

    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    height: 50px;
    // width: 100%;
    background: transparent;
    border: 1px solid rgb(34,43,68);
    border-radius: 10px;

    &:hover {

        background:  rgb(34,43,68);
    }
`

export const BridgeSelectorContainer = styled.div`

    // width: 100%;
    // border-top-right-radius: 20px;
    // border-top-left-radius: 20px;
    // border-radius: 20px;
    // background: White;
    display: flex;
    height: 45px;
    // padding-bottom: -px;
    // border: 1px solid rgb(34,43,68);
`

export const ERC20BridgeToggleButton = styled(Link)`

   
    width: 50%;
    height: 100%;
    border-top-${(props) => props.side}-radius: 20px;
    // border-right: 1.5px solid rgb(14, 22, 39);
    background: rgb(27,32,52);
    font-size: 18px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    // border: 1px solid rgb(27,32,52);
    // border-bottom: 1.5px solid rgb(75,135,220);
    color: rgb(77,82,102);
    text-decoration: none;
    &:hover {

        cursor: pointer
    }

`
export const LegacyBridgeToggleButton = styled.div`

   
    width: 50%;
    height: 100%;
    border-top-${(props) => props.side}-radius: 20px;
    // border-right: 1.5px solid rgb(14, 22, 39);
    background: rgb(14, 22, 39);
    font-size: 18px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    // border: 1px solid rgb(75,135,220);
    // border-bottom: 1.5px solid rgb(75,135,220);
    color: rgb(75,135,220);
    text-decoration: none;

    &:hover {

        cursor: pointer
    }

`
const getOptions = (mode) => {
    const options =
      mode === "chain"
        ? Object.values(chainsConfig)
        : Object.values(currenciesConfig);
    return options;
};
  
const getOptionBySymbol = (symbol, mode) =>
    getOptions(mode).find((option) => option.symbol === symbol);
  
const createAvailabilityFilter = (available) => (option) => {
    if (!available) {
      return true;
    }
    return available.includes(option.symbol);
};

const BrideModal = ({close, balance, toggleTokenModal, fromToken, toToken, setFromToken, setType}) => {

    const [toggle, setToggle] = useState(true)
    const [confirm, setConfirm] = useState(false)
    const [pending, setPending] = useState(false)
    const [complete, setComplete] = useState(false)
    const [showFees, setShowFees] = useState(false)
    const toggleFees = () => setShowFees(!showFees)
    const [showGateway, setShowGateway] = useState(false)
    const toggleGateway = () => {
        setConfirm(false)
        setComplete(false)
        setPending(true)
        setTimeout(() => {
            setComplete(true)
            setTimeout(() => {
                setShowGateway(!showGateway)
               setPending(false)
            }, 1000)
        }, 2200)
    }


    let history = useHistory()
    const { active } = useWeb3React()
    console.log(showGateway)
    const setToggleValue = () => setToggle(!toggle);

    useEffect(() => {
        if(!localStorage.getItem("provider")) history.push("/") 
    }, [history])

    useEffect(() => {
        if(fromToken != null && toToken != null) {
            if(fromToken?.symbol === toToken?.symbol) setFromToken(null)
        }
    }, [fromToken, toToken, setFromToken])

    const openTokenList = (type) => {

        setType(type)
        toggleTokenModal()
    }
    
    if (showGateway) return(
        <StyledContainer>    
            <BridgeModalContainer>
                <BridgeModalWrapper>
                    <ConfirmationStep back={() =>  setShowGateway(!showGateway)} balance={balance}/>
                </BridgeModalWrapper>
            </BridgeModalContainer>
        </StyledContainer>
    )

    else if (showFees) return (

        <>
        <PendingModal 
            close={null} 
            amount={"0.0005"} 
            visible={pending}
            complete={complete}
        />

         <ConfirmationModal
            close={() => setConfirm(!confirm)} 
            amount={"1.23"} 
            visible={confirm}
            handleDeposit={toggleGateway}
            TransactionType={"APPROVAL"}
            gass={"0.000354"}
        />
        <StyledContainer>
            <BridgeModalContainer>
                <BridgeModalWrapper>
                    <BridgeFees back={toggleFees} toggleGateway={() => setConfirm(true)} balance={balance}/>
                </BridgeModalWrapper>
            </BridgeModalContainer>
        </StyledContainer>
        </>
    )


   
   else return (

        <>
        <StyledContainer>
            
            <BridgeModalContainer>
            <BridgeSelectorContainer>
            <LegacyBridgeToggleButton side={"left"} colour={"rgb(14, 22, 39)"}>
                            <MintFormTextWrapper2>
                                <MintFormText2>Legacy Bridge</MintFormText2>
                            </MintFormTextWrapper2>
                        </LegacyBridgeToggleButton>
                        <ERC20BridgeToggleButton side={"right"} to="/erc20bridge">
                            <MintFormTextWrapper2>
                                <MintFormText2>ERC20 Bridge</MintFormText2>
                            </MintFormTextWrapper2>
                        </ERC20BridgeToggleButton>
            </BridgeSelectorContainer>
            <BridgeModalWrapper>
                <ChainSelector marginbottom={"2px"}>
                    <ChainSelectorWrapper onClick={() => openTokenList("from")}>
                        <ChainSelectorIconWrapper>
                            <ChainSelectorIcon src={fromToken == null ? BitcoinLogo : fromToken.logoURI} width={fromToken == null ? "30px" : "24px"} loading="lazy"></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText>{fromToken == null ? "From Chain" : fromToken.name}</ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                    </ChainSelectorWrapper>
                </ChainSelector>
                <ChainSelector marginbottom={"30px"}>
                    <ChainSelectorWrapper onClick={() => openTokenList("to")}>
                        <ChainSelectorIconWrapper >
                            <ChainSelectorIcon src={toToken == null ? EthereumLogo : toToken.logoURI} width={toToken == null ? "30px" : "24px"} loading="lazy"></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText>{toToken == null ? "Destination Chain" : toToken.name}</ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                    </ChainSelectorWrapper>
                    </ChainSelector>

                    <BalanceContainer>
                        <BalanceWrapper>
                            <Balancetext size={"45px"} colour={"#adadad"}>{balance} renBTC</Balancetext>
                            <Balancetext size={"17px"} colour={"White"}>= $368.46 </Balancetext>
                        </BalanceWrapper>                
                    </BalanceContainer>
                <MintFormContainer>
                    <MinFormToggleButtonContainer>
                        <MintToggleButton side={"left"} colour={"rgb(14, 22, 39)"} active={toggle} onClick={setToggleValue}>
                            <MintFormTextWrapper2>
                                <MintFormText2>Mint</MintFormText2>
                            </MintFormTextWrapper2>
                        </MintToggleButton>
                        <ReleaseToggleButton side={"right"} active={toggle} onClick={setToggleValue}>
                            <MintFormTextWrapper2>
                                <MintFormText2>Release</MintFormText2>
                            </MintFormTextWrapper2>
                        </ReleaseToggleButton>
                    </MinFormToggleButtonContainer>
                    <MintFormWrapper paddingBottom={"0"}>
                        <ButtonWrapper width={"90%"}>
                            <HomeConnectButton width={"460px"} active={active} left={"70%"} top={"31%"} close={close} click={toggleFees} height="60px" fontsize="17" colour="rgb(20, 29, 49)" text={"Next"}></HomeConnectButton>
                        </ButtonWrapper>
                </MintFormWrapper>
                    
                </MintFormContainer>
            </BridgeModalWrapper>
            </BridgeModalContainer>
        </StyledContainer>
        </>
    )
}

export default BrideModal;