import styled from "styled-components";

export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 1;
    pointer-events: none;
    backdrop-filter: blur(3px);
    background-color: rgba(0, 0, 0, 0.2);
    transition: transform 1s cubic-bezier(0.4, 0, 1, 1) !important;
    z-index: 20000;
    pointer-events: auto
    
`

export const Grid = styled.div`

    display: grid;
    grid: "nav header" min-content
                   "nav main" 1fr / min-content 1fr;
    min-height: 100vh;    
`

export const GridSidebar = styled.div`

    grid-area: nav;
    background-color: black;
    // border-right: 2px solid rgb(35,35,52);
    z-index: 2000;
`

export const GridHeader = styled.div`

    grid-area: header;
    background-color: red;
    color: White;
`

export const GridMain = styled.div`

    grid-area: 100px;
    // background-color: red;
    color: White;
`
