import { fetchPeopleData } from "../component/homepage/Api/fetchPageData";
import Topbanner from "../component/our-people/topbanner";
import Life from "../component/our-people/life";
import Work from "../component/our-people/work";
import Script from "next/script";

export default async function PeoplePage() {
  const data = await fetchPeopleData("top_banner");
  const topbannerdata = data.top_banner;
  const life = await fetchPeopleData("section_content_1");
  const lifedata = life.section_content_1;
  const work = await fetchPeopleData("section_content_2");
  const workdata = work.section_content_2;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our People",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}our-people`,
      },
    ],


  };

  return (
    <div>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Topbanner topbannerdata={topbannerdata} />
      <Life lifedata={lifedata} />
      <Work workdata={workdata} />
    </div>
  );
}



const combinedSchema = [
    {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Our People",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/our-people`,
      },
    ],


  },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Lupin",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      logo: `${process.env.NEXT_PUBLIC_BASE_URL}/images/lupin_logo.webp`
    }
  ];
