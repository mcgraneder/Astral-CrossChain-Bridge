import React, { useEffect } from "react"
import { Route, useHistory, Switch } from "react-router-dom";
import { paths } from "./routes";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage"

function WelcomePage() { 

  return (
      <>
      
        <Route path={paths.HOME} component={HomePage}></Route>
        <Route path={paths.NOT_FOUND} component={AboutPage}></Route>
      </>
  )

}

export default WelcomePage;
