import { fetchSustainabletData } from "../component/homepage/Api/fetchPageData";
import Topbanner from "../component/sustainable/topbanner";
import Community from "../component/sustainable/community";
import Environmental from "../component/sustainable/environmental";


export default async function SustainablePage() {

    retrun  (
        <div>
            <Topbanner />
            <Community />
            <Environmental />
        </div>
    )
}