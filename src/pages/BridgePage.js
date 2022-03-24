import React, { useState } from "react";
import BrideModal from "../components/BridgeModal/BridgeModal";
import useBalance from "../hooks/useBalance";
import TokenListModal from "../components/TokenListModal/TokenListModal";

const BridgePage = () => {

    const [show1, setShow1] = useState(false);
    const [type, setType] = useState(null)
    const [showTokenModal, setShowTokenModal] = useState(false)
    const [fromToken, setFromToken] = useState(null)
    const [toToken, setToToken] = useState(null)

    const { balance } = useBalance()

    const toggleTokenModal = () => setShowTokenModal(!showTokenModal)
    const toggle1 = () => setShow1(!show1);

    return (

        <>
            <TokenListModal 
                visible={showTokenModal} 
                close={toggleTokenModal} 
                type={type} 
                setType={setType} 
                setFromToken={setFromToken} 
                setToToken={setToToken}
            />
            <BrideModal 
                close={toggle1} 
                balance={balance} 
                toggleTokenModal={toggleTokenModal} 
                fromToken={fromToken} 
                setFromToken={setFromToken} 
                toToken={toToken} 
                setType={setType}
            />
        </>
    )
}

export default BridgePage
