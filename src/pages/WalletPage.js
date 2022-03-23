import React, { useState, useEffect } from "react";
import WalletModal from "../components/WalletModal/WalletModal";
import useBalance from "../hooks/useBalance";
import TokenListModal from "../components/TokenListModal/TokenListModal";
import { ConfirmationModal, PendingModal, TransactionSubmittedModal, RejectionModal } from "../components/TransactionConfirmationModal/PendingModal";
import { getContract } from "../utils/utils";
import abi from "../utils/Abis/ABI.json"
import abi2 from "../utils/Abis/AB12.json"
import { useWeb3React } from "@web3-react/core";
import { v4 } from "uuid"
import DepositSummary from "../components/AccountDetails/TransactionSummary";
import usePendingTransaction from "../hooks/usePendingTransaction";
import Web3 from "web3";

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


const WalletPage = ({}) => {

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
    const [loading, setLoading] = useState(false)

    const {library, account} = useWeb3React()
    const { balance, setBalance } = useBalance()
    const { setDeposits, deposits,  transactions, setTransactions} = usePendingTransaction()

    const toggleTokenModal = () => setShowTokenModal(!showTokenModal)

    useEffect(() => {
        if(library) {
            const bridgeContract = getContract(BridgeAddress, abi, library, account);
            const renContract = getContract(RenAddress, abi2, library, account);
            setRen(renContract)
            setBridge(bridgeContract)
        }
    }, [library]) 

    const handleTransaction = async(contractFunction) => {
        setConfirm(false)
        setPending1(true)
      
        if(text === "") return

        var params
        var walletBalance = await ren.balanceOf(account)
        walletBalance = Web3.utils.toWei(walletBalance.toString(), "wei")
        var amount = Web3.utils.toWei(text.toString(), "Gwei")

        if(TransactionType === TRANSACTION_TYPES.WITHDRAWAL) {
            walletBalance = await bridge.getUserTokenBalance("BTC", account)
            walletBalance = Web3.utils.toWei(walletBalance.toString(), "wei")
            amount = Web3.utils.toWei(text.toString(), "Gwei")
            params = [account, amount, "BTC"]

        } else if (TransactionType === TRANSACTION_TYPES.DEPOSIT) {
            params = [account, BridgeAddress, amount, "BTC"]

        } else {
            params = [BridgeAddress, amount]
        }

        try {
            await contractFunction(...params)
            .then(async (result) => {
                setLoading(true)
                setPending1(false)
                setSubmitted(true)
                setTransactionBlock(false)

                await result.wait().then((result) => {

                    // if (TransactionType == TransactionType.APPROVAL) {
                    //     setSufficentApproval(true)
                    // }
                    setLoading(false)
                    setTransactionBlock(true)
                    const id = v4()
                    setDeposits([
                        ...deposits,
                        {
                            id: id,
                            type: "WITHDRAWAL",
                            from: account,
                            amount: text,
                            txHash: result.transactionHash,
                            time: 2
                        },
                    ]);

                    setTransactions([
                        ...transactions,
                        {
                            id: id,
                            type: "APPROVAL",
                            from: account,
                            amount: text,
                            txHash: result.transactionHash,
                            time: 2
                        },
                    ]);

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
            setPending1(false)
            setRejected(true)
            setLoading(false)
            setTransactionBlock(true)
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
        <DepositSummary 
                deposits={deposits} 
                setDeposits={setDeposits} 
            />   
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
                loading={loading}
                transactionBlock={transactionBlock}
                balance={balance}
            />
            
        </>
    )
}

export default WalletPage
