import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RenLogo from "../assets/RenLogo.svg"
import ConnectWalletButton from '../Buttons/ConnectWalletButton/ConnjectWalletButton';
import Ethereum from "../assets/ethereum-logo.png"
import { NavContainer, 
         NavWrapper,
         NavLogoContainer,
         NavLogo,
         NavMenu,
         NavItem, 
         NavButton,
         NavItem2,
         NavMenu2,
         BalanceContainer,
         NavLogoLink,
         NavItem3,
} from './NavbarStyles';
import threeDots from "../assets/threeDots.svg"
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
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

    const [balance, setBalance] = useState("0.0000")
    const { library, account, active } = useWeb3React()
    const [showWalletModal, setShowWalletModal] = useState(false);
    const [showAccountDetails, setshowAccountDetails] = useState(false);

    const toggleAccountDetails = () => setshowAccountDetails(!showAccountDetails);
    const toggleWalletModal = () => setShowWalletModal(!showWalletModal);

    useEffect(() => {
        if(account) {
            library.getBalance(account).then((result) => {
                result = Web3.utils.fromWei(result.toString(), "ether")
                var balance = Number(result)
                balance = balance.toFixed(4)
                setBalance(balance)
            })
        }
    }, [library, account])

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
            <NavContainer>
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