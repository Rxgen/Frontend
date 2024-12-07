import { fetchOurHistoryData } from "../component/homepage/Api/fetchPageData";
import HistorySlider from "../component/history/timeline";

export default async function History() {
    const historydata=await fetchOurHistoryData();
    return(
        <HistorySlider historydata={historydata} />

    )
}