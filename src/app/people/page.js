import { fetchPeopleData } from "../component/homepage/Api/fetchPageData";
import Topbanner from "../component/people/topbanner";
import Life from "../component/people/life";
import Work from "../component/people/work";

export default async function PeoplePage () {
    const data = await fetchPeopleData("top_banner");
    const topbannerdata=data.top_banner;
    const life= await fetchPeopleData("section_content_1");
    const lifedata=life.section_content_1;
    const work= await fetchPeopleData("section_content_2");
    const workdata=work.section_content_2;
    return (
        <div>
            <Topbanner  topbannerdata={topbannerdata}/>
            <Life  lifedata={lifedata}/>
            <Work  workdata={workdata}/>

        </div>
    )
}