import styled from "styled-components"
import Loader from "../../Loader/Loader";
import { TRANSACTION_TYPES } from "../WalletModal";

export const NavButton2 = styled.div`
    
    display: inline;
    background: ${(props) => props.backgrond};
    width: 440px;
    border-radius: 18px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color:  White;
    margin-left: ${(props) => props.active ? "7px" : "0px"};
    margin-right: ${(props) => props.active ? "7px" : "0px"};
    font-weight: bold;

    &:hover {
        cursor:  ${(props) => props.input};
        background:  ${(props) => props.activeBackground};  
    }

`

export const LoaderWrapper = styled.div`

    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`



const Button = (
    {   state, 
        active, 
        click, 
        text, 
        balanceState, 
        pending, 
        TransactionType 
    }
) => {

    if (pending || !active) return (
            <NavButton2 
                active={active} 
                input={"auto"}
                backgrond={"rgb(48,58,78)"}
                activeBackground={"rgb(48,58,78)"}
                onClick={click}>
                    <LoaderWrapper>
                        <span style={{"marginRight": "10px"}}>
                            {pending ? "Pending" : "Connecting"}
                        </span>
                        <Loader stroke="white" size={"20px"}/>
                    </LoaderWrapper>       
            </NavButton2>
    )

    if(text === "") return (
            <NavButton2 
                active={active} 
                input={"auto"}
                backgrond={"rgb(48,58,78)"}
                activeBackground={"rgb(48,58,78)"}
                 onClick={click}>
                     Enter An Amount
            </NavButton2>
    )
    if (balanceState) return (
            <NavButton2  
                 active={active} 
                 input={"auto"}
                 backgrond={"rgb(255,67,67)"}
                 activeBackground={"rgb(255,67,67)"}
                 onClick={click}>
                     Insufficent Balance
            </NavButton2>

    )

    if (!state) return (
            <NavButton2 
                active={active} 
                input={"auto"}
                backgrond={"rgb(48,58,78)"}
                activeBackground={"rgb(48,58,78)"}
                onClick={click}>
                    Approve Token First
            </NavButton2>
    )
    else return (
            <NavButton2 
                active={active} 
                input={"pointer"}
                backgrond={"rgb(13,94,209)"}
                activeBackground={"rgb(3,84,199)"}
                onClick={click}>
                    {TransactionType === TRANSACTION_TYPES.DEPOSIT 
                    ? `Deposit ${text} renBTC`
                    : `Withdraw ${text} renBTC`}     
            </NavButton2>
    )
}

export default Button;