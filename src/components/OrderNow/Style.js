import styled from "styled-components";

export const OrderNow = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40%;
  gap: 2;
  flex-direction: column;
  background-color: #0C0F14;
  color: wheat;
  font-weight: bold;
  
  h1 {
    color: wheat;
  }

  @media (max-width: 1000px) {
    div {
      width: 50%;
    }

    hr {
      display: none;
    }
  }
`;

export const DetailsOrder = styled.p`
  width: 50%;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 5%;

  @media (max-width: 1000px) {
    width: 70%;
    font-size: 0.8rem;
  }
`;
