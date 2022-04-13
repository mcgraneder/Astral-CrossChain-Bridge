import React  from "react"
import { Route } from "react-router-dom";
import { paths } from "./routes";
import BridgePage from "./BridgePage";
import ERC20BridgePage from "./ERC20BrifgePage";

function Bridges() { 

  return (
      <>
        <Route exact path={paths.BRIDGE} component={BridgePage}></Route>
        <Route exact path={paths.ERC20BRIDGE} component={ERC20BridgePage}></Route>
      </>
  )

}

export default Bridges;
