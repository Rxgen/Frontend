"use client";

import Image from "next/image";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";

export default function Homebanner({ banners, isServerMobile }) {
  const [isClientMobile, setIsClientMobile] = useState(isServerMobile);

  // Detect device only on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsClientMobile(window.innerWidth < 768);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Fallback if no banners
  if (!banners?.length) return null;

  const getMediaUrl = (url) =>
    url?.startsWith("http")
      ? url
      : `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

  return (
    <section
      data-section="home_banner"
      className="home_banner banner_section"
      id="home_banner"
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {banners.map((banner) => {
          const isVideo = banner?.banner_desktop_image?.mime === "video/mp4";
          const desktopUrl = getMediaUrl(banner?.banner_desktop_image?.url);
          const mobileUrl = getMediaUrl(banner?.banner_mobile_image?.url);

          return (
            <SwiperSlide key={banner.id}>
              <div className="banner">
                {isVideo ? (
                  <video
                    width="1920"
                    height="968"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/video-placeholder.webp"
                    className="banner_video"
                  >
                    <source
                      src={isClientMobile ? mobileUrl : desktopUrl}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <picture>
                    <source media="(max-width: 540px)" srcSet={mobileUrl} />
                    <Image
                      src={desktopUrl}
                      alt={
                        banner.banner_desktop_image?.alternativeText || "Banner"
                      }
                      className="banner_img"
                      width={1920}
                      height={943}
                      priority={banner.id === banners[0].id} // First image preloads
                      loading={banner.id === banners[0].id ? "eager" : "lazy"}
                    />
                  </picture>
                )}

                <div className="banner_container">
                  <div className="subtitle_66">{banner.banner_heading}</div>
                  <div className="banner_detail">
                    <p className="para">{banner.banner_sub_heading}</p>
                    {banner.cta && (
                      <Link href={banner.cta.cta_url} className="circle_cta">
                        <span>{banner.cta.cta_text}</span>
                        <Image
                          src="/images/icons/white_arrow.webp"
                          alt="arrow"
                          width={20}
                          height={14}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="swiper-pagination"></div>
      <div className="swiper_animation"></div>
    </section>
  );
}
