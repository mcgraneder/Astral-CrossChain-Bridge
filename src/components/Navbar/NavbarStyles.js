import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`

    background:  rgb(35,35,52);
    background:transparent;
    width: 100%;
    position: absolute;
    // z-index: 99;

`
export const NavWrapper = styled.div`

    // background:  rgb(35,35,52);
    height: 60px;
    padding: 15px 30px;
    display: flex;
    z-index: 99;
    
    justify-content: space-between;
   
`


export const NavMenu = styled.div`

    display: flex;
    list-style: none;
    align-items: center;
    margin: 10px;
    margin-left: ${(props) => props.marginL};
    opacity: ${(props) => props.visible ? "1" : "0"};
    border-radius: 18px;
`

export const NavItem = styled.div`

    background: rgb(14, 22, 39);
    height: 40px;
    // width: 500px;
    display: flex;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
    border: 3.5px solid rgb(14, 22, 39);
    float: left;
    margin-left: ${(props) => props.marginL};
    
`

export const NavLogoContainer = styled.div`

    width: 50px;
    display: flex;
    flex-direction: space-between;
    align-items: center;
    justify-content: center;
    float: left;
    padding-left: 90px;
    margin-right: 20px;
    // padding-top: 5px;
    color: White;
    font-size: 35px;
  
    

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

const activeClassName= "ACTIVE"
export const NavButton = styled(NavLink).attrs({
    activeClassName
})`

    display: inline;
    width: ${(props) => props.width};
    border-radius: 18px;
    height: 93%;
    text-align: center;
    line-height: 37px;
    color: White;
    // font-weight: bold;
    font-size: 17px;
    text-decoration: none;
    border: 2px solid rgb(14, 22, 39);
    &.${activeClassName} {
        background: rgb(27,32,52);
        border: 2px solid rgb(34,43,68);
    }

    &:hover {

        cursor: pointer;
    }
`

export const ChainsButton = styled(NavLink)`

    display: inline;
    width: ${(props) => props.width};
    border-radius: 18px;
    height: 93%;
    text-align: center;
    line-height: 37px;
    color: White;
    // font-weight: bold;
    font-size: 17px;
    text-decoration: none;

    &:hover {

        cursor: pointer;
    }
`

export const NavMenu2 = styled.div`

    display: flex;
    list-style: none;
    align-items: center;
    width: 418px;
    // padding-right: 25px;
    text-align: center;
    justify-content: right;
    
    
    // line-height: 50px;
    // margin: 10px;
   
    
    
    

    // @media screen and (max-width: 768px) {

    //     display: none;
    // }
`

export const NavItem2 = styled.div`

    background: rgb(14, 22, 39);
    height: 40px;
    // width: 100%;
    padding-left: ${(props) => props.active ? "5px" : "0px"};
    // margin-top: 3px;
    display: flex;
    border-radius: 18px;
    align-items: center;
    justify-content: right;
    border: 3.5px solid rgb(14, 22, 39);
    text-align: center;
    color: White;
    // padding-left: 10px;
    // padding-right: 5px;
    
`

export const NavButton2 = styled.div`

    
    display: inline;
    background: rgb(33,114,229); // ${(props) => props.color};
    width: 170px;
    border-radius: 18px;
    height: 93%;
    text-align: center;
    line-height: 35px;
    color:  White; //rgb(75,135,220);
    margin-left: ${(props) => props.active ? "7px" : "0px"};
    font-weight: bold;
    // z-index: 1000;

    border: 1px solid rgb(3,64,179); //rgb(75,135,220);

    &:hover {

        cursor: pointer;
        border: 1px solid rgb(75,135,220);
        background: rgb(38,58,88);
       
    }


`

export const BalanceContainer = styled.div`

    font-family: 'Open Sans', sans-serif;
    padding-right: 10px;
    padding-left: 10px;
    
`

export const NavMenu3 = styled.div`

    display: flex;
    list-style: none;
    align-items: center;
    padding-right: 30px;
    text-align: center;
   / // justify-content: center;
    
    
    // line-height: 50px;
    // margin-left: 10px;
   
    
    
    

    // @media screen and (max-width: 768px) {

    //     display: none;
    // }
`

export const NavItem3 = styled.div`

    background: rgb(14, 22, 39);
    height: 40px;
    width: 40px;
    margin-left: 20px;
    margin-right: 20px;

    padding-left: ${(props) => props.active ? "5px" : "0px"};
    // margin-top: 3px;
    display: ${(props) => props.visible ? "flex" : "none"};
    border-radius: 18px;
    align-items: center;
    justify-content: right;
    border: 1.5px solid rgb(47,52,72);
    text-align: center;
    color: White;
    line-height: 10px;
    padding-left: 10px;
    // padding-right: 5px;
    
`

