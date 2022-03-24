import React, { useState } from "react";
import TransactionModal from "../components/TransactionModal/TransactionModal";
import usePendingTransaction from "../hooks/usePendingTransaction";
import TokenListModal from "../components/TokenListModal/TokenListModal";

const TransactionPage = () => {

    const [showTokenModal, setShowTokenModal] = useState(false)
    const toggleTokenModal = () => setShowTokenModal(!showTokenModal)

    const { transactions} = usePendingTransaction()

    return (

        <>
            <TokenListModal visible={showTokenModal} close={toggleTokenModal}></TokenListModal>
            <TransactionModal transactions={transactions} toggleTokenModal={toggleTokenModal}></TransactionModal>
            
        </>
    )
}

export default TransactionPage
