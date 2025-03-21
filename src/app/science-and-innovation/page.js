import { fetchSciencInnovationData } from "../component/homepage/Api/fetchPageData";
import Team from "../component/science-and-innovation/team";
import Topbanner from "../component/science-and-innovation/topbanner";
import Respiratory from "../component/science-and-innovation/respiratory";
import MedicalTech from "../component/science-and-innovation/medicaltech";

export const generateMetadata = () => {
    return {
      title: 'Lupin US: Advancing Science & Innovation in Healthcare',
      description: 'Discover how Lupin US drives healthcare forward with cutting-edge science and innovation, developing advanced pharmaceutical solutions for better patient care',
    };
  };    

export default async function scienceInnovationPge(){

    const data = await fetchSciencInnovationData("top_banner");
    const topbannerdata=data.top_banner;
    const Medical= await fetchSciencInnovationData("slider");
    const Medicaldata=Medical.slider;

    return (
        <div>
            <Topbanner topbannerdata={topbannerdata}/>
            <Team />
            <MedicalTech  Medicaldata={Medicaldata}/>
            <Respiratory />
        </div>
    )
}