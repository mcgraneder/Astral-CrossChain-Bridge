import React, { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import NavLinksGroup from "./NavLinksGroup";
import SidebarButton from "./SidebarButton";
import { StyledSidebar, Backdrop } from "./SidebarStyles";
import { StyledOverlay } from "./SidebarStyles";

const Sidebar = (props) => {

    const [compact, setCompact] = useState(0);

    return(

        <>
            <Backdrop visible={props.visible} onClick={props.close}></Backdrop>
            <StyledSidebar compact={compact} {...props}>
                <StyledOverlay compact={compact} {...props}>
                <Logo compact={compact}/>
                <NavLink style={{borderBottom: "1px solid rgba(255, 255, 255, 0.1)"}}></NavLink>
                <NavLinksGroup compact={compact}></NavLinksGroup>
                <NavLink  compact={compact} to="/trade" iconName="fas fa-user" label="Profile"></NavLink>
                <NavLink  compact={compact} to="/trade" iconName="fas fa-cog" label="Settings"></NavLink>
                <NavLink onClick={props.logout} compact={compact} to="/login" iconName="fas fa-sign-out" label="Logout"></NavLink>
                <SidebarButton compact={compact} setCompact={setCompact}></SidebarButton>
                </StyledOverlay>
            </StyledSidebar>
        </>
    )
}

export default Sidebar;