import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import BridgePage from "./pages/BridgePage";
import PageLoad from "./components/PageLoadSpinner/PageLoadSpinner";
import useOnPageLoad from "./hooks/usePageOnLoad";
import WalletPage from "./pages/WalletPage";
import TransactionPage from "./pages/TransactionPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import DexPage from "./pages/DexPage"
import ERC20BridgePage from "./pages/ERC20BrifgePage";
import AccountsChangeModal from "./components/AccountsChangeModal/AccountsChangeModal";
import { useWeb3React } from "@web3-react/core";
import useBalance from "./hooks/useBalance";
import { TransactionStateContext, TransactionProvider } from "./contexts/transactionContext";
import { BridgeCurrency } from "./constants/EnviornmentVariables";
import { RenNetwork } from "@renproject/interfaces";
export const RenChain = {
  arbitrum: "arbitrum",
  avalanche: "avalanche",
  binanceSmartChain: "binanceSmartChain",
  ethereum: "ethereum",
  fantom: "fantom",
  polygon: "polygon",
  solana: "solana",
  bitcoin: "bitcoin",
  zcash: "zcash",
  bitcoinCash: "bitcoinCash",
  dogecoin: "dogecoin",
  digibyte: "digibyte",
  terra: "terra",
  filecoin: "filecoin",
  unknown: "unknown",
}
function App() { 

  const networkMappingLegacy = {
    mainnet: RenNetwork.Mainnet,
    testnet: RenNetwork.Testnet,
};


  const oldNetworkMappings = {
      [RenChain.ethereum]: networkMappingLegacy,
      [RenChain.binanceSmartChain]: networkMappingLegacy,
      [RenChain.fantom]: networkMappingLegacy,
      [RenChain.polygon]: networkMappingLegacy,
      [RenChain.avalanche]: networkMappingLegacy,
      [RenChain.solana]: networkMappingLegacy,
      [RenChain.arbitrum]: networkMappingLegacy,
    };
  

  console.log(RenNetwork)
  const loading = useOnPageLoad()

  return (

    <TransactionProvider>
      <div>
        {loading && <PageLoad></PageLoad>}
          <Router>
            <Nav/>
            <AccountsChangeModal/>
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/bridge" component={BridgePage}></Route>
              <Route exact path="/erc20bridge" component={ERC20BridgePage}></Route>
              <Route exact path="/wallet" component={WalletPage}
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
    </TransactionProvider>
  )

}

export default App;
