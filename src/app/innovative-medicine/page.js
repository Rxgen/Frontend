import { fetchInnovativeMedicineData } from "../component/homepage/Api/fetchPageData";
import TopBanner from "../component/Innovative-medicine/topbanner";
import Medical from "../component/Innovative-medicine/medical";
import Patient from "../component/Innovative-medicine/patient";
import BrandPdf from "../component/Innovative-medicine/brand_pdf";

export const generateMetadata = () => {
  return {
    title: 'Innovative Medicines: Advancing Healthcare with Cutting-Edge Solutions',
    description: "Discover innovative medicines designed to advance healthcare and improve patient outcomes.",
  };
}; 

export default async function InnovativeMedicinePage(){
    const data = await fetchInnovativeMedicineData("top_banner");
    const topbannerdata=data.top_banner;

    const medical = await fetchInnovativeMedicineData("section_content_1");
    const medicaldata=medical.section_content_1;

    const patient = await fetchInnovativeMedicineData("section_content_2");
    const patientdata=patient.section_content_2;

    const brandpdf = await fetchInnovativeMedicineData("brand_pdf");
    const brandpdfdata=brandpdf.brand_pdf;

    return (
        <div>
          <TopBanner topbannerdata={topbannerdata}/>
          <Medical medicaldata={medicaldata} />
          <Patient patientdata={patientdata} />
          <BrandPdf brandpdfdata={brandpdfdata} /> 
        </div>
        
        

    )
}