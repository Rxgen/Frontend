import Element from "../component/compliance-and-etihics/element";
import { fetchComplianceData } from "../component/homepage/Api/fetchPageData";
import TopBanner from "../component/compliance-and-etihics/topbanner";

export const generateMetadata = () => {
    return {
      title: 'Compliance & Ethics | Upholding Integrity at Lupin US',
      description: 'Discover Lupin US commitment to compliance and ethics. Learn how we uphold integrity, transparency, and regulatory standards across our operations',
    };
  };    


export default async function CompliancePage(){
    const elementdata = await fetchComplianceData();
    
    return(
        <div>
          <TopBanner />
            <Element  elementdata={elementdata}/>
        </div>
    )
}