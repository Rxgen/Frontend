import { fetchProducts } from "../component/homepage/Api/fetchProduct";
import Products from "../component/product/productlist";
import Filter from "../component/product/filter";
import Productbanner from "../component/product/productbanner";

export default async function ProductsPage({ searchParams }) {
  const { letter = "", page = "1" , category = "" , new_products="",brand = "" , ndc= "", productName= ""} = searchParams; 
  console.log("Category api call " , category);
  const { products, totalPages,totalproduct} = await fetchProducts(letter || "", page, category || "" , new_products || "" ,brand || "", productName || "" , ndc || "");

  console.log("Server" , products );
 
  

  return (
    <div> 
      <Productbanner />
       <Filter selectedLetter={letter || ""} selectedCategory={category || ""}   selectedBrand={brand} />
        <Products productdata={products} totalPages={totalPages} currentPage={parseInt(page, 10)} totalproduct={totalproduct}/>
      
    </div>
  );
}


