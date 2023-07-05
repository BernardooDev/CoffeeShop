import styled from "styled-components";

export const SectionProducts = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  background-color: #0C0F14;

  @media (max-width: 1000px) {
    overflow-y: scroll;
    aside {
      display: none;
    }
  }
`;

export const FilterProducts = styled.aside`
  width: 25%;
  height: 100%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  ul {
    position: absolute;
    top: 15%;
    li {
      margin-bottom: 5%;
      list-style: none;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }
`;

export const ListOfProducts = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
`;
