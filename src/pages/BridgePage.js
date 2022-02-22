import React, { useState } from "react";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar";
import BrideModal from "../components/BridgeModal/BridgeModal";
import useBalance from "../hooks/useBalance";
import AccountDetailsModal from "../components/AccountDetails/AccountDetailsModal";

const BridgePage = () => {

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
            <Nav colour={"rgb(27,32,52);;"} colour1={"rgb(14, 22, 39)"} colour2={"rgb(14, 22, 39)"} bcolour={"rgb(34,43,68)"} bcolour1={"rgb(14, 22, 39)"} bcolour2={"rgb(14, 22, 39)"} close={toggle1} visible={true}></Nav>
            <Web3Modal visible={show2} close={toggle2} bac={toggle1}></Web3Modal>
            <BrideModal close={toggle1} balance={balance} setBalance={setBalance}></BrideModal>
        </>
    )
}

export default BridgePage
