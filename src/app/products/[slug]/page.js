import { fetchProductBySlug } from "@/app/component/homepage/Api/fetchProduct";
import ProductDetails  from "@/app/component/product/productdetails";
import DetailBanner from "@/app/component/product/productdetailbanner";
import Filter from "@/app/component/product/filter";



/* export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const productSeoDetails = await fetchProductBySlug(slug);

    if (!productSeoDetails || productSeoDetails.length === 0) {
      return {
        title: "Product Not Found",
        description: "The product you are looking for does not exist.",
      };
    }

    const { seo } = productSeoDetails[0] || {};
    const { metaTitle, metaDescription } = seo || {};

    return {
      title: metaTitle || "Default Title",
      description: metaDescription || "Default Description",
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}`,
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return {
      title: "Error",
      description: "An error occurred while fetching product details.",
    };
  }
} */

export default async function fetchproductdetails({ params }){
  const { slug } = params;
  const productdetails = await fetchProductBySlug(slug);

  return (
    <div>
      <DetailBanner />
      <Filter /> 
      <ProductDetails productdata={productdetails } />  
    </div>
  )
}