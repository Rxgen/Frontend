"use client" ;
import Link from "next/link";
import Image from "next/image";

export default function Innovative({innovativedata}){
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  
    const desktopImageUrl = innovativedata?.desktop_image?.url
    ? getMediaUrl(innovativedata.desktop_image.formats.large.url)
    : "/assets/images/about/banner.webp";

  const mobileImageUrl = innovativedata?.mobile_image?.url
    ? getMediaUrl(innovativedata.mobile_image.formats.small.url)
    : "/assets/images/about/mob_banner.webp";
    return (

        <section data-section="innovative_offer" className="innovative_offer generic_corporate">
    <picture>
        <source media="(max-width: 540px)" srcSet={mobileImageUrl} />
        <Image src={desktopImageUrl} alt="Mobile Image" className="generic_img" width="1920" height="969" />
    </picture>
    <div className="generic_container">
        <h2 className="subtitle_60">
            {innovativedata.heading}
        </h2>
        <p className="para">
            {innovativedata.description}
        </p>
        <Link href="/innovative-medicine" className="black_cta">
            <div className="cta_container">
                <span>Know more</span>
                <Image src="/images/icons/white_arrow.webp" alt="White Arrow" width="20" height="14" />
            </div>
        </Link>
    </div>
</section>

    )
}