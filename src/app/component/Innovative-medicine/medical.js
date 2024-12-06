"use client";
import Image from "next/image";

export default function Medical({ medicaldata }) {
  const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

  
  const imageUrl = medicaldata?.image?.url
    ? getMediaUrl(medicaldata.image.formats.small.url)
    : "assets/images/about/banner.webp";

  return (
    <section data-section="innovative_patient" className="innovative_patient patient_container">
      
      <Image
        src={imageUrl}
        alt={medicaldata?.image?.alternativeText || "Medical Image"}
        className="patient_img"
        width="646"
        height="590"
      />
      <div className="innovation_container">
        <h2 className="subtitle_60">
          {medicaldata.heading}
        </h2>
        <p className="para">
          {medicaldata?.description}
        </p>
      </div>
      <div className="flower_bg_container">
        <div className="flower_bg"> 
        
          <Image
            src="/images/flower_bg.webp"
            alt="Flower Background"
            width="1500"
            height="1500"
          />
        </div>
      </div>
    </section>
  );
}
