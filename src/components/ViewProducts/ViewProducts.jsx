import {
  ViewProducts,
  DisplayProduct,
  ImgProduct,
  TittleProduct,
  ButtonProduct,
  ArrowLeft,
  ArrowRight,
} from "./Style";

import { VscChromeClose } from "react-icons/vsc";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

export default function viewProducts() {
  const url = useParams();
  const navigate = useNavigate();

  const fetchUrl = async () => {
    const response = await fetch(`http://localhost:3003/coffee/${url.id}`);
    const data = await response.json();
    return data;
  };

  const useUrl = () => {
    return useQuery("url", fetchUrl);
  };

  const handleLeftClick = () => {
    const previousId = parseInt(url.id) - 1;
    if (previousId >= 1) {
      navigate(`/menu/${previousId}`);
      window.location.reload();
    }
  };
  
  const handleRightClick = () => {
    const nextId = parseInt(url.id) + 1;
    if (nextId <= 8) {
      navigate(`/menu/${nextId}`);
      window.location.reload();
    }
  }
  const { data } = useUrl();

  return (
    <ViewProducts>
      <ArrowLeft onClick={handleLeftClick}><AiOutlineArrowLeft /></ArrowLeft>
      <ArrowRight onClick={handleRightClick}><AiOutlineArrowRight /></ArrowRight>
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
