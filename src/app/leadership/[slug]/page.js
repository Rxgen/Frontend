import { fetchLeadershipdetails } from "@/app/component/homepage/Api/fetchPageData";
import Leadershipdetails from "@/app/component/leadership/leadershipdetails";
import Topbanner from "@/app/component/leadership/topbanner";

export default async function leadrshipdetails({params}) {
    
    const { slug } = params;
    const leadershipdetaildata = await fetchLeadershipdetails(slug);
    const topbannerdata=leadershipdetaildata[0].top_banner;

    console.log("Leadesrhip single Details data" , topbannerdata );
    return (
        <div>
            <Topbanner topbannerdata={topbannerdata} />
            <Leadershipdetails  leadershipdetaildata={leadershipdetaildata}/>
        </div>
        )
}