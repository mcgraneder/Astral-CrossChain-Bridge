import React from "react";
import DropdownItem3 from "./DropdownItem3";
import { Dropdown } from "./DropdownStyles";

const DropdownMenu3 = ({height, setText, width, top, active, left}) => {

    return (

        <Dropdown active={active} width={width} height={height} top={top} left={left} >
            <DropdownItem3 text={"In Progress"}></DropdownItem3>
            <DropdownItem3 text={"Completed"} ></DropdownItem3>
        </Dropdown>

    )
}

export default DropdownMenu3