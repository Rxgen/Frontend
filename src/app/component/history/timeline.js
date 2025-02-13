"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { Navigation, EffectFade, Thumbs } from "swiper/modules";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function HistorySlider({ historydata }) {
  console.log(" History Data 2", historydata);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sortedHistoryData = [...historydata].sort((a, b) => a.year - b.year);
  const getMediaUrl = (url) => {
    return `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleYearClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
    setActiveIndex(index);
  };
  useEffect(() => {
    if (thumbsSwiper) {
      console.log('Thumbs swiper initialized', thumbsSwiper);
    }
  }, [thumbsSwiper]);

  return (
    <section data-section="timelines" className="timelines">
      <div className="timeline_container">
        <h2 className="subtitle_60">Major Milestones</h2>
        <p className="para">
          Since establishing its US presence, Lupin has recorded steady growth
          and consolidated its presence in the local market as the third major
          pharmaceutical company, measured by number of filled prescriptions.
        </p>
      </div>
      <div className="history_navigation">
        <div className="nav_history">
          <ul>
            {sortedHistoryData.map((item, index) => (
              <li
                key={index}
                data-index={index}
                className={index === activeIndex ? "active" : ""}
                onClick={() => handleYearClick(index)}
              >
                {item.year}
              </li>
            ))}
          </ul>
        </div>
        <div className="history_container">
          <Image
            src="/images/history/new-map.webp"
            alt="History Map"
            className="history_map"
            width="1703"
            height="572"
          />
          <div className="history_box">
            <Swiper
              className="historySwiper"
              modules={[Navigation,EffectFade,Thumbs]}
              effect="fade"
              thumbs={{ swiper: thumbsSwiper }}
              
              navigation={{
                nextEl: ".history_next",
                prevEl: ".history_prev",
              }}
              loop={true}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              ref={swiperRef}
            >
              {sortedHistoryData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="history_content">
                    <div className="history_year">{item.year}</div>
                    <ul className="list_container">
                      {item.Content.split("<br>").map((part, index) => (
                        <li
                          className="history_list"
                          key={index}
                          dangerouslySetInnerHTML={{ __html: part }}
                        ></li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Map Swiper with Thumbs functionality */}
          <Swiper
            className="mapSwiper"
            modules={[Thumbs]}
            loop={true}
            slidesPerView={1}
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper} 
          >
            {sortedHistoryData.map((item, index) => (
              <SwiperSlide key={index} className="swiper-slide">
                {item.country_pin.map((pin, pinIndex) => (
                  <Image
                    key={pinIndex}
                    src={getMediaUrl(pin.slide.url)}
                    alt={`Pin ${pinIndex + 1}`}
                    className={`history_pin pin_${pinIndex + 1}`}
                    width="37"
                    height="57"
                  />
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="buttton_history">
        <div className="history_btn history_prev">
          <Image
            src="/images/icons/left_arrow.webp"
            alt="Left Arrow"
            width="23"
            height="17"
          />
        </div>
        <div className="history_btn history_next">
          <Image
            src="/images/icons/left_arrow.webp"
            alt="Right Arrow"
            width="23"
            height="17"
          />
        </div>
      </div>
    </section>
  );
}

