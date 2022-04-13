import styled from "styled-components";


export const FormWrapper = styled.div`

    position: fixed;
    top: 20%;
    width: 520px;
    height: 530px;
    background: rgb(14, 22, 39);
    text-align: right;
    // padding: 10px 35px;
    border: 1px solid  rgb(37, 46, 63);
    border-radius: 20px;

`

export const BridgeModalContainer = styled.div`

    // position: absolute;
    // top: 12%;
    max-width: 470px;
    color: White;
    // // height: 575px;
    background: rgb(14, 22, 39);
    text-align: right;
    padding: 10px 10px;
      border: 1px solid  rgb(57,62,82);;
    border-radius: 20px;
    // // -webkit-box-shadow: -2px -1px 15px 7px rgba(255,0,0,0.4);
    // // -moz-box-shadow: -3px -2px 30px 14px rgba(255,0,0,0.425);
    // // box-shadow: -4px -3px 45px 21px rgba(255,0,0,0.35);
     box-shadow: 0px 10px 150px 5px rgba(75,135,220,0.03);
    margin: 30px auto 0;
    position: relative;
    margin-top: 30px;
    // max-width: 400px;
    transition: height 3s ease-out;
`
export const BridgeModalWrapper = styled.div`

    width: 100%;
    height: 100%;

`


export const ChainSelector = styled.div`

    margin-top: 10px;
    margin-bottom: ${(props) => props.marginB};
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    height: 40px;
    // width: 100%;
    background: rgb(27,32,52);;
    border: 2px solid rgb(34,43,68);
    border-radius: 10px;
    

`


export const ChainSelectorWrapper = styled.div`

    // height: 100%;
    // width: 100%;
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
    
    &:hover {

        background:  rgb(34,43,68);
    }
    
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
    right: 5%; 
    align-items: center;
    justify-content: center;
`
export const BalanceContainer = styled.div`

    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    // height: 60px;
    // width: 100%;
    display: flex;
    align-items center;
    justify-content: center;
    background: transaprent;
    border: 1px solid rgb(34,43,68);
    border-radius: 10px;
`


export const MintFormWrapper = styled.div`

    // height: 200px;
    // height: 100%;
    width: 100%;
    // padding-top: 10px;
    // display: inline;
    // display: flex;
    // margin-left: 5px;
    // margin-right: 5px;

`

export const MintFormContainer = styled.div`

    margin-top: 10px;
    padding-bottom: 20px;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    // height: 100%;
    // width: 100%;
    background: rgb(27,32,52);
    border: 1px solid rgb(34,43,68);
    border-radius: 10px;
`


export const BalanceWrapper = styled.div`

    // height: 100%;
    // width: 100%;
    line-height: 45px;
    text-align: center;
    // display: flex;
    // padding-left: 25px;
    // padding-right: 5px;
    padding-top: 25px;
    padding-bottom: 10px;
`

export const ButtonWrapper = styled.div`

    display: flex;
    // height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 20px;
    // padding-left: 20px;
    // padding-right: 20px;
    width: 90%;

  
    
`
export const MintForm = styled.div`

    margin-top: 10px;
    // margin-bottom: -20px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    height: 50px;
    // width: 100%;
    height: 100%;
    background: transparent;
    border: 1px solid rgb(34,43,68);
    border-radius: 10px;

    &:hover {

        background:  rgb(34,43,68);
    }
`


export const MintFormmWrapper = styled.div`

    // height: 100%;
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

font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 

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

export const MinFormToggleButtonContainer = styled.div`

   
    height: 40px;
    // width: 100%;
    display: flex;
    margin-bottom: 25px;
    background:rgb(27,32,52);;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   

    &:hover {

        background:  rgb(34,43,68);
    }
`;

export const MintToggleButton = styled.div`

   
    width: 50%;
    height: 100%;
    border-top-${(props) => props.side}-radius: 10px;
    border-right: 1.5px solid rgb(14, 22, 39);
    background: ${(props) => props.active ? "rgb(14, 22, 39)" : "rgb(27,32,52)"};
    font-size: 18px;
    font-weight: bold;
    // font-family: 'Open Sans', sans-serif;
    border: 1px solid ${(props) => props.active ? "rgb(75,135,220)" : "rgb(27,32,52)"};
    // border-bottom: 1.5px solid rgb(75,135,220);
    color: ${(props) => props.active ? "rgb(75,135,220)" : "White"};
    &:hover {

        cursor: pointer
    }

`
export const ReleaseToggleButton = styled.div`

   
    width: 50%;
    height: 100%;
    border-top-${(props) => props.side}-radius: 10px;
    border-right: 1.5px solid rgb(14, 22, 39);
    background: ${(props) => !props.active ? "rgb(14, 22, 39)" : "rgb(27,32,52)"};
    font-size: 18px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    border: 1px solid ${(props) => !props.active ? "rgb(75,135,220)" : "rgb(27,32,52)"};
    // border-bottom: 1.5px solid rgb(75,135,220);
    color: ${(props) => !props.active ? "rgb(75,135,220)" : "White"};

    &:hover {

        cursor: pointer
    }

`


export const MintFormTextWrapper2 = styled.div`

    display: flex;
    height: 100%;
    // text-align: center;
    justify-content: center;
    align-items: center;
    
`

export const MintFormText2 = styled.div`
font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 
 font-size: 17px;
 padding-left: 10px;

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

export const ArrowContainer = styled.div`

    width: 100%;
    height: 100%;
    // padding: 5px;
`
export const ArrowLogoContainer = styled.div`

    width: 25px;
    height: 100%;
    // padding: 5px;
    margin: 0 auto;
    background:  rgb(27,32,52);
    border-radius: 10px;
    line-height: 15px;
    // border: 0.2px solid rgb(75,135,220);
`

export const ArrowLogo = styled.img`

    // display: flex;
    // justify-content: center;
    // align-items: center;
   
    text-align: center;
    display: inline;
    width: 25px;
    height:  25px;
    

    // float: left;
`

export const ArrowContainer12 = styled.div`

    position: absolute;
    top: 14%;
    left: 0;
    width: 100%;
    height: 25px;
   
    // padding: 5px;
`
export const ArrowLogoContainer12 = styled.div`

    width: 25px;
    margin: 0 auto;
    background:  rgb(27,32,52);
    border-radius: 10px;
    border-left: 2px solid rgb(34,43,68);
    border-right: 2px solid rgb(34,43,68);
    // border: 0.2px solid rgb(75,135,220);
`

export const ArrowLogo12 = styled.img`

    display: inline;
    width: 25px;
    height:  25px;
    

    // float: left;
`

export const Balancetext = styled.div`

    font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 
    font-size: ${(props) => props.size};
    text-align: center;
    font-weight: 100;
    color: ${(props) => props.colour}

`

export const FromContainer = styled.form`

margin-bottom: ${(props) => props.marginB};
margin-left: 30px;
margin-right: 30px;
// padding: 3px;
height: 50px;
// width: 100%;
background: rgb(14, 22, 39);
border: 3px solid rgb(34,43,68);
border-radius: 10px;
-webkit-appearance: none;
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}

    &:focus {

        border: none;
    }

    &:active {

        border:
    }


`


export const WalletInputWrapper = styled.div`

    height: 100%;
    // width: 100%;
    line-height: 60px;
    display: flex;
    border: none;
    -webkit-appearance: none;
    input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}

    // border: 3px solid rgb(34,43,68);
    
    // padding-left: 50px;
    // padding-right: 15px;
`

export const WalletInput = styled.input`

width: 100%;
background: transparent;
border: none;
color: white;
padding-left: 20px;
border-radius: 10px;
padding-left: 60px;
padding-right: 60px;
font-size: 14px;
font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 
// border: 3px solid: blue;
-webkit-appearance: none;
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
}

// &:active {
    
//     // border: 3px solid green;
// }
`

export const Dropdown = styled.div`

position: absolute;
top: ${(props) => props.height};
left: 4%;
border-radius: 10px;
width: 455px;
background: rgb(14, 22, 39);
border: 1px solid rgb(75,135,220);
`

export const SpinnerWrapper = styled.div`

    // height: 140px;
    // width: 100%;
    
    margin-bottom: 20px;
    margin-left: 30px;
    margin-right: 30px;
    // padding: 3px;
    // height: 50px;
    // width: 100%;
    background: rgb(14, 22, 39);
    border: 3px solid rgb(34,43,68);
    border-radius: 10px;
    // padding: 15px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-top: 5px;
    transition: height 0.3s ease-in-out;
`

export const StatusTextWrapper = styled.div`

    width: 100%;
    height: 20px;
    display: flex;
    // align-items: left;
    // justify-content: center;
    // background: White;
    margin-top: 10px;
    margin-bottom: ${(props) => props.marginB};
    padding-left: 10px;

`

export const StatustTextIcon = styled.img`

    width: 20px;
    height: 20px;
    display: flex;
    
`

export const StatusText = styled.div`

font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 
    height: 20px;
    display: flex;
    font-size: 15px;
    color: White;
    line-height: 20px;
    padding-left: 20px;
    // font-weight: bold;
    // padding-right: 100px;
`   

export const CompletionTextWrapper = styled.div`

    width: 100%;
    height: 20px;
    background: White;

`

export const CompletionTextContainer = styled.div`

font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 
    display: flex;
    // height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 20px;
    padding-top: 25px;
    color: White;
    font-size: 17px;
    // font-weight: bold;

`

export const LoaderContainer = styled.div`

    position: absolute;
    width: 20px;
    height: 20px;
    right: 15%;

    // display: flex;
    
`

export const MaxOption = styled.div`

    position: absolute;
    font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 
    height: 30px;
    width: 50px;
    left: 77%;
    background: transparent;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    color: rgb(75,135,220);
    font-size: 15px;
    font-weight: bold;
    
    &:hover {

        cursor: pointer;
        font-size: 15.5px;
        color: rgb(95,155,240);
    }
`

export const ForumIcon = styled.div`

    position: absolute;
    font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 
    height: 25px;
    margin-top: 3px;
    // padding-bottom: 10px;
    width: 25px;
    left: 15%;
    // left: 78%;
    // background: White;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 8px;
    color: rgb(75,135,220);
    font-size: 15px;
    font-weight: bold;
`

export const ForumImg = styled.img`

    width: 28px;
    height: 28px;
`
