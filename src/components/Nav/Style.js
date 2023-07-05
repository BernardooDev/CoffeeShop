import styled from "styled-components"

export const Nav = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    width: 40%; 
    border: none;
    overflow: hidden;
    padding-right: 5%;

    li {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        text-decoration: none;
        color: wheat;
        font-weight: bold; 
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
            border-bottom: 5px solid wheat;
        }
        @media (max-width: 800px){
            display: none;
        }
    }
`