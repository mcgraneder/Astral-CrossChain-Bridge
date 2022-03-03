import React, { useState } from "react";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar";
import DexModal from "../components/DexModal/DexModal";
import useBalance from "../hooks/useBalance";
import AccountDetailsModal from "../components/AccountDetails/AccountDetailsModal";
import TokenListModal from "../components/TokenListModal/TokenListModal";
const DexPage = () => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [showTokenModal, setShowTokenModal] = useState(false)

    const toggleTokenModal = () => setShowTokenModal(!showTokenModal)
    const toggle1 = () => setShow1(!show1);
    const toggle2 = () => setShow2(!show2);

    const [showPending, setShowPending] = useState(false)


    return (

        <>
            <TokenListModal visible={showTokenModal} close={toggleTokenModal}></TokenListModal>
            <DexModal visible={showTokenModal} close={toggleTokenModal}></DexModal>
            {/* <TokenListModal visible={showTokenModal} close={toggleTokenModal}></TokenListModal> */}
        </>
    )
}

export default React.memo(DexPage)
