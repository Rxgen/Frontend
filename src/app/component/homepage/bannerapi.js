

import { bannerdata } from './Api/Homepageapi';
import Homebanner from "./homebanner";

  export default async function HomebannerData() {
    const bannersdata = await bannerdata();
    console.log('Banners Data in HomebannerData:', bannersdata);
  
    return <Homebanner  banners={bannersdata} />;
  }