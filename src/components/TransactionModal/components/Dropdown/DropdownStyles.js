import styled from "styled-components"

export const ChainSelectorWrapper = styled.div`

// height: 100%;
// width: 100%;
display: flex;
padding-left: 5px;
padding-right: 5px;
border-radius: 10px;

 &:hover {

        background:  rgb(34,43,68);
    }
`

export const ChainSelectorIconWrapper = styled.div`

height: 40px;
width: 40px;
display: flex;
justify-content: center;
align-items: center;
`

export const ChainSelectorIcon = styled.img`

display: flex;
justify-content: left;
align-items: center;
width: ${(props) => props.width};
height:  ${(props) => props.width};
line-height: 20px;

// float: left;
`
export const ChainSelectorTextWrapper = styled.div`

display: flex;
height: 40px;
// text-align: center;
justify-content: left;
align-items: center;
line-height: 20px;

`

export const ChainSelectorText = styled.div`

font-size: 15px;
padding-left: 10px;

`

export const Dropdown = styled.div`

position: absolute;
top: ${(props) => props.top};;
right: ${(props) => props.left};
border-radius: 10px;
width: ${(props) => props.width};
background: rgb(14, 22, 39);
border: 1px solid rgb(75,135,220);
opacity: ${(props) => props.active ? "1" : "0"};
transition: opacity 0.1s ease-in-out;
z-index: ${(props) => props.active ? "1" : "-1"};
`