"use client";
import Image from "next/image";

export default function Patient ({ patientdata}) {

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  
    const desktopImageUrl = patientdata?.desktop_image?.url
    ? getMediaUrl(patientdata.desktop_image.formats.large.url)
    : "/assets/images/about/banner.webp";

  const mobileImageUrl = patientdata?.mobile_image?.url
    ? getMediaUrl(patientdata.mobile_image.formats.small.url)
    : "/assets/images/about/mob_banner.webp";

    return (
        <section data-section="innovative_medical" className="innovative_medical generic_corporate">
      <picture>
        <source media="(max-width: 540px)" srcSet={mobileImageUrl} />
        
        <Image
          src={desktopImageUrl}
          alt={patientdata?.desktop_image?.alternativeText}
          className="generic_img"
          width="1920"
          height="969"
        />
      </picture>
      <div className="generic_container">
        <h2 className="subtitle_60">
          {patientdata?.heading}
        </h2>
        <p className="para">
          {patientdata?.description}
        </p>
      </div>
    </section>
    )
}