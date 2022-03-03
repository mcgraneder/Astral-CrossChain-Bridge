import React, { useState } from "react";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar";
import BrideModal from "../components/BridgeModal/BridgeModal";
import useBalance from "../hooks/useBalance";
import AccountDetailsModal from "../components/AccountDetails/AccountDetailsModal";
import TokenListModal from "../components/TokenListModal/TokenListModal";
const BridgePage = () => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showTokenModal, setShowTokenModal] = useState(false)

    const toggleTokenModal = () => setShowTokenModal(!showTokenModal)

    const toggle1 = () => setShow1(!show1);
    const toggle2 = () => setShow2(!show2);

    const [amount, setAmount] = useState()
    const [showPending, setShowPending] = useState(false)
    const togglePending = () => setShowPending(!showPending)
    const { balance, setBalance } = useBalance()

    return (

        <>
            <TokenListModal visible={showTokenModal} close={toggleTokenModal}></TokenListModal>
            <BrideModal close={toggle1} balance={balance} setBalance={setBalance} toggleTokenModal={toggleTokenModal}></BrideModal>
        </>
    )
}

export default BridgePage
