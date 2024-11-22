import { fetchProducts } from "../component/homepage/Api/fetchProduct";
import Products from "../component/product/productlist";
import Filter from "../component/product/filter";
import Productbanner from "../component/product/productbanner";

export default async function ProductsPage({ searchParams }) {
  const { letter } = searchParams; 
  console.log(letter);
  const products = await fetchProducts(letter || "");

  return (
    <div> 
      <Productbanner />
       <Filter selectedLetter={letter || ""} />
        <Products productdata={products} />
      
    </div>
  );
}


