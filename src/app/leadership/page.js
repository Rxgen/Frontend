import { fetchLeadershiptData } from "@/app/component/homepage/Api/fetchPageData";
import Topbanner from "@/app/component/leadership/topbanner";
import Leadership from "@/app/component/leadership/leadership";

export default async function leadershippage() {

  const data = await fetchLeadershiptData("top_banner");
  const topbannerdata=data[0].top_banner;
  console.log("Leadership banner data",topbannerdata)
  const leadershipdata= await fetchLeadershiptData("leadership_details");
  
    return (
        <div>
       <Topbanner  topbannerdata={topbannerdata}/>
       <Leadership leadershipdata={leadershipdata} />
        </div>   
    )
}