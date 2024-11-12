 "use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default  function Homebanner ({bannersdata }){
    /* const banners = [
        {
          id: 1,
          banner_image: {
            url: "assets/images/homepage/banner/banner_bg_1.webp", // Static path
            alternativeText: "Banner Image 1"
          },
          banner_subheading: "Subheading 1",
          banner_heading: "Banner Heading 1",
          link: "/page1"
        },
        {
          id: 2,
          banner_image: {
            url: "assets/images/homepage/banner/banner_bg_2.webp", // Static path
            alternativeText: "Banner Image 2"
          },
          banner_subheading: "Subheading 2",
          banner_heading: "Banner Heading 2",
          link: "/page2"
        },
        {
          id: 3,
          banner_image: {
            url: "assets/images/homepage/banner/banner_bg_3.webp", // Static path
            alternativeText: "Banner Image 3"
          },
          banner_subheading: "Subheading 3",
          banner_heading: "Banner Heading 3",
          link: "/page3"
        }
      ];

 */
    
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
                    <source media="(max-width: 540px)" srcSet={ process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL + banner.banner_image.url} />
                    <img
                      src={ process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL + banner.banner_image.url}
                      alt={banner.banner_image.alternativeText}
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
                        <span>Know More</span>
                        <Image src="/assets/images/icons/white_arrow.webp" alt="" width="20" height="14" />
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