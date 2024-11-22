import { fetchProductBySlug } from "@/app/component/homepage/Api/fetchProduct";
import ProductDetails  from "@/app/component/product/productdetails";
import ProductBanner from "@/app/component/product/productbanner";
import Filter from "@/app/component/product/filter";


export default async function fetchproductdetails({ params }){
  const { slug } = params;
  const productdetails = await fetchProductBySlug(slug);

  return (
    <div>
      <ProductBanner />
      <Filter /> 
      <ProductDetails productdata={productdetails } />  
    </div>
  )
}