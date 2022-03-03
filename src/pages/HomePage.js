import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import Web3Modal from "../components/Web3Modal/Web3Modal";
import Nav from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import { LoginStyledContainer } from "../components/Home/StyledContainer";
import useOnPageLoad from "../hooks/usePageOnLoad";
import PageLoad from "../components/PageLoadSpinner/PageLoadSpinner";
import { useEffect } from "react/cjs/react.development";

const HomePage = () => {

    const [show1, setShow1] = useState(false);
    const toggle1 = () => setShow1(!show1);

    var loading = useOnPageLoad()
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
