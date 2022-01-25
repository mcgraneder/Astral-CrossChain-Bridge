import React from 'react';
// import ConnectWalletButton from '../Buttons/ConnectWalletButton';
import RenLogo from "../assets/RenLogo.svg"
import { NavContainer, 
         NavWrapper,
         NavLogoContainer,
         NavLogo,
         NavMenu,
         NavItem, 
         NavButton,
         NavButton2,
         NavItem2,
         NavMenu2
} from './NavbarStyles';

export default function Nav({close}) {


  return (
      
        <div>
            <NavContainer>
                <NavWrapper>
                    <NavLogoContainer>
                        <NavLogo src={RenLogo} height="70px" width="70px"></NavLogo>
                        RenBridge
                    </NavLogoContainer>
                    <NavMenu>
                        <NavItem>
                            <NavButton color={"rgb(33,36,41)"}>Bridge</NavButton>
                            <NavButton color={"rgb(25,27,31)"}>Wallet</NavButton>
                            <NavButton color={"rgb(25,27,31)"}>Transactions</NavButton>
                        </NavItem>
                    </NavMenu>
                    <NavMenu2>
                    <NavItem2>
                       0 ETH
                            <NavButton2 color={"rgb(23,42,66)"}>Connect Wallet</NavButton2>
                        </NavItem2>
                    </NavMenu2>
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}
