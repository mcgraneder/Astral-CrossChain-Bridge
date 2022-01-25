import React, { useEffect } from "react"
import Nav from "./components/Navbar/Navbar";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import BridgePage from "./pages/BridgePage";
import { GlobalStyles } from "./components/GlobalStyles";
import Bridge from "./components/Bridge/Bridge";

function getLibrary(provider) {
  return new Web3(provider)
}

function App() { 

  return (

    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <BridgePage></BridgePage>
      </Web3ReactProvider>
    </>
  )

}

export default App;
