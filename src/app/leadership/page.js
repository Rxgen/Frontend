import { fetchLeadershiptData } from "@/app/component/homepage/Api/fetchPageData";
import Topbanner from "@/app/component/leadership/topbanner";
import Leadership from "@/app/component/leadership/leadership";

export default async function leadershippage() {

   const leadershipdata = await fetchLeadershiptData();
   //const topbannerdata=data[0].top_banner; 
  //console.log("Leadership banner data",topbannerdata)
  //const leadershipdata= await fetchLeadershiptData("leadership_details");
  
    return (
        <div>
      <Topbanner /> 
       <Leadership leadershipdata={leadershipdata}/>
        </div>   
    )
}