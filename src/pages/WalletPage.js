import React, { useState } from "react";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar"
import WalletModal from "../components/WalletModal/WalletModal";
import useBalance from "../hooks/useBalance";
import { TransactionPopupWrapper } from "../components/AccountDetails/TransactionSummary";
import DepositSummary from "../components/AccountDetails/TransactionSummary";
import TransactionProcess from "../components/TransactionConfirmationModal/PendingModal";
import AccountDetailsModal from "../components/AccountDetails/AccountDetailsModal";
import TokenListModal from "../components/TokenListModal/TokenListModal";
const WalletPage = ({}) => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showTokenModal, setShowTokenModal] = useState(false)

    const toggleTokenModal = () => setShowTokenModal(!showTokenModal)

    return (

        <>
            <TokenListModal 
                visible={showTokenModal} 
                close={toggleTokenModal}
            />
            <WalletModal 
                setShow={setShow2} 
                close={show2} 
                visible={show1} 
                toggleTokenModal={toggleTokenModal}
            />
        </>
    )
}

export default WalletPage
