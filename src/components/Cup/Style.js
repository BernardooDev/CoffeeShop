import styled from "styled-components"

export const Cup = styled.img`
    position: absolute;
    top: 30%;
    right: 5%;
    transform: rotate(-0.01turn) scale(1.3);
    filter: drop-shadow(2px 7px 10px #000);

    @media(max-width: 1000px) {
        display: none;
    }
`