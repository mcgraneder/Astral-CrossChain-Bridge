import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import BridgePage from "./pages/BridgePage";
import PageLoad from "./components/PageLoadSpinner/PageLoadSpinner";
import useOnPageLoad from "./hooks/usePageOnLoad";
import WalletPage from "./pages/WalletPage";
import TransactionPage from "./pages/TransactionPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import { Web3Provider } from "@ethersproject/providers";
import DexPage from "./pages/DexPage"
import ERC20BridgePage from "./pages/ERC20BrifgePage";
import Web3Modal from "./components/Web3Modal/Web3Modal";
import useAuth from "./hooks/useAuth";
import AccountDetailsModal from "./components/AccountDetails/AccountDetailsModal";

function App() { 

  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showAccountDetails, setshowAccountDetails] = useState(false);

  const toggleAccountDetails = () => setshowAccountDetails(!showAccountDetails);
  const toggleWalletModal = () => setShowWalletModal(!showWalletModal);

  const loading = useOnPageLoad()
  const { connectOn, disconnect, error } = useAuth()

  
 
  return (

    <div>
      {loading && <PageLoad></PageLoad>}
        <Router>
          <AccountDetailsModal 
            visible={showAccountDetails} 
            close={toggleAccountDetails} 
            toggleAccountDetails={toggleWalletModal}
          />
          <Nav 
            close={toggleWalletModal} 
            toggleAccountDetails={toggleAccountDetails}
          />
          <Web3Modal 
            visible={showWalletModal} 
            close={toggleWalletModal} 
            toggleAccountDetails={toggleAccountDetails} 
            connectOn={connectOn} 
            disconnect={disconnect}
          />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/bridge" component={BridgePage}></Route>
            <Route exact path="/erc20bridge" component={ERC20BridgePage}></Route>
            <Route exact path="/wallet" component={WalletPage}></Route>
            <Route exact path="/transactions" component={TransactionPage}></Route>
            <Route exact path="/dex" component={DexPage}></Route>
          </Switch>
          <Footer 
            colour={"rgb(24,33,58)"} 
            colour1={"rgb(7, 16, 33)"} 
            colour2={"rgb(7, 16, 33)"}
          />
        </Router>
    </div>
  )

}

export default App;
