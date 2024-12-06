import { fetchCareerData } from "../component/homepage/Api/fetchPageData";
import Topbanner from "../component/career/topbanner";
import CustomImage from "../component/career/customimage";


export default async function CareerPage () {
    const data = await fetchCareerData("top_banner");
    const topbannerdata=data.top_banner;
    const image= await fetchCareerData("image");
    const imagedata=image.image;
    return (
        <div>
            <Topbanner topbannerdata={topbannerdata}/>
            <CustomImage imagedata={imagedata}/>
        </div>
    )
}