import Homebanner from "./homepage/homebanner";
import Corporate from "./homepage/corporate";
import About from "./homepage/about";
import News from "./homepage/news";
import Offering from "./homepage/offering";
import Sustainable from "./homepage/sustainable";
import People from "./homepage/people";
import { headers } from "next/headers";

export default function HomePageClient({ bannersData, corporateData, aboutData ,newsData, peopleData, offeringData,sustainabilityData}) {
  
  const userAgent = headers().get("user-agent") || "";
  const isMobile = /Mobi|Android/i.test(userAgent);
  return (
    <div>
      
      <Homebanner banners={bannersData} isServerMobile={isMobile}/>
      <Corporate corporateData={corporateData} />
      <About aboutData={aboutData} />
      <News  newsData={newsData}/>
      <People peopleData={peopleData} />
      <Offering offeringData={offeringData} />
      <Sustainable sustainabilityData={sustainabilityData} />
     
    </div>
  );
}
