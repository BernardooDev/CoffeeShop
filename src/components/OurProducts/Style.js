import styled from "styled-components"

export const ShowProducts = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    background-color: #0C0F14;

    h1 {
        color: #D98046;
    }
`

export const ListOfProducts = styled.div`
    width: 70%;
    height: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 1000px) {
        width: 100%;
    }
`

export const Products = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: #282C34;
    border-radius: 10px;
    
    @media (max-width: 1000px) {
        width: 30%;
        height: 70%;
    }
`


export const ImgProducts = styled.img`
    width: 90%;
    height: 50%;
    object-fit: cover;
    position: absolute;
    top: 5%;
`

export const NameProducts = styled.h1`
    font-size: 1.2rem;
    font-weight: 600;
    position: absolute;
    bottom: 25%;

    @media (max-width: 800px) {
        font-size: 0.8rem;
    }
`

export const ButtonProducts = styled.button`
    width: 50%;
    height: 12%;
    position: absolute;
    font-weight: bold;
    bottom: 6%;
    border: none;
    border-radius: 5px; 
    text-align: center;
    color: #FFEFD5;
    background-color: #D98046;
`
