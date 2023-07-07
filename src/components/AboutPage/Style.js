import styled from "styled-components";

export const AboutSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c0f14;

  @media (max-width: 800px) {
    flex-direction: column;
    overflow-y: scroll;
  }
`;

export const LeftSection = styled.aside`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 800px) {
    height: 100%;
    width: 100%;
  }
`;

export const MainTitleLeft = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 1rem;

  @media (max-width: 800px) {
    height: 80%;
    margin: 0;
  }

  h1 {
    margin: 1.5rem;
    padding-left: 1rem;
    font-size: 2rem;
    color: wheat;

    @media (max-width: 800px) {
      font-size: 1.4rem;
      padding-left: 0.5rem;
      margin: 0.6rem;
    }
  }

  p {
    margin: 1.5rem;
    padding-left: 1rem;
    font-size: 1.4rem;
    color: whitesmoke;

    @media (max-width: 800px) {
      font-size: 1rem;
      margin: 0.6rem;
      padding-left: 0.5rem;
    }
  }
`;

export const BellowTitleLeft = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    height: 20%;
  }
`;

export const SeeMoreButton = styled.button`
  margin-left: 1rem;
  width: 40%;
  height: 50%;
  border: none;
  border-radius: 5px;
  font-size: 1.6rem;
  background-color: #d98046;
  color: whitesmoke;

  @media (max-width: 800px) {
    height: 50%;
    width: 50%;
  }
`;
export const InfosAboutLeft = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    height: 40%;
  }
`;

export const DataAboutLeft = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const SingleDataAboutLeft = styled.div`
  height: 100%;
  width: 30%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    color: whitesmoke;

    @media (max-width: 800px) {
      font-size: 1.6rem;
    }
  }

  span {
    color: #d98046;
  }

  p {
    font-size: 2rem;
    color: wheat;

    @media (max-width: 800px) {
      font-size: 0.8rem;
    }
  }
`;

export const RightSection = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    height: 20%;
    width: 40%;
  }
`;

export const ImageRight = styled.div`
  width: 100%;
  height: 75%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    height: 60%;
  }

  @media (max-width: 800px) {
    height: 100%;

    img {
      height: 50%;
      width: 50%;
    }
  }
`;

export const DetailsImageRight = styled.div`
  width: 100%;
  height: 25%;
  border-radius: 5px;
  background: rgb(227, 154, 58);
  background: linear-gradient(
    40deg,
    rgba(227, 154, 58, 1) 0%,
    rgba(217, 128, 70, 1) 100%
  );

  display: flex;
  justify-content: center;
  flex-direction: column;
  color: whitesmoke;

  p {
    margin: 0 auto;
    font-size: 1.6rem;
  }

  h1 {
    margin: 0 auto;
    font-size: 2.4rem;
  }
  
  @media (max-width: 800px) {
    display: none;
  }
`;
