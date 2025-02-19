"use client ";
import Image from "next/image";

export default function Medical ({medicaldata}){

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  
    const desktopImageUrl = medicaldata?.desktop_image?.url
    ? getMediaUrl(medicaldata.desktop_image.url)
    : "/assets/images/about/banner.webp";

  const mobileImageUrl = medicaldata?.mobile_image?.url
    ? getMediaUrl(medicaldata.mobile_image.url)
    : "/assets/images/about/mob_banner.webp";
    return (
<section data-section="generic_medicine" className="generic_medicine" id="generic_medicine">
    <picture>
        <source media="(max-width: 540px)" srcSet={mobileImageUrl} />
        <Image src={desktopImageUrl} alt="Image" width="1920" height="969"/>
    </picture>
    <div className="medicine_container">
        <h2 className="subtitle_60">{medicaldata.heading}</h2>
        <p className="para">
            {medicaldata.description}
        </p>
    </div>
</section>
    )
}