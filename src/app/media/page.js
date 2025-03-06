import { fetchNewstData } from "../component/homepage/Api/fetchnews";
import NewsBanner from "../component/media/newsbanner";
import News from "../component/media/news";

export default async function Newsdata() {
  const { pressnews} = await fetchNewstData();
  console.log("Server component data", pressnews)
    return (
        <div>
          <NewsBanner />
          <News  News={pressnews}/>
        </div>
      )
}