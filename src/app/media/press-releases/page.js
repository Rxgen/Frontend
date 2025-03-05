import { fetchNewstData } from "@/app/component/homepage/Api/fetchnews";
import PressNewsBanner from "@/app/component/press-releases/press-banner";
import PressNews from "@/app/component/press-releases/press-news";


export default async function Newsdata({searchParams}) {
  const { search = "", page = 1 } = searchParams;
  const { pressnews, totalPages} = await fetchNewstData(page, 9, search);
    return (
        <div>
          <PressNewsBanner />
          <PressNews  PressNewsData={pressnews} totalPages={totalPages} currentPage={parseInt(page, 10)}/>
        </div>
      )
}