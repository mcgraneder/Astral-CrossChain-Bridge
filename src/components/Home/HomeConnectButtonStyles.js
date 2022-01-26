import styled from "styled-components";


export const NavButton2 = styled.div`

    
    display: inline;
    background: ${(props) => props.color};
    width: ${(props) => props.width};
    border-radius: 18px;
    height: ${(props) => props.height};
    text-align: center;
    line-height: ${(props) => props.height};
    color:  rgb(75,135,220);
    margin-left: ${(props) => props.active ? "7px" : "0px"};
    margin-right: ${(props) => props.active ? "7px" : "0px"};
    font-weight: bold;

    border: 1px solid rgb(75,135,220);

    &:hover {

        cursor: pointer;
        border: 1px solid rgb(75,135,220);
        background: rgb(38,58,88);
        // color: rgb(23,42,66);
       
    }


`
