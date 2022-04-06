import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"

const InstallMetamaskPage = () => {

    let history = useHistory()

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
          console.log('MetaMask is installed!');
          history.push("/")
        } 
      }, [])

    return (
        <>
        </>
    )
}

export default InstallMetamaskPage