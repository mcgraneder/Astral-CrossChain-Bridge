import React from "react";
import DropdownItem from "./DropdownItem";
import { Dropdown } from "./DropdownStyles";

const DropdownMenu = ({height, setText, width, top, active, left}) => {

    return (

        <Dropdown active={active} width={width} height={height} top={top} left={left}>
            <DropdownItem onClick={console.log("hello")} text={"Deposits"}></DropdownItem>
            <DropdownItem onClick={console.log("hell0000o")} text={"Withdrawals"} ></DropdownItem>
            <DropdownItem text={"Mints"}></DropdownItem>
            <DropdownItem text={"Burns"}></DropdownItem>
        </Dropdown>

    )
}

export default DropdownMenu