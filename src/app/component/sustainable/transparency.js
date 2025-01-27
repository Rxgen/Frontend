"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import Image from "next/image";


export default function Transparency( { transparencydata } ) {
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    return (
<section data-section="sustain_transparency" className="sustain_transparency">
<Swiper
        className="transparency_swiper"
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
      >
        {transparencydata.map((item) => {
          const image = item.slide;
          const imageUrl = image?.url
            ? getMediaUrl(image.url)
            : "assets/images/sustainable/transparency/img_1.webp";

          if (!image) {
            return null;
          }

          return (
            <SwiperSlide key={item.id}>
              <Image
                src={imageUrl}
                className="transparency_img"
                width={image.width || 718}
                height={image.height || 723}
                alt={image.alternativeText || "Transparency Image"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="transparency">
        <h2 className="subtitle_60">
            Transparency,
            Accountability, and
            Long-Term Success
        </h2>
        <p className="para">
            As we continue our ESG journey, governance remains a cornerstone of our sustainability
            efforts. By upholding the highest standards of ethical conduct, we aim to build trust with
            our stakeholders and ensure the long-term success of our organization.We are proud to
            be a company that does not patent or enforce intellectual property (IP) rights on
            diseases covered by the Access to Medicine Index (ATMI) 2021 , especially in LMlCs. This
            approach reflects our belief that life-saving treatments should be accessible to all,
            regardless of geographic location or economic circumstances. We actively collaborate
            with suppliers, partners, and stakeholders to share best practices and ensure our
            environmental and social objectives are collectively pursued.
        </p>
        <p className="para">
            At Lupin, we are driven by our Purpose — &apos;To improve our patients&apos; lives.&apos; guiding us as
            we strive to create lasting value for our patients, communities, and the planet. Through
            our sustainability efforts, we are committed to building a future where healthcare is not
            only innovative and affordable but also environmentally and socially responsible.
        </p>
    </div>
    </section>
    )
}