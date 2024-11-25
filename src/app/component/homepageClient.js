import Homebanner from "./homepage/homebanner";
import Corporate from "./homepage/corporate";
import About from "./homepage/about";
import News from "./homepage/news";
import Offering from "./homepage/offering";
import Sustainable from "./homepage/sustainable";
import People from "./homepage/people";

export default function HomePageClient({ bannersData, corporateData, aboutData ,newsData, peopleData, offeringData, sustainabilityData}) {
  
  return (
    <div>
      
      <Homebanner banners={bannersData} />
      <Corporate corporateData={corporateData} />
      <About aboutData={aboutData} />
      <News  newsData={newsData}/>
      <People peopleData={peopleData} />
      <Offering offeringData={offeringData} />
      <Sustainable sustainabilityData={sustainabilityData} />
     
    </div>
  );
}
