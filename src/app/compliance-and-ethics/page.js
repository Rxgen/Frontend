import Element from "../component/compliance-and-etihics/element";
import { fetchComplianceData } from "../component/homepage/Api/fetchPageData";


export default async function CompliancePage(){
    const data = await fetchComplianceData("Element");
    const elementdata=data.Element;
    return(
        <Element  elementdata={elementdata}/>
    )
}