import React, { useEffect } from "react"
import { Route, useHistory } from "react-router-dom";
import { paths } from "./routes";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage"

function App() { 

  let history = useHistory()

  useEffect(() => {
      if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      } else {
        console.log("unsupprted browser")
          history.push("/installmetamask")
      }
    }, [])

  return (
      <>
        <Route path={paths.HOME} component={HomePage}></Route>
        <Route path={paths.ABOUT} component={AboutPage}></Route>
      </>
  )

}

export default App;
