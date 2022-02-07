import React, { useState } from "react";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar";
import BrideModal from "../components/BridgeModal/BridgeModal";
import useBalance from "../hooks/useBalance";

const BridgePage = () => {

    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);
    const { balance, setBalance } = useBalance()

    return (

        <>
            <Nav colour={"rgb(27,32,52);;"} colour1={"rgb(14, 22, 39)"} colour2={"rgb(14, 22, 39)"} bcolour={"rgb(34,43,68)"} bcolour1={"rgb(14, 22, 39)"} bcolour2={"rgb(14, 22, 39)"} close={toggle1} visible={true}></Nav>
            <Web3Modal visible={show1} close={toggle1}></Web3Modal>
            <BrideModal close={toggle1} balance={balance} setBalance={setBalance}></BrideModal>
        </>
    )
}

export default BridgePage
