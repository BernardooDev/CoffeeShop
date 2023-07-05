import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    position: relative;
    font-size: 1.2em;
    background-color: #0C0F14;

    ul {
        padding-left: 5%;

    }

    @media (max-width: 800px) {
        justify-content: center;

        ul {
            display: none;
        }
    }
`
