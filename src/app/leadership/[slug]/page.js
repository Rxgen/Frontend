import { fetchLeadershipdetails } from "@/app/component/homepage/Api/fetchPageData";
import Leadershipdetails from "@/app/component/leadership/leadershipdetails";
import Topbanner from "@/app/component/leadership/topbanner";

export default async function leadrshipdetails({params}) {
    
    const { slug } = params;
    const leadershipdetaildata = await fetchLeadershipdetails(slug);
    

    //console.log("Leadesrhip single Details data" , topbannerdata );
    return (
        <div>
            <Topbanner  />
            <Leadershipdetails  leadershipdetaildata={leadershipdetaildata}/>
        </div>
        )
}