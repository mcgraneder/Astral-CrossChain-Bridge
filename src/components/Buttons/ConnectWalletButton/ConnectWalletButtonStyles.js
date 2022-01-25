import styled from "styled-components";


export const ConnectButton = styled.div`

    // background: rgb(89,115,254);
    border: none;
    border-radius: 15px;
    width: ${(props) => props.height}px;
    height: 26px;
    background: rgb(33,36,41);
    padding: 5px 10px;
    color: #fff;
    font-size: ${(props) => props.fontsize}px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    vertical-align: middle;
    border: 2px solid rgb(43,46,51);
    z-index: 100;
  
    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgb(33,36,41);
    }
`


export const Logo = styled.div`

   width: ${(props) => props.width}px;
   height: ${(props) => props.width}px;
   float: left;
   align-items: center;
   line-height: 35px;

   &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(33,36,41);
}

   
`;

export const ButtonText = styled.div`
     
    line-height: 27px;
    letter-spacing: 1px; 
    text-align: left;
    font-size: 16px;
`
export const ButtonText1 = styled.div`
     
    line-height: 30px;
    letter-spacing: 1px; 
    text-align: center;
`

export const Logo1 = styled.div`

    position: absolute;
    float: left;
    justify-content: center;
    left: ${(props) => props.left};
    top: ${(props) => props.top};
    
   &:hover {
        transition: all 0.2s ease-in-out;
        background: rgb(77, 102, 235);
    }
   
`;

