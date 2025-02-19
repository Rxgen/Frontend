"use client" ;
import Image from "next/image";

export default function Topbanner ({topbannerdata}){

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  
    const desktopImageUrl = topbannerdata?.desktop_image?.url
      ? getMediaUrl(topbannerdata.desktop_image.url)
      : "assets/images/about/banner.webp";
  
    const mobileImageUrl = topbannerdata?.mobile_image?.url
      ? getMediaUrl(topbannerdata.mobile_image.url)
      : "assets/images/about/mob_banner.webp";

      const bannerText = topbannerdata?.banner_text;
    return (
        <section data-section="culture_banner" className="culture_banner inner_banner banner_section">
    <picture>
        <source media="(max-width: 540px)" srcSet={mobileImageUrl}/>
        <Image src={desktopImageUrl} alt="Banner" className="banner_img" width="1920" height="770" />
    </picture>
    <h1 className="subtitle_66">{bannerText}</h1>
</section>
    )
}