import styled from "styled-components"

export const ErrorPage = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0C0F14;
    text-align: center;

    h1 {
        margin-bottom: 5%;
    }
`

export const ImgFailed = styled.img`
    width: 24%;
    height: 50%;

    @media (max-width: 300px) {
        height: 40%;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        width: 80%;
    }

    @media (min-width: 481px) and (max-width: 820px) {
        width: 60%;
    }

    @media (max-width: 1201px) {
        width: 80%;
    }
`

