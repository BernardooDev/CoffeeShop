import React from "react";
import {
  ShowProducts,
  ListOfProducts,
  Products,
  ImgProducts,
  NameProducts,
  ButtonProducts,
} from "./Style";
import { useNavigate } from "react-router-dom";
import usePosts from "../../api/posts";
import { Title } from "../Title/Style";

function OurProducts() {
  const { data: coffee, isLoading } = usePosts();
  const navigate = useNavigate();

  if (isLoading) return <h1>Preparing the coffee...</h1>;

  return (
    <>
      <ShowProducts>
        <Title>Our Products!</Title>
        <ListOfProducts>
          {coffee?.splice(0, 3).map((coffee) => (
            <Products key={coffee.id}>
              <ImgProducts src={coffee.url} />
              <NameProducts>{coffee.title}</NameProducts>
              <ButtonProducts
                onClick={() => {
                  navigate(`/menu/${coffee.id}`);
                }}
              >
                {coffee.preco}
              </ButtonProducts>
            </Products>
          ))}
        </ListOfProducts>
      </ShowProducts>
    </>
  );
}

export default OurProducts;
