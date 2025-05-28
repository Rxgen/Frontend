import { fetchNewstData } from "../component/homepage/Api/fetchnews";
import NewsBanner from "../component/media/newsbanner";
import News from "../component/media/news";


export const generateMetadata = ({ params}) => {
  const path="media"
  
    return {
      title: 'About Media',
      description: 'Lupin US is dedicated to enhancing global health with innovative pharmaceutical solutions. Discover our history, values, purpose, and more.',
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${path}`,
      }
    };
  };

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