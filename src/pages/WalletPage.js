import React, { useState, useEffect, useContext } from "react";
import WalletModal from "../components/WalletModal/WalletModal";
import useBalance from "../hooks/useBalance";
import TokenListModal from "../components/TokenListModal/TokenListModal";
import { getContract } from "../utils/utils";
import abi from "../utils/Abis/ABI.json"
import abi2 from "../utils/Abis/AB12.json"
import { useWeb3React } from "@web3-react/core";
import { v4 } from "uuid"
import DepositSummary from "../components/AccountDetails/TransactionSummary";
import usePendingTransaction from "../hooks/usePendingTransaction";
import Web3 from "web3";
import { ConfirmationModal, 
        PendingModal, 
        TransactionSubmittedModal, 
        RejectionModal 
} from "../components/TransactionConfirmationModal/PendingModal";
import { TransactionStateContext } from "../contexts/transactionContext";
import { useNotification } from "../hooks/useNotification";
import EthereumLogo from "../components/assets/eth.png"
import axios from "axios";
const RenAddress = "0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"
const BridgeAddress = "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B"

export const TRANSACTION_TYPES = {
    APPROVAL: "APPROVAL",
    DEPOSIT: "DEPOSIT",
    WITHDRAWAL: "WITHDRAWAL"
};

export const MODAL_VIEWS = {
    NONE: "NONE",
    CONFIRM: "CONFIRM",
    PENDING: "PENDING",
    SUBMITTED: "SUBMITTED",
    REJECTED: "REJECTED"
};

export const BUTTON_STATES = {
    ENTER_AMOUNT: "ENTER_AMOUNT",
    INSUFFICENT_BALANCE: "INSUFFICENT_BALANCE",
    INSUFFICENT_APPROVAL: "INSUFFICENT_APPROVAL",
    PENDING: "PENDING"
}

const RenBTCPriceRequestURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=renbtc&order=market_cap_desc&per_page=100&page=1&sparkline=false"

const WalletPage = () => {

    const [confirm, setConfirm] = useState(false)
    const [pending1, setPending1] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [rejected, setRejected] = useState(false)
    const [text, setText] = useState("")
    const [showTokenModal, setShowTokenModal] = useState(false)
    const [TransactionType, setTransactionType] = useState("DEPOSIT")
    const [gas, setGas] = useState(0)
    const [ren, setRen] = useState()
    const [bridge, setBridge] = useState()
    const [transactionBlock, setTransactionBlock] = useState(true)
    const [sufficentApproval, setSufficentApproval] = useState(true)
    const [renPrice, setRenPrice] = useState(0)
    const [priceForAmount, setPriceForAmount] = useState(0)
    const [bridgeFee, setBridgeFee] = useState(0)
    const [txCost, setTxCost] = useState(0)
    const [expectedBalance, setExpectedBalance] = useState(0)
    const {library, account } = useWeb3React()

    const { pending, setPending } = useContext(TransactionStateContext)
    const { balance, setBalance } = useBalance()
    const { setDeposits, deposits,  transactions, setTransactions} = usePendingTransaction()
   

    const dispatch = useNotification();

    const HandleNewNotification = (title, success) => {
        dispatch({
            type: 'info',
            message: 'view transaction on explorer',
            title: title,
            EthereumLogo,
            position: "topR" || 'topR',
            success: success
        });
    }

    const toggleTokenModal = () => setShowTokenModal(!showTokenModal)

    useEffect(() => {
        if(library) {
            const bridgeContract = getContract(BridgeAddress, abi, library, account);
            const renContract = getContract(RenAddress, abi2, library, account);
            console.log(renContract)
            setRen(renContract)
            setBridge(bridgeContract)
            console.log(transactions)
        }
    }, [library, account]) 

    useEffect(() => {
        axios.get(RenBTCPriceRequestURL).then((result) => {
            const currentPrice = result.data[0].current_price + 0.25
            setRenPrice(currentPrice)
            setPriceForAmount(currentPrice * Number(text).toFixed(6))
            
        }).catch(error => console.error(error))

        calculateBridgeFee()
        calculateExpectedTransactionCost()
        calculateExpectedBalance()

    }, [confirm])

    const calculateBridgeFee = () => {

        const fee = (text * 0.003).toFixed(8)
        setBridgeFee(fee)
    }

    const estimateGasForTransaction = async(transactionType) => {

        var transactionGas
        if(transactionType === "APPROVAL") {
            transactionGas = await ren.estimateGas.approve(account, BridgeAddress)
            transactionGas = Web3.utils.fromWei(transactionGas.toString(), "Gwei")
            console.log(transactionGas)
             setGas(transactionGas)
        }
        if(transactionType === "DEPOSIT") {
            transactionGas = await bridge.estimateGas.transferFrom(account, BridgeAddress, text, "BTC")
            transactionGas = Web3.utils.fromWei(transactionGas.toString(), "Gwei")
            console.log(transactionGas)
             setGas(transactionGas)
        }
        if(transactionType === "WITHDRAW") {
            transactionGas = await bridge.estimateGas.transfer(account, text, "BTC")
            transactionGas = Web3.utils.fromWei(transactionGas.toString(), "Gwei")
            console.log(transactionGas)
             setGas(transactionGas)
        }
        console.log(gas)
    }

    const calculateExpectedTransactionCost = () => {

        const expectedCost = Number(text) + gas
        setTxCost(expectedCost.toFixed(7))
    }

    const calculateExpectedBalance = () => {
        const calculatedBalanceAfterFee = Number(text - bridgeFee).toFixed(7)
        setExpectedBalance(calculatedBalanceAfterFee)
    }

    const handleTransaction = async(contractFunction) => {
        setConfirm(false)
        setPending1(true)
      
        if(text === "") return

        var params
        var amount = Web3.utils.toWei(text.toString(), "Gwei")
        var title

        if(TransactionType === TRANSACTION_TYPES.WITHDRAWAL) {
            params = [account, amount, "BTC"]
            title = `withdrawed Exactly ${amount} Ren BTC at a price of $200`

        } else if (TransactionType === TRANSACTION_TYPES.DEPOSIT) {
            params = [account, BridgeAddress, amount, "BTC"]
            title = `deposited Exactly ${amount} Ren BTC at a price of $200`

        } else {
            params = [BridgeAddress, amount]
            title = `Approved Contract for renBTC`
        }

        try {
            await contractFunction(...params)
            .then((result) => {
                setPending1(false)
                setPending(true)
                setSubmitted(true)
                setTransactionBlock(false)

                result.wait().then((result) => {
                    setPending(false)
                    if (TransactionType == TRANSACTION_TYPES.APPROVAL) {
                        setSufficentApproval(true)
                    }
                    setTransactionBlock(true)

                    const id = v4()
                    setTransactions([
                        ...transactions,
                        {
                            id: id,
                            type: TransactionType,
                            from: account,
                            amount: text,
                            txHash: result.transactionHash,
                            time: 2
                        },
                    ]);
                    
                    console.log(transactions)

                    HandleNewNotification(title, true)
                    bridge.getContractTokenbalance("BTC")
                    .then((balance) => {
                        balance = Web3.utils.fromWei(balance.toString(), "Gwei")             
                        var bal = new Number(balance)
                        bal = bal.toFixed(6)
                        setBalance(bal)
                    });
                })
    
            });

        } catch(error) {
            console.log(error)
            const errorCodes = [4001, -32603]
            setPending1(false)
            setRejected(true)
            setTransactionBlock(true)

            if (!errorCodes.includes(error.code)) {
                if(error === "User denied transaction signature.") return
                title = "Transaction Failed Unexpectedly!"
                HandleNewNotification(title, false)
            } 
        }
    }

    const closeSbmissionModal = () => {
        setSubmitted(false)
        if(TransactionType !== "APPROVAL") {
            setTimeout(() => {
                setText("")
            }, 300)
        }
    }
    

    return (

        <>
        <PendingModal 
                close={() => setPending1(!pending1)} 
                amount={text} 
                visible={pending1}
            />
        <ConfirmationModal
                close={() => setConfirm(!confirm)} 
                amount={text} 
                visible={confirm}
                handleDeposit={
                    TransactionType === "APPROVAL" ? () => handleTransaction(ren.approve) 
                    : TransactionType === "DEPOSIT" ? () => handleTransaction(bridge.transferFrom) 
                    : () => handleTransaction(bridge.transfer)
                }
                TransactionType={setTransactionType}
                gass={gas}
                renPrice={renPrice}
                priceForAmount={priceForAmount}
                bridgeFee={bridgeFee}
                gas={gas}
                txCost={txCost}
                expectedBalance={expectedBalance}
            />
            <TransactionSubmittedModal
                close={() => closeSbmissionModal()} 
                amount={text} 
                visible={submitted}
            />
            <RejectionModal
                close={() => setRejected(!rejected)} 
                amount={text} 
                visible={rejected}
            />
        
            <TokenListModal 
                visible={showTokenModal} 
                close={toggleTokenModal}
            />
            <WalletModal  
                setConfirm={setConfirm}
                setText={setText}
                text={text}
                TransactionType={TransactionType}
                setTransactionType={setTransactionType}
                gas={gas}
                setGas={setGas}
                ren={ren}
                bridge={bridge}
                transactionBlock={transactionBlock}
                balance={balance}
                setSufficentApproval={setSufficentApproval}
                sufficentApproval={sufficentApproval}
            />
            
        </>
    )
}

export default WalletPage
