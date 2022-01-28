import React, { useState } from 'react';
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
import { useEffect } from 'react/cjs/react.development';
import threeDots from "../assets/threeDots.svg"
export default function Nav({colour, colour1, colour2, bcolour, bcolour1, bcolour2, close, visible}) {

    const [bridge, setBridge] = useState(false);
    const [wallet, setWallet] = useState(false);
    const [transaction, setTransaction] = useState(false);


  const { active } = useAuth()
  return (
      
        <div>
            <NavContainer>
                <NavWrapper>
                    <NavLogoContainer>
                        <NavLogo src={RenLogo} height="70px" width="70px"></NavLogo>
                        <NavLogoLink href="https://renproject.io/" >RenBridge</NavLogoLink>
                    </NavLogoContainer>
                    <NavMenu visible={visible}>
                        <NavItem>
                            <NavButton to="/" color={colour} bbcolour={bcolour}>Bridge</NavButton>
                            <NavButton to="/wallet" color={colour1} bbcolour={bcolour1}>Wallet</NavButton>
                            <NavButton to="/transactions" color={colour2} bbcolour={bcolour2}>Transactions</NavButton>
                        </NavItem>
                    </NavMenu>
                    <NavMenu2>
                    <NavItem2 active={active}>
                        {active &&  <BalanceContainer active={active}>0.003 RenBTC</BalanceContainer>}
                      
                            {/* <NavButton2 color={"rgb(23,42,66)"} onClick={close}>Connect Wallet</NavButton2> */}
                            <ConnectWalletButton active={active} left={"82.3%"} top={"31.5%"} close={close} onclick={close} height="160" fontsize="17" colour="rgb(20, 29, 49)" width="40"></ConnectWalletButton>
                        </NavItem2>
                        <NavItem3 active={active}>
                        {active &&  <BalanceContainer active={active}>
                        <NavLogo src={threeDots} height="30px" width="30px"></NavLogo></BalanceContainer>}
                      
                            {/* <NavButton2 color={"rgb(23,42,66)"} onClick={close}>Connect Wallet</NavButton2> */}
                            {/* <ConnectWalletButton active={active} left={"82.3%"} top={"31.5%"} close={close} onclick={close} height="160" fontsize="17" colour="rgb(20, 29, 49)" width="40"></ConnectWalletButton> */}
                        </NavItem3>
                    </NavMenu2>
                    {/* <NavMenu3>
                    
                    </NavMenu3> */}
                    
                    
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}
