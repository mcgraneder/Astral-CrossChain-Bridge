import RenLogo from "../../assets/RenLogo.svg"
import { StyledLink } from "./LogoStyles";

const Logo = (props) => {

    return (
    
        <StyledLink {...props} to="/">
            <img src={RenLogo} width="65"></img>
             <span>RenBridge</span>  
        </StyledLink>
    )
}

export default Logo