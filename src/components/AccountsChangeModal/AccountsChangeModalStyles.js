import styled, { css } from "styled-components";

export const FormWrapper = styled.div`
font-family: 'Open Sans', sans-serif;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    // height: 450px;
    opacity: 0;
    background-color: rgb(27,32,52);
    text-align: right;
    padding: 30px 20px;
    border: 1.5px solid  rgb(31,31,44);
    border-radius: 20px;
    z-index: -100;
    ${(props) => props.visible && css`
    z-index: 100;
    opacity: 1;
    pointer-events: all;
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1) !important;
`}
    
`

export const Backdrop = styled.div`
font-family: 'Open Sans', sans-serif;
    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.2);
    transition: opacity 0.05s ease-in-out !important;
    z-index: 100;
    ${(props) => props.visible && css`

        opacity: 1;
        pointer-events: all;
        transition: opacity 0.05s ease-in-out !important;
    `}

   
`;

export const TitleContainer = styled.div`
font-family: 'Open Sans', sans-serif;
    height: 30px;
    display: flex;
    

`;

export const ModalTitle = styled.div`
font-family: 'Open Sans', sans-serif;
    
    font-size: 22px;
    line-height: 30px;
    font-weight: bold;
    color: white;
   
    
    
`;

export const ModalTextWrapper = styled.div`

  font-family: 'Open Sans', sans-serif;  
    justify-content: left !important;
    word-wrap: break-word !important;
    word-wrap: break-word;
    align-items: left !important;
    // width: 4px;
    overflow: hidden;
    margin-bottom: 5px;
// white-space: nowrap;
//   white-space: nowrap;
//   word-wrap: break-word !important;
//   overflow: hidden;
//   text-overflow: ellipsis; // This is where the magic happens
    
`;
export const ModalText = styled.p`
font-family: 'Open Sans', sans-serif;
    
    font-size: 14px;
    // line-height: 30px;
    // font-weight: bold;
    color: rgb(141,141,149);
    padding: 0px 12px;
    justify-content: left !important;
    word-wrap: break-word;
    align-items: left  !important;
    text-align: justify;
    
   
    
    
`;

export const ButtonWrapper = styled.div`
font-family: 'Open Sans', sans-serif;
    // padding: 10px;
    width: 100%;
    position: absolute;
    right:    42%;
    bottom:   5%;
    align-tems: center !important;
    justify-content: center !important;
`

export const VerifyButton = styled.button`
font-family: 'Open Sans', sans-serif;
    background: rgb(89,115,254);
    border: none;
    border-radius: 20px;
    width: ${(props) => props.height}px;
    height: 50px;
    width: 93%;
    background: rgb(33,114,229);
    padding: 5px 10px;
    color: #fff;
    font-size: ${(props) => props.fontsize}px;
    outline: none;
    border: none;
    cursor: pointer;
    // vertical-align: middle;
    position: absolute;
    right:    3.5%;
    bottom:   3.5%;
    align-tems: center !important;
    justify-content: center !important;

    


    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgb(77, 102, 235);
    }
`

export const IconWrapper = styled.div`
font-family: 'Open Sans', sans-serif;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    height: 60px;
    width: 100%;
    margin-bottom: 25px;
`
export const IconContainer = styled.div`
font-family: 'Open Sans', sans-serif;
    display: flex;
    width: 100%;
    height: 60px;

`
export const Icon = styled.div`
font-family: 'Open Sans', sans-serif;
    margin: 5px 0px;
    width: 75px;
    height: 60px;
    border: 2px solid rgb(22,181,127);
    background:rgb(47,47,60);
    text-align: center;
    border-radius: 50%;
    line-height: 60px;
    // left: 0%;
`;

export const TextContainer = styled.div`
font-family: 'Open Sans', sans-serif;
    // display: flex;
    // width: 100%;
    padding-left: 30px;
    padding-right: 20px;
    padding-top: 5px;
    height: 60px;
    color: rgb(141,141,149);
    text-align: left;
    word-wrap: break-word;
    

`
export const IconText = styled.div`
font-family: 'Open Sans', sans-serif;
    padding-bottom: 10px;
    height: 20px;
    font-size: ${(props) => props.size}px;
    font-weight: ${(props) => props.bold};
    color: ${(props) => props.colour};
    word-wrap: break-word;
`

export const SeperatorText = styled.div`
font-family: 'Open Sans', sans-serif;
    height: 23px;
    font-size: 16px;
    font-weight: bold;
    color: White;
    text-align: center;
`

export const IconContents2 = styled.i`
font-family: 'Open Sans', sans-serif;
    // position: absolute:
    bottom: 5%;
    text-align: left;
    width: 50%;
    padding-left: 52px;
    padding-bottom: 90px;
    font-size: 25px;
    color: rgb(141,141,149);;
`

export const IconContents = styled.i`

font-family: 'Open Sans', sans-serif;
    // position: absolute:
    bottom: 5%;
    text-align: left;
    width: 50%;
    padding-left: 52px;
    padding-bottom: 206px;
    font-size: 25px;
    color: rgb(141,141,149);
`