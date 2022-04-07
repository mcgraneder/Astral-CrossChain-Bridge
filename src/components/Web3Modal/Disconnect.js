import React  from "react";
import { StyledLink, ConnectButton } from "./Web3ModalStyles";

const Disconnect = ({connect, to, close}) => {

    function disconnect() {
        localStorage.setItem("state", 1)
        close()
        connect()
    }
    return (
        <ConnectButton onClick={() => disconnect()} >
            <StyledLink to={to}>
                <i className="fas fa-sign-out"></i>
                <span className="label">Disconnect</span>
            </StyledLink>
        </ConnectButton>
    )
}

export default Disconnect;