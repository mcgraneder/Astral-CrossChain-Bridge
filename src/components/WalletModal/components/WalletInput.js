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
import { MapPin } from "react-feather";

const WalletInputForm = ({ setText, text, getMaxDeposit, type, marginB }) => {

    const preventMinus = (e) => {
        if (e.code === 'Minus')  e.preventDefault(); 
    };

    return(

        <FromContainer marginB={marginB}>
            <WalletInputWrapper>
                <WalletInput 
                    onKeyPress={preventMinus} 
                    type={type === "address" ? "text" : "number"}  
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    placeholder={type === "address" ? "Recipient address" : "Amount"}
                   >
                </WalletInput>
                <ForumIcon>
                    {type !== "address" 
                    ? <ForumImg src={walletIcon}></ForumImg>
                    : <MapPin strokeWidth={1}/>
                    }
                </ForumIcon>
                {type !== "address" && <MaxOption onClick={getMaxDeposit}>max</MaxOption>}
            </WalletInputWrapper>
        </FromContainer>
    )
}

export default WalletInputForm