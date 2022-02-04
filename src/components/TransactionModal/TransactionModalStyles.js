import styled from "styled-components";



export const HeaderContainer = styled.div`

    position: absolute;
    top: 18%;
    width: 900px;
    height: 40px;
    // background: rgb(14, 22, 39);
    // text-align: right;
    // padding: 10px 10px;
    // border: 1px solid  rgb(57,62,82);;
    // border-radius: 20px;
    // -webkit-box-shadow: -2px -1px 15px 7px rgba(255,0,0,0.5);
    // -moz-box-shadow: -3px -2px 30px 14px rgba(255,0,0,0.425);
    // box-shadow: -4px -3px 45px 21px rgba(255,0,0,0.35);
    //  box-shadow: 0px 10px 150px 5px rgba(75,135,220,0.03);
`

export const BridgeModalContainer = styled.div`

    position: absolute;
    top: 14.5%;
    width: 900px;
    height: 500px;
    // background: rgb(14, 22, 39);
    // text-align: right;
    // padding: 10px 10px;
    // border: 1px solid  rgb(57,62,82);;
    border-radius: 20px;
    // -webkit-box-shadow: -2px -1px 15px 7px rgba(255,0,0,0.5);
    // -moz-box-shadow: -3px -2px 30px 14px rgba(255,0,0,0.425);
    // box-shadow: -4px -3px 45px 21px rgba(255,0,0,0.35);
    //  box-shadow: 0px 10px 150px 5px rgba(75,135,220,0.03);
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

export const TransactionModalHeaderContainer = styled.div`

    background:  rgb(35,35,52);
    background:transparent;
    width: 100%;

`
export const TransactionModalHeaderWrapper = styled.div`

    height: 60px;
    padding: 10px 10px;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
   
`

export const LogoContainer = styled.div`

    width: 230px;
    display: flex;
    flex-direction: space-between;
    align-items: center;
    justify-content: center;
    float: left;
    // padding-left: 100px;
    // padding-top: 5px;
    color: White;
    font-size: 25px;
    line-height: 60px;
  
    

`

export const LogoLink = styled.div`

    text-decoration: none;
    color: White;
    // padding-bottom: 5px;
    width: 100%;
    float: left;

    &:hover {
        cursor: pointer;
    }
`

export const TransactionDetails = styled.div`

    // position: absolute;
    // top: 28%;
    width: 100%;
    height: 500px;
    background: rgb(14, 22, 39);
    // text-align: right;
    // padding: 10px 10px;
    border: 1px solid  rgb(57,62,82);;
    border-radius: 10px;
    // -webkit-box-shadow: -2px -1px 15px 7px rgba(255,0,0,0.5);
    // -moz-box-shadow: -3px -2px 30px 14px rgba(255,0,0,0.425);
    // box-shadow: -4px -3px 45px 21px rgba(255,0,0,0.35);
     box-shadow: 0px 10px 150px 5px rgba(75,135,220,0.03);
`

export const ButtonContainer = styled.div`

    // width: 100%;
    display: flex;
    flex-direction: space-between;
    align-items: center;
    justify-content: center;
    float: left;
    margin-left: 20px;
    // padding-top: 5px;
    color: White;
    font-size: 25px;
    line-height: 40px;
  
    

`

export const DropdownContainer = styled.div`

    display: flex;
    height: 40px;
    width: 40px;
    position: absolute;
    // padding-left: 20px;
    right: 2.5%;
    right: ${(props) => props.left}; 
    align-items: center;
    justify-content: center;
`
export const DropdownButton = styled.div`

    width: ${(props) => props.width};
    height: 40px;
    padding-left: 25px;
    background: ${(props) => props.background};
    font-size: 17px;
    text-align: left;
    margin-left: 10px;
    border-radius: 10px;
    border: ${(props) => props.border ? "1px solid rgb(75,135,220)" : "none"};

    &:hover {
        background: rgb(23,104,219);
        cursor: pointer;
    }
`    
export const TransactionSelector = styled.div`

    // width: 100%;
    // height: 100%;
    display: flex;
    margin: 0 auto
`


export const TransactionHeader = styled.div`

    // width: 230px;
    display: flex;
    flex-direction: space-between;
    align-items: center;
    justify-content: center;
    float: left;
    // padding-left: 100px;
    // padding-top: 5px;
    color: White;
    font-size: 22px;
    line-height: 60px;
  
    

`

export const Transactiontext = styled.div`

    text-decoration: none;
    color: White;
    // padding-left: 20px;
    // width: 100%;
    // float: left;

    &:hover {
        cursor: pointer;
    }
`

export const HeaderContainerr = styled.div`

    // width: 50px;
    display: flex;
    flex-direction: space-between;
    align-items: center;
    justify-content: center;
    float: left;
    margin-left: 15px;
    margin-right: 15px;
    // padding-top: 5px;
    color: White;
    font-size: 25px;
    line-height: 40px;
  
    

`

export const HeaderButton = styled.div`

    // width: 50px;
    // height: 40px;
    // padding-left: 25px;
    background: rgb(44,53,78);
    font-size: 17px;
    padding-right: 10px;
    padding-left: 10px;
    text-align: center;
    border-radius: 20px;
    border: 2px solid rgb(64,73,98);

    &:hover {
        background: rgb(64,73,98);
        cursor: pointer;
    }
`   

export const ChainSelectorIconWrapper = styled.div`

    height: 35px;
    // width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Spacer = styled.div`

    padding-left: 20px;
`

export const ToggleContainer = styled.div`

width: 100%;
height: 40px;
margin-top: 20px;
display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid  rgb(57,62,82);;
   
`

export const ToggleButtonWrapper = styled.div`

    // width: 100%;
    height: 100%;
    display: flex;
    // margin-left: 180px;
    margin: 0 auto
`
export const ToggleButton = styled.div`

    height: 100%;
    width: 150px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 40px;
    // background: White;
    border-top-left-radius: 10px;
    color: rgb(75,135,220);
    border: 1px solid rgb(75,135,220);
`
export const ToggleButton2 = styled.div`

    height: 100%;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 18px;
    line-height: 40px;
    background: rgb(37,42,62);
    text-align: center;
    border-top-right-radius: 10px;
    border: 1px solid rgb(37,42,62);
`

