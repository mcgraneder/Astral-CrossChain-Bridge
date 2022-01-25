import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`

    background:  rgb(35,35,52);
    background:transparent;
    width: 100%;
    position: fixed;
    // z-index: 99;

`
export const NavWrapper = styled.div`

    // background:  rgb(35,35,52);
    height: 60px;
    padding: 20px 30px;
    display: flex;
    z-index: 99;
    
    justify-content: space-between;
   
`


export const NavMenu = styled.div`

    display: flex;
    list-style: none;
    align-items: center;
    margin: 10px;
    opacity: ${(props) => props.visible ? "1" : "0"};
`

export const NavItem = styled.div`

    background: rgb(7, 16, 33);
    height: 40px;
    width: 500px;
    display: flex;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
    border: 3.5px solid rgb(7, 16, 33);
    float: left;
    margin-left: 150px;
    
`

export const NavLogoContainer = styled.div`

    width: 50px;
    display: flex;
    flex-direction: space-between;
    align-items: center;
    justify-content: center;
    float: left;
    padding-left: 100px;
    // padding-top: 5px;
    color: White;
    font-size: 30px;
    

`

export const NavLogoLink = styled.a`

    text-decoration: none;
    color: White;

    &:hover {
        cursor: pointer;
    }
`

export const NavLogo = styled.img`

    
    color: White;
    font-wight: bold;
`

export const NavButton = styled(Link)`

    display: inline;
    background: ${(props) => props.color};
    width: 170px;
    border-radius: 18px;
    height: 100%;
    text-align: center;
    line-height: 40px;
    color: White;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;

    &:hover {

        cursor: pointer;
     
    }

`

export const NavMenu2 = styled.div`

    display: flex;
    list-style: none;
    align-items: center;
    padding-right: 30px;
    text-align: center;
   / // justify-content: center;
    
    
    // line-height: 50px;
    margin: 10px;
   
    
    
    

    // @media screen and (max-width: 768px) {

    //     display: none;
    // }
`

export const NavItem2 = styled.div`

    background: rgb(7, 16, 33);
    height: 40px;
    width: 255px;
    padding-left: 5px;
    // margin-top: 3px;
    display: flex;
    border-radius: 18px;
    align-items: center;
    justify-content: right;
    border: 3.5px solid rgb(7, 16, 33);
    text-align: center;
    color: White;
    // padding-left: 10px;
    // padding-right: 5px;
    
`

export const NavButton2 = styled.div`

    display: inline;
    background: ${(props) => props.color};
    width: 180px;
    border-radius: 18px;
    height: 93%;
    text-align: center;
    line-height: 35px;
    color:  rgb(75,135,220);
    margin-left: 7px;
    font-weight: bold;

    border: 1px solid rgb(75,135,220);

    &:hover {

        cursor: pointer;
       
    }


`

export const BalanceContainer = styled.div`

    padding-right: 10px;
    padding-left: 10px;
`


