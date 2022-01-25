import styled from "styled-components";


export const StyledTitle = styled.div`

    font-size: ${(props) => props.size}px;
    text-align: ${(props) => props.align};
    color: White;
    padding: 5px;
    margin-bottom:  ${(props) => props.margin}px;
    // font-weight: ${(props) => props.weight};
    // font-style: ${(props) => props.styleds};
    background-color: transparent;
`
export const StyledSubTitle = styled.div`

    font-size: ${(props) => props.size}px;
    text-align: center;
    color: White;
    padding: 5px;
    margin-bottom: 100px;
    background-color: transparent;

`
export const Wrapper = styled.div`

    height ${(props) => props.space}px;
`;

export const ButtonWrapper = styled.div`

    display: flex;
    margin: 0 auto;
   width: 300px;
   text-align: center;
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