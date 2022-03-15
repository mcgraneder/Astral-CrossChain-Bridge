import chevronDownLogo from "../../assets/cheverondown.png"
import { DropdownContainer } from "../WalletModalStyles";
import { ChainSelector, ChainSelectorWrapper, ChainSelectorIconWrapper, ChainSelectorIcon, ChainSelectorTextWrapper, ChainSelectorText } from "../WalletModalStyles";

const DropdownMenu = ({Logo, name, marginBottom}) => {

    return (

        <ChainSelector marginB={marginBottom}>
            <ChainSelectorWrapper>
                <ChainSelectorIconWrapper>
                    <ChainSelectorIcon src={Logo} width={"30px"}/>
                </ChainSelectorIconWrapper>
                <ChainSelectorTextWrapper>
                    <ChainSelectorText>
                        {name}
                    </ChainSelectorText>
                </ChainSelectorTextWrapper>
                <DropdownContainer>
                    <ChainSelectorIcon src={chevronDownLogo} width={"15px"}/>
                </DropdownContainer>  
            </ChainSelectorWrapper>
        </ChainSelector>

    )

}

export default DropdownMenu