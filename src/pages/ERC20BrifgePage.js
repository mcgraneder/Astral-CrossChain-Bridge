import React, { useState } from "react";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar";
import ERC20BridgeModal from "../components/ERC20BridgeModal/ERC20BridgeModal";
import useBalance from "../hooks/useBalance";
import AccountDetailsModal from "../components/AccountDetails/AccountDetailsModal";

const ERC20BridgePage = () => {

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
            <ERC20BridgeModal close={toggle1} balance={balance} setBalance={setBalance}></ERC20BridgeModal>
        </>
    )
}

export default ERC20BridgePage
