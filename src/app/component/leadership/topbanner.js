"use client ";

export default function Topbanner({ topbannerdata }) {

    console.log("Banner Data Leadesrship Display", topbannerdata);
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;

    const desktopImageUrl = topbannerdata?.desktop_image?.url
        ? getMediaUrl(topbannerdata.desktop_image.formats.large.url)
        : "assets/images/about/banner.webp";

    const mobileImageUrl = topbannerdata?.mobile_image?.url
        ? getMediaUrl(topbannerdata.mobile_image.formats.small.url)
        : "assets/images/about/mob_banner.webp";


    const bannerText = topbannerdata?.banner_text || "Leaership";

    return (
        <section data-section="contact_banner" className="product_listing_banner inner_banner">
            <picture>
                <source media="(max-width: 540px)" srcSet={mobileImageUrl} />
                <img src={desktopImageUrl} alt={bannerText} className="banner_img" width="1920" height="767" />
            </picture>
            <h1 className="subtitle_66">{bannerText}</h1>
        </section>
    )
}