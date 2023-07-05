import styled from "styled-components"

export const Products = styled.div`
    border-radius: 5%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 250px;
    height: 300px;
    background-color: #282C34;
    position: relative;
`

export const ImgProducts = styled.img`
    height: 60%;
    width: 80%;
    max-width: 100%;
    max-height:100%;
    object-fit: cover;
    overflow: hidden;
    position: absolute;
    top: 5%;
    border-radius: 5px;
`

export const DetailsProducts = styled.p`
    height: 20%;
    width: 100%;
    flex-wrap: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    padding-top: 5%;
    position: absolute;
    top: 65%;
    color: wheat;
    font-size: 1.2rem;
`

export const ButtonProducts = styled.button`
    height: 12%;
    width: 50%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
    cursor: pointer;
    position: absolute;
    top: 80%;
    background-color: #D98046;
    color: #FFEFD5;
    border: none;
`