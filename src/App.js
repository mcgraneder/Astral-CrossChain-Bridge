import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import BridgePage from "./pages/BridgePage";
import { GlobalStyles } from "./components/GlobalStyles";
import Bridge from "./components/Bridge/Bridge";
import PageLoad from "./components/PageLoadSpinner/PageLoadSpinner";
import useOnPageLoad from "./hooks/usePageOnLoad";
import WalletPage from "./pages/WalletPage";
import TransactionPage from "./pages/TransactionPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import { Web3Provider } from "@ethersproject/providers";

import { OrderMap } from "immutable"

function getLibrary(provider) {
  return new Web3Provider(provider)
}

function App() { 

  const loading = useOnPageLoad()

  
 
  return (

    <div>
      {loading && <PageLoad></PageLoad>}

      <Web3ReactProvider getLibrary={getLibrary}>
        <Router>
        {/* <Nav bcolour={"rgb(34,43,68)"} bcolour1={"rgb(14, 22, 39)"} bcolour2={"rgb(14, 22, 39)"} visible={true}></Nav> */}
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/bridge" component={BridgePage}></Route>
            
            <Route exact path="/wallet" component={WalletPage}></Route>
            <Route exact path="/transactions" component={TransactionPage}></Route>
          </Switch>
          <Footer colour={"rgb(24,33,58)"} colour1={"rgb(7, 16, 33)"} colour2={"rgb(7, 16, 33)"}></Footer>
        </Router>
        {/* <BridgePage></BridgePage> */}
      </Web3ReactProvider>
    </div>
  )

}

export default App;
