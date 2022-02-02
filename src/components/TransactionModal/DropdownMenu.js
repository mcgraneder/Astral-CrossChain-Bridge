import React from "react";
import DropdownItem from "./DropdownItem";
import { Dropdown } from "./DropdownStyles";

const DropdownMenu = ({height, setText, width}) => {

    return (

        <Dropdown width={width} height={height}>
            <DropdownItem text={"Deposits"}></DropdownItem>
            <DropdownItem text={"Withdrawals"} ></DropdownItem>
            <DropdownItem text={"Mints"}></DropdownItem>
            <DropdownItem text={"Burns"}></DropdownItem>
        </Dropdown>

    )
}

export default DropdownMenu