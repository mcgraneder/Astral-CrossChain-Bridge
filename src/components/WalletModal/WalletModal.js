import React, { useState, useEffect, useCallback } from "react";
import chainLogo from "../assets/metamask.svg"
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import EthereumLogo from "../assets/Ethereum.svg"
import HomeConnectButton from "../Home/HomeConnectButton";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import arrowDown from "../assets/arrowDown.svg"
import DropdownItem from "./DropdownItem";
import DropdownMenu from "./DropdownMenu";
import { getContract } from "../../utils/utils";
import abi from "../../utils/Abis/ABI.json"
import abi2 from "../../utils/Abis/AB12.json"
import Web3	 from "web3";
import { ethers } from 'ethers'
import Loader from "react-loader-spinner";
import Button from "./Button";
import { ArrowContainer12, 
         ArrowLogo12, 
         ArrowLogoContainer12, 
         StyledContainer, 
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
         Balancetext,
         FromContainer,
         WalletInputWrapper,
         WalletInput,
         ArrowContainer,
         ArrowLogoContainer,
         ArrowLogo,
         Dropdown,
         SpinnerWrapper
} from "./WalletModalStyles";
import { getOwnBalance } from "../../hooks/useBalance";
export const MintForm = styled.div`

    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    height: 50px;
    // width: 100%;
    height: 100%;
    background: transparent;
    border: 1px solid rgb(34,43,68);
    border-radius: 10px;

    &:hover {

        background:  rgb(34,43,68);
    }
`

const WalletModal = ({close, balance, setBalance}) => {

    const [toggle, setToggle] = useState(true)
    const [dropDownActive, setDropDownActive] = useState(false)
    const [text, setText] = useState(" ")
    const [inputText, setInputText] = useState("Deposit")
    const [ren1, setRen1] = useState()
    const [bridge, setBridge] = useState()
    // const [balance, setBalance] = useState(0);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { active, library, account } = useAuth()

    // const getBalance = React.useCallback(() => {

    //     if(library) {

    //         const bridgeContract = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account);
    //         const renContract = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);

    //         setBridge(bridgeContract)
    //         setRen1(renContract)

    //         bridgeContract.getContractTokenbalance("BTC")
    //         .then((balance) => {
    //             console.log(balance)
    //             const n = Web3.utils.fromWei(balance.toString(), "Gwei")
    //             console.log(n)
    //             setBalance(n)
    //         });
    //     }
        
    // }, [library])
        
    

    // useEffect(() => {

    //     (async () => {
    //         if (library) {
    //         getBalance();
    //         }
    //     })().catch(console.error);
        

    // }, [getBalance]);


    const setToggleValue = () => {

        setToggle(!toggle);
        if(!toggle) {
            // setText("Deposit")
            setInputText("Deposit ")

        } else {
            // setText("Withdraw")
            setInputText("Withdraw ")

        }
    }

    const setDropdownValue = () => {

        setDropDownActive(!dropDownActive);
    }
    console.log(text)

    const setDropdownValue3 = () => {

        if(!dropDownActive) return
        setDropDownActive(!dropDownActive);
    }

    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };

    const handleDeposit = async() => {

        const bridge = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account);
        const ren1 = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);

        const walletBalance = await ren1.balanceOf(account)
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
        console.log( amount)
        console.log(walletBalance)
        if(text > walletBalance) {

            setError("insufficient balance")
            console.log("hey")
            return
        }
       
        setLoading(true)
        try {

            const tx1 = await ren1.approve("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", amount);
            const txReceipt = await tx1.wait()
           

            console.log(amount)
            const tx2 = await bridge.transferFrom(account, "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", amount, "BTC")

            const depositReceipt = await tx2.wait()
            .then(() => {
                bridge.getContractTokenbalance("BTC")
                .then((balance) => {
                    console.log(balance)
                    const n = Web3.utils.fromWei(balance.toString(), "Gwei")
                    setBalance(n)
                    setLoading(false)
                });
            });
            
            console.log(depositReceipt)
            
        } catch(error) {

            console.error(error)
            setError(error.message)
            console.log(error)
            setLoading(false)
        }


    }

    const handleWithdraw = async() => {

        const bridge1 = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account);
        const renContract = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);
        const walletBalance = await bridge1.getContractTokenbalance("BTC")
        console.log(walletBalance)
        console.log(library)
        if(text > walletBalance) {

            setError("insufficient balance")
            return
        }
        const amount = Web3.utils.toWei(text.toString(), "Gwei")
        console.log(amount)
        console.log(account)
        try {

            const withdraw = await bridge1.transfer(account, amount, "BTC")
            
            const depositReceipt = await withdraw.wait()
            .then(() => {
                bridge1.getContractTokenbalance("BTC")
                .then((balance) => {
                    console.log(balance)
                    const n = Web3.utils.fromWei(balance.toString(), "Gwei")
                    setBalance(n)
                    setLoading(false)
                });
            });

        } catch(error) {

            console.error(error)
            setError(error.message)
            console.log(error)
            setLoading(false)
        }
      
    }

    return (

        <>
        <StyledContainer onClick={() => setDropdownValue3()}>
            
            <BridgeModalContainer>
            <BridgeModalWrapper>
                <ChainSelector onClick={() => setDropdownValue()}>
                    <ChainSelectorWrapper>
                        <ChainSelectorIconWrapper>
                            <ChainSelectorIcon src={BitcoinLogo} width={"30px"}></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText>Token</ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                       
                    </ChainSelectorWrapper>
                    { dropDownActive && <DropdownMenu height={"64px;"}></DropdownMenu>}
                </ChainSelector>
                <BalanceContainer>
                    <BalanceWrapper>
                        <Balancetext>Balance: {balance} RenBTC</Balancetext>
                    </BalanceWrapper>                
                </BalanceContainer>
                <ArrowContainer>
                    <ArrowLogoContainer>
                        <ArrowLogo src={arrowDown}></ArrowLogo>
                    </ArrowLogoContainer>
                </ArrowContainer>
                <MintFormContainer>
                    <MinFormToggleButtonContainer>
                        <MintToggleButton side={"left"} colour={"rgb(14, 22, 39)"} active={toggle} onClick={setToggleValue}>
                            <MintFormTextWrapper2>
                                <MintFormText2>Deposit</MintFormText2>
                            </MintFormTextWrapper2>
                        </MintToggleButton>
                        <ReleaseToggleButton side={"right"} active={toggle} onClick={setToggleValue}>
                            <MintFormTextWrapper2>
                                <MintFormText2>Withdraw</MintFormText2>
                            </MintFormTextWrapper2>
                        </ReleaseToggleButton>
                    </MinFormToggleButtonContainer>
                    <MintFormWrapper>
                        {/* <MintForm>
                        <MintFormmWrapper>
                            <MintFormTextWrapper>
                                <MintFormText>0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113</MintFormText>
                            </MintFormTextWrapper>
                            <DropdownContainer2>
                                <MintFormIcon src={chainLogo} width={"18px"}></MintFormIcon>
                            </DropdownContainer2>
                            </MintFormmWrapper>
                            
                        </MintForm> */}
                        <FromContainer>
                            <WalletInputWrapper>
                                <WalletInput onKeyPress={preventMinus} name="number" type="number" id="in"  onChange={(e) => setText(e.target.value)} placeholder="amount"></WalletInput>
                            </WalletInputWrapper>
                        </FromContainer>
                        <ArrowContainer>
                            <ArrowLogoContainer>
                                <ArrowLogo src={arrowDown}></ArrowLogo>
                            </ArrowLogoContainer>
                        </ArrowContainer>
                        <SpinnerWrapper>
                                { loading ? <Loader type="Oval" height={60} color="rgb(77, 102, 235)"></Loader> : <div></div>}
                            </SpinnerWrapper>
                        <ButtonWrapper>
                            <HomeConnectButton width={"440px"} active={active} left={"82%"} top={"31%"} close={close} click={inputText === "Withdraw " ? handleWithdraw : handleDeposit} height="60px" fontsize="17" colour="rgb(20, 29, 49)" text={inputText +  " " + text + " BTC" }></HomeConnectButton>
                        </ButtonWrapper>
                    </MintFormWrapper>
                    
                </MintFormContainer>
            </BridgeModalWrapper>
            </BridgeModalContainer>
        </StyledContainer>
        </>
    )
}

export default WalletModal;