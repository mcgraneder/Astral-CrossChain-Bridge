import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar";
import TransactionModal from "../components/TransactionModal/TransactionModal";
const TransactionPage = () => {

    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);
 

    return (

        <>
            <Nav colour={"rgb(14, 22, 39)"} colour1={"rgb(14, 22, 39)"} colour2={"rgb(27,32,52);;"}  bcolour={"rgb(14, 22, 39)"} bcolour1={"rgb(14, 22, 39)"} bcolour2={"rgb(34,43,68)"} close={toggle1} visible={true}></Nav>
            <Web3Modal visible={show1} close={toggle1}></Web3Modal>
            <TransactionModal></TransactionModal>
        </>
    )
}

export default TransactionPage
