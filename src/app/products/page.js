import { fetchProducts } from "../component/homepage/Api/fetchProduct";
import Products from "../component/product/productlist";
import Filter from "../component/product/filter";
import Productbanner from "../component/product/productbanner";

export default async function ProductsPage({ searchParams }) {
  const { letter = "", page = "1" } = searchParams; // Retrieve page number from search params
  const { products, totalPages } = await fetchProducts(letter || "", page);

  console.log("Server" , products );
  console.log("Total Pages:", totalPages);

  return (
    <div> 
      <Productbanner />
       <Filter selectedLetter={letter || ""} />
        <Products productdata={products} totalPages={totalPages} currentPage={parseInt(page, 10)} />
      
    </div>
  );
}


