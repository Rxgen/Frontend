import { fetchNewstData } from "@/app/component/homepage/Api/fetchnews";
import PressNewsBanner from "@/app/component/press-releases/press-banner";
import PressNews from "@/app/component/press-releases/press-news";


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
      description: metaDescription || "Test3",
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




export default async function Newsdata({searchParams}) {
  const { search = "", page = 1 } = searchParams;
  const { pressnews, totalPages} = await fetchNewstData(page, 9, search);
    return (
        <div>
          <PressNewsBanner />
          <PressNews  PressNewsData={pressnews} totalPages={totalPages} currentPage={parseInt(page, 10)}/>
        </div>
      )
}