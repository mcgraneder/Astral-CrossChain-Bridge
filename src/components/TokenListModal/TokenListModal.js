import React, { useState } from "react"
import styled, { css } from "styled-components"
import EthereumLogo from "../assets/ethereum-logo.png"
import { X } from "react-feather"
import BitcoinLogo from "../assets/Bitcoin.svg"
import Edit from "../assets/edit.svg"
import { currenciesConfig } from "../../utils/AssetConfigs"
import { chainsConfig } from "../../utils/AssetConfigs"
import { supportedLockCurrencies, supportedMintDestinationChains } from "../../utils/AssetConfigs"
import { useDispatch } from "react-redux"
import { setMintCurrency } from "../../features/mint/mintSlice"
import { setChain } from "../../features/wallet/walletSlice"
export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    pointer-events: none;
    backdrop-filter: blur(3px);
    background: rgba(2,8,26, 0.45);

    transition: ${(props) => props.trueFade ? "opacity 0.2s ease-in-out !important;": "none"};
        z-index: 1;
        ${(props) => props.visible && css`

            z-index: 1;
            opacity: 1;
            pointer-events: all;
            transition: ${(props) => props.trueFade ? "opacity 0.2s ease-in-out !important;": "none"};
        `}

   
`;

export const TokenListFromContainer = styled.div`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
    margin: 0px 0px 2rem;
    // position: absolute;
    // background: rgb(17, 52,42);
    background-color: rgb(17, 25, 42);
    box-shadow: rgb(0 0 0 / 5%) 0px 4px 8px 0px;
    padding: 0px;
    width: 50vw;
    align-self: center;
    max-width: 420px;
    max-height: 80vh;
    // min-height: 80vh;
    opacity: 0;
    display: flex;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    font-family: 'Inter custom',sans-serif;

    ${(props) => props.visible && css`

    z-index: 1;
    opacity: 1;
    pointer-events: all;
    transition: ${(props) => props.trueFade ? "opacity 0.2s ease-in-out !important;": "none"};
`}
    
`
export const TokenListFormWrapper = styled.div`

    width: 100%;
    z-index: 10000;
    flex: 1 1 0%;
    position: relative;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    font-size: 16px;
    font-variant: none;
    font-smooth: always;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    // font-feature-settings: 'ss01' on,'ss02' on,'cv01' on,'cv03' on;
}
`

export const TopSection = styled.div`

    padding: 20px;
    display: grid;
    grid-auto-rows: auto;
    row-gap: 16px;
    box-sizing: border-box;
    font-family: 'Inter custom',sans-serif;
    background-color:  rgb(27,32,52);;
    border: 1px solid  rgb(57,62,82);
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`

export const HeaderContainer = styled.div`

    justify-content: space-between;
    width: 100%;
    display: flex;
    padding: 0px;
    align-items: center;
    -webkit-box-pack: start;
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
`
export const HeaderText = styled.div`

    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    font-weight: 500;
    font-size: 18px;
    color: White;
    display: block;
`

export const CloseIcon = styled(X)`

    color: White;
    width: 25px;
`

export const TokenInputContainer = styled.div`

    width: 100%;
    display: flex;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
`

export const TokenInput = styled.input`

    position: relative;
    display: flex;
    padding: 16px;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    white-space: nowrap;
    background: rgb(17, 25, 42);
    outline: none;
    border-radius: 20px;
    color: rgb(255, 255, 255);
    border: 1px solid rgb(64, 68, 79);
    appearance: none;
    font-size: 18px;
    transition: border 100ms ease 0s;
    

    &:focus {

        border: 1px solid rgb(89,115,254);
    }

`

export const CommonTokensContainer = styled.div`

    display: grid;
    grid-auto-rows: auto;
    row-gap: 12px;
`

export const CommonTokensWrapper = styled.div`

    flex-wrap: wrap;
    margin: -4px;
    width: 100%;
    display: flex;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px
`

export const TokenBox = styled.div`

border: 1px solid transparent;
border-radius: 10px;
display: flex;
padding: 6px;
-webkit-box-align: center;
align-items: center;
color: rgb(143, 150, 172);

background-color:  rgb(47,52,72);
// filter: grayscale(1);
margin: 4px !important;
margin-right: 10px !important;
`

export const TokenImg = styled.img`

    margin-right: 8px;
    width: 35px;
    height: 35px;
    // background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    // box-shadow: white 0px 0px 1px;
    border: 0px solid rgba(255, 255, 255, 0);

`

export const TokenText = styled.div`

    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    font-weight: 500;
    font-size: 16px;
`

export const TokenBox2 = styled.div`

    border: 1px solid rgb(64, 68, 79);
    border-radius: 10px;
    color: rgb(143, 150, 172);
    display: flex;
    padding: 6px;
    -webkit-box-align: center;
    align-items: center;
`

export const Divider = styled.div`

    width: 100%;
    height: 100px;
    background-color: rgb(44, 47, 54);
`

export const TokenListSection = styled.div`

    // flex: 1 1 0%;
    position: relative;
    display: block
`

export const TokenListSelectionContainer = styled.div`

    overflow: visible;
    height: 0px
    display: block;
    border-left: 1px solid  rgb(57,62,82);
    border-right: 1px solid  rgb(57,62,82);
`
export const TokenListSelectionWrapper = styled.div`

    display: block;
    position: relative;
    // height: 400px;
    height: 320px;
    overflow-y: auto;
    width: 100%;
    overflow: auto;
    will-change: transform;
    direction: ltr;
    display: block;
    // border-top: 1px solid rgb(44, 47, 54);

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {

        ////linear-gradient(rgb(53,134,249), transparent);
        // border-radius: 5px;
        background: rgb(53,134,249);
        // border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
        // background: #555;
            
    }
`

export const OverallContainer = styled.div`

    // height: 488px;
    width: 100%;
    display: block;
`

export const ListTokenContainer = styled.div`

    // position: absolute;
    height: 56px;
    padding: 4px 20px;
    height: 56px;
    display: grid;
    align-items: center;
    color: White;
    grid-template-columns: auto minmax(auto, 1fr) auto minmax(0px, 72px);
    gap: 16px;
    opacity: ${(props) => props.opacTrue ? "0.5" : "1"};
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;

    &:hover {

       background: rgb(25, 33, 50);
       cursor: pointer;
    }
`

export const TokenNameContainer = styled.div`

    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
`

export const TokenTitle = styled.div`

font-family: 'Inter custom',sans-serif;
    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    font-weight: 500;
`

export const TokenSubtitle = styled.div`

    box-sizing: border-box;
    margin: 0px;
    min-width: 0px;
    font-weight: 300;
    font-size: 12px;
    width: 200px;
`

export const BalanceContainer = styled.div`

    justify-self: flex-end;
    display: flex;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: flex-start;
    width: fit-content;
`

export const BalanceText = styled.div`

    white-space: nowrap;
    overflow: hidden;
    max-width: 5rem;
    text-overflow: ellipsis;
    
`

export const Spacer = styled.span`

    padding: 4px 20px;
    height: 56px;
    display: grid;
    grid-template-columns: auto minmax(auto, 1fr) auto minmax(0px, 72px);
    gap: 16px;
    pointer-events: none;
    opacity: 0.5;
    
`   

export const BottomSection = styled.div`

    // width: 100%;
    border-radius: 0px 0px 20px 20px;
    padding: 20px;
    background-color:  rgb(27,32,52);;
    border: 1px solid  rgb(57,62,82);
    border-top: 1px solid rgb(57,62,82);
`

export const BottomSectionTextContainer = styled.div`

    // width: 100%;
    display: flex;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`
export const BottomSectionTextWrapper = styled.div`

outline: none;
    border: none;
    font-size: inherit;
    padding: 0px;
    margin: 0px;
    background: none;
    // cursor: pointer;
`

export const TextContainer = styled.div`

    width: fit-content;
    display: flex;
    padding: 0px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: start;
    justify-content: center;;
`

export const BottomSectionText = styled.div`

    box-sizing: border-box;
    display: flex;
    margin: 0px;
    min-width: 0px;
    font-weight: 500;
    font-size: 18px;
    color: rgb(80, 144, 234);
`

export const Img = styled.img`

    width: 18px;
    height: 18px;
    color: rgb(80, 144, 234);
    margin-right: 5px;
`

const getOptions = (mode) => {
    const options =
      mode === "chain"
        ? Object.values(chainsConfig)
        : Object.values(currenciesConfig);
    return options;
};
  
const getOptionBySymbol = (symbol, mode) =>
    getOptions(mode).find((option) => option.symbol === symbol);
  
const createAvailabilityFilter = (available) => (option) => {
    if (!available) {
      return true;
    }
    return available.includes(option.symbol);
};


const TokenListModal = ({ 
    visible, 
    close, 
    setFromToken, 
    setToToken, 
    type,
    mode = "currency",
    condensed = false,
    label,
    balances,
    assetLabel = "Asset",
    blockchainLabel = "Blockchain",
    setShowTokenModal,
    ...rest 
}) => {

    const [searchTerm, setSearchTerm] = useState("")
    const dispatch = useDispatch()
    const setSelectedToken = React.useCallback((option, type) => {
        if (type === "from") {
            setFromToken(option)
        }
        else if (type === "to") {
            setToToken(option)
        }
        setSearchTerm("")
        close()
    }, [close, setFromToken, setToToken])

    const available = type === "from" ? supportedLockCurrencies : supportedMintDestinationChains;

    const availabilityFilter = React.useMemo(
        () => createAvailabilityFilter(available),
        [available]
    );

    const handleCurrencyChange = React.useCallback((currency, option, type) => {
        setSelectedToken(option, type)
        const selectedCurrency = getOptionBySymbol(currency, "currency");
        localStorage.setItem("selected_currency", JSON.stringify(selectedCurrency))
        dispatch(setMintCurrency(currency))
        setShowTokenModal(false)
    }, [dispatch, setSelectedToken, setShowTokenModal])

    const handleChainChange = React.useCallback((chain, option, type) => {
        setSelectedToken(option, type)
        dispatch(setChain(chain))
        const selectedChain = getOptionBySymbol(chain, "chain");
        localStorage.setItem("selected_chain", JSON.stringify(selectedChain))
        setShowTokenModal(false)
    }, [dispatch, setSelectedToken, setShowTokenModal])

    return(

        <>
            <Backdrop visible={visible} onClick={close} trueFade={true}/>
                <TokenListFromContainer visible={visible}>
                    <TokenListFormWrapper>
                        <TopSection>
                            <HeaderContainer>
                                <HeaderText>
                                    {type==="from" 
                                    ? "Select A Currency" 
                                    : "Select A Destination Chain"
                                    }
                                </HeaderText>
                                <CloseIcon onClick={close}/>
                            </HeaderContainer>
                            <TokenInputContainer>
                                <TokenInput 
                                    placeholder={`Search ${mode} by name or symbol`}
                                    value={searchTerm}
                                    name={"search"}
                                    type={"text"}
                                    onChange={(e) => setSearchTerm(e.currentTarget.value)}
                                />
                            </TokenInputContainer>
                            <CommonTokensContainer>
                                <CommonTokensWrapper>
                                    <TokenBox>
                                        <TokenImg src={EthereumLogo}></TokenImg>
                                        <TokenText>ETH</TokenText>
                                    </TokenBox>
                                    <TokenBox2>
                                        <TokenImg src={BitcoinLogo}></TokenImg>
                                        <TokenText>BTC</TokenText>
                                    </TokenBox2>
                                </CommonTokensWrapper>
                            </CommonTokensContainer>
                        </TopSection>
                        <TokenListSection>
                            <TokenListSelectionContainer>
                                <TokenListSelectionWrapper>
                                    <OverallContainer>
                                    {getOptions(type === "from" ? "currency" : "chain")
                                    .filter(availabilityFilter)
                                    .filter((val) => {
                                        if (searchTerm === "") {
                                            return val
                                        } else if (
                                            val.symbol.toLowerCase().includes(searchTerm.toLowerCase()) 
                                            || val.full.toLowerCase().includes(searchTerm.toLowerCase())
                                        ) {
                                        return val
                                        }
                                        return val
                                    })
                                    .map(({ symbol, MainIcon, short, full}) => {
                                        return (
                                            <ListTokenContainer key={symbol} opacTrue={false} onClick={() => 
                                                type === "from" 
                                                 ? handleCurrencyChange(symbol, {MainIcon: MainIcon, symbol: symbol}, type) 
                                                 : handleChainChange(symbol, {short: short, symbol: symbol, full: full}, type)
                                            }>
                                            <TokenImg src={MainIcon} width={"30px"} size={"30px"}></TokenImg>
                                            <TokenNameContainer>
                                                <TokenTitle>{short}</TokenTitle>
                                                <TokenSubtitle>{full}</TokenSubtitle>
                                            </TokenNameContainer>
                                            <Spacer/>
                                            <BalanceContainer>
                                                <BalanceText></BalanceText>
                                            </BalanceContainer>
                                        </ListTokenContainer>
                                        )
                                    })}
                                    </OverallContainer>
                                </TokenListSelectionWrapper>
                            </TokenListSelectionContainer>
                        </TokenListSection>
                        <BottomSection>
                            <BottomSectionTextContainer>
                                <BottomSectionTextWrapper>
                                    <TextContainer>
                                        <Img src={Edit}></Img>
                                        <BottomSectionText>
                                            {type ==="from" 
                                             ? "Currency Selection List" 
                                             : "Chain Seleection List"
                                            }
                                        </BottomSectionText>
                                    </TextContainer>
                                </BottomSectionTextWrapper>
                            </BottomSectionTextContainer>
                        </BottomSection>
                    </TokenListFormWrapper>
                </TokenListFromContainer>
        </>
    )
}

export default TokenListModal