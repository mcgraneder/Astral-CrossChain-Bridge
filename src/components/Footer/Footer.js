import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
import { useWeb3React } from '@web3-react/core';

export const GreenCircle = styled.div`

    height: 7px;
    width: 7px;
    border-radius: 50%;
    background: rgb(14,209,69);
`
export default function Footer({colour, colour1, colour2, bcolour, bcolour1, bcolour2, close, visible}) {

    const [bridge, setBridge] = useState(false);
    const [wallet, setWallet] = useState(false);
    const [transaction, setTransaction] = useState(false);
    const {library, chainId} = useWeb3React()
    const [blockNumber, setBlockNumber] = React.useState();

    useEffect(() => {
        console.log('running')
        if (library) {
        let stale = false;

        console.log('fetching block number!!')
        library
            .getBlockNumber()
            .then(blockNumber => {
            if (!stale) {
                setBlockNumber(blockNumber);
            }
            })
            .catch(() => {
            if (!stale) {
                setBlockNumber(null);
            }
            });

        const updateBlockNumber = blockNumber => {
            setBlockNumber(blockNumber);
        };
        library.on("block", updateBlockNumber);

        return () => {
            library.removeListener("block", updateBlockNumber);
            stale = true;
            setBlockNumber(undefined);
        };
        }
    }, [library, chainId]);


  return (
      
        <div>
            <NavContainer>
                <NavWrapper>
                    {/* <NavLogoContainer>
                        <NavLogo src={RenLogo} height="70px" width="70px"></NavLogo>
                        <NavLogoLink href="https://renproject.io/" >RenBridge</NavLogoLink>
                    </NavLogoContainer> */}
                    <NavMenu visible={visible}>
                        <NavItem marginL={"60px"}>
                            <NavButton to="/" color={colour} bbcolour={bcolour}>About</NavButton>
                            <NavButton to="/wallet" color={colour1} bbcolour={bcolour1}>Docs</NavButton>
                            <NavButton to="/transactions" color={colour2} bbcolour={bcolour2}>FAQS</NavButton>
                            <NavButton to="/transactions" color={colour2} bbcolour={bcolour2}>Wiki</NavButton>
                        </NavItem>
                    </NavMenu>
                    <NavMenu visible={visible}>
                        <NavItem marginL={"0px"} style={{"position": "absolute", "left": "93.5%"}}>
                            {library && <GreenCircle></GreenCircle>}
                            <NavButton style={{"color": "rgb(35,100,66)", "fontSize": "13px"}} to="/" color={"colour"} bbcolour={bcolour}>{blockNumber}</NavButton>
                            
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
