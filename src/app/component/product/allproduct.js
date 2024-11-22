import { fetchProduct } from "../homepage/Api/fetchProduct"; 
import Products from "../product/allproductlist";

export default async function product() {
    const data = await fetchProduct();
    console.log("Product Data in AllProduct:", data);
    
    return (
        <div>
          <Products productdata={data} />
        </div>
      );
}