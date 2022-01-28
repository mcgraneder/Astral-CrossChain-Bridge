import React from "react";
import DropdownItem from "./DropdownItem";
import { Dropdown } from "./WalletModalStyles";
const DropdownMenu = ({height}) => {

    return (

        <Dropdown height={height}>
            <DropdownItem></DropdownItem>
            <DropdownItem></DropdownItem>
            <DropdownItem></DropdownItem>
            <DropdownItem></DropdownItem>
            <DropdownItem></DropdownItem>
        </Dropdown>

    )
}

export default DropdownMenu