import React from "react"
import walletIcon from "../../assets/depositIcon2.png"
import {
    FromContainer,
    WalletInputWrapper,
    WalletInput,
    MaxOption,
    ForumIcon,
    ForumImg
} from "../WalletModalStyles";

const WalletInputForm = ({ setText, text, getMaxDeposit }) => {

    const preventMinus = (e) => {
        if (e.code === 'Minus')  e.preventDefault(); 
    };

    return(

        <FromContainer>
            <WalletInputWrapper>
                <WalletInput 
                    onKeyPress={preventMinus} 
                    name="number" 
                    type="number" 
                    id="in"  
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder="amount">
                </WalletInput>
                <ForumIcon>
                    <ForumImg src={walletIcon}></ForumImg>
                </ForumIcon>
                <MaxOption onClick={getMaxDeposit}>max</MaxOption>
            </WalletInputWrapper>
        </FromContainer>
    )
}

export default WalletInputForm