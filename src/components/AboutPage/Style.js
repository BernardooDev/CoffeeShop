import styled from "styled-components"

export const AboutSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0C0F14;
`

export const LeftSection = styled.aside`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const MainTitleLeft = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    margin-left: 1rem;

    h1 {
        margin: 1.5rem;
        font-size: 2.0rem;
        color: wheat;
    }

    p {
        margin: 1.5rem;
        font-size: 1.4rem;
        color: whitesmoke;
    }
`

export const BellowTitleLeft = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SeeMoreButton = styled.button`
    margin-left: 1rem;
    width: 40%;
    height: 50%;
    border: none;
    border-radius: 5px;
    font-size: 1.6rem;
    background-color: #D98046;
    color: whitesmoke;
`
export const InfosAboutLeft = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DataAboutLeft = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const SingleDataAboutLeft = styled.div`
    height: 100%;
    width: 30%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 3rem;
        color: whitesmoke;
    }

    span {
        color: #D98046;
    }

    p {
        font-size: 2rem;
        color: wheat;
    }
`

export const RightSection = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ImageRight = styled.div`
    width: 100%;
    height: 75%;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        width: 50%;
        height: 60%;
    }
`

export const DetailsImageRight = styled.div`
    width: 100%;
    height: 25%;
    border-radius: 5px;
    background: linear-gradient(90deg, rgba(217,128,70,1) 0%, rgba(172,99,51,1) 100%);
`

