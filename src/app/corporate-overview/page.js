import { fetchCorporatetData } from "../component/homepage/Api/fetchPageData";
import TopBanner from "../component/corporate/top-banner";
import CorporateAboutData from "../component/corporate/about";
import Generic from "../component/corporate/generic";
import Innovation from "../component/corporate/innovative";
import Sustainable from "../component/corporate/sustainable";


export default async function CorporatePge() {
  const data = await fetchCorporatetData("top_banner");
  const topbannerdata=data.top_banner;
  const about = await fetchCorporatetData("section_content_1");
  const aboutdata=about.section_content_1;
  const generic = await fetchCorporatetData("section_content_2");
  const genericdata=generic.section_content_2;
  const innovative = await fetchCorporatetData("section_content_3");
  const innovativedata=innovative.section_content_3;
  const sustainable = await fetchCorporatetData("section_content_4");
  const sustainabledata=sustainable.section_content_4;


  return (
    <div>
        <TopBanner topbannerdata={topbannerdata} />
        <CorporateAboutData  aboutdata={aboutdata}/>
        <Generic genericdata={genericdata} />
        <Innovation innovativedata ={innovativedata} />
        <Sustainable sustainabledata ={sustainabledata} />
    </div>
        

  )
}