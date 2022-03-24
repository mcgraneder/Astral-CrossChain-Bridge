import React from "react"
import {  
    MintToggleButton, 
    ReleaseToggleButton, 
    MinFormToggleButtonContainer, 
    MintFormTextWrapper2, 
    MintFormText2,
} from "../WalletModalStyles";

const MintFormToggleTabs = ({ toggle, setToggleValue}) => {

    return (

        <MinFormToggleButtonContainer>
            <MintToggleButton side={"left"} colour={"rgb(14, 22, 39)"} active={toggle} onClick={setToggleValue}>
                <MintFormTextWrapper2>
                    <MintFormText2>Deposit</MintFormText2>
                </MintFormTextWrapper2>
            </MintToggleButton>
            <ReleaseToggleButton side={"right"} active={toggle} onClick={setToggleValue}>
                <MintFormTextWrapper2>
                    <MintFormText2>Withdraw</MintFormText2>
                </MintFormTextWrapper2>
            </ReleaseToggleButton>
        </MinFormToggleButtonContainer>
    )
}

export default MintFormToggleTabs