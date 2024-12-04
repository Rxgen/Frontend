import { fetchOurOfferingData } from "../component/homepage/Api/fetchPageData";
import Topbanner from "../component/our-offering/topbanner";
import Generic from "../component/our-offering/generic";
import Product from "../component/our-offering/product";
import Innovative from "../component/our-offering/innovative";


export default async function OurOfferingPage( ){
    const data = await fetchOurOfferingData("top_banner");
    const topbannerdata=data.top_banner;
    const generic= await fetchOurOfferingData("generic");
    const genericdata=generic.generic;
    const innovative= await fetchOurOfferingData("innovative");
    const innovativedata=innovative.innovative;

    const product= await fetchOurOfferingData("product");
    const productdata=product.product;
    return (
        <div>
            <Topbanner topbannerdata={topbannerdata}/>
            <Generic genericdata={genericdata} />
            <Innovative innovativedata={innovativedata}/>
            <Product  productdata={productdata}/>
            
        </div>
    )
}