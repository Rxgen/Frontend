import { fetchSustainabletData } from "../component/homepage/Api/fetchPageData";
import Topbanner from "../component/sustainable/topbanner";
import Community from "../component/sustainable/community";
import Environmental from "../component/sustainable/environmental";


export default async function SustainablePage() {
    const data = await fetchSustainabletData("top_banner");
    const topbannerdata=data.top_banner;
    const community = await fetchSustainabletData("section_content_1");
    const communitydata=community.section_content_1;
    const environmental = await fetchSustainabletData("environmental");
    const environmentaldata=environmental.environmental;


    return  (
        <div>
            <Topbanner topbannerdata={topbannerdata}/>
            <Community communitydata = {communitydata}/>
            <Environmental environmentaldata={environmentaldata} />
        </div>
    )
}