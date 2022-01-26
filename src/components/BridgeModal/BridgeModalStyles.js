import styled from "styled-components";


export const FormWrapper = styled.div`

    position: fixed;
    top: 20%;
    width: 420px;
    height: 530px;
    background: rgb(14, 22, 39);
    text-align: right;
    padding: 10px 35px;
    border: 1px solid  rgb(37, 46, 63);
    border-radius: 20px;

`

export const BridgeModalContainer = styled.div`

    position: absolute;
    top: 15%;
    // width: 470px;
    // height: 575px;
    background: rgb(14, 22, 39);
    text-align: right;
    padding: 20px 20px;
    border: 15px solid  rgb(18,27,50);
    border-radius: 30px;

`
export const BridgeModalWrapper = styled.div`

    width: 100%;
    height: 100%;

`


export const ChainSelector = styled.div`

    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    height: 40px;
    // width: 100%;
    background: rgb(24,33,58);
    border: 2px solid rgb(34,43,68);
    border-radius: 10px;

    &:hover {

        background:  rgb(34,43,68);
    }
`


export const ChainSelectorWrapper = styled.div`

    // height: 100%;
    // width: 100%;
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
`

export const ChainSelectorIconWrapper = styled.div`

    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ChainSelectorIcon = styled.img`

    display: flex;
    justify-content: left;
    align-items: center;
    width: ${(props) => props.width};
    height:  ${(props) => props.width};
    line-height: 20px;

    // float: left;
`
export const ChainSelectorTextWrapper = styled.div`

    display: flex;
    height: 40px;
    // text-align: center;
    justify-content: left;
    align-items: center;
    line-height: 20px;

`

export const ChainSelectorText = styled.div`

 font-size: 15px;
 padding-left: 10px;

`

export const DropdownContainer = styled.div`

    display: flex;
    height: 40px;
    width: 40px;
    position: absolute;
    right: 9%; 
    align-items: center;
    justify-content: center;
`
export const BalanceContainer = styled.div`

    margin-top: 40px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    height: 60px;
    // width: 100%;
    background: transaprent;
    border: 1px solid rgb(34,43,68);
    border-radius: 10px;
`


export const MintFormWrapper = styled.div`

    height: 100%;
    width: 100%;
    padding-top: 10px;
    // display: inline;
    // display: flex;
    // margin-left: 5px;
    // margin-right: 5px;

`

export const MintFormContainer = styled.div`

    margin-top: 20px;
    margin-bottom: 40px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    height: 230px;
    // width: 100%;
    background: transaprent;
    border: 1px solid rgb(34,43,68);
    border-radius: 10px;
`


export const BalanceWrapper = styled.div`

    height: 100%;
    width: 100%;
    line-height: 60px;
    
    display: flex;
    padding-left: 25px;
    padding-right: 5px;
`

export const ButtonWrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
  
    
`


export const MintFormmWrapper = styled.div`

    height: 100%;
    width: 100%;
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
`

export const MintFormIconWrapper = styled.div`

    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MintFormIcon = styled.img`

    display: flex;
    justify-content: left;
    align-items: center;
    width: ${(props) => props.width};
    height:  ${(props) => props.width};
    line-height: 30px;

    // float: left;
`
export const MintFormTextWrapper = styled.div`

    display: flex;
    height: 50px;
    // text-align: center;
    justify-content: left;
    align-items: center;
    line-height: 50px;

`

export const MintFormText = styled.div`

font-family: 'Open Sans', sans-serif;

 font-size: 15px;
 padding-left: 10px;

`



export const StyledContainer = styled.div`

   
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    // background: rgb(0,47,65);
    // background: radial-gradient(circle, rgba(0,47,65,1) 0%, rgba(10,28,61,1) 46%, rgba(0,7,31,1) 89%);
    
`

export const DropdownContainer2 = styled.div`

    display: flex;
    height: 50px;
    width: 40px;
    position: absolute;
    right: 9%; 
    align-items: center;
    justify-content: center;
`
