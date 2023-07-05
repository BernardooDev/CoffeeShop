import styled from "styled-components";

export const ContactPage = styled.main`
  width: 100%;
  height: 100%;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ContactUsTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
`;

export const ContactUsP = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const ContainerAboutContact = styled.div`
  width: 70%;
  height: 80%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const ContainerLeft = styled.div`
  width: 40%;
  height: 100%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InsideContainerLeft = styled.div`
  width: 90%;
  height: 90%;
  border: 2px solid;

  h1 {
    font-size: 1.6rem;
    font-weight: bold;
  }

  p {
    margin-top: 0.8rem;
    font-size: 1.2rem;
  }
`;

export const ContainerRight = styled.div`
  width: 60%;
  height: 100%;
  border: 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InsideContainerRight = styled.div`
  width: 90%;
  height: 90%;
  border: 2px solid;
`;
