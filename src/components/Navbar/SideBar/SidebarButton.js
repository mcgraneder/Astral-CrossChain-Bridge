import styled from "styled-components";

export const Button = styled.button`

    background-color: transparent;
    border: none;
    font-size: 20px;
    height: 65px;
    color: rgba(255 255 255 / 50%);
    padding: 0 24px;
    box-shadow: 0 -1px 0 0 rgba(255 255 255 / 10%);
`;

const SidebarButton = (props) => {

    return (

        
        <Button {...props} className="nav-toggle" onClick={() => props.setCompact(Number(!props.compact))}>
            {props.compact ? <i className="fas fa-chevron-right"></i> :  <i className="fas fa-chevron-left"></i>}
        </Button>    
    )
}

export default SidebarButton
