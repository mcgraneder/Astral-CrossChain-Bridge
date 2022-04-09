import React, { useState } from 'react';
import styled from 'styled-components';
import RenLogo from "../assets/RenLogo.svg"
import { NavContainer, 
         NavWrapper,
         NavLogoContainer,
         NavLogo,
         NavItem2,
         NavMenu2,
         NavLogoLink
} from './NavbarStyles';
import AccountDetailsModal from '../AccountDetails/AccountDetailsModal';
import Web3Modal from '../Web3Modal/Web3Modal';
import Connect from './Connect';

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
                                close={!localStorage.getItem("provider") ? toggleWalletModal : toggleAccountDetails} 
                                onclick={!localStorage.getItem("provider") ? toggleWalletModal : toggleAccountDetails} 
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