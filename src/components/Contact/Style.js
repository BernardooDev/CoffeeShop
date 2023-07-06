import styled from "styled-components";

export const ContactPage = styled.main`
  width: 100%;
  height: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #0C0F14;
`;

export const ContactUsP = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  font-weight: 600;
  color: wheat;
`;

export const ContainerAboutContact = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const ContainerLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282C34;
  color: whitesmoke;
`;

export const InsideContainerLeft = styled.div`
  width: 90%;
  height: 90%;

  h1 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-left: 0.5rem;
  }

  p {
    margin-top: 0.4rem;
    font-size: 1.2rem;
    margin-left: 0.5rem;
  }
`;

export const ContactInformationLeft = styled.div`
  width: 100%;
  height: 20%;
`

export const DataAboutInformationLeft = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const SingleDataAboutInformation = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;

  svg {
    font-size: 2rem;
    margin-left: 1rem;
  }

  h3 {
    margin-left: 1rem;
    font-size: 1rem;
  }
`


export const SocialMediasInformationLeft = styled.div`
  width: 100%;
  height: 28%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    width: 33%;
    height: 33%;
  }

 
`

export const ContainerRight = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
`;

export const InsideContainerRight = styled.form`
  width: 90%;
  height: 90%;
`;

export const FormContainerRight = styled.div`
  width: 100%;
  height: 40%;
`

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`

export const SingleInput = styled.div`
  width: 49.2%;
  height: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    font-size: 0.9rem;
    margin: 0 0.5rem;
  }

  input {
    outline: none;
    margin: 0 0.5rem;
    padding: 0.5rem 0rem;
    border: none;
    border-bottom: 1px solid grey;
    background-color: transparent;
  }
`

export const SelectContainerRight = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SingleInputRadio = styled.div`
  width: 33%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  label {
    font-size: 0.9rem;
  }
`

export const SendMessageRight = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  textarea {
    width: 80%;
    height: 60%;
    padding: 0.5rem;
    background-color: transparent;
    border: 1px solid;
    outline: none;
  }

  button {
    width: 20%;
    height: 20%;
    background-color: black;
    color: whitesmoke;
    border: none;
  }
`
