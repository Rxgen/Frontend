import { fetchProducts } from "../component/homepage/Api/fetchProduct";
import Products from "../component/product/productlist";
import Filter from "../component/product/filter";
import Productbanner from "../component/product/productbanner";

export default async function ProductsPage({ searchParams }) {
  const { letter = "", page = "1" , category = "" , brand = "" , ndc= "", productName= ""} = searchParams; // Retrieve page number from search params
  console.log("Category api call " , category);
  const { products, totalPages} = await fetchProducts(letter || "", page, category || "" , brand || "", productName || "" , ndc || "");

  console.log("Server" , products );
  console.log("Total Pages:", totalPages);
  

  return (
    <div> 
      <Productbanner />
       <Filter selectedLetter={letter || ""} selectedCategory={category || ""}   selectedBrand={brand} />
        <Products productdata={products} totalPages={totalPages} currentPage={parseInt(page, 10)} />
      
    </div>
  );
}


