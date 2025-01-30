"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay,EffectFade } from "swiper/modules";

export default function MedicalTech({Medicaldata}) {

    const getMediaUrl = (url) =>
        `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    return (
        <section data-section="medical_tech" className="medical_tech">
    <div className="swiper medicalSwiper">
        <div className="swiper-wrapper">
    <Swiper
        spaceBetween={50} 
        slidesPerView={1} 
        loop={true} 
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
       
      >
        {Medicaldata.map((item) => (
          <SwiperSlide key={item.id}>
            <picture>
              <source media="(max-width: 540px)" srcSet={getMediaUrl(item.mobile_image.url)} />
              <Image
                src={getMediaUrl(item.desktop_image.url)}
                alt={item.desktop_image.name}
                className="medical_tech_img"
                width={item.desktop_image.width}
                height={item.desktop_image.height}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </div>
    <div className="medical_tech_container">
        <h2 className="subtitle_60">Nanomi-Microsieve Technology</h2>
        <p className="para">
        Nanomi’s Microsieve technology is a proprietary, highly scalable process that enables us to manufacture highly uniform microspheres and nanoparticles, ideal for long-acting injectable medicines. This innovative platform enhances the precision, consistency, and injectability of controlled-release products. Our technology makes producing microspheres and nanoparticles more cost-effective, reproducible, and adaptable to various therapeutic needs.

        </p>
    </div>
</section>
    )
}