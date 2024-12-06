"use client";
import Image from "next/image";

export default function TopBanner({ topbannerdata }) {
    console.log("Banner Data Display",topbannerdata);
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  
    const desktopImageUrl = topbannerdata?.desktop_image?.url
      ? getMediaUrl(topbannerdata.desktop_image.formats.large.url)
      : "assets/images/about/banner.webp";
  
    const mobileImageUrl = topbannerdata?.mobile_image?.url
      ? getMediaUrl(topbannerdata.mobile_image.formats.small.url)
      : "assets/images/about/mob_banner.webp";
  
      
    const bannerText = topbannerdata?.banner_text || "Corporate Overview";
  
    return (
        
<section data-section="corporate_banner" className="corporate_banner inner_banner">
        <picture>
          <source media="(max-width: 540px)" srcSet={mobileImageUrl} />
          <Image
            src={desktopImageUrl}
            alt={bannerText}
            className="banner_img"
            width="1920"
            height="771"
          />
        </picture>
        <h1 className="subtitle_66">{bannerText}</h1>
      </section>
     
    );
  }