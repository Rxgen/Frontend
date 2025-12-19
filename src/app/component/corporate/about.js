"use client";
import React from "react";
import Image from "next/image";

export default function CorporateAboutData( { aboutdata } ) {
    console.log("Corporate About Data Display",aboutdata);
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    const ImageUrl = aboutdata?.image?.url
    ? getMediaUrl(aboutdata.image?.url)
    : "assets/images/about/banner.webp";

    return(
        <section id="about_coprporate" className="about_coprporate">
        <div className="about_animation">
          <div className="animation_container">
            {Array.from({ length: 16 }).map((_, index) => (
              <React.Fragment key={index}>
                <div className="animation_item">About Lupin U.S.</div>
                <div className="animation_item animation_img">
                  <Image
                    src="/images/icons/small-flower.webp"
                    alt=""
                    width={42}
                    height={40}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
  
        <div className="corporate_container">
          <div className="corporate_detail">
            <h2 className="subtitle_60">{aboutdata.heading}</h2>
            <div  dangerouslySetInnerHTML={{ __html: aboutdata?.custom_description }} />
            {/* <p className="para">
              {aboutdata.description}
            </p> */}
          </div>
          <Image
            src={ImageUrl}
            alt="Content"
            width={851}
            height={565}
          />
        </div>
      </section>

    )
}