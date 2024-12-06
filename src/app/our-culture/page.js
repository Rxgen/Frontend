import { fetchOurCultureData } from "../component/homepage/Api/fetchPageData";
import Topbanner from "../component/our-culture/topbanner";
import CultureLife from "../component/our-culture/life";
import Growth from "../component/our-culture/growth";
import Offer from "../component/our-culture/offer";
import Benefit from "../component/our-culture/benefits";


export default async function OurCulturePage (){
    const data = await fetchOurCultureData("top_banner");
    const topbannerdata=data.top_banner;
    const life = await fetchOurCultureData("life");
    const lifedata=life.life;
    const benefit = await fetchOurCultureData("benefit")
    const benefitdata= benefit.benefit;
    const growth = await fetchOurCultureData("growth")
    const growthdata= growth.growth;
    return(
        <div>
          <Topbanner topbannerdata={topbannerdata} />
          <CultureLife lifedata={lifedata} />
          <Offer />
          <Benefit benefitdata ={benefitdata} />
          <Growth growthdata={growthdata}  />
           
        </div>
    )
}