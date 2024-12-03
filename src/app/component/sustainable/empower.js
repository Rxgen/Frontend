"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";


export default function Empower( {empowerdata} ) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    return (

        <section data-section="sustain_empower" className="sustain_empower">
            <div className="sustain_empower_container">
                <h2 className="subtitle_60">
                    Empowering Communities and Upholding Human Rights
                </h2>
                <Swiper
                    modules={[Navigation,Thumbs]}
                    navigation={{
                        prevEl: '.empower_prev',
                        nextEl: '.empower_next',
                    }}
                    className="empower_container_swiper"
                    loop={true}
                    speed={1000}
                    thumbs={{ swiper: thumbsSwiper }}
                    allowTouchMove={false}
                    slidesPerView={1}
                >
                    {empowerdata.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="empower_container">
                                <p className="para">{slide.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="empower_button_container">
                    <div className="empower_button empower_prev">
                        <img
                            src="/images/icons/left_arrow.webp"
                            alt="Previous"
                            width="23"
                            height="17"
                        />
                    </div>
                    <div className="empower_button empower_next">
                        <img
                            src="/images/icons/left_arrow.webp"
                            alt="Next"
                            width="23"
                            height="17"
                        />
                    </div>
                </div>
            </div>
            <Swiper 
            className="empower_swiper" 
            onSwiper={setThumbsSwiper}
            slidesPerView={1}
            loop={true} 
            speed={1000}
            watchSlidesProgress={true}
            modules={[Thumbs]}>
  {empowerdata.map((item) => {
    const imageUrl =
      item.image?.formats?.small?.url
        ? getMediaUrl(item.image.formats.small.url)
        : "assets/images/about/banner.webp";

    const imageWidth = item.image?.width || 155; 
    const imageHeight = item.image?.height || 156; 
    const altText = item.image?.alternativeText || "Empower Image";

    return (
      <SwiperSlide key={item.id}>
        <img
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          className="empower_img"
          alt={altText}
        />
      </SwiperSlide>
    );
  })}
</Swiper>
</section>

    )
}