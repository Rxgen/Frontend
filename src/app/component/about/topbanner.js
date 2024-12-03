"use client"

export default function TopBanner({ topbannerdata }) {
    console.log("Banner Data DIsplay",topbannerdata);
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  
    const desktopImageUrl = topbannerdata?.desktop_image?.url
      ? getMediaUrl(topbannerdata.desktop_image.formats.large.url)
      : "assets/images/about/banner.webp";
  
    const mobileImageUrl = topbannerdata?.mobile_image?.url
      ? getMediaUrl(topbannerdata.mobile_image.formats.small.url)
      : "assets/images/about/mob_banner.webp";
  
      
    const bannerText = topbannerdata?.banner_text || "About Us";
  
    return (
        <div>
<section data-section="about_banner" className="about_banner inner_banner" id="about_banner">
        <picture>
          <source media="(max-width: 540px)" srcSet={mobileImageUrl} />
          <img
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
  <img
    src="/images/about/founder.webp"
    alt=""
    className="founder_img"
    width="851"
    height="565"
  />
  <div className="innovation_container">
    <p className="para">
      Lupin's journey is a testament to the potential of human imagination,
      compassion, and the unwavering pursuit of a better tomorrow. Established
      in 1968 by our visionary founder, Dr. Desh Bandhu Gupta, Lupin has
      evolved from humble beginnings to become a global healthcare leader.
    </p>
  </div>
  <div className="flower_bg_container">
    <div className="flower_bg">
      <img
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