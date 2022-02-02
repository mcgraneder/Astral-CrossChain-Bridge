import React from "react";
import DropdownItem2 from "./DropdownItem2";
import { Dropdown } from "./DropdownStyles";

const DropdownMenu2 = ({height, setText, width, top, active}) => {

    return (

        <Dropdown active={active} width={width} height={height} top={top} >
            <DropdownItem2 text={"BTC"}></DropdownItem2>
            <DropdownItem2 text={"ZEC"} ></DropdownItem2>
            <DropdownItem2 text={"BCH"}></DropdownItem2>
            <DropdownItem2 text={"FIL"}></DropdownItem2>
        </Dropdown>

    )
}

export default DropdownMenu2