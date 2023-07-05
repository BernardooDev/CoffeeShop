import { useState } from "react";
import { SearchCoffee } from "./Style";
import { Link } from "react-router-dom"
import usePosts from "../../api/posts";

function searchCoffee() {
  const [query, setQuery] = useState("");
  const { data: coffee, isLoading, isError } = usePosts();
  const queryInput = ({target}) => {
    setQuery(target.value)
  }


  if (isLoading) return <h1>Loading...</h1>

  return (
    <>
      <SearchCoffee
        type="text"
        placeholder="Search..."
        value={query}
        onChange={queryInput}
      />
      <ul style={{ width: "80%"}}>
        {coffee
          ?.filter((product) => product.title.toLowerCase().includes(query))
          .map((product) => (
            <li key={product.id}><Link to={"/menu/" + product.id}>{product.title}</Link></li>
          ))}
      </ul>
    </>
  );
}

export default searchCoffee;
