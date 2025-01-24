"use client" ;
import Image from "next/image";

export default function Topbanner( {topbannerdata}) {

    console.log(" Sustainability Banner Data Display",topbannerdata);
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  
    const desktopImageUrl = topbannerdata?.desktop_image?.url
      ? getMediaUrl(topbannerdata.desktop_image.url)
      : "assets/images/about/banner.webp";
  
    const mobileImageUrl = topbannerdata?.mobile_image?.url
      ? getMediaUrl(topbannerdata.mobile_image.url)
      : "assets/images/about/mob_banner.webp";
  
      
    const bannerText = topbannerdata?.banner_text || "Sustainability";

    return (
        <section data-section="sustainability_banner" className="sustainability_banner inner_banner banner_section">
        

             {topbannerdata.desktop_image.mime === "video/mp4" ? (
                <video
                  width="1920"
                  height="968"
                  autoPlay
                  muted
                  loop
                  className="banner_video"
                >
                   <source
                    src={mobileImageUrl}
                    type="video/mp4"
                    media="(max-width: 767px)"
                  />
                  <source
                    src={desktopImageUrl}
                    type="video/mp4"
                  />
                 
                  Your browser does not support the video tag.
                </video>
              ) : (
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
              )}


        <h1 className="subtitle_66">{bannerText}</h1>
      </section>
     
    );
    
}