import { fetchNewstData } from "../component/homepage/Api/fetchnews";
import NewsBanner from "../component/media/newsbanner";
import News from "../component/media/news";

export default async function Newsdata() {
  const newsdata = await fetchNewstData();
    return (
        <div>
          <NewsBanner />
          <News  News={newsdata}/>
        </div>
      )
}