import React, { useState, useEffect } from "react"
import { getContract } from "../utils/utils"
import { ethers } from "ethers"
import abi from "../utils/Abis/ABI.json"
import abi2 from "../utils/Abis/AB12.json"
import useAuth from "./useAuth"

const useBalance = () => {

    const [bridge, setBridge] = useState()
    const [ren, setRen] = useState()
    const [balance, setBalance] = useState("")

    const { library, account } = useAuth()


    const updateBalance = async () => {
        
        console.log(bridge)
        if(bridge == undefined) return
        const balance = await bridge.getContractTokenbalance("BTC");

        const n = ethers.utils.formatEther(balance.toString())
        setBalance(n)
        console.log(balance)
    };

    useEffect(() => {

        if(library) {

            setBridge(getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account))
            setRen(getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account))
            updateBalance()
            setInterval(() => {
                updateBalance();
              }, 10 * 1000);
        }

    }, [library])


    return balance
}

export default useBalance