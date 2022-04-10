import styled from "styled-components";
import { breakpoints as bp } from "../GlobalStyle";
export const Grid = styled.div`

    display: Grid;
    background-color: rgb(26,26,39);
    border-bottom: 2px solid rgb(35,35,52);
    grid-template-columns: min-content 1fr min-content;
    height: 59px;
    align-items: stretch;
    padding: 0 24px;
    > div {
        display: flex;
        align-items: center;
    }

    button {

        white-space: nowrap;
        padding: 5px;
    }

    &:first-child {
        {
            .icon {
                display: none;
            
            @media(max-width: ${bp.desktop}) {

                display: flex;
               
            }
        }
    }
`;