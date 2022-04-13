import React, { useState, useEffect, useMemo } from "react"
import { getContract } from "../utils/utils";
import abi from "../utils/Abis/ABI.json"
import abi2 from "../utils/Abis/AB12.json"
import { useWeb3React } from "@web3-react/core";

const RenAddress = "0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"
const BridgeAddress = "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B"

const useContract = () => {

    const [ren, setRen] = useState(null)
    const [bridge, setBridge] = useState(null)

    const { account, library } = useWeb3React()

    useEffect(() => {
        if(library) {
            const bridgeContract = getContract(BridgeAddress, abi, library, account);
            const renContract = getContract(RenAddress, abi2, library, account);

            setRen(renContract)
            setBridge(bridgeContract)
        }
    }, [library]) 

    return { bridge, ren }

}

export default useContract