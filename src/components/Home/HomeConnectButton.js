import React from "react"
import styled from "styled-components"

export const NavButton2 = styled.div`

font-family: 'Open Sans', sans-serif;
    
    display: inline;
    background: rgb(13,94,209);
    width: ${(props) => props.width};
    border-radius: 18px;
    height: ${(props) => props.height};
    text-align: center;
    line-height: ${(props) => props.height};
    color:  White;
    margin-left: ${(props) => props.active ? "7px" : "0px"};
    margin-right: ${(props) => props.active ? "7px" : "0px"};
    font-weight: bold;
    font-size: 16px;

    // border: 1px solid rgb(3,184,189);

    &:hover {

        cursor: pointer;
        background: rgb(0,80,195);
        // color: rgb(23,42,66);
       
    }


`
export const Logo1 = styled.div`

    position: absolute;

   float: left;

   justify-content: center;
//    line-height: 60px;
    left: ${(props) => props.left};
    top: ${(props) => props.top};
//    background: rgb(89, 115, 254);
    
   &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(77, 102, 235);
}
`;


const HomeConnectButton = ({ active, height, width, text, click}) => {


    return (

        <>
            <NavButton2  width={width} height={height} active={active} color={"rgb(23,42,66)"} onClick={click}>{text}</NavButton2>
        </>
    )
}

export default HomeConnectButton;