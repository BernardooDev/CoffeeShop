import styled from "styled-components";

export const CoffeeBeans = styled.img`
  width: 6%;
  animation: elevation 1s linear alternate infinite;

  @keyframes elevation {
    from {
      transform: translateY(-10%);
    }
  }

  @media (max-width: 600px) {
    width: 10%;
  }
`;
