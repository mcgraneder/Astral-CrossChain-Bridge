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
import { Grid } from './SideBar/NavbarStyles';
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

function Nav() {

    const provider = localStorage.getItem("provider")

    const [balance, setBalance] = useState("0.0000")
    const { library, account } = useWeb3React()
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
            <NavContainer position={"absolute"}>
                <NavWrapper>
                    <NavLogoContainer>
                        <NavLogo src={RenLogo} height="65px" width="65px"></NavLogo>
                        <NavLogoLink href="https://renproject.io/" >RenBridge</NavLogoLink>
                    </NavLogoContainer>
                    <NavMenu marginL={"40px"} marginR={"118px"} display={"flex"}>
                        <NavItem  marginL={"15px"} >
                            <NavButton width={"130px"} 
                                id={`chains-nav-link`}
                                to="/chains"
                            >
                            <Wrapper>
                            <ChainSelectorIcon src={Ethereum} width={"24px"}></ChainSelectorIcon>
                            <ChainText>Kovan</ChainText>
                            </Wrapper>
                            </NavButton>
                        </NavItem>
                    </NavMenu>
                    <NavMenu marginL={"0px"} marginR={"118px"} display={"flex"}>
                        <NavItem  marginL={"0px"} >
                            <NavButton  width={"110px"}
                                id={`bridge-nav-link`}
                                to="/bridge"
                                >Bridge
                            </NavButton>
                            <NavButton width={"110px"} 
                                id={`wallet-nav-link`} 
                                to="/wallet" 
                                >Wallet
                            </NavButton>
                            <NavButton width={"110px"}
                                id={`dex-nav-link`} 
                                to="/dex" 
                                >Trade
                            </NavButton>
                            <NavButton width={"110px"}
                                id={`transactions-nav-link`} 
                                to="/transactions" 
                                >History
                            </NavButton>
                        </NavItem>
                    </NavMenu>
                    <NavMenu2>
                    <NavItem2>
                            <BalanceContainer>
                                {balance} ETHER
                            </BalanceContainer>
                            <ConnectWalletButton 
                                active={provider} 
                                left={"82.3%"} 
                                top={"31.5%"} 
                                close={toggleAccountDetails} 
                                onclick={toggleAccountDetails} 
                                height="160" 
                                fontsize="17" 
                                colour="rgb(20, 29, 49)" 
                                width="40">
                            </ConnectWalletButton>
                    </NavItem2>
                        <NavItem3>
                        <BalanceContainer>
                        <NavLogo src={threeDots} height="30px" width="30px"></NavLogo></BalanceContainer> 
                    </NavItem3>
                    </NavMenu2>
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}

export default React.memo(Nav)