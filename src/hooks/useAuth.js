import { useEffect } from 'react';
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core"
import { injected, fortmatic, portis, torus, walletconnect } from "../connectors/provider";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { useHistory } from 'react-router-dom';

export const walletconnect1 = new WalletConnectConnector({
    rpc: { 1: "https://mainnet.infura.io/v3/ba5ee6592e68419cab422190121eca4c" },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true
})

function useAuth() {

    var { active, account, library, activate, deactivate } = useWeb3React()
    var provider = localStorage.getItem("provider")
    let history = useHistory()
 
    useEffect(() => {
        if(library) localStorage.setItem("currentAccount", account);
        if (!library) {
            connectOnLoad()
       }
    }, [library, account, connectOnLoad])

    //use network pollinhg intervak to warn usr their offline
    async function connectOnLoad() {

        if ( localStorage.getItem("provider") == null) return
        if ( localStorage.getItem("provider") === "fortmatic") provider = fortmatic
        if ( localStorage.getItem("provider") === "injected") provider = injected
        if ( localStorage.getItem("provider") === "walletconnect") return
        if ( localStorage.getItem("provider") === "portis") provider = portis
        if ( localStorage.getItem("provider") === "torus") provider = torus 

        try {
            if (provider == injected) {

                activate(provider, undefined, true)
                .catch((error) => {
                    if (error instanceof UnsupportedChainIdError) {
                        activate(provider) // a little janky...can't use setError because the connector isn't set
                      } else {
                        disconnect()
                        history.push("/")
                      } 
                })
            } else {
                setTimeout(async () => {
                    activate(provider, undefined, true)
                    .catch((error) => {
                        if (error instanceof UnsupportedChainIdError) {
                            activate(provider) // a little janky...can't use setError because the connector isn't set
                          } else {
                            disconnect()
                            history.push("/")
                          } 
                    })
                }, 2000)
            }   
        } catch (err) {
            console.error(err)
            disconnect()
          }
    }
    async function connectOn(provider1) {
        
        if(active) {
            alert("You must dissconnect first")
            return
        }

        if (provider1 === "fortmatic") provider = fortmatic
        if (provider1 === "injected") provider = injected
        if (provider1 === "walletconnect") provider = walletconnect  
        if (provider1 === "portis") provider = portis
        if (provider1 === "torus") provider = torus

        try {
            activate(provider, undefined, true).then(() => localStorage.setItem("provider", provider1))
            .catch((error) => {
                if (error instanceof UnsupportedChainIdError) {
                    activate(provider) // a little janky...can't use setError because the connector isn't set
                  } else {
                    disconnect()
                    localStorage.removeItem("provider");
                  } 
            })
        } catch (err) {
            console.log(err)
            disconnect()
            localStorage.removeItem("provider");
        }
    }


    async function disconnect() {
        try {
            deactivate()
            localStorage.removeItem("account");
            localStorage.removeItem("currentAccount");
            localStorage.removeItem("provider");
        } catch (err) {
            console.error(err)
        }
    }

  return { connectOnLoad, disconnect, connectOn}
}

export default useAuth