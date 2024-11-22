// components/homepage/HomePageClient.js
import Homebanner from "./homepage/homebanner";
import Corporate from "./homepage/corporate";
import About from "./homepage/about";
import News from "./homepage/news";
import Offering from "./homepage/offering";
import Sustainable from "./homepage/offering";
import People from "./homepage/people";

export default function HomePageClient({ bannersData, corporateData, aboutData }) {
  // You can use the props directly here
  return (
    <div>
      {/* Render the homepage sections using the passed data */}
      <Homebanner banners={bannersData} />
      <Corporate corporateData={corporateData} />
      <About aboutData={aboutData} />
      <News />
      <People />
      <Offering />
      <Sustainable />
    </div>
  );
}
