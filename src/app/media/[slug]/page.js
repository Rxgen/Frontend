import { fetchNewsdetails } from "@/app/component/homepage/Api/fetchnews";
import Newsdetailbanner from "@/app/component/media/newsdetailbanner";
import Newsdetail from "@/app/component/media/newsdetail";

export default async function Newsdetaildata({params}) {

  const { slug } = params;
      const Newsdetaildata = await fetchNewsdetails(slug);
    return (
        <div>
          <Newsdetailbanner />
          <Newsdetail Newsdetaildata={Newsdetaildata} />
        </div>
        
        
    )
}