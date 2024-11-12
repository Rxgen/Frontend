


import Homebanner from "./homebanner";

  export default async function HomebannerData() {
    const bannersdata = await bannerdata();
    console.log('Banners Data in HomebannerData:');
  
    return (
        <div>
<h1>THis is Best Way</h1>
<Homebanner  banners={bannersdata} />
        </div>
    );
    
  }