import { useState, useEffect, useRef, useMemo } from 'react';
import { useWeb3React } from "@web3-react/core"
import { injected, 
         fortmatic, 
         portis, 
         torus, 
         walletconnect 
} from "../connectors/provider";
import { useHistory } from "react-router-dom";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
export const walletconnect1 = new WalletConnectConnector({
    rpc: { 1: "https://mainnet.infura.io/v3/ba5ee6592e68419cab422190121eca4c" },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true
})

export default function useAuth() {

    const [loading, setLoading] = useState(false);
    const [onPageLoading, setOnPageLoading] = useState(true)
    const history = useHistory();
    const [address, setAddress] = useState()

    var { active, account, library, activate, deactivate } = useWeb3React()
    var provider = localStorage.getItem("provider")
 
    useEffect(() => {
        if(library) localStorage.setItem("currentAccount", account);
    }, [library])

    async function connectOnLoad() {

        if ( localStorage.getItem("provider") == null) return
        if ( localStorage.getItem("provider") == "fortmatic") provider = fortmatic
        if ( localStorage.getItem("provider") == "injected") provider = injected
        if ( localStorage.getItem("provider") == "walletconnect") {
            provider = walletconnect
            return;  
        }
        if ( localStorage.getItem("provider") == "portis") provider = portis
        if ( localStorage.getItem("provider") == "torus") provider = torus 

        setOnPageLoading(false)

         try {
           
            setTimeout(async () => {
                await activate(provider, undefined, true).catch((error) => {
                    setOnPageLoading(true)
                    history.push("/");
                    disconnect()   
                })
            }, 2000)
        
          } catch (err) {

            console.error(err)
            disconnect()
            console.log("aaaaaaaaaaaaaaa")

            setOnPageLoading(true)
          }
         
       
    }


    useEffect(() => {
 
        if (!active) {
             connectOnLoad()
        }
        setAddress(account);
        localStorage.setItem("account", account)
    }, [])


    async function connectOn(provider1) {
        
        if(active) {
            alert("You must dissconnect first")
            return
        }

        if (provider1 === "fortmatic") provider = fortmatic
        if (provider1 === "injected") provider = injected
        if (provider1 === "walletconnect") {
            provider = walletconnect1  
        }
        if (provider1 === "portis") provider = portis
        if (provider1 === "torus") provider = torus 

        setLoading(true)

            try {
                await activate(provider, undefined, true)
                localStorage.setItem("provider", provider1);
               
                setTimeout(() => {

                    setLoading(false)
                    console.log(account)
                }, 800)
                
            } catch (err) {

                console.log(err)
                disconnect()
                setOnPageLoading(false)
                localStorage.removeItem("provider");

                setLoading(false)
            }
    }


    async function disconnect() {
        try {

        deactivate()
        setLoading(false)
        localStorage.removeItem("account");
        localStorage.removeItem("currentAccount");
        localStorage.removeItem("provider");

        } catch (err) {

            console.error(err)
        }
    }


  return { connectOnLoad, disconnect, connectOn, address, setAddress, active, account, loading, library, onPageLoading}
}