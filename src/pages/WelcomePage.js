import React  from "react"
import { Route } from "react-router-dom";
import { paths } from "./routes";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage"

function WelcomePage() { 

  return (
      <>
        <Route exact path={paths.HOME} component={HomePage}></Route>
        <Route exact path={paths.ABOUT} component={AboutPage}></Route>
      </>
  )

}

export default WelcomePage;
