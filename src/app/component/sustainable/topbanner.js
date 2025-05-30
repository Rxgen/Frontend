"use client";
import Image from "next/image";

export default function Topbanner({ topbannerdata }) {
    console.log("Sustainability Banner Data Display", topbannerdata);

    // Function to construct the media URL
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    // Get the desktop and mobile video URLs
    const desktopVideoUrl = topbannerdata?.desktop_image?.url
        ? getMediaUrl(topbannerdata.desktop_image.url)
        : "assets/images/about/banner.webp"; // Default image for desktop

    const mobileVideoUrl = topbannerdata?.mobile_image?.url
        ? getMediaUrl(topbannerdata.mobile_image.url)
        : "assets/images/about/mob_banner.webp"; // Default image for mobile

    // Get the banner text
    const bannerText = topbannerdata?.banner_text || "Sustainability";

    // Check if `topbannerdata` is properly loaded
    if (!topbannerdata) {
        return <div>Loading...</div>; // Show loading state if data is not available
    }

    return (
        <section data-section="sustainability_banner" className="sustainability_banner inner_banner banner_section">
            {topbannerdata.desktop_image?.mime === "video/mp4" ? (
                <video
                    width="1920"
                    height="968"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="banner_video"
                >
                    <source
                        src={mobileVideoUrl}
                        type="video/mp4"
                        media="(max-width: 767px)"
                    />
                    <source
                        src={desktopVideoUrl}
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <picture>
                    <source media="(max-width: 540px)" srcSet={mobileVideoUrl} />
                    <Image
                        src={desktopVideoUrl}
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
