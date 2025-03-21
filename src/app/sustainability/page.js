import { fetchSustainabletData } from "../component/homepage/Api/fetchPageData";
import Topbanner from "../component/sustainable/topbanner";
import Community from "../component/sustainable/community";
import Environmental from "../component/sustainable/environmental";
import Empower from "../component/sustainable/empower";
import Transparency from "../component/sustainable/transparency";

export const generateMetadata = () => {
    return {
      title: 'Sustainability at Lupin US | Our Commitment to a Greener Future',
      description: "Explore Lupin's sustainability efforts, focusing on environmental responsibility, social impact, and sustainable healthcare solutions",
    };
  }; 

export default async function SustainablePage() {
    const data = await fetchSustainabletData("top_banner");
    const topbannerdata=data.top_banner;
    const community = await fetchSustainabletData("section_content_1");
    const communitydata=community.section_content_1;
    const environmental = await fetchSustainabletData("environmental");
    const environmentaldata=environmental.environmental;
    const empower=await fetchSustainabletData("sustain_empower");
    const empowerdata = empower.sustain_empower;
    const transparency=await fetchSustainabletData("transparency_slider");
    const transparencydata = transparency.transparency_slider;


    return  (
        <div>
            <Topbanner topbannerdata={topbannerdata}/>
            <Community communitydata = {communitydata}/>
            <Environmental environmentaldata={environmentaldata} />
            <Empower empowerdata ={empowerdata} />
            <Transparency transparencydata ={transparencydata} />
        </div>
    )
}