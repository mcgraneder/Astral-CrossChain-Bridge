import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
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
import { useWeb3React } from "@web3-react/core";
import { getContract } from "./utils/utils";
import abi2 from "./utils/Abis/AB12.json"
import abi from "./utils/Abis/ABI.json"

const RenAddress = "0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"
const BridgeAddress = "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B"

function App() { 

  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showAccountDetails, setshowAccountDetails] = useState(false);
  const [pending, setPending] = useState(false)
  
  const toggleAccountDetails = () => setshowAccountDetails(!showAccountDetails);
  const toggleWalletModal = () => setShowWalletModal(!showWalletModal);

  const loading = useOnPageLoad()
  const { connectOn, connectOnLoad, disconnect, error } = useAuth()
  // const history = useHistory();
 
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
            // loading={pending}
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
            <Route exact path="/wallet" component={() => 
              <WalletPage 
                pending={pending} 
                setPending={setPending}
              />}
            />
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
