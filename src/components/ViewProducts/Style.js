import styled from "styled-components";

export const ViewProducts = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
  width: 50%;
  height: 80%;
  border: 2px solid;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 800px) {
    width: 80%;
    height: 50%;
  }
`;

export const ImgProduct = styled.div`
  width: 100%;
  height: 60%;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  
  img {
    max-width: 100%;
    max-height: 100%;
    border: 1px solid;
    object-fit: cover;
  }
`

export const TittleProduct = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin: 1em 0;
  position: absolute;
  bottom: 15%;

  @media (max-width: 800px) {
    bottom: 10%;
  }
`

export const ButtonProduct = styled.button`
  width: 100px;
  height: 10%;
  border-radius: 5px;
  position: absolute;
  bottom: 5%;

  @media (max-width: 800px) {
    margin-bottom: 50%;
  }
`
