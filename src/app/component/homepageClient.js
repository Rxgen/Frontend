"use client";
import { useEffect, useState } from "react";
import { fetchHomepageData } from './homepage/Api/Homepageapi';
import Corporate from "./homepage/corporate";
import About from "./homepage/about";
import Homebanner from "./homepage/homebanner";
import News from "./homepage/news";
import Offering from "./homepage/offering";
import Sustainable from "./homepage/sustainable";
import People from "./homepage/people";

export default function HomePageClient() {
  const [bannersData, setBannersData] = useState([]);
  const [corporateData, setCorporateData] = useState(null);
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchHomepageData("Banner");
        console.log('Fetched Banners Data:', data);    
        setBannersData(data.Banner || []); 

        const corporateResponse = await fetchHomepageData("Corporate");
        setCorporateData(corporateResponse || {});

        const aboutResponse = await fetchHomepageData("About_Us");
        setAboutData(aboutResponse || {});

      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      } finally {
        setLoading(false); 
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data. Please try again later.</div>;
  }

  return (
    <div>
      <Homebanner banners={bannersData} />
      <Corporate corporateData={corporateData}/>
      <About aboutData={aboutData} />
      <News />
      <People />
      <Offering />
      <Sustainable />
    </div>
  );
}
