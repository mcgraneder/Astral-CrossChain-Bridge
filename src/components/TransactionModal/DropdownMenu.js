import React from "react";
import DropdownItem from "./DropdownItem";
import { Dropdown } from "./DropdownStyles";

const DropdownMenu = ({height, setText, width, top, active}) => {

    return (

        <Dropdown active={active} width={width} height={height} top={top}>
            <DropdownItem text={"Deposits"}></DropdownItem>
            <DropdownItem text={"Withdrawals"} ></DropdownItem>
            <DropdownItem text={"Mints"}></DropdownItem>
            <DropdownItem text={"Burns"}></DropdownItem>
        </Dropdown>

    )
}

export default DropdownMenu