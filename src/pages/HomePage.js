import React, { useState, useEffect } from "react";
import Home from "../components/Home/Home";
import { LoginStyledContainer } from "../components/Home/StyledContainer";
import useOnPageLoad from "../hooks/usePageOnLoad";
import PageLoad from "../components/PageLoadSpinner/PageLoadSpinner";
import { useHistory } from "react-router-dom";
const HomePage = () => {

    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);

    var loading = useOnPageLoad()
    let history = useHistory()

    useEffect(() => {
        if (typeof window.ethereum !== 'undefined') {
          console.log('MetaMask is installed!');
        } else {
          console.log("unsupprted browser")
        //   window.location.href = "/installMetamask"
        history.push("/installmetamask")
        }
      }, [])
      
    return (

        <>
            {loading && <PageLoad></PageLoad>}
            <LoginStyledContainer>
                <Home close={toggle1}></Home>
            </LoginStyledContainer> 
        </>
    )
}

export default HomePage
