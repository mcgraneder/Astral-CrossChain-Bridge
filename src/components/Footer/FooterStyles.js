import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`

    background:  rgb(35,35,52);
    background:transparent;
    width: 100%;
    position: absolute;
    bottom: 0;
    // z-index: 99;

`
export const NavWrapper = styled.div`

    // background:  rgb(35,35,52);
    height: 50px;
    padding: 5px 20px;
    display: flex;
    z-index: 99;
    
    justify-content: space-between;
   
`


export const NavMenu = styled.div`

    display: flex;
    list-style: none;
    align-items: center;
    // margin: 10px;
    font-family: 'Open Sans', sans-serif;
    opacity: ${(props) => props.visible ? "1" : "1"};
`

export const NavItem = styled.div`

    // background: rgb(14, 22, 39);
    height: 40px;
    // width: 500px;
    display: flex;
    // border-radius: 18px;
    align-items: center;
    justify-content: center;
    // border: 3.5px solid rgb(14, 22, 39);
    // float: left;
    margin-left: ${(props) => props.marginL};
    
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
    font-size: 35px;
  
    

`


export const NavButton = styled(Link)`

    display: inline;
    // background: ${(props) => props.color};
    width: 70px;
    // border-radius: 18px;
    // height: 93%;
    text-align: center;
    line-height: 37px;
    color: rgb(199, 199, 199);
    // font-weight: bold;
    font-size: 17px;
    text-decoration: none;
    // border: 2px solid ${(props) => props.bbcolour};


    &:hover {

        cursor: pointer;
        font-size: 19px;
        color: #fff;
     
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

    // background: rgb(14, 22, 39);
    height: 40px;
    // width: 500px;
    display: flex;
    // border-radius: 18px;
    align-items: center;
    justify-content: center;
    // border: 3.5px solid rgb(14, 22, 39);
    // float: left;
    margin-right: 50px;
    
`

export const NavButton2Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 40px;
`

export const NavButton2 = styled.img`

    
    display: inline;
    // background: ${(props) => props.color};
    width: 20px;
    height: 20px;
    // margin-left: 15px;
    // border-radius: 18px;
    // height: 93%;
    text-align: center;
    line-height: 37px;
    color: rgb(199, 199, 199);
    // font-weight: bold;
    font-size: 17px;
    text-decoration: none;
    // border: 2px solid ${(props) => props.bbcolour};


&:hover {

    cursor: pointer;
    font-size: 19px;
    color: #fff;
    width: 30px;
    height: 30px;
 
}

`



