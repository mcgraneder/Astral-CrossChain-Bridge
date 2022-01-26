import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar";
import useOnPageLoad from "../hooks/usePageOnLoad";
import PageLoad from "../components/PageLoadSpinner/PageLoadSpinner";
import BrideModal from "../components/BridgeModal/BridgeModal";

const BridgePage = () => {

    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);
    const { active, onPageLoading, account } = useAuth()
 
    const loading = useOnPageLoad()

    return (

        <>
            <Nav colour={"rgb(20, 29, 49)"} colour1={"rgb(14, 22, 39)"} colour2={"rgb(14, 22, 39)"} bcolour={"rgb(34,43,68)"} bcolour1={"rgb(14, 22, 39)"} bcolour2={"rgb(14, 22, 39)"} close={toggle1} visible={true}></Nav>
            <Web3Modal visible={show1} close={toggle1}></Web3Modal>
            <BrideModal></BrideModal>
        </>
    )
}

export default BridgePage
