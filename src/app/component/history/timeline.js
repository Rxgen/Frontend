"use client";
import { Swiper, SwiperSlide ,swiperRef} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation,EffectFade } from "swiper/modules";
import { useState ,useRef } from "react";
import Image from "next/image";


export default function HistorySlider({historydata}) {

    console.log(" History Data 2", historydata)
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);
      };

      const handleYearClick = (index) => {
        swiperRef.current.swiper.slideTo(index);
        setActiveIndex(index);  
      };

  return (
    <section data-section="timelines" className="timelines">
      <div className="timeline_container">
        <h2 className="subtitle_60">Major Milestones</h2>
        <p className="para">
          Since establishing its US presence, Lupin has recorded steady growth and consolidated its presence in the local market as the third major pharmaceutical company, measured by number of filled prescriptions.
        </p>
      </div>
      <div className="history_navigation">
        <div className="nav_history">
          <ul>
          {historydata.map((item, index) => (
              <li key={index} data-index={index} className={index === activeIndex ? "active" : ""}
              onClick={() => handleYearClick(index)} 
              >
                {item.year}
              </li>
            ))}
          </ul>
        </div>
        <div className="history_container">
          <Image src="/images/history/map.webp" alt="History Map" className="history_map" width="1703" height="572" />
          <div className="history_box">
            <Swiper
            className="historySwiper"
            modules={[Navigation]}
            navigation={{
              nextEl: ".history_next",
              prevEl: ".history_prev",
            }}
            loop={true}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            ref={swiperRef}
            >
              {historydata.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="history_content">
                    <div className="history_year">{item.year}</div>
                    <ul className="list_container">
                    {item.Content.split('<br>').map((part, index) => (
                     <li className="history_list" key={index} dangerouslySetInnerHTML={{ __html: part }}></li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}

          
          
          
          </Swiper>
            </div>
        </div>
      </div>
      <div className="buttton_history">
        <div className="history_btn history_prev"><Image src="/images/icons/left_arrow.webp" alt="Left Arrow" width="23" height="17" /></div>
        <div className="history_btn history_next"><Image src="/images/icons/left_arrow.webp" alt="Right Arrow" width="23" height="17" /></div>
      </div>
    </section>
  );
};

