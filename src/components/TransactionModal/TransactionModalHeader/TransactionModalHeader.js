import React, { useState } from 'react';
// import ConnectWalletButton from '../Buttons/ConnectWalletButton';
import RenLogo from "../../assets/RenLogo.svg"
import ConnectWalletButton from '../../Buttons/ConnectWalletButton/ConnjectWalletButton';
import { useWeb3React } from '@web3-react/core';
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
} from './TransactionModalHeaderStyles';
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react/cjs/react.development';
import threeDots from "../../assets/threeDots.svg"

export default function TransactionModalHeader({colour, colour1, colour2, bcolour, bcolour1, bcolour2, close, visible}) {

    const [bridge, setBridge] = useState(false);
    const [wallet, setWallet] = useState(false);
    const [transaction, setTransaction] = useState(false);

  return (
      
            <NavContainer>
                <NavWrapper>
                    <NavLogoContainer>
                        <NavLogoLink href="https://renproject.io/" >RenBridge</NavLogoLink>
                    </NavLogoContainer>
                    {/* <NavMenu visible={visible}>
                        <NavItem>
                            <NavButton to="/" color={colour} bbcolour={bcolour}>Bridge</NavButton>
                            <NavButton to="/wallet" color={colour1} bbcolour={bcolour1}>Wallet</NavButton>
                            <NavButton to="/transactions" color={colour2} bbcolour={bcolour2}>Transactions</NavButton>
                        </NavItem>
                    </NavMenu> */}
                </NavWrapper>
            </NavContainer>
           

      );
}
