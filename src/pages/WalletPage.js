import React, { useState } from "react";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar"
import WalletModal from "../components/WalletModal/WalletModal";
import useBalance from "../hooks/useBalance";
import { TransactionPopupWrapper } from "../components/AccountDetails/TransactionSummary";
import DepositSummary from "../components/AccountDetails/TransactionSummary";
import TransactionProcess from "../components/TransactionConfirmationModal/PendingModal";
import AccountDetailsModal from "../components/AccountDetails/AccountDetailsModal";
const WalletPage = ({}) => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [loading, setLoading] = useState(false)

    const toggle1 = () => setShow1(!show1);
    const toggle2 = () => setShow2(!show2);

    const [amount, setAmount] = useState()
    const [showPending, setShowPending] = useState(false)
    const togglePending = () => setShowPending(!showPending)

    const { balance, setBalance } = useBalance()
   


    return (

        <>
            <AccountDetailsModal visible={show1} close={toggle1} toggle2={toggle2}/>
            {/* <PendingModal visible={showPending} close={togglePending} amount={amount}></PendingModal> */}
            <Nav loading={loading} colour={"rgb(14, 22, 39)"} colour1={"rgb(27,32,52)"} colour2={"rgb(14, 22, 39)"} bcolour={"rgb(14, 22, 39)"} bcolour1={"rgb(34,43,68)"} bcolour2={"rgb(14, 22, 39)"} close={toggle1} visible={true}></Nav>
            <Web3Modal visible={show2} close={toggle2} bac={toggle1}></Web3Modal>
            <WalletModal setShow={setShow2} close={show2} visible={show1} setLoading={setLoading} loading={loading}></WalletModal>
        </>
    )
}

export default WalletPage
