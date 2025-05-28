import { fetchNewstData } from "@/app/component/homepage/Api/fetchnews";
import PressNewsBanner from "@/app/component/press-releases/press-banner";
import PressNews from "@/app/component/press-releases/press-news";

export const generateMetadata = ({ params}) => {
  const path="press-releases"
  
    return {
      title: 'About  Press-Releases',
      description: 'Lupin US is dedicated to enhancing global health with innovative pharmaceutical solutions. Discover our history, values, purpose, and more.',
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
      }
    };
  };


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