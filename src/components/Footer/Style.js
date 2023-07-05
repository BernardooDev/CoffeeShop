import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 25%;
  border-top: 2px solid wheat;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #0C0F14;
  color: white;
  flex-direction: column;
`;

export const TittleFooter = styled.h1`
  font-size: 1.4rem;
  color: wheat;
  font-weight: bold;
`;

export const DescriptionFooter = styled.div`
  width: 50%;
  height: 20%;
  color: wheat;

  a {
    text-decoration: none;
    color: inherit;
    color: wheat;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const SocialMedias = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 20%;
    height: 100%;
    color: wheat;
  }

  @media (max-width: 800px) {
    width: 50%;
    height: 20%;
  }
`
