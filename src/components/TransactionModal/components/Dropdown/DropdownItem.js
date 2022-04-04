import React from "react";
import BitcoinLogo from "../../../assets/depositIcon.png"
import { ChainSelectorWrapper, ChainSelectorIconWrapper, ChainSelectorIcon, ChainSelectorTextWrapper, ChainSelectorText } from "./DropdownStyles";
const DropdownItem = ({text}) => {

    return (

        <ChainSelectorWrapper>
            <ChainSelectorIconWrapper>
                <ChainSelectorIcon src={BitcoinLogo} width={"20px"}></ChainSelectorIcon>
            </ChainSelectorIconWrapper>
            <ChainSelectorTextWrapper>
                <ChainSelectorText>{text}</ChainSelectorText>
            </ChainSelectorTextWrapper>
        </ChainSelectorWrapper>

    )

}

export default DropdownItem