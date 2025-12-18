
import { fetchpageData } from "../component/homepage/Api/fetchPageData";
import ContentImage from "../component/about/ContentImage";
import TopBanner from "../component/about/topbanner";
import Script from "next/script";


export const generateMetadata = ({ params}) => {
  const path="about-us"
  
    return {
      title: 'About Lupin',
      description: 'Lupin US is dedicated to enhancing global health with innovative pharmaceutical solutions. Discover our history, values, purpose, and more.',
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
      }
    };
  };

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
      position: 2,
      name: "About Us",
      item: `${process.env.NEXT_PUBLIC_BASE_URL}about-us`,
    },
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lupin US",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  logo: `${process.env.NEXT_PUBLIC_BASE_URL}images/lupin_logo.webp`,
};
  

  
export default async function aboutpage() {

    const data = await fetchpageData("top_banner");
    const topbannerdata=data.top_banner;
    const contentdata= await fetchpageData("image_content");
    const contentimage=contentdata.image_content;

    return (
        <div> 
          <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      /> 

      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />   
            <TopBanner topbannerdata={topbannerdata} />
            <ContentImage contentdata={contentimage} />
        </div>
    )
    
}