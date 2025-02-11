import { fetchNewstData } from "@/app/component/homepage/Api/fetchnews";
import PressNewsBanner from "@/app/component/press-releases/press-banner";
import PressNews from "@/app/component/press-releases/press-news";


export default async function Newsdata() {
  const pressnewsdata = await fetchNewstData();
    return (
        <div>
          <PressNewsBanner />
          <PressNews  PressNewsData={pressnewsdata}/>
        </div>
      )
}