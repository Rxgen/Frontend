"use client";
import Image from "next/image";
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Homebanner({ banners}) {
  console.log("Homepage banner ",banners);
  if (!banners.length) {
    return <div>No banner data available.</div>;
  }

  return (
    <section data-section="home_banner" className="home_banner">
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
              <picture>
                <source
                  media="(max-width: 540px)"
                  src={process.env.NEXT_PUBLIC_STRAPI_API_URL + banner.banner_desktop_image.formats.small.url}
                />
                <img
                  src={process.env.NEXT_PUBLIC_STRAPI_API_URL + banner.banner_desktop_image.formats.small.url}
                  alt={banner.banner_desktop_image.alternativeText}
                  className="banner_img"
                  width={1920}
                  height={943}
                />
              </picture>
              <div className="banner_container">
                <div className="subtitle_66">{banner.banner_subheading}</div>
                <div className="banner_detail">
                  <p className="para scroll_content">{banner.banner_heading}</p>
                  <a href={banner.link} className="circle_cta">
                    <span>read</span>
                    <Image
                      src="/assets/images/icons/white_arrow.webp"
                      alt="arrow"
                      width="20"
                      height="14"
                    />
                  </a>
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
