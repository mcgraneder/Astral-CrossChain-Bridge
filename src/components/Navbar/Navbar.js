import React from 'react';
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
         BalanceContainer
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
                        <BalanceContainer>0 ETH</BalanceContainer>
                      
                            {/* <NavButton2 color={"rgb(23,42,66)"} onClick={close}>Connect Wallet</NavButton2> */}
                            <ConnectWalletButton left={"82%"} top={"31%"} close={close} onclick={close} height="160" fontsize="17" colour="rgb(89, 115, 254)" width="40"></ConnectWalletButton>
                        </NavItem2>
                    </NavMenu2>
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}
