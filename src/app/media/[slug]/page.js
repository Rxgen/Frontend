import { fetchNewsdetails } from "@/app/component/homepage/Api/fetchnews";
import Newsdetailbanner from "@/app/component/media/newsdetailbanner";
import Newsdetail from "@/app/component/media/newsdetail";


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

export default async function Newsdetaildata({params}) {

  const { slug } = params;
      const Newsdetaildata = await fetchNewsdetails(slug);
    return (
        <div>
          <Newsdetailbanner />
          <Newsdetail Newsdetaildata={Newsdetaildata} />
        </div>
        
        
    )
}