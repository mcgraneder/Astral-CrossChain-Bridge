import { useState, useEffect, useRef, useMemo } from 'react';
import { useWeb3React } from "@web3-react/core"
import { injected, 
         fortmatic, 
         portis, 
         torus, 
         walletconnect 
} from "../connectors/provider";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
export const walletconnect1 = new WalletConnectConnector({
    rpc: { 1: "https://mainnet.infura.io/v3/ba5ee6592e68419cab422190121eca4c" },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true
})

export default function useAuth() {

    const [loading, setLoading] = useState(false);
    const [onPageLoading, setOnPageLoading] = useState(true)
    const [acc, setAcc] = useState("")
    const web32 = useRef(null)
    const [address, setAddress] = useState()
    let web3

    var { active, account, library, connector, activate, deactivate } = useWeb3React()
    var loggedInAccount = localStorage.getItem("account")
    var provider = localStorage.getItem("provider")
    // console.log(localStorage.getItem("provider"))

    useEffect(() => {
        if(library) localStorage.setItem("currentAccount", account);
    }, [library])

    async function connectOnLoad() {

        if ( localStorage.getItem("provider") == null)  {
            // console.log("hello")
            return
        }
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
           
            // await deactivate()
            setTimeout(async () => {
                await activate(provider, undefined, true).catch((error) => {
                    console.log('Tx signature error:', error);;
                    setOnPageLoading(true)
                    disconnect()
                   
                    
                })
            }, 2000)

            // await deactivate()
            // await activate(provider, undefined, true);
        
          } catch (err) {

            console.error(err)
            disconnect()
            console.log("aaaaaaaaaaaaaaa")
            // localStorage.removeItem("provider");

            setOnPageLoading(true)
          }
          setOnPageLoading(false)
       
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

        // console.log(provider1)
        if (provider1 === "fortmatic") provider = fortmatic
        if (provider1 === "injected") provider = injected
        if (provider1 === "walletconnect") {

            provider = walletconnect1
            
        }
        if (provider1 === "portis") provider = portis
        if (provider1 === "torus") provider = torus 

        // console.log(provider)
        // console.log(injected)
       
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
        web3 = undefined;
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