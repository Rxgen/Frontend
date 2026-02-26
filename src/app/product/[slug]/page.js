import { fetchProductBySlug } from "@/app/component/homepage/Api/fetchProduct";
import ProductDetails  from "@/app/component/product/productdetails";
import DetailBanner from "@/app/component/product/productdetailbanner";
import Filter from "@/app/component/product/filter";
import { redirect } from "next/navigation";





 export async function generateMetadata({ params }) {
  const { slug } = params;


  try {
    const productSeoDetails = await fetchProductBySlug(slug);
    console.log("Meta title and escription details",productSeoDetails)

    if (!productSeoDetails || productSeoDetails.length === 0) {
      return {
        title: productSeoDetails[0].product_name,
        description: " ",
      };
    }

    const { seo } = productSeoDetails[0] || {};
    const { metaTitle, metaDescription } = seo || {};

    return {
      title: metaTitle || productSeoDetails[0].product_name,
      description: metaDescription || " ",
      alternates: {
        canonical:`${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}`,
      }
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return {
      title: "Error",
      description: "An error occurred while fetching product details.",
    };
  }
} 

export default async function Page({ params }) {
  const { slug } = params;

/*   if (slugMappings[slug]) {
    console.log(`Redirecting from /product/${slug} to /product/${slugMappings[slug]}`);
    redirect(`/product/${slugMappings[slug]}`);
  } */

  console.log(`Fetching product details for slug: ${slug}`);
 
  const productdetails = await fetchProductBySlug(slug);

  return (
    <div>
      <DetailBanner />
      <Filter /> 
      <ProductDetails productdata={productdetails } />  
    </div>
  )
}