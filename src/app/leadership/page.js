import { fetchLeadershiptData } from "@/app/component/homepage/Api/fetchPageData";
import Topbanner from "@/app/component/leadership/topbanner";
import Leadership from "@/app/component/leadership/leadership";


export const generateMetadata = () => {
  return {
    title: 'Meet the leaders driving Lupin US commitment to global health',
    description: 'Explore the leadership team at Lupin US, dedicated to advancing global health through innovation and excellence in the pharmaceutical industry  ',
  };
};

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