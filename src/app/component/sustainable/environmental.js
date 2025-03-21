"use client";
import Image from "next/image";

export default function Environmental ( { environmentaldata}){

    const getMediaUrl = (url) =>
        `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    return (
        <section
        data-section="sustain_environment"
        className="sustain_environment"
      >
        <h2 className="subtitle_60">
           Environmental Responsibility
        </h2>
        <div className="environment_container">
          {environmentaldata.map((item, index) => {
            const imageUrl = item?.image?.url
              ? getMediaUrl(item.image?.url)
              : "assets/images/sustainable/environment/default.webp";
  
            return (
              <div key={index} className="environment_content">
                <div className="front_page">
                  <Image
                    src={imageUrl}
                    alt={item.heading}
                    className="environment_img"
                    width={635}
                    height={809}
                  />
                  <h3 className="subtitle_30">{item.heading}</h3>
                </div>
                <div className="back_page">
                  <div className="back_page_container">
                    <h3 className="subtitle_30">{item.heading}</h3>
                    <p className="para">{item?.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    )
}