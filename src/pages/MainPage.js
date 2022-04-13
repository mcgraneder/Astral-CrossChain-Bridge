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
import Nav3 from "../components/Navbar/Navbar3";
import Bridges from "./Bridges";
import { 
  Grid,
  GridSidebar,
  GridHeader,
  GridMain
} from "./LayoutStyles";

const BRIDEG_PATHS =[
  paths.BRIDGE,
  paths.ERC20BRIDGE
]
function App() { 

  return (

      <>
        <Grid>
          <GridSidebar><SideBar/></GridSidebar>
          <GridHeader><Nav3/></GridHeader>
          <GridMain>
            <Route exact path={BRIDEG_PATHS} component={Bridges}></Route>
            <Route path={paths.WALLET} component={WalletPage}/>
            <Route path={paths.TRANSACTIONS} component={TransactionPage}></Route>
            <Route path={paths.DEX} component={DexPage}></Route>
          </GridMain>
        </Grid>
      </>
  )

}

export default App;
