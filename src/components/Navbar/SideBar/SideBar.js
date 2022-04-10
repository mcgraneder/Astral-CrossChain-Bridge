import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Bell } from "react-feather";
import { NavLink } from "react-router-dom";
import { Wrapper } from "../../AccountDetails/AccountDetailsModal";

const links = [

    {
        to: "/trade",
        icon: "fas fa-wallet",
        label: "Wallet"
    },
    {
        to: "/trade/wallet",
        icon: "fa fa-exchange",
        label: "Trade"
    },
    {
        to: "/trade/ech",
        icon: "fa fa-history",
        label: "Transactions"
    },
    {
        to: "/trade/token",
        icon: "fas fa-coins",
        label: "Token Info"
    },
]

const Container = styled.div`
  position: fixed;
  display: none;
    transition: all 0.5s ease;


  .active {
    border-right: 4px solid var(--white);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }

  @media(max-width: 1360px) {

    display: block;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 3.5rem;
  height: 3.5rem;
//   border-radius: 50%;
  margin: 0.5rem 0 0 0.25rem;
  cursor: pointer;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: rgb(57,62,82);
    height: 3px;
    width: 2rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    bottom: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

//   &::after {
//     top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
//     transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
//   }
`;

const SidebarContainer = styled.div`
background: rgb(5, 12, 29);
  width: 3.5rem;
  height: 45vh;

  margin-top: 10rem;
  border-right: 1px solid  rgb(57,62,82);
  border-top: 1px solid  rgb(57,62,82);
  border-bottom: 1px solid  rgb(57,62,82);
  border-radius: 0 20px 20px 0;
  padding-top: 0.5rem;
  padding-bottom: 0.1rem;
//   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  display: ${(props) => (props.hide ? `none`: `flex`)}
//   transition: all 0.5s ease;
`;

const SlickBar = styled.ul`
  color: rgb(22,181,127);
  list-style: none;
  display: flex;
//   border-right: 1px solid rgb(22,181,127);
//   border-top: 1px solid rgb(22,181,127);
//   border-bottom: 1px solid rgb(22,181,127);
  flex-direction: column;
  align-items: center;
  background-color: rgb(5, 12, 29);
  padding: 1.2rem 5px;
  position: absolute;
  top: 4rem;
  left: 0;
  width: ${(props) => (props.clicked ? "9rem" : "2.7rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
  
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: White;
//   font-weight: bold;
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid rgb(33,114,229);
    background-color:  rgb(27,32,52);
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.6rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "11rem" : "1rem")};
  height: 3rem;
  padding: 0.5rem 1rem;
  /* border: 2px solid var(--white); */
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "8rem" : "0")};
  background-color: ${(props) => (props.clicked ? "rgb(35,35,52)" : "transparent")};;
  color: white;
  transition: all 0.3s ease;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 30%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    display: inline-block;
  }
  a {
    font-size: 0.8rem;
    text-decoration: none;
    color: var(--grey);
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logout = styled.button`
  border: none;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  img {
    width: 100%;
    height: auto;
    filter: invert(58%) sepia(24%) saturate(2235%) hue-rotate(117deg) brightness(90%) contrast(83%);
    transition: all 0.3s ease;
    &:hover {
      border: none;
      padding: 0;
      opacity: 0.5;
    }
  }
`;

const SideBar = ({history}) => {

  const [click, setClick] = useState(false);
  const [hide, setHide] = useState(false);
  const handleHide = () => setHide(!hide);
  const handleClick = () => setClick(!click);
  const [profileClick, setprofileClick] = useState(false);

  const handleProfileClick = () => setprofileClick(!profileClick);

  const logoutHandler = () => {
    console.log("hey")
}

  return  (
    <Container>
      <SidebarContainer hide={hide}>
        <Button clicked={click} onClick={() => handleClick()}/>
        <SlickBar clicked={click}>
          <Item onClick={() => setClick(false)} exact activeClassName="active" to="/bridge">
            <Bell color={"White"}/>
            <Text clicked={click}>Bridge</Text>
          </Item>
          <Wrapper space={20}/>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/wallet">
          <Bell color={"White"}/>
            <Text clicked={click}>Wallet</Text>
          </Item>
          <Wrapper space={20}/>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/dex">
          <Bell color={"White"}/>
            <Text clicked={click}>Trade</Text>
          </Item>
          <Wrapper space={20}/>
          <Item onClick={() => setClick(false)} activeClassName="active" to="/transactions">
           <img src={Bell} alt="Team" />
            <Text clicked={click}>History</Text>
          </Item>
        </SlickBar>
      </SidebarContainer>
    </Container>
    
  );
};

export default SideBar;