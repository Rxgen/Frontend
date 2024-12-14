"use client";

import Image from "next/image";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Homebanner({ banners }) {
  if (!banners || banners.length === 0) {
    return null; 
  }

  const getMediaUrl = (url) =>
    `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

  console.log("Image url ",getMediaUrl);

  return (
    <section data-section="home_banner" className="home_banner" id="home_banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="banner">
              {/* Conditionally render an image or a video */}
              {banner.banner_desktop_image.mime === "video/mp4" ? (
                <video
                  width="1920"
                  height="968"
                  autoPlay
                  muted
                  loop
                  className="banner_video"
                >
                   <source
                    src={getMediaUrl(banner.banner_mobile_image.url)}
                    type="video/mp4"
                    media="(max-width: 767px)"
                  />
                  <source
                    src={getMediaUrl(banner.banner_desktop_image.url)}
                    type="video/mp4"
                  />
                 
                  Your browser does not support the video tag.
                </video>
              ) : (
                <picture>
                  <source
                    media="(max-width: 540px)"
                    srcSet={getMediaUrl(
                      banner.banner_mobile_image.url
                    )}
                  />
                  <Image
                    src={getMediaUrl(
                     banner.banner_desktop_image.url
                    )}
                    alt={
                      banner.banner_desktop_image.alternativeText || "Banner"
                    }
                    className="banner_img"
                    width={1920}
                    height={943}
                  />
                </picture>
              )}

              <div className="banner_container">
                <div className="subtitle_66">{banner.banner_heading}</div>
                <div className="banner_detail">
                  <p className="para">{banner.banner_sub_heading}</p>
                  {banner.cta && (
                    <a href={banner.cta.cta_url} className="circle_cta">
                      <span>{banner.cta.cta_text}</span>
                      <Image
                        src="/images/icons/white_arrow.webp"
                        alt="arrow"
                        width="20"
                        height="14"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
      <div className="swiper_animation"></div>
    </section>
  );
}
