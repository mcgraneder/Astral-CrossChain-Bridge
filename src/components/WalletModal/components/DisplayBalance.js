import { BalanceContainer, BalanceWrapper, Balancetext } from "../WalletModalStyles"

const DisplayBalance = ({asset, balance, renPrice}) => {

    return(

        <BalanceContainer>
            <BalanceWrapper>
                <Balancetext 
                    size={"45px"} 
                    colour={"#adadad"}>
                        {balance} renBTC
                </Balancetext>
                <Balancetext 
                    size={"17px"} 
                    colour={"White"}>
                        = ${renPrice} 
                </Balancetext>
            </BalanceWrapper>                
        </BalanceContainer>

    )
}

export default DisplayBalance