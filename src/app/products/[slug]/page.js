import { fetchProductBySlug } from "@/app/component/homepage/Api/fetchProduct";
import ProductDetails  from "@/app/component/product/productdetails";
import DetailBanner from "@/app/component/product/productdetailbanner";
import Filter from "@/app/component/product/filter";
import Script from "next/script";



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
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${slug}`,
    };
  } catch (error) {
    console.error("Error fetching product details:", error);
    return {
      title: "Error",
      description: "An error occurred while fetching product details.",
    };
  }
} 

 const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

const ProductSchema = (product) => ({
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": product?.product_name || "N/A",
  "image": getMediaUrl(product.product_images[0].slide.url) || "",
  "description": product?.description || "",
  "brand": {
    "@type": "Brand",
    "name": product?.brand.name || "N/A",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "185",
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Strength",
      "value": product.strength || "N/A",
    },
    {
      "@type": "PropertyValue",
      "name": "Pack Size",
      "value": product.pack_size || "N/A"
    },
    {
      "@type": "PropertyValue",
      "name": "NDC#",
      "value": product.ndc || "N/A"
    },
    {
      "@type": "PropertyValue",
      "name": "RLD/Brand Name",
      "value": product?.brand?.name || "N/A",
    },
    {
      "@type": "PropertyValue",
      "name": "TE Rating",
      "value": product.te_rating || "N/A"
    },
    {
      "@type": "PropertyValue",
      "name": "Therapeutic Category",
      "value": product.category.name || "N/A"
    }
  ],
  "manufacturer": {
    "@type": "Organization",
    "name": "Lupin US",
    "logo": `${process.env.NEXT_PUBLIC_BASE_URL}images/lupin_logo.webp`,
    "url": `${process.env.NEXT_PUBLIC_BASE_URL}`,
  }
});




export default async function fetchproductdetails({ params }){
  const { slug } = params;
  const productdetails = await fetchProductBySlug(slug);
  const product = productdetails?.[0];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      },
      {
        "@type": "ListItem", 
        "position": 2, 
        "name": "Products",
        "item": "https://www.lupin.com/US/product/"  
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product?.product_name || "N/A",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}products/${slug}`,
      },
    ],
  };


  return (
    <div>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      /> 

      {/* Product Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ProductSchema(product)) }}
      />   
      <DetailBanner />
      <Filter /> 
      <ProductDetails productdata={productdetails } />  
    </div>
  )
}