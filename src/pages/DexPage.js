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
            <AccountDetailsModal visible={show1} close={toggle1} toggle2={toggle2}/>
            <Nav colour={"rgb(27,32,52);;"} colour1={"rgb(14, 22, 39)"} colour2={"rgb(14, 22, 39)"} bcolour={"rgb(34,43,68)"} bcolour1={"rgb(14, 22, 39)"} bcolour2={"rgb(14, 22, 39)"} close={toggle1} visible={true}></Nav>
            <Web3Modal visible={show2} close={toggle2} bac={toggle1}></Web3Modal>
            <DexModal visible={showTokenModal} close={toggleTokenModal}></DexModal>
        </>
    )
}

export default DexPage
