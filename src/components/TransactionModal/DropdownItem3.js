import React, { useState, useEffect } from "react";
import BitcoinLogo from "../assets/depositIcon.png"
import { ChainSelectorWrapper, ChainSelectorIconWrapper, ChainSelectorIcon, ChainSelectorTextWrapper, ChainSelectorText } from "./DropdownStyles";
const DropdownItem3 = ({text}) => {

    return (

        <ChainSelectorWrapper>
        <ChainSelectorTextWrapper>
            <ChainSelectorText>{text}</ChainSelectorText>
        </ChainSelectorTextWrapper>
    </ChainSelectorWrapper>

    )

}

export default DropdownItem3