import { useEffect } from 'react';
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core"
import { 
    injected, 
    fortmatic, 
    portis, 
    torus, 
    walletconnect 
} from "../connectors/provider";
import { PROVIDERS } from '../constants/wallets';
import { useHistory } from 'react-router-dom';

function useAuth() {

    var { active, account, library, activate, deactivate } = useWeb3React()
    var provider = localStorage.getItem("provider")
    let history = useHistory()
 
    useEffect(() => {
        if(library) localStorage.setItem("currentAccount", account);
        if (!library) {
            connectOnLoad()
       }
    }, [library])

//use network pollinhg intervak to warn usr their offline
function connectOnLoad() {
    if ( provider == null) return
    if (provider === PROVIDERS.FORTMATIC) provider = fortmatic
    if (provider === PROVIDERS.INJECTED) provider = injected
    if (provider === PROVIDERS.WALLETCONNECT) return 
    if (provider === PROVIDERS.PORTIS) provider = portis
    if (provider === PROVIDERS.TORUS) provider = torus

    if (provider == injected) {
        activate(provider, undefined, true).catch((error) => {
            if (error instanceof UnsupportedChainIdError) {
                activate(provider) // a little janky...can't use setError because the connector isn't set
              } else {
                disconnect()
                history.push("/")
            } 
        })
    } else {
        setTimeout(async () => {
            activate(provider, undefined, true).catch((error) => {
                if (error instanceof UnsupportedChainIdError) {
                    activate(provider) // a little janky...can't use setError because the connector isn't set
                        // disconnect()
                    history.push("/")
                  } else {
                    disconnect()
                    history.push("/")
                 } 
            })
        }, 2000)
    }   
}
function connectOn(provider1) {   
    if(active) {
        alert("You must dissconnect first")
        return
    }
    if (provider1 === PROVIDERS.FORTMATIC) provider = fortmatic
    if (provider1 === PROVIDERS.INJECTED) provider = injected
    if (provider1 === PROVIDERS.WALLETCONNECT) provider = walletconnect  
    if (provider1 === PROVIDERS.PORTIS) provider = portis
    if (provider1 === PROVIDERS.TORUS) provider = torus

    activate(provider, undefined, true).then(() => localStorage.setItem("provider", provider1))
    .catch((error) => {
        if (error instanceof UnsupportedChainIdError) {
            activate(provider) // a little janky...can't use setError because the connector isn't set
        } else {
            disconnect()
            localStorage.removeItem("provider");
        } 
    })
}


async function disconnect() {
    try {
        deactivate()
        localStorage.removeItem("currentAccount");
        localStorage.removeItem("provider");
    } catch (err) {
        console.error(err)
    }
}

  return { connectOnLoad, disconnect, connectOn}
}

export default useAuth