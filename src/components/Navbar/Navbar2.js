import React, { useState } from 'react';
import styled from 'styled-components';
import RenLogo from "../assets/RenLogo.svg"
import { NavContainer, 
         NavItem2,
         NavMenu2,
} from './NavbarStyles';
import AccountDetailsModal from '../AccountDetails/AccountDetailsModal';
import Web3Modal from '../Web3Modal/Web3Modal';
import Connect from './Connect';

export const NavWrapper = styled.div`

    // background:  rgb(35,35,52);
    height: 60px;
    padding: 15px 30px;
    display: flex;
    z-index: 99;
    
    justify-content: space-between;
  
`

export const NavLogoContainer = styled.div`

    width: 50px;
    display: flex;
    flex-direction: space-between;
    align-items: center;
    justify-content: center;
    float: left;
    padding-left: 90px;
    margin-right: 20px;
    // padding-top: 5px;
    color: White;
    font-size: 35px;

    @media(max-width: 800px) {
        padding: 0;
      
    };
    
      

`

export const NavLogoLink = styled.a`

    text-decoration: none;
    color: White;
    padding-bottom: 5px;

    &:hover {
        cursor: pointer;
    }

    @media(max-width: 800px) {
        display: none;
      
    };
`

export const NavLogo = styled.img`

    
    color: White;
    font-wight: bold;
`

export const ChainSelectorIconWrapper = styled.div`

    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ChainSelectorIcon = styled.img`

    // display: flex;
    // display: flex;
    // justify-content: left;
    // align-items: center;
    width: ${(props) => props.width};
    height:  ${(props) => props.width};
    line-height: 0px;
    padding-top: 1px;
    padding-left: 15px;

    // float: left;
`
export const ChainText = styled.div`

    // display: inline-block;
    padding-left: 10px;
`

export const Wrapper = styled.div`

display: flex;
justify-content: left;
align-items: center;

`

function Nav2() {

    const provider = localStorage.getItem("provider")

    const [showWalletModal, setShowWalletModal] = useState(false);
    const [showAccountDetails, setshowAccountDetails] = useState(false);

    const toggleAccountDetails = () => setshowAccountDetails(!showAccountDetails);
    const toggleWalletModal = () => setShowWalletModal(!showWalletModal);

  return (
      
        <div>
            <AccountDetailsModal 
            visible={showAccountDetails} 
            close={toggleAccountDetails} 
            toggleAccountDetails={toggleWalletModal}
          />
           <Web3Modal 
            visible={showWalletModal} 
            close={toggleWalletModal} 
            toggleAccountDetails={toggleAccountDetails} 
          />
            <NavContainer position={"fixed"}>
                <NavWrapper>
                    <NavLogoContainer>
                        <NavLogo src={RenLogo} height="65px" width="65px"></NavLogo>
                        <NavLogoLink href="https://renproject.io/" >RenBridge</NavLogoLink>
                    </NavLogoContainer>
                    <NavMenu2>
                    <NavItem2 active={provider}>
                            <Connect 
                                active={provider} 
                                left={"82.3%"} 
                                top={"31.5%"} 
                                close={toggleWalletModal} 
                                onclick={toggleWalletModal} 
                                height="160" 
                                fontsize="17" 
                                colour="rgb(20, 29, 49)" 
                                width="40">
                            </Connect>
                    </NavItem2>
                    </NavMenu2>
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}

export default React.memo(Nav2)