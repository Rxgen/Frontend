import Element from "../component/compliance-and-etihics/element";
import { fetchComplianceData } from "../component/homepage/Api/fetchPageData";
import TopBanner from "../component/compliance-and-etihics/topbanner";


export default async function CompliancePage(){
    const elementdata = await fetchComplianceData();
    
    return(
        <div>
          <TopBanner />
            <Element  elementdata={elementdata}/>
        </div>
    )
}