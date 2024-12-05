import { fetchGenericMedicineData } from "../component/homepage/Api/fetchPageData";
import Topbanner from "../component/generic-medicine/tobbanner";
import Growth from "../component/generic-medicine/growth";
import Medical from "../component/generic-medicine/medical";
import Product from "../component/generic-medicine/product";

export default async function GenericMedicinePage (){
  const data = await fetchGenericMedicineData("top_banner");
  const topbannerdata=data.top_banner;
  const growth= await fetchGenericMedicineData("growth");
  const growthdata=growth.growth;
  const medical= await fetchGenericMedicineData("medical");
  const medicaldata=medical.medical;
  const product= await fetchGenericMedicineData("product");
  const productdata=product.product;
    
    return(
            <div>
                <Topbanner  topbannerdata={topbannerdata}/>
                <Growth  growthdata={growthdata}/>
                <Medical medicaldata={medicaldata}/>
                <Product productdata={productdata}/>
            </div>
    )
}