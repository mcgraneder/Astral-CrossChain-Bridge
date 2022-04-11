import React from "react"
import { Route } from "react-router-dom";
import BridgePage from "./BridgePage";
import WalletPage from "./WalletPage";
import TransactionPage from "./TransactionPage";
import DexPage from "./DexPage"
import ERC20BridgePage from "./ERC20BrifgePage";
import { paths } from "./routes";
import Nav from "../components/Navbar/Navbar";
import SideBar from "../components/Navbar/SideBar/SideBar";
import { 
  Grid,
  GridSidebar,
  GridHeader,
  GridMain
} from "./LayoutStyles";
function App() { 

  return (

      <>
        <Grid>
          <GridSidebar>
            <SideBar/>
          </GridSidebar>
          <GridHeader>
          <Nav/>
          </GridHeader>
          <GridMain>
            main
            <Route path={paths.BRIDGE} component={BridgePage}></Route>
            <Route path={paths.ERC20BRIDGE} component={ERC20BridgePage}></Route>
            <Route path={paths.WALLET} component={WalletPage}/>
            <Route path={paths.TRANSACTIONS} component={TransactionPage}></Route>
            <Route path={paths.DEX} component={DexPage}></Route>
          </GridMain>
        </Grid>
      </>
  )

}

// main
// <Route path={paths.BRIDGE} component={BridgePage}></Route>
// <Route path={paths.ERC20BRIDGE} component={ERC20BridgePage}></Route>
// <Route path={paths.WALLET} component={WalletPage}/>
// <Route path={paths.TRANSACTIONS} component={TransactionPage}></Route>
// <Route path={paths.DEX} component={DexPage}></Route>
export default App;
