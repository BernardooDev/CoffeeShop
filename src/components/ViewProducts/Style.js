import styled from "styled-components";

export const ViewProducts = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #0C0F14;

  button {
    width: 10%;
    height: 10%;
    margin-bottom: 1%;

    @media (max-width: 800px) {
      width: 25%;
      margin-bottom: 1 5%;
    }
  }
`;

export const DisplayProduct = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  background-color: #282C34;
  border-radius: 20px;

  @media (max-width: 800px) {
    width: 80%;
    height: 50%;
  }
`;

export const ImgProduct = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: 5%;

  img {
    width: 80%;
  }
`

export const TittleProduct = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
  position: absolute;
  color: wheat;
  position: absolute;
  top: 65%;

  @media (max-width: 800px) {
    bottom: 10%;
  }
`

export const ButtonProduct = styled.button`
  width: 100px;
  height: 10%;
  border-radius: 5px;
  font-size: 1.2rem;
  position: absolute;
  bottom: 5%;
  border: none;
  background-color: #D98046;
  color: #FFEFD5;

  @media (max-width: 800px) {
    margin-bottom: 50%;
  }
`
