import React, { useState, useEffect } from 'react';
import RenLogo from "../assets/RenLogo.svg"
import ConnectWalletButton from '../Buttons/ConnectWalletButton/ConnjectWalletButton';
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
import useAuth from '../../hooks/useAuth';
import threeDots from "../assets/threeDots.svg"
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import AccountDetailsModal from '../AccountDetails/AccountDetailsModal';
import Web3Modal from '../Web3Modal/Web3Modal';

export default function Nav() {

    const [toggleState, setToggleState] = useState(Number(localStorage.getItem("state")))
    const [balance, setBalance] = useState(0.000)
    const { library, account, active } = useWeb3React()
    const provider = localStorage.getItem("provider")
    const [showWalletModal, setShowWalletModal] = useState(false);
    const [showAccountDetails, setshowAccountDetails] = useState(false);
    const { connectOn, disconnect } = useAuth()
    const toggleAccountDetails = () => setshowAccountDetails(!showAccountDetails);
    const toggleWalletModal = () => setShowWalletModal(!showWalletModal);
  
    
    useEffect(() => {
        if(account) {
            library.getBalance(account).then((result) => {
                result = Web3.utils.fromWei(result.toString(), "ether")
                var balance = new Number(result)
                balance = balance.toFixed(4)
                setBalance(balance)
            })
        }
    }, [library, account])

    const toggleTab = (index) => {
        localStorage.setItem("state", index)
        setToggleState(index)
    }

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
            connectOn={connectOn} 
            disconnect={disconnect}
          />
            <NavContainer>
                <NavWrapper>
                    <NavLogoContainer>
                        <NavLogo src={RenLogo} height="70px" width="70px"></NavLogo>
                        <NavLogoLink href="https://renproject.io/" >RenBridge</NavLogoLink>
                    </NavLogoContainer>
                    <NavMenu visible={localStorage.getItem("provider")}>
                        <NavItem >
                            <NavButton 
                                active={toggleState != 1 ? true : false} 
                                to="/bridge" onClick={() => toggleTab(1)}
                                >Bridge
                            </NavButton>
                            <NavButton 
                                active={toggleState != 2 ? true : false} 
                                to="/wallet" 
                                onClick={() => toggleTab(2)}
                                >Wallet
                            </NavButton>
                            <NavButton 
                                active={toggleState != 3 ? true : false} 
                                to="/dex" 
                                onClick={() => toggleTab(3)}
                                >Trade
                            </NavButton>
                            <NavButton 
                                active={toggleState != 4 ? true : false} 
                                to="/transactions" 
                                onClick={() => toggleTab(4 )}
                                >History
                            </NavButton>
                        </NavItem>
                    </NavMenu>
                    <NavMenu2>
                    <NavItem2 active={active}>
                        {provider && <BalanceContainer active={active}>{balance} ETHER</BalanceContainer>}
                            <ConnectWalletButton 
                                active={active} 
                                left={"82.3%"} 
                                top={"31.5%"} 
                                close={!localStorage.getItem("provider") ? toggleWalletModal : toggleAccountDetails} 
                                onclick={!localStorage.getItem("provider") ? toggleWalletModal : toggleAccountDetails} 
                                height="160" 
                                fontsize="17" 
                                colour="rgb(20, 29, 49)" 
                                width="40">
                            </ConnectWalletButton>
                    </NavItem2>
                        <NavItem3 active={active} visible={localStorage.getItem("provider")}>
                        <BalanceContainer active={active}>
                        <NavLogo src={threeDots} height="30px" width="30px"></NavLogo></BalanceContainer> 
                    </NavItem3>
                    </NavMenu2>
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}
