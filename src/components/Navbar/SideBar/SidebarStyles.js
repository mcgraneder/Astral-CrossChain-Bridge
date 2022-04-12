
import styled, { css } from "styled-components";


export const StyledSidebar = styled.nav`

    background: radial-gradient(circle at 50% -20%, #102d52, #132a4c, #16233d, #161b2c, #13141f, #11111a);
    height: 100vh;
    width: ${(props) => props.compact ? "85px" : "220px"};
    position: fixed;
    top: 0;
    display: none;
    overflow: hidden;
    z-index: 1000;
    display: none;
    border-right: 2px solid rgb(35,35,52);
    flex-direction: column;
    transition: width 0.3s cubic-bezier(0.4, 0, 1, 1), transform 0.3s cubic-bezier(0.4, 0, 1, 1) !important;
    
    &::before {
        // content: "";
        background-color: rgba(26,26,39, 0.2);
        position: absolute:
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    @media(max-width: 1330px) {

        position: fixed;
        display: flex;
        // transform: translate3d(${(props) => props.visible ? 0 : `-260px, 0, 0`});
        // transition: transform 0.4s  ${(props) => props.visible ? `cubic-bezier(0, 0, 0.2, 1)` : `cubic-bezier(0.4, 0, 1, 1) !important`};

    };
    
    // transition: 0.2s cubic-bezier(0.4, 0, 1, 1) !important;

`;


export const StyledOverlay = styled.nav`

    background: rgba(0, 0, 0, 0.4);
    height: 100vh;
    width: ${(props) => props.compact ? "85px" : "220px"};
    position: fixed;
    top: 0;
    display: none;
    overflow: hidden;
    z-index: 1000;
    display: none;
    border-right: 2px solid rgb(35,35,52);
    flex-direction: column;
    transition: width 0.3s cubic-bezier(0.4, 0, 1, 1), transform 0.3s cubic-bezier(0.4, 0, 1, 1) !important;
    
    &::before {
        // content: "";
        background-color: rgba(26,26,39, 0.2);
        position: absolute:
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    @media(max-width: 1330px) {

        position: fixed;
        display: flex;
        // transform: translate3d(${(props) => props.visible ? 0 : `-260px, 0, 0`});
        // transition: transform 0.4s  ${(props) => props.visible ? `cubic-bezier(0, 0, 0.2, 1)` : `cubic-bezier(0.4, 0, 1, 1) !important`};

    };
    
    // transition: 0.2s cubic-bezier(0.4, 0, 1, 1) !important;

`;

export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 1000000;
    opacity: 0;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.4);
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1) !important;
    ${(props) => props.visible && css`

        opacity: 0;
        pointer-events: all;
        pointer: cursor;
    `}

    @media(min-width: 1330px) {

        opacity: 0;
        pointer-events: none;
    
    }
`;

