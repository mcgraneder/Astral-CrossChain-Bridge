import { StyledLink } from "./NavbarLinkStyles"

const NavLink = ({ children, iconName, label, ...rest}) => {

    return (

        <StyledLink  to="/wallet" {...rest}>
            { children || (
                <>
                    <i className={iconName}></i>
                    <span className="label">{label}</span>
                </>
            )}
        </StyledLink>
    )
}

export default NavLink