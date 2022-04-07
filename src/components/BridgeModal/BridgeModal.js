import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import chevronDownLogo from "../assets/cheverondown.png"
import EthereumLogo from "../assets/Ethereum.svg"
import HomeConnectButton from "../Home/HomeConnectButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { 
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
import { useSelector } from "react-redux";
import { $mint } from "../../features/mint/mintSlice";
import { $wallet } from "../../features/wallet/walletSlice";
import WalletInputForm from "../WalletModal/components/WalletInput";
import { LoginStyledContainer } from "../Home/StyledContainer";

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

const getAssetData = (selected) => {
    let full
    let short;
    let Icon
    if (selected) {
        full = selected.full;
        short = selected.short;
      Icon = selected.MainIcon;
    }
    return {
      full,
    short,
      Icon,
    };
};
const BrideModal = ({close, balance, toggleTokenModal, fromToken, toToken, setFromToken, setType}) => {

    const [toggle, setToggle] = useState(true)
    const [confirm, setConfirm] = useState(false)
    const [pending, setPending] = useState(false)
    const [complete, setComplete] = useState(false)
    const [showFees, setShowFees] = useState(false)
    const [showGateway, setShowGateway] = useState(false)
    const [address, setAddress] = useState("")

    useEffect(() => {
        console.log(address)
    }, [address])

    let history = useHistory()
    const { active, chainId } = useWeb3React()
    console.log(chainId)

    const setToggleValue = () => setToggle(!toggle);
    const toggleFees = () => setShowFees(!showFees)

    useEffect(() => {
        if(!localStorage.getItem("provider")) history.push("/") 
    }, [history])

    useEffect(() => {
        if(fromToken != null && toToken != null) {
            if(fromToken?.symbol === toToken?.symbol) setFromToken(null)
        }
    }, [fromToken, toToken, setFromToken])

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

    const { currency } = useSelector($mint);
    const { chain } = useSelector($wallet);

    const selectedCurrency = getOptionBySymbol(currency, "currency");
    const selectedChain = getOptionBySymbol(chain, "chain");
    const currentChain = localStorage.getItem("selected_chain") ? JSON.parse(localStorage.getItem("selected_chain")) : chain
   

    const x = getAssetData(selectedCurrency);
    const y = getAssetData(selectedChain);
    console.log(x, y)


    const openTokenList = (type) => {

        setType(type)
        toggleTokenModal()
    }
    
    if (showGateway) return(
        <LoginStyledContainer>    
            <BridgeModalContainer>
                <BridgeModalWrapper>
                    <ConfirmationStep back={() =>  setShowGateway(!showGateway)} balance={balance}/>
                </BridgeModalWrapper>
            </BridgeModalContainer>
        </LoginStyledContainer>
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
        <LoginStyledContainer>
            <BridgeModalContainer>
                <BridgeModalWrapper>
                    <BridgeFees back={toggleFees} toggleGateway={() => setConfirm(true)} balance={balance}/>
                </BridgeModalWrapper>
            </BridgeModalContainer>
        </LoginStyledContainer>
        </>
    )


   
   else return (

        <>
        <LoginStyledContainer>
            
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
                            <ChainSelectorIcon src={selectedCurrency.MainIcon} width={"30px"} loading="lazy"></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText><span style={{"fontWeight": "bold", "fontSize": "17px"}}>{selectedCurrency.short}</span><span style={{"color": "#adadad", "paddingLeft": "5px"}}>{" "}(Bridge {selectedCurrency.full})</span></ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                    </ChainSelectorWrapper>
                </ChainSelector>
                <ChainSelector marginbottom={"30px"}>
                    <ChainSelectorWrapper onClick={() => openTokenList("to")}>
                        <ChainSelectorIconWrapper >
                            <ChainSelectorIcon src={currentChain ? currentChain.MainIcon : EthereumLogo} width={"30px"} loading="lazy"></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText>
                                <span 
                                    style={{"fontWeight": "bold", "fontSize": "17px"}}>
                                    {currentChain ? currentChain.short : "BTC"}
                                </span>
                                <span 
                                    style={{"color": "#adadad", "paddingLeft": "5px"}}>
                                        {" "}(To {currentChain ? currentChain.full : "Ethereum"})
                                </span>
                            </ChainSelectorText>
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
                    <MinFormToggleButtonContainer marginB={toggle ? "20px" : "10px"}>
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
                        {!toggle &&
                        <WalletInputForm 
                            getMaxDeposit={() => null} 
                            text={address} 
                            setText={setAddress}
                            type={"address"}
                            />}
                        <ButtonWrapper width={"90%"}>
                            <HomeConnectButton width={"460px"} active={active} left={"70%"} top={"31%"} close={close} click={toggleFees} height="60px" fontsize="17" colour="rgb(20, 29, 49)" text={selectedChain.short !== "ETH" ? `connect to ${selectedChain.short} to proceed` : "Next"}></HomeConnectButton>
                        </ButtonWrapper>
                </MintFormWrapper>
                    
                </MintFormContainer>
            </BridgeModalWrapper>
            </BridgeModalContainer>
        </LoginStyledContainer>
        </>
    )
}

export default BrideModal;