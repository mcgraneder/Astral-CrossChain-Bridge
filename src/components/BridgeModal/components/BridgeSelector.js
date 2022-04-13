import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const BridgeSelectorContainer = styled.div`

    // width: 100%;
    // border-top-right-radius: 20px;
    // border-top-left-radius: 20px;
    // border-radius: 20px;
    // background: White;
    display: flex;
    height: 45px;
    // padding-bottom: -px;
    // border: 1px solid rgb(34,43,68);
`

export const ERC20BridgeToggleButton = styled(Link)`

   
    width: 50%;
    height: 100%;
    border-top-${(props) => props.side}-radius: 20px;
    // border-right: 1.5px solid rgb(14, 22, 39);
    background: rgb(27,32,52);
    font-size: 18px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    // border: 1px solid rgb(27,32,52);
    // border-bottom: 1.5px solid rgb(75,135,220);
    color: rgb(77,82,102);
    text-decoration: none;
    &:hover {

        cursor: pointer
    }

`
export const LegacyBridgeToggleButton = styled.div`

   
    width: 50%;
    height: 100%;
    border-top-${(props) => props.side}-radius: 20px;
    // border-right: 1.5px solid rgb(14, 22, 39);
    background: rgb(14, 22, 39);
    font-size: 18px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    // border: 1px solid rgb(75,135,220);
    // border-bottom: 1.5px solid rgb(75,135,220);
    color: rgb(75,135,220);
    text-decoration: none;

    &:hover {

        cursor: pointer
    }

`


export const MintFormTextWrapper2 = styled.div`

    display: flex;
    height: 100%;
    // text-align: center;
    justify-content: center;
    align-items: center;
    
`

export const MintFormText2 = styled.div`

 font-size: 17px;
 padding-left: 10px;

`

//refaccot to make togggle button container the same
const BridgeSelector = () => {

    return (
        <BridgeSelectorContainer>
            <LegacyBridgeToggleButton side={"left"} colour={"rgb(14, 22, 39)"}>
                <MintFormTextWrapper2>
                    <MintFormText2>Legacy Bridge</MintFormText2>
                </MintFormTextWrapper2>
            </LegacyBridgeToggleButton>

            <ERC20BridgeToggleButton side={"right"} to="/bridge/erc20bridge">
                <MintFormTextWrapper2>
                    <MintFormText2>ERC20 Bridge</MintFormText2>
                </MintFormTextWrapper2>
            </ERC20BridgeToggleButton>
        </BridgeSelectorContainer>
    )
}

export default BridgeSelector