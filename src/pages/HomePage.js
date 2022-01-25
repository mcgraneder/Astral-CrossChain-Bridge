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
    const { active, onPageLoading, account } = useAuth()
    var loading = useOnPageLoad()
    return (

        <>
             {loading && <PageLoad></PageLoad>}
            <Nav colour={"rgb(24,33,58)"} colour1={"rgb(7, 16, 33)"} colour2={"rgb(7, 16, 33)"} close={toggle1} visible={false}></Nav>
            <Web3Modal visible={show1} close={toggle1}></Web3Modal>
            <LoginStyledContainer>
                <Home close={toggle1}></Home>
            </LoginStyledContainer>
           
            
        </>
    )
}

export default HomePage
