
import { fetchpageData } from "../component/homepage/Api/fetchPageData";
import ContentImage from "../component/about/ContentImage";
import TopBanner from "../component/about/topbanner";

export default async function aboutpage() {

    const data = await fetchpageData("top_banner");
    const topbannerdata=data.top_banner;
    const contentdata= await fetchpageData("image_content");
    const contentimage=contentdata.image_content;

    return (
        <div> 
            <TopBanner topbannerdata={topbannerdata} />
            <ContentImage contentdata={contentimage} />
        </div>
    )
}