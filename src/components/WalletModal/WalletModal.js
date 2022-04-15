import React, { useState, useEffect, useContext } from "react";
import BitcoinLogo from "../assets/Bitcoin.svg"
import Web3	 from "web3";
import Button from "./components/Button";
import axios from "axios";
import EthereumLogo from "../assets/Ethereum.svg"
import { 
         BridgeModalContainer, 
         MintFormWrapper, 
         ButtonWrapper, 
         MintFormContainer, 
} from "./WalletModalStyles";
import { TransactionStateContext } from "../../contexts/transactionContext";
import MintFormToggleTabs from "./components/MintFormToggleTabs";
import WalletInputForm from "./components/WalletInput";
import WalletTxDetails from "./components/WalletTxDetails";
import DisplayBalance from "./components/DisplayBalance";
import DropdownMenu from "./components/DropdownMenu";
import { useWeb3React } from "@web3-react/core"
import { LoginStyledContainer } from "../Home/StyledContainer";

const BridgeAddress = "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B"
const RenBTCPriceRequestURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=renbtc&order=market_cap_desc&per_page=100&page=1&sparkline=false"

export const TRANSACTION_TYPES = {
    APPROVAL: "APPROVAL",
    DEPOSIT: "DEPOSIT",
    WITHDRAWAL: "WITHDRAWAL"
};

export const Asset = {
    BTC: "BTC",
    ZEC: "ZEC",
    BCH: "BCH",
    FIL: "FIL",
    LUNA: "LUNA",
    DOGE: "DOGE",
}

const WalletModal = (
    {
        setConfirm, 
        setText, 
        text, 
        TransactionType, 
        setTransactionType, 
        setGas, 
        bridge, 
        ren, 
        loading,
        balance,
        sufficentApproval,
        setSufficentApproval
    }
) => {
    const [toggle, setToggle] = useState(true)
    const [inputText, setInputText] = useState("Deposit ")
    const [transactionBlock, setTransactionBlock] = useState(true)
    const [sufficentBalance, setSufficentBalance] = useState(false)
    // const [sufficentApproval, setSufficentApproval] = useState(true)
    const [renPrice, setRenPrice] = useState(0)
    const { pending } = useContext(TransactionStateContext)
    
    
    const { library, account, active} = useWeb3React()
  
    useEffect(() => {
        if(!localStorage.getItem("provider")) window.location.href = "/" 
        setTransactionBlock(true)
      }, [])


    const getMaxDeposit = async() => {
        if(TransactionType === "DEPOSIT") {
            var walletBalance = await ren.balanceOf(account)
            walletBalance = Web3.utils.fromWei(walletBalance.toString(), "Gwei")
            setText(walletBalance)
        } else if (TransactionType === "WITHDRAWAL") setText(balance) 
    }

    const getAllowance = React.useCallback(async(amount) => {
        try {
            var allowance = await ren.allowance(account, BridgeAddress)
            allowance = Web3.utils.fromWei(allowance.toString(), "Gwei")
            if(Number(amount) > Number(allowance)) {
                setSufficentApproval(false)
            } else {
                setSufficentApproval(true)
            }
        } catch (error) {
            setSufficentApproval(true)
            console.error(error)
        }
    },[ren, setSufficentApproval, account])

    const getGas = React.useCallback(async() => {
        try {
            var gass = await ren.estimateGas.approve(account, BridgeAddress)
            gass = Web3.utils.fromWei(gass.toString(), "Gwei")
            setGas(gass)
        } catch(error) {
            console.error(error)
        }
    }, [ren, account, setGas])

    const getBalance = React.useCallback(async(amount) => {
        let bal
        try {
            if (TransactionType === "DEPOSIT" || TransactionType === "APPROVAL") {
                bal = await ren.balanceOf(account)
                bal = Web3.utils.fromWei(bal.toString(), "Gwei")
                if(Number(bal) >= Number(amount)) {
                    setSufficentBalance(false)
                } else {
                    setSufficentBalance(true)
                }
            } else if (TransactionType === "WITHDRAWAL") {
                bal = await bridge.getContractTokenbalance("BTC")
                bal = Web3.utils.fromWei(bal.toString(), "Gwei")
                if(Number(bal) >= Number(amount)) {
                    setSufficentBalance(false)
                } else {
                    setSufficentBalance(true)
                }
            }     
        } catch (error) {
            setSufficentApproval(true)
            console.error(error)
        }
    }, [TransactionType, account, bridge, ren, setSufficentApproval])

    const start = async (type) => { 
        if(text === "" || text === "0" || pending) return

        if (type === "WITHDRAWAL") {
            let balance = await bridge.getContractTokenbalance("BTC")
            balance = Web3.utils.fromWei(balance.toString(), "Gwei")
            if (Number(text) > balance) return 
        } else if (type === "DEPOSIT") {
            if (Number(text) > Number(balance)) return
        }
        getGas()
        setConfirm(true)
        setTransactionType(type)
    }

    const beginDeposit = React.useCallback(() => {
        getBalance(text)
        getAllowance(text)
        getGas()
    }, [getBalance, getAllowance, getGas, text])

    useEffect(() => {
        if(library) {
 
            axios.get(RenBTCPriceRequestURL).then((result) => {
                const currentPrice = (result.data[0].current_price) * balance
                var currentBal = Number(currentPrice)
                currentBal = currentBal.toFixed(2)
                setRenPrice(currentBal) 
            }).catch(error => console.error(error))

            if(inputText === "Deposit ") {
                if(ren != null) beginDeposit()
            } else {
                if (ren != null) {
                    setSufficentApproval(true)
                    getBalance(text)
                }
            }
        }

     }, [library, balance, text, beginDeposit, getBalance, inputText, ren, setSufficentApproval])

    const setToggleValue = () => {
        setToggle(!toggle);

        if(!toggle) {
            setInputText("Deposit ")
            setTransactionType("DEPOSIT") 
            beginDeposit()
        } else {
            setInputText("Withdraw ")
            setSufficentApproval(true)
            setTransactionType("WITHDRAWAL")  
        }
        setText("")
    }

    return (

        <>
        <LoginStyledContainer>
            <BridgeModalContainer>
                <DropdownMenu Logo={EthereumLogo} name={"Ethereum"} marginBottom={"5px"}/>
                <DropdownMenu Logo={BitcoinLogo} name={"Bitcoin"} marginBottom={"20px"}/>
                <DisplayBalance balance={balance} renPrice={renPrice}/>
                <MintFormContainer>
                    <MintFormToggleTabs 
                        toggle={toggle} 
                        setToggleValue={setToggleValue}/>
                    <MintFormWrapper>
                        <WalletInputForm 
                            getMaxDeposit={getMaxDeposit} 
                            text={text} 
                            setText={setText}
                            type={"amount"}
                            marginB={"5px"}
                        />    
                        <WalletTxDetails  
                            sufficentApproval={sufficentApproval} 
                            sufficentBalance={sufficentBalance} 
                            text={text} 
                            loading={pending} 
                            start={start}
                        />
                        <ButtonWrapper>
                            <Button 
                                state={sufficentApproval} 
                                balanceState={sufficentBalance}
                                active={active} 
                                input={text}
                                click={
                                    inputText === "Withdraw " ? 
                                    () => start(TRANSACTION_TYPES.WITHDRAWAL) : 
                                    () => start(TRANSACTION_TYPES.DEPOSIT)
                                } 
                                TransactionType={TransactionType}
                                pending={pending}
                                text={text}
                            ></Button>
                        </ButtonWrapper>
                    </MintFormWrapper>
                </MintFormContainer>
            </BridgeModalContainer>
        </LoginStyledContainer>
        </>
    )
}

export default React.memo(WalletModal);