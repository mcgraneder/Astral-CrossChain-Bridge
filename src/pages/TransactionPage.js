import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar";
import TransactionModal from "../components/TransactionModal/TransactionModal";
import AccountDetailsModal from "../components/AccountDetails/AccountDetailsModal";
import usePendingTransaction from "../hooks/usePendingTransaction";
import TokenListModal from "../components/TokenListModal/TokenListModal";
const TransactionPage = ({}) => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [loading, setLoading] = useState(false)
    const [showTokenModal, setShowTokenModal] = useState(false)

    const toggleTokenModal = () => setShowTokenModal(!showTokenModal)

    const toggle1 = () => setShow1(!show1);
    const toggle2 = () => setShow2(!show2);

    const [amount, setAmount] = useState()
    const [showPending, setShowPending] = useState(false)
    const togglePending = () => setShowPending(!showPending)

    const { transactions} = usePendingTransaction()

    return (

        <>


<AccountDetailsModal visible={show1} close={toggle1} toggle2={toggle2} transactions={transactions}/>
            <Nav colour={"rgb(14, 22, 39)"} colour1={"rgb(14, 22, 39)"} colour2={"rgb(27,32,52);;"}  bcolour={"rgb(14, 22, 39)"} bcolour1={"rgb(14, 22, 39)"} bcolour2={"rgb(34,43,68)"} close={toggle1} visible={true}></Nav>
            <Web3Modal visible={show2} close={toggle2} bac={toggle1}></Web3Modal>
            <TokenListModal visible={showTokenModal} close={toggleTokenModal}></TokenListModal>
            <TransactionModal transactions={transactions} toggleTokenModal={toggleTokenModal}></TransactionModal>
            
        </>
    )
}

export default TransactionPage
