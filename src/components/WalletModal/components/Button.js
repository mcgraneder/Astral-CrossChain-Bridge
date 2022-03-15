import styled from "styled-components"


export const NavButton2 = styled.div`

    
    display: inline;
    background: ${(props) => props.transactionBlock ? (props.balanceState ? "rgb(255,67,67)" : (props.state ? (props.input !== "" ? "rgb(33,114,229);" : "rgb(48,58,78)") : "rgb(48,58,78)")) : "rgb(48,58,78)"};
    width: ${(props) => props.width};
    border-radius: 18px;
    height: ${(props) => props.height};
    text-align: center;
    line-height: ${(props) => props.height};
    color:  White;
    margin-left: ${(props) => props.active ? "7px" : "0px"};
    margin-right: ${(props) => props.active ? "7px" : "0px"};
    font-weight: bold;

    // border: 1px solid rgb(3,184,189);

    &:hover {

        cursor:  ${(props) => props.transactionBlock ? (props.state ? (props.input !== "" ? "pointer" : "auto") : "auto") : "auto"};
        // border: 1px solid rgb(75,135,220);
        background:  ${(props) => props.transactionBlock ? (props.state ? (props.input !== "" ? "rgb(13,94,209);" : "rgb(48,58,78)") : "rgb(48,58,78)") : "rgb(48,58,78)"};
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

const Button = ({ state, active, height, click, width, text, input, balanceState, transactionBlock}) => {

    return (

        <>
            <NavButton2  t
                ransactionBlock={transactionBlock} 
                state={state} 
                balanceState={balanceState} 
                width={width} 
                height={height} 
                input={input} 
                active={active} 
                color={"rgb(23,42,66)"}
                 onClick={click}>
                     {text}
            </NavButton2>
        </>
    )
}

export default Button;