import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 30%;
  /* border-top: 2px solid wheat; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  text-align: center;
  background-color: #0C0F14;
  color: wheat;

  @media (max-width: 600px) {
    text-align: center;
  }
`;
