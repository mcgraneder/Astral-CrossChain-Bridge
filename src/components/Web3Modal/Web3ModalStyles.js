import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const FormWrapper = styled.div`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 150px;
height: 150px;
opacity: 1;
background-color: rgb(27,32,52);
text-align: right;
padding: 20px 20px;
border: 1.5px solid  rgb(31,31,44);
border-radius: 10px;
z-index: 10000;
transition: opacity 1s cubic-bezier(0.4, 0, 1, 1) !important;
${(props) => props.visible && css`

opacity: 1;
pointer-events: all;
transition: opacity 1s cubic-bezier(0.4, 0, 1, 1) !important;
`}

`

export const Backdrop = styled.div`

position: fixed;
height: 100vh;
width: 100vw;
opacity: 1;
pointer-events: none;
backdrop-filter: blur(5px);
background-color: rgba(0, 0, 0, 0.2);
transition: opacity 0.05s ease-in-out !important;
z-index: 10000;
${(props) => props.visible && css`

    opacity: 1;
    pointer-events: all;
    transition: opacity 0.05s ease-in-out !important;
`}


`;

export const TitleContainer = styled.div`

height: 40px;
display: flex;


`;

export const ModalTitle = styled.div`


font-size: 23px;
line-height: 32px;
font-weight: bold;
color: white;



`;

export const ModalTextWrapper = styled.div`


justify-content: left !important;
word-wrap: break-word !important;
word-wrap: break-word;
align-items: left !important;
// width: 4px;
overflow: hidden;
margin-bottom: 15px;
// white-space: nowrap;
//   white-space: nowrap;
//   word-wrap: break-word !important;
//   overflow: hidden;
//   text-overflow: ellipsis; // This is where the magic happens

`;
export const ModalText = styled.p`


font-size: 16px;
// line-height: 30px;
// font-weight: bold;
color: rgb(141,141,149);
padding: 8px 12px;
justify-content: left !important;
word-wrap: break-word;
align-items: left  !important;
text-align: left;




`;

export const ButtonWrapper = styled.div`

// padding: 10px;
width: 100%;
position: absolute;
right:    42%;
bottom:   5%;
align-tems: center !important;
justify-content: center !important;
`

export const VerifyButton = styled.button`

background: rgb(89,115,254);
border: none;
border-radius: 10px;
width: ${(props) => props.height}px;
height: 40px;
width: 85%;
background: ${(props) => props.col};
padding: 5px 10px;
color: #fff;
font-size: ${(props) => props.fontsize}px;
outline: none;
border: none;
cursor: pointer;
// vertical-align: middle;
position: absolute;
right:    7%;
bottom:   5%;
align-tems: center !important;
justify-content: center !important;




&:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(77, 102, 235);
}
`

export const IconWrapper = styled.div`

padding-left: 10px;
padding-right: 10px;
padding-top: 5px;
padding-bottom: 5px;
height: 60px;
width: 100%;
margin-bottom: 25px;
`
export const IconContainer = styled.div`

display: flex;
width: 100%;
height: 60px;

`
export const Icon = styled.div`

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

padding-bottom: 10px;
height: 20px;
font-size: ${(props) => props.size}px;
font-weight: ${(props) => props.bold};
color: ${(props) => props.colour};
word-wrap: break-word;
`

export const SeperatorText = styled.div`

height: 23px;
font-size: 16px;
font-weight: bold;
color: White;
text-align: center;
`

export const IconContents2 = styled.i`

// position: absolute:
bottom: 10%;
text-align: left;
width: 50%;
padding-left: 52px;
padding-bottom: 90px;
font-size: 25px;
color: rgb(141,141,149);;
`
export const Logo = styled.div`

position: absolute;
width: 70px;
height: 50px;
float: right;
align-items: center;
justify-content: center;
//    line-height: 75px;
right: 35%;
bottom: 35%;
background: rgb(27,32,52);





`;

export const IconContents = styled.i`

// position: absolute:
bottom: 10%;
text-align: left;
width: 50%;
padding-left: 52px;
padding-bottom: 206px;
font-size: 25px;
color: rgb(141,141,149);
`

export const StyledLink = styled(Link)`

    font-family: "SuisseIntl","Helvetica","Arial",sans-serif; 
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: 5px 125px;
    font-size: 20px;
    // font-weight: bold;
    line-height: 60px;
    color: White;
    border-radius: 10px;
    box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.1);
    transition: opacity 0.2s cubic-bezier(0.4, 0, 1, 1);
    text-align: center;
    text-decoration: none;

    i {

        min-height: 22px;
        min-width: 22px;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: White;
        font-size: 20px;
        
    }

    span {

        // padding-left: 14px;
        line-height: 19px;
        text-align: center;
        opacity: ${(props) => Number(!props.compact)};
        white-space: nowrap;
        transition: opacity 0.2s cubic-bezier(0.4, 0, 1, 1);

    }

    // &:hover {
    //     text-decoration: none;
    //     background-color: rgb(75,135,220);
    //     border: 1px solid rgb(23,42,66);

    // }

`

export const ConnectButton = styled.div`

    height: 60px;
    width: 100%;
    background: rgb(13,94,209);
    border-radius: 20px;
    margin-top: 20px;
   
    &:hover {

        background-color: rgb(75,135,220);
        background: rgb(0,80,195);

    }
`

