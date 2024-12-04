"use client";

export default function Generic( { genericdata } ){
    
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  
    const desktopImageUrl = genericdata?.desktop_image?.url
    ? getMediaUrl(genericdata.desktop_image.formats.large.url)
    : "/assets/images/about/banner.webp";

  const mobileImageUrl = genericdata?.mobile_image?.url
    ? getMediaUrl(genericdata.mobile_image.formats.small.url)
    : "/assets/images/about/mob_banner.webp";

    return (
        <section data-section="generic_corporate" className="generic_corporate">
      <picture>
        <source
          media="(max-width: 540px)"
          srcSet={mobileImageUrl}
        />
        <img
          src={desktopImageUrl}
          alt=""
          className="generic_img"
          width={1920}
          height={969}
        />
      </picture>
      <div className="generic_container">
        <h2 className="subtitle_60">{genericdata.heading}</h2>
        <p className="para">
          {genericdata.description}
        </p>
      </div>
    </section>
    )

}