import React from "react"
import { Route } from "react-router-dom";
import BridgePage from "./pages/BridgePage";
import WalletPage from "./pages/WalletPage";
import TransactionPage from "./pages/TransactionPage";
import DexPage from "./pages/DexPage"
import ERC20BridgePage from "./pages/ERC20BrifgePage";
import { paths } from "./pages/routes";

function App() { 

  return (

      <>
        <Route path={paths.BRIDGE} component={BridgePage}></Route>
        <Route path={paths.ERC20BRIDGE} component={ERC20BridgePage}></Route>
        <Route path={paths.WALLET} component={WalletPage}/>
        <Route path={paths.TRANSACTIONS} component={TransactionPage}></Route>
        <Route path={paths.DEX} component={DexPage}></Route>
      </>
  )

}

export default App;
