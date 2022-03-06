import React, { useState, useEffect, useRef } from 'react';
// import ConnectWalletButton from '../Buttons/ConnectWalletButton';
import RenLogo from "../assets/RenLogo.svg"
import ConnectWalletButton from '../Buttons/ConnectWalletButton/ConnjectWalletButton';
import { NavContainer, 
         NavWrapper,
         NavLogoContainer,
         NavLogo,
         NavMenu,
         NavItem, 
         NavButton,
         NavButton2,
         NavItem2,
         NavMenu2,
         BalanceContainer,
         NavLogoLink,
         NavItem3,
         NavMenu3
} from './NavbarStyles';
import useAuth from '../../hooks/useAuth';
import threeDots from "../assets/threeDots.svg"
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import {ethers} from "ethers"
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import { formatEther } from 'ethers/lib/utils';

export default function Nav({ close, toggleAccountDetails}) {

    const [toggleState, setToggleState] = useState(Number(localStorage.getItem("state")))
    const [balance, setBalance] = useState(0.000)
    const toggleTab = (index) => {
        localStorage.setItem("state", index)
        setToggleState(index)
    }
    const { library, account, active } = useWeb3React()

    useEffect(() => {

        if(account) {

            library.getBalance(account).then((result) => {

                result = Web3.utils.fromWei(result.toString(), "ether")
                var balance = new Number(result)
                balance = balance.toFixed(4)
                setBalance(balance)
            })
        }

        // return balance ? `${formatEther(balance)} ETH` : null;

    }, [library, account])

    const provider = localStorage.getItem("provider")
  return (
      
        <div>
            <NavContainer>
                <NavWrapper>
                    <NavLogoContainer>
                        <NavLogo src={RenLogo} height="70px" width="70px"></NavLogo>
                        <NavLogoLink href="https://renproject.io/" >RenBridge</NavLogoLink>
                    </NavLogoContainer>
                    <NavMenu visible={localStorage.getItem("provider")}>
                        <NavItem >
                            <NavButton active={toggleState != 1 ? true : false} to="/" onClick={() => toggleTab(1)}>Bridge</NavButton>
                            <NavButton active={toggleState != 2 ? true : false} to="/wallet" onClick={() => toggleTab(2)}>Wallet</NavButton>
                            <NavButton active={toggleState != 3 ? true : false} to="/dex" onClick={() => toggleTab(3)}>Trade</NavButton>
                            <NavButton active={toggleState != 4 ? true : false} to="/transactions" onClick={() => toggleTab(4 )}>History</NavButton>
                        </NavItem>
                    </NavMenu>
                    <NavMenu2>
                    <NavItem2 active={active}>
                        {provider && <BalanceContainer active={active}>{balance} ETHER</BalanceContainer>}
                      
                            {/* <NavButton2 color={"rgb(23,42,66)"} onClick={close}>Connect Wallet</NavButton2> */}
                            <ConnectWalletButton active={active} left={"82.3%"} top={"31.5%"} close={!localStorage.getItem("provider") ? close : toggleAccountDetails} onclick={!localStorage.getItem("provider") ? close : toggleAccountDetails} height="160" fontsize="17" colour="rgb(20, 29, 49)" width="40"></ConnectWalletButton>
                    </NavItem2>
                    
                        <NavItem3 active={active} visible={localStorage.getItem("provider")}>
                        <BalanceContainer active={active}>
                        <NavLogo src={threeDots} height="30px" width="30px"></NavLogo></BalanceContainer>
                      
                           
                        </NavItem3>
                    </NavMenu2>
                    {/* <NavMenu3>
                    
                    </NavMenu3> */}
                    
                    
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}
