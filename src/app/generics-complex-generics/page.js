import { fetchGenericMedicineData } from "../component/homepage/Api/fetchPageData";
import Topbanner from "../component/generics-complex-generics/tobbanner";
import Growth from "../component/generics-complex-generics/growth";
import Medical from "../component/generics-complex-generics/medical";
import Product from "../component/generics-complex-generics/product";

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