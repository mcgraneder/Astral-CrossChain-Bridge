import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar";

const WalletPage = () => {

    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);
    const { active, onPageLoading, account } = useAuth()

    return (

        <>
            <Nav colour={"rgb(7, 16, 33)"} colour1={"rgb(24,33,58)"} colour2={"rgb(7, 16, 33)"} close={toggle1}></Nav>
            <Web3Modal visible={show1} close={toggle1}></Web3Modal>
        </>
    )
}

export default WalletPage
