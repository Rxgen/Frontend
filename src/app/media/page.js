import { fetchNewstData } from "../component/homepage/Api/fetchnews";
import NewsBanner from "../component/media/newsbanner";
import News from "../component/media/news";

export default async function Newsdata({searchParams}) {
  const { search = "", page = 1 } = searchParams;
  const { pressnews} = await fetchNewstData(page, 9, search);
  console.log("Server component data", pressnews)
    return (
        <div>
          <NewsBanner />
          <News  News={pressnews}/>
        </div>
      )
}