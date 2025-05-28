import { fetchLeadershipdetails } from "@/app/component/homepage/Api/fetchPageData";
import Leadershipdetails from "@/app/component/leadership/leadershipdetails";
import Topbanner from "@/app/component/leadership/topbanner";


 export async function generateMetadata({ params }) {
  const { slug } = params;


  try {
   const LeadershipSeoData = await fetchLeadershipdetails(slug);
    console.log("Meta title and escription details",LeadershipSeoData)

    if (!LeadershipSeoData || LeadershipSeoData.length === 0) {
      return {
        title: LeadershipSeoData[0].leader_name,
        description: "",
      };
    }

    const { seo } = LeadershipSeoData[0] || {};
    const { metaTitle, metaDescription } = seo || {};

    return {
      title: metaTitle || LeadershipSeoData[0].leader_name,
      description: metaDescription || "Test2",
      alternates: {
        canonical:`${process.env.NEXT_PUBLIC_BASE_URL}leadership/${slug}`,
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


export default async function leadrshipdetails({params}) {

    const { slug } = params;
    const leadershipdetaildata = await fetchLeadershipdetails(slug);

    return (
        <div>
            <Topbanner  />
            <Leadershipdetails  leadershipdetaildata={leadershipdetaildata}/>
        </div>
        )
}