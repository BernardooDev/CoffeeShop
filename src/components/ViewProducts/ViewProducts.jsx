import {
  ViewProducts,
  DisplayProduct,
  ImgProduct,
  TittleProduct,
  ButtonProduct,
} from "./Style";

import { VscChromeClose } from "react-icons/vsc";

import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

export default function viewProducts() {
  const url = useParams("id");
  const navigate = useNavigate();

  const fetchUrl = async () => {
    const response = await fetch(`http://localhost:3003/coffee/${url.id}`);
    const data = await response.json();
    return data;
  };

  const useUrl = () => {
    return useQuery("url", fetchUrl);
  };

  const { data } = useUrl();

  return (
    <ViewProducts>
      <DisplayProduct>
        <VscChromeClose
          onClick={() => {
            navigate("/menu");
          }}
        >
          X
        </VscChromeClose>
        <ImgProduct>
          <img src={data?.url} />
        </ImgProduct>
        <TittleProduct>{data?.title}</TittleProduct>
        <ButtonProduct style={{ width: "50%" }}>{data?.preco}</ButtonProduct>
      </DisplayProduct>
    </ViewProducts>
  );
}
