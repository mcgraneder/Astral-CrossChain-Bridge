import React, { useState, useEffect, useCallback } from "react";
import useAuth from "../hooks/useAuth";
import { getContract } from "../utils/utils";
import abi from "../utils/Abis/ABI.json"
import abi2 from "../utils/Abis/AB12.json"
import Web3 from "web3";

const useBalance = () => {

    const [ren1, setRen1] = useState()
    const [bridge, setBridge] = useState()
    const [balance, setBalance] = useState(0);
  
    const { library, account } = useAuth()

    const getBalance = React.useCallback(() => {

        if(library) {

            const bridgeContract = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account);
            const renContract = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);

            setBridge(bridgeContract)
            setRen1(renContract)

            bridgeContract.getContractTokenbalance("BTC")
            .then((balance) => {
                console.log(balance)
                const n = Web3.utils.fromWei(balance.toString(), "Gwei")
                console.log(n)
                setBalance(n)
            });
        }
        
    }, [library])

    useEffect(() => {

        (async () => {
            if (library) {
            getBalance();
            }
        })().catch(console.error);
        

    }, [getBalance]);


    return { balance, setBalance}
}

export default useBalance
