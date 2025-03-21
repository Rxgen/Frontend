
import { fetchHomepageData } from './component/homepage/Api/Homepageapi';
import HomePageClient from './component/homepageClient';

export default async function HomePage() {
  
  const data = await fetchHomepageData("Banner");
  const bannersData=data.Banner;
  const corporate = await fetchHomepageData("Corporate");
  const corporatedata=corporate.Corporate;
  const aboutData = await fetchHomepageData("About_Us");
  const newscontent = await fetchHomepageData("News");
  const newsData=newscontent.News;
  const peoplecontent = await fetchHomepageData("people");
  const peopleData = peoplecontent.people;

  const offering= await fetchHomepageData("our_offering");
  const offeringData =offering.our_offering;
  const sustainable= await fetchHomepageData("sustainability");
  const sustainabilityData =sustainable.sustainability;

  return (
    <div>
      <HomePageClient
        bannersData={bannersData}
        corporateData={corporatedata}
        aboutData={aboutData}
        newsData ={newsData}
        peopleData={peopleData}
        offeringData={offeringData}
        sustainabilityData={sustainabilityData}
       
      />
    </div>
  );
}

