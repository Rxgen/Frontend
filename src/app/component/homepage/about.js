
"use client";
import Image from "next/image";
import Link from "next/link";

export default function About ({ aboutData }){
    if (!aboutData) return null;
    console.log("About us Data " ,aboutData);
    const { heading, video, cta, About_Us_Link } = aboutData;
    return (

<section data-section="home_about" className="home_about">
      <div className="home_about_container">
        {/* Dynamic Video */}
        <div className="home_about_img">
          
            <video width="960" height="968" controls>
              <source src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${aboutData.About_Us.video.url}`} type={aboutData.About_Us.video.mime || "video/mp4"} />
              Your browser does not support the video tag.
            </video>
        </div>

        {/* Content Section */}
        <div className="home_about_content">
          <h2 className="h2_title">ABOUT US</h2>
          <h3 className="subtitle_60">
               {aboutData.About_Us.heading}
            </h3>

          {/* Dynamic Links */}
          <div className="about_internal_links scroll_content">
            {aboutData.About_Us.About_Us_Link?.map((link) => (
              <Link href={link.url} key={link.id} className="internal_links">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Dynamic CTA */}
          
            <a href={aboutData.About_Us.cta.cta_url} className="circle_cta" target="_blank" rel="noopener noreferrer">
              <span>{aboutData.About_Us.cta.cta_text}</span>
              <Image src="/images/icons/white_arrow.webp" alt="" width="20" height="14" />
            </a>
          
        </div>
      </div>
    </section>
    );
}