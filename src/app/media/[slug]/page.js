import { fetchNewsdetails } from "@/app/component/homepage/Api/fetchnews";
import Newsdetailbanner from "@/app/component/media/newsdetailbanner";
import Newsdetail from "@/app/component/media/newsdetail";
import Script from "next/script";


export async function generateMetadata({ params }) {
  const { slug } = params;


  try {
   const NewsSeoData = await fetchNewsdetails(slug);
    console.log("Meta title and escription details",NewsSeoData)

    if (!NewsSeoData || NewsSeoData.length === 0) {
      return {
        title: NewsSeoData[0].news_title,
        description: "",
      };
    }

    const { seo } = NewsSeoData[0] || {};
    const { metaTitle, metaDescription } = seo || {};

    return {
      title: metaTitle || NewsSeoData[0].news_title,
      description: metaDescription || "Test2",
      alternates: {
        canonical:`${process.env.NEXT_PUBLIC_BASE_URL}media/${slug}`,
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


     // Media Schema 
const MediaSchema = (news, slug) => {
  const { seo } = news || {};
  const { metaDescription } = seo || {};

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${process.env.NEXT_PUBLIC_BASE_URL}media/${slug}`,
    },
    "headline": news?.news_title || "N/A",
    "description": metaDescription || "",  
    "author": {
      "@type": "Organization",
      "name": "Lupin US",
      "url": "https://www.lupin.com/US",
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lupin US",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_BASE_URL}/images/lupin_logo.webp`,
      },
    },
    "datePublished": news?.publishedAt || "",
  };
};


export default async function Newsdetaildata({params}) {

  const { slug } = params;
      const Newsdetaildata = await fetchNewsdetails(slug);
      const news = Newsdetaildata?.[0];

// Breadcrumb Schema
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
        name: "Media",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}media`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: news?.news_title || "N/A",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}media/${slug}`,
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

      {/* Media Schema */}
      <Script
        id="Media-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(MediaSchema(news, slug)) }}
      />   
          <Newsdetailbanner />
          <Newsdetail Newsdetaildata={Newsdetaildata} />
        </div>
        
        
    )
}
