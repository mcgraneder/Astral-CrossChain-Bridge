import React, { useState, useEffect, useMemo } from "react"
import { getContract } from "../utils/utils";
import abi from "../utils/Abis/ABI.json"
import abi2 from "../utils/Abis/AB12.json"
import { useWeb3React } from "@web3-react/core";

const RenAddress = "0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"
const BridgeAddress = "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B"

function useContract(
    addressOrAddressMap,
    ABI,
    withSignerIfPossible = true
    ) {
    const { library, account, chainId } = useWeb3React()
    
    return useMemo(() => {
        if (!addressOrAddressMap || !ABI || !library || !chainId) return null
        let address
        if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
        else address = addressOrAddressMap[chainId]
        if (!address) return null
        try {
        return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
        } catch (error) {
        console.error('Failed to get contract', error)
        return null
        }
    }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account])
}

export default useContract


