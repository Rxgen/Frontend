import { fetchNewstData } from "@/app/component/homepage/Api/fetchnews";
import PressNewsBanner from "@/app/component/press-releases/press-banner";
import PressNews from "@/app/component/press-releases/press-news";


export const generateMetadata = ({ params}) => {
  const path="media/press-releases"
  
    return {
      title: 'Latest Press Releases and News Updates | Lupin US',
      description: 'Read the latest press releases, announcements, and news updates from Lupin US covering company developments and industry information.',
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