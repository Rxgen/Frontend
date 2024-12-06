"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function CustomImage( {imagedata} ){
    console.log("Carrer Page Image Data " ,imagedata)

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    return (
        <div>
<section data-section="opening_section" className="opening_section">
    <Image src="/images/career/role.webp" alt="Role" className="role_img" width="646" height="590" />
    <div className="role_container">
        <div className="role_content">
            <h2 className="subtitle_60">Current Openings</h2>
            <p className="para">
                Looking for your next role? Explore our current openings. If
                you don&apos;t see a job that fits your skill set, send your resume to
                <a href="usacareers@lupin.com">usacareers@lupin.com</a> and get added to our talent pool for
                future job opportunities.
            </p>
            <a href="corporate.php" className="black_cta">
                <div className="cta_container">
                    <span>See current role openings</span>
                    <Image src="/images/icons/white_arrow.webp" alt="" width="20" height="14" />
                </div>
            </a>
        </div>
        <div className="career_text">
            Stay connected by following us on
            LinkedIn for business updates and
            career opportunities.
        </div>
    </div>
</section>

<section data-section="opportunity_section" className="opportunity_section">
            <Swiper
                className="opportunitySwiper" 
                slidesPerView="auto"
                spaceBetween={80}
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                speed={7000}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 80,
                    },
                }}
            >
                {imagedata.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={getMediaUrl(image.slide.url)} 
                            alt={image.slide.name}
                            className="opportunity_img"
                            width={image.slide.width}
                            height={image.slide.height}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
 </div>
    )
}