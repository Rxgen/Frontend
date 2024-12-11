import { fetchOurHistoryData } from "../component/homepage/Api/fetchPageData";
import HistorySlider from "../component/history/timeline";
import HistoryBanner from "../component/history/historybanner";

export default async function History() {
    const historydata=await fetchOurHistoryData();
    return(
        <div>
          <HistoryBanner />  
        <HistorySlider historydata={historydata} />
        </div>
       

    )
}