import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RenLogo from "../assets/RenLogo.svg"
import ConnectWalletButton from '../Buttons/ConnectWalletButton/ConnjectWalletButton';
import Ethereum from "../assets/ethereum-logo.png"
import { 
        
         NavMenu,
         NavItem2,
         NavMenu2,
         BalanceContainer,
        
         NavItem3,
} from './NavbarStyles';
import threeDots from "../assets/threeDots.svg"
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import AccountDetailsModal from '../AccountDetails/AccountDetailsModal';
import Web3Modal from '../Web3Modal/Web3Modal';
import { NavLink } from 'react-router-dom';
import { Grid } from './SideBar/NavbarStyles';

export const NavContainer = styled.div`

display: flex;
    flex-flow: row nowrap;
    width: 100%;
    -webkit-box-pack: justify;
    justify-content: space-between;
    position: absolute;
    top: 0px;
    z-index: 2;
    box-sizing: border-box;
    margin-bottom: 30px;

    
`

export const NavWrapper = styled.div`

display: grid;
    grid-template-columns: 420px 1fr 420px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    top: 0px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    z-index: 21;
    position: relative;
    background-image: linear-gradient(transparent 50%, rgb(25, 27, 31) 50%);
    background-position: 0px 0px;
    background-size: 100% 200%;
    box-shadow: transparent 0px 0px 0px 1px;
    transition: background-position 0.1s ease 0s, box-shadow 0.1s ease 0s;
    background-blend-mode: hard-light;
    box-sizing: border-box;

    @media(max-width: 1330px) {

       
        padding-top: 21px;
       
     };

     @media(max-width: 1330px) {

       
        grid-template-columns: 240px 1fr 600px;
       
     };

     @media(max-width: 930px) {

       
        grid-template-columns: 40px 1fr 600px;
       
     };

     
`
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
    width: 24px;
    height:  24px;
    line-height: 0px;
    padding-top: 1px;
    // padding-left: 15px;

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
export const NavHeaderLinks = styled.div`

justify-self: center;
    background-color: rgb(14,22,40);
   
    padding: 3px;
    border-radius: 20px;
    display: grid;
    grid-auto-flow: column;
    height: 49px;
    overflow: auto;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    box-sizing: border-box;
    margin: 0px;
    // min-width: 458px;

    @media(max-width: 1330px) {

       
        background: transparent;
        color: transparent;
       
     };
`

const activeClassName= "ACTIVE"
export const NavButton = styled(NavLink).attrs({
    activeClassName
})`

display: flex;
flex-flow: row nowrap;
border-radius: 20px;
outline: none;
cursor: pointer;
text-decoration: none;
color: rgb(195, 197, 203);
font-size: 1rem;
font-weight: 500;
padding: 9.5px 30px;
word-break: break-word;
overflow: hidden;
min-width: 44px;
white-space: nowrap;
border: 2px solid rgb(14,22,40);
    &.${activeClassName} {

    color: rgb(255, 255, 255);
    background-color: rgb(27,32,53);

    border: 2px solid rgb(34,44,69);

    @media(max-width: 1330px) {

       
        background: transparent;
        color: transparent;
        border: none;
       
     };
    }

    &:hover {

        cursor: pointer;
    }

    @media(max-width: 1330px) {

       
        background: transparent;
        color: transparent;
        border: none;
       
     };
  
`


export const ChainButton = styled(NavLink).attrs({
    activeClassName
})`

display: flex;
border-radius: 20px;
outline: none;
cursor: pointer;
text-decoration: none;
color: rgb(195, 197, 203);
font-size: 1rem;
font-weight: 500;
padding: 9.5px 15px;
padding-right: 30px;
margin-left: 20px;
word-break: break-word;
background: rgb(14,22,40);
overflow: hidden;
min-width: 44px;
white-space: nowrap;
border: 2px solid rgb(14,22,40);

@media(max-width: 1390px) {

       
    margin-right: 30px;
    margin-left: -10px;
  
};
  
@media(max-width: 1330px) {

       
    display: none;
  
};
`

export const ChainButton2 = styled(NavLink).attrs({
    activeClassName
})`

display: none;
border-radius: 20px;
outline: none;
cursor: pointer;
text-decoration: none;
color: rgb(195, 197, 203);
font-size: 1rem;
font-weight: 500;
padding: 9.5px 15px;
padding-right: 30px;
margin-left: 20px;
word-break: break-word;
background: rgb(14,22,40);
overflow: hidden;
min-width: 44px;
white-space: nowrap;
border: 2px solid rgb(14,22,40);

@media(max-width: 1390px) {

       
    margin-right: 30px;
    margin-left: -10px;
  
};

@media(max-width: 1330px) {

       
    display: flex
  
};
  
`

export const NavLogoContainer = styled.div`

    width: 50px;
    display: flex;
    flex-direction: space-between;
    align-items: center;
    justify-content: center;
    float: left;
    padding-left: 90px;
    margin-right: 130px;
    // padding-top: 5px;
    color: White;
    font-size: 35px;

    @media(max-width: 1330px) {

       
        display: none;
       
     };
    

  

`

export const NavLogoLink = styled.a`

    text-decoration: none;
    color: White;
    padding-bottom: 5px;

    &:hover {
        cursor: pointer;
    }
`

export const NavLogo = styled.img`

    
    color: White;
    font-wight: bold;
`

export const NavButtonMenuContainer = styled.div`

    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    justify-self: flex-end;

    @media(max-width: 1330px) {

       
        float: right;
       
     };
    

`

export const NavButtonMenuContainer2 = styled.div`

display: flex;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
justify-self: flex-end;

`

export const ConnectButtonContainer = styled.div`

display: flex;
-webkit-box-align: center;
align-items: center;
margin-left: 0.5em;
box-sizing: border-box;
background-color: rgb(14,22,40);
border-radius: 20px;
padding: 4px;


`

export const Balance = styled.div`

// flex-shrink: 0;
    user-select: none;
    box-sizing: border-box;
    margin: 0px;
    // min-width: 0px;
    padding-left: 0.75rem;
    padding-right: 0.5rem;
    font-size: 16px;
    font-weight: 500;
`

export const ConnectButtonWrapper = styled.div`

background-color: rgb(33, 36, 41);
    border: 1px solid rgb(33, 36, 41);
    color: rgb(255, 255, 255);
    font-weight: 500;
    display: flex;
    flex-flow: row nowrap;
    // width: 100%;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 14px;
    cursor: pointer;
    user-select: none;
    height: 36px;
    margin-right: 2px;
    margin-left: 1px;
    text-align: center;
    text-decoration: none;
    outline: none;
    justify-content: center;
    position: relative;
    z-index: 1;
    
`

export const ButtonText = styled.div`

flex: 1 1 auto;
    // overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0px 0.5rem 0px 0.25rem;
    font-size: 1rem;
    // width: fit-content;
    font-weight: 500;
    user-select: none;
`
export const NavItem = styled.div`

    background: rgb(14, 22, 39);
    height: 40px;
    width: 200px;
    // display: flex;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
    border: 3.5px solid rgb(14, 22, 39);
    // float: left;
    margin-left: ${(props) => props.marginL};
    
`

export const Div = styled.div`
display: flex;
justify-content: space-between;
max-width: 200px;

`

function Nav3() {

    const provider = localStorage.getItem("provider")
    const [text, setText] = useState("ETHER")
    const [balance, setBalance] = useState("0.0000")
    const { library, account } = useWeb3React()
    const [showWalletModal, setShowWalletModal] = useState(false);
    const [showAccountDetails, setshowAccountDetails] = useState(false);
    const BP = 1350
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

    useEffect(() => {

        if(window.screen.width < BP) {
            setText("ETH")
           
        }
        else setText("ETHER")
        console.log("hello")
    }, [window.screen.width])

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
                <NavButtonMenuContainer2>
                    <NavLogoContainer>
                        <NavLogo src={RenLogo} height="70px" width="70px"></NavLogo>
                        <NavLogoLink href="https://renproject.io/" >RenBridge</NavLogoLink>
                    </NavLogoContainer>
                        <ChainButton width={"130px"} id={`chains-nav-link`} to="/chains">
                            <Wrapper>
                                <ChainSelectorIcon src={Ethereum} width={"30px"}></ChainSelectorIcon>
                                <ChainText>Kovan</ChainText>
                            </Wrapper>
                        </ChainButton>
                    </NavButtonMenuContainer2>
                    <NavHeaderLinks>
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
                    </NavHeaderLinks>
                    <NavButtonMenuContainer>
                    <ChainButton2 width={"130px"} id={`chains-nav-link`} to="/chains">
                            <Wrapper>
                                <ChainSelectorIcon src={Ethereum} width={"30px"}></ChainSelectorIcon>
                                <ChainText>Kovan</ChainText>
                            </Wrapper>
                        </ChainButton2>
                        <ConnectButtonContainer>
                        <BalanceContainer>
                                {balance} {text}
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
                                width="60">
                            </ConnectWalletButton>
                        </ConnectButtonContainer>
                        <NavItem3>
                        <BalanceContainer>
                        <NavLogo src={threeDots} height="30px" width="30px"></NavLogo></BalanceContainer> 
                    </NavItem3>
                    </NavButtonMenuContainer>
                </NavWrapper>
            </NavContainer>
           
        </div>
      );
}

export default React.memo(Nav3)