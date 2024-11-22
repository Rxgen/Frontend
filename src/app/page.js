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

  // Pass the data to the client-side component
  return (
    <div>
      <HomePageClient
        bannersData={bannersData}
        corporateData={corporateData}
        aboutData={aboutData}
      />
    </div>
  );
}

