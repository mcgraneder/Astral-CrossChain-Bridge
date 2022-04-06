import React, { useState, useEffect } from "react";
import { getContract } from "../utils/utils";
import abi from "../utils/Abis/ABI.json"
import abi2 from "../utils/Abis/AB12.json"
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core"

const useBalance = () => {

    const [ren1, setRen1] = useState()
    const [bridge, setBridge] = useState()
    const [balance, setBalance] = useState(0.0000);
  
    const { library, account, chainId } = useWeb3React()

    const getBalance = React.useCallback(() => {

        if(library) {

            const bridgeContract = getContract("0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B", abi, library, account);
            const renContract = getContract("0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f", abi2, library, account);

            setBridge(bridgeContract)
            setRen1(renContract)

            bridgeContract.getContractTokenbalance("BTC")
            .then((result) => {
                result = Web3.utils.fromWei(result.toString(), "Gwei") 
                var balance = new Number(result)
                balance = balance.toFixed(6)
                setBalance(balance)
            })
            .catch((error) => {
                console.log(error)
                setBalance(0)
            });
        }
        
    }, [library, chainId])

    useEffect(() => {

        (async () => {
            if (library) {
            getBalance();
            }
        })().catch(console.error);
        

    }, [getBalance, library, chainId]);


    return { balance, setBalance}
}

export default useBalance
