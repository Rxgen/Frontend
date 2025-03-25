"use client"

import Image from "next/image";


export default function TopBanner({ topbannerdata }) {
    console.log("Banner Data DIsplay",topbannerdata);
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  
    const desktopImageUrl = topbannerdata?.desktop_image?.url
      ? getMediaUrl(topbannerdata.desktop_image.url)
      : "/assets/images/about/banner.webp";
  
    const mobileImageUrl = topbannerdata?.mobile_image?.url
      ? getMediaUrl(topbannerdata.mobile_image.url)
      : "/assets/images/about/mob_banner.webp";
  
      
    const bannerText = topbannerdata?.banner_text || "About Us";
  
    return (
        <div>
<section data-section="about_banner" className="about_banner inner_banner banner_section">
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

      <section
  data-section="about_founder"
  className="about_founder patient_container"
>
  <Image
    src="/images/about/lupinfounder-1.webp"
    alt="Founder "
    className="founder_img"
    width="886" height="814"
  />
  <div className="innovation_container">
  <h2 className="subtitle_60">Driven by Science, Inspired by Patients</h2>
    <p className="para">
      Lupin&apos;s journey is a testament to the potential of human imagination,
      compassion, and the unwavering pursuit of a better tomorrow. Established
      in 1968 by our visionary founder, Dr. Desh Bandhu Gupta, Lupin has
      evolved from humble beginnings to become a global healthcare leader.
    </p>
  </div>
  <div className="flower_bg_container">
    <div className="flower_bg">
      <Image
        src="/images/flower_bg.webp"
        alt=""
        width="895"
        height="851"
      />
    </div>
  </div>
</section>
</div>      
    );
  }