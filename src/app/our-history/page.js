import { fetchOurHistoryData } from "../component/homepage/Api/fetchPageData";
import HistorySlider from "../component/history/timeline";
import HistoryBanner from "../component/history/historybanner";

export const generateMetadata = () => {
  return {
    title: 'Lupin US History: Our Journey in Advancing Global Health',
    description: 'Discover Lupin US history - from our roots to becoming a global leader in innovative healthcare solutions that improve patients lives worldwide.',
  };
};

export default async function History() {
    const historydata=await fetchOurHistoryData();
    return(
        <div>
          <HistoryBanner />  
        <HistorySlider historydata={historydata} />
        </div>
       

    )
}