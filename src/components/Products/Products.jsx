import { Products , ImgProducts, DetailsProducts, ButtonProducts} from "./Style"
import usePosts from '../../api/posts';
import { useNavigate } from "react-router-dom";

function products() {
 const { data: posts, isLoading, isError } = usePosts();
 const navigate = useNavigate()

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Ocorreu um erro ao buscar os posts.</div>;
  }

    return (
        <>
        {posts?.map((post) => (
            <Products key={post.id}>
                <ImgProducts src={post.url}/>
                <DetailsProducts>{post.title}</DetailsProducts>
                <ButtonProducts onClick={() => {
                  navigate(`/menu/${post.id}`)
                }}>{post.preco}</ButtonProducts>
            </Products>
        ))}
        </>
    )
}

export default products;