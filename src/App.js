import React, { Suspense, lazy } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Navbar/Navbar";
import PageLoad from "./components/PageLoadSpinner/PageLoadSpinner";
import Footer from "./components/Footer/Footer";
import AccountsChangeModal from "./components/AccountsChangeModal/AccountsChangeModal";
import { TransactionProvider } from "./contexts/transactionContext";
import { paths } from "./pages/routes";

const MainPage = lazy(() => import("./pages/MainPage"));
const HomePage = lazy(() => import("./pages/HomePage"));


const MAIN_PAGE_PATHS = [
  paths.BRIDGE,
  paths.ERC20BRIDGE,
  paths.WALLET,
  paths.HOME,
  paths.TRANSACTIONS,
  paths.DEX
]


function App() { 

  return (

    <TransactionProvider>
      <Router>
        <Suspense fallback={<PageLoad/>}>
          <Nav/>
          <AccountsChangeModal/>
          <Switch>
            <Route exact path={paths.HOME} component={HomePage}></Route>
            <Route exact path={MAIN_PAGE_PATHS} component={MainPage} />
          </Switch>
          <Footer/>
        </Suspense>
      </Router>
    </TransactionProvider>
  )

}

export default App;
