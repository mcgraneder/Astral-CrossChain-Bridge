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
         NavButton2Container	
} from './FooterStyles';
import useAuth from '../../hooks/useAuth';
import TwitterIcon from "../assets/TwitterIcon.svg"
import GithubIcon from "../assets/twitter.png"
import discordIcon from "../assets/discordIcon.png"
import telegramIcon from "../assets/telegram.png"


export default function Footer({colour, colour1, colour2, bcolour, bcolour1, bcolour2, close, visible}) {

    const [bridge, setBridge] = useState(false);
    const [wallet, setWallet] = useState(false);
    const [transaction, setTransaction] = useState(false);


  const { active } = useAuth()
  return (
      
        <div>
            <NavContainer>
                <NavWrapper>
                    {/* <NavLogoContainer>
                        <NavLogo src={RenLogo} height="70px" width="70px"></NavLogo>
                        <NavLogoLink href="https://renproject.io/" >RenBridge</NavLogoLink>
                    </NavLogoContainer> */}
                    <NavMenu visible={visible}>
                        <NavItem>
                            <NavButton to="/" color={colour} bbcolour={bcolour}>About</NavButton>
                            <NavButton to="/wallet" color={colour1} bbcolour={bcolour1}>Docs</NavButton>
                            <NavButton to="/transactions" color={colour2} bbcolour={bcolour2}>FAQS</NavButton>
                            <NavButton to="/transactions" color={colour2} bbcolour={bcolour2}>Wiki</NavButton>
                        </NavItem>
                    </NavMenu>
                    <NavMenu2 visible={visible}>
                        <NavItem2>
                            <NavButton2Container>
                                <NavButton2 src={TwitterIcon}></NavButton2>
                            </NavButton2Container>
                                <NavButton2Container>
                            <NavButton2 src={GithubIcon}></NavButton2>
                                </NavButton2Container>
                            <NavButton2Container>
                            <NavButton2 src={discordIcon}></NavButton2>
                                </NavButton2Container>
                            <NavButton2Container>
                             <NavButton2 src={telegramIcon}></NavButton2>
                            </NavButton2Container>
                        </NavItem2>
                    </NavMenu2>
                    
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}
