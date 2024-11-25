// /app/home/page.js
import { fetchHomepageData } from './component/homepage/Api/Homepageapi';
import HomePageClient from './component/homepageClient';

// Server component that fetches data
export default async function HomePage() {
  // Fetch data on the server side
  const data = await fetchHomepageData("Banner");
  const bannersData=data.Banner;
  const corporateData = await fetchHomepageData("Corporate");
  const aboutData = await fetchHomepageData("About_Us");
  const newscontent = await fetchHomepageData("News");
  const newsData=newscontent.News;
  const peoplecontent = await fetchHomepageData("people");
  const peopleData = peoplecontent.people;

  const offering= await fetchHomepageData("our_offering");
  const offeringData =offering.our_offering;
  const sustainable= await fetchHomepageData("sustainability");
  const sustainabilityData =sustainable.sustainability;


  // Pass the data to the client-side component
  return (
    <div>
      <HomePageClient
        bannersData={bannersData}
        corporateData={corporateData}
        aboutData={aboutData}
        newsData ={newsData}
        peopleData={peopleData}
       offeringData={offeringData}
       sustainabilityData={sustainabilityData}
      />
    </div>
  );
}

