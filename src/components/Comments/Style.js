import styled from "styled-components"

export const CommentsSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0C0F14;
`

export const TitleComments = styled.div`
    width: 50%;
    height: 20%;
    top: 10%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #D98046;

    }
`
export const PeopleComments = styled.div`
    width: 50%;
    height: 100%;
    top: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1000px) {
        width: 100%;
    }

`

export const SingleComments = styled.div`
    width: 100%;
    height: 33%;
    position: relative;
    margin: 1rem 0;
`

export const PhotoComments = styled.div`
    width: 10%;
    height: 50%;
    border-radius: 50%;
    position: absolute;
    top: 10%;
    left: 5%;
    border: 2px solid wheat;
   
    @media (min-width: 320px) and (max-width: 480px) {
        width: 20%;
        height: 40%;
    }   

    @media (min-width: 481px) and (max-width: 1180px) {
        width: 15%;
        height: 40%;
        left: 10%;
    }   

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
`

export const NameComments = styled.div`
    width: 30%;
    height: 15%;
    position: absolute;
    top: 10%;
    left: 20%;
    

    @media (max-width: 1000px) {
        left: 30%;
        width: 50%;
    }
    h1 {
        color: wheat;
        font-weight: bold;
    }

`

export const FeedbackComments = styled.div`
    width: 60%;
    height: 40%;
    border: 1px solid wheat;
    border-radius: 5px;
    position: absolute;
    top: 35%;
    left: 20%;
    
    @media (max-width: 1000px) {
        left: 30%;
    }

    p {
        margin: 0.5rem;
        color: white;
    }
`