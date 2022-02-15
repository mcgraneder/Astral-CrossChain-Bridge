import React, { useState } from "react";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar"
import WalletModal from "../components/WalletModal/WalletModal";
import useBalance from "../hooks/useBalance";
import { TransactionPopupWrapper } from "../components/AccountDetails/TransactionSummary";
import DepositSummary from "../components/AccountDetails/TransactionSummary";
import TransactionProcess from "../components/TransactionConfirmationModal/PendingModal";
const WalletPage = () => {

    const [show1, setShow1] = useState(false);
    const [confirm, setConfirm] = useState(false)
    const [pending1, setPending1] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [rejected, setRejected] = useState(false)

    const toggle1 = () => setShow1(!show1);

    const [amount, setAmount] = useState()
    const [showPending, setShowPending] = useState(false)
    const togglePending = () => setShowPending(!showPending)

    const { balance, setBalance } = useBalance()
   


    return (

        <>
            <DepositSummary></DepositSummary>
            {/* <PendingModal visible={showPending} close={togglePending} amount={amount}></PendingModal> */}
            <Nav colour={"rgb(14, 22, 39)"} colour1={"rgb(27,32,52)"} colour2={"rgb(14, 22, 39)"} bcolour={"rgb(14, 22, 39)"} bcolour1={"rgb(34,43,68)"} bcolour2={"rgb(14, 22, 39)"} close={toggle1} visible={true}></Nav>
            <Web3Modal visible={show1} close={toggle1}></Web3Modal>
            <WalletModal setShow={setShow1} close={togglePending} visible={showPending}></WalletModal>
        </>
    )
}

export default WalletPage
