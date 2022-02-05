import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar"
import WalletModal from "../components/WalletModal/WalletModal";
import { ethers } from "ethers"
import { getContract } from "../utils/utils";
import abi from "../utils/Abis/ABI.json"
import abi2 from "../utils/Abis/AB12.json"

const WalletPage = () => {

    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);
    var bridgeContract
    var ren
    const { library } = useAuth()

    useEffect(() => {

        if(library) {

            bridgeContract = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, "0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113")
            ren = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, "0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113")
            console.log(bridgeContract)
        }

    }, [])


    return (

        <>
            <Nav colour={"rgb(14, 22, 39)"} colour1={"rgb(27,32,52)"} colour2={"rgb(14, 22, 39)"} bcolour={"rgb(14, 22, 39)"} bcolour1={"rgb(34,43,68)"} bcolour2={"rgb(14, 22, 39)"} close={toggle1} visible={true}></Nav>
            <Web3Modal visible={show1} close={toggle1}></Web3Modal>
            <WalletModal close={toggle1} ren={ren} bridgeContract={bridgeContract}></WalletModal>
        </>
    )
}

export default WalletPage
