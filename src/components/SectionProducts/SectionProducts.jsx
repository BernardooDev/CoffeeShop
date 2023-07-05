import usePosts from "../../api/posts";
import Products  from "../Products/Products";
import SearchCoffee from "../SearchCoffee/SearchCoffee";
import { FilterProducts, ListOfProducts, SectionProducts } from "./Style";

function sectionProducts() {
    return (
        <SectionProducts>
        {/* <FilterProducts>
            <SearchCoffee></SearchCoffee>
        </FilterProducts> */}
        <ListOfProducts>
            <Products />
        </ListOfProducts>
        </SectionProducts>
    )
}

export default sectionProducts;