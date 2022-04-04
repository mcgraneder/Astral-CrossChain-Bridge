import React from "react"
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import BridgePage from "./pages/BridgePage";
import WalletPage from "./pages/WalletPage";
import TransactionPage from "./pages/TransactionPage";
import DexPage from "./pages/DexPage"
import ERC20BridgePage from "./pages/ERC20BrifgePage";

function MainPage() { 

  return (
    <>
            <Route exact path="/bridge" component={BridgePage}></Route>
            <Route exact path="/bridge/erc20bridge" component={ERC20BridgePage}></Route>
            <Route exact path="/wallet" component={WalletPage}/>
            <Route exact path="/transactions" component={TransactionPage}></Route>
            <Route exact path="/dex" component={DexPage}></Route>
    </>
    
  )

}

export default MainPage;
