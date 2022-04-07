import React, { useState } from "react";
import BrideModal from "../components/BridgeModal/BridgeModal";
import useBalance from "../hooks/useBalance";
import TokenListModal from "../components/TokenListModal/TokenListModal";
import { useSelector } from "react-redux";
import { $mint } from "../features/mint/mintSlice";
// import { setMintCurrency } from "../features/mint/mintSlice";
// import { setChain } from "../features/wallet/walletSlice";

const BridgePage = () => {

    const [show1, setShow1] = useState(false);
    const [type, setType] = useState(null)
    const [showTokenModal, setShowTokenModal] = useState(false)
    const [fromToken, setFromToken] = useState(null)
    const [toToken, setToToken] = useState(null)
    // const dispatch = useDispatch()
    const { balance } = useBalance()

    const toggleTokenModal = () => setShowTokenModal(!showTokenModal)
    const toggle1 = () => setShow1(!show1);

    const { currency } = useSelector($mint);
    console.log(currency)
    
    // const handleCurrencyChange = React.useCallback((cur) => {
    //     dispatch(setMintCurrency(cur))
    //     console.log(cur)
    // }, [dispatch])

    // const handleChainChange = React.useCallback((event) => {
    //     dispatch(setChain(event.target.value))
    // }, [dispatch])

    return (

        <>
            <TokenListModal 
                visible={showTokenModal} 
                close={toggleTokenModal} 
                type={type} 
                setType={setType} 
                setFromToken={setFromToken} 
                setToToken={setToToken}
                setShowTokenModal={setShowTokenModal}
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
