import { fetchCoreValueData } from "../component/homepage/Api/fetchPageData";
import Topbanner from "../component/core-value/topbanner";
import Content from "../component/core-value/content";



export default async function CoreValuePage() {
    const data = await fetchCoreValueData("top_banner");
    const topbannerdata=data.top_banner;
    const content= await fetchCoreValueData("content_block");
    const contentdata=content.content_block;
    return(
        <div>
           <Topbanner topbannerdata={topbannerdata} />
           <Content contentdata={contentdata} />
        </div>

    )
}