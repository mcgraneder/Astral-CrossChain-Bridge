import styled from "styled-components";


export const StyledTitle = styled.div`

    font-size: ${(props) => props.size}px;
    text-align: ${(props) => props.align};
    color: White;
    padding: 5px;
    margin-bottom:  ${(props) => props.margin}px;
    font-weight: ${(props) => props.weight};
    // font-style: ${(props) => props.styleds};
    background-color: transparent;
`
export const StyledSubTitle = styled.div`

    font-size: ${(props) => props.size}px;
    text-align: center;
    align-items: center;
    color: White;
    padding: 5px;
    margin-bottom: 20px;
    background-color: transparent;
    white-space: initial;
    width: 500px;
    margin: 0 auto;

`
export const Wrapper = styled.div`

    height ${(props) => props.space}px;
`;

export const Container = styled.div`

    position: absolute;
    top: 12%;
`

export const ButtonWrapper = styled.div`

    display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 30px;
    
`
export const VideoBackground = styled.video`

    width: 100vw;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    z-index: -1000;
    position: fixed;
`