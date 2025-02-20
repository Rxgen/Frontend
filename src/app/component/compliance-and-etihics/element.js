"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Element({ elementdata }) {
  const [activeLink, setActiveLink] = useState(null);
  const [isRightSectionVisible, setIsRightSectionVisible] = useState(false);

  const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setIsRightSectionVisible(true);
  };

  const handleBackButtonClick = () => {
    setIsRightSectionVisible(false);
    setActiveLink(null);
  };

  useEffect(() => {
    if (isRightSectionVisible) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isRightSectionVisible]);

  return (
    <div>
      <section data-section="compliance_ethics" className="compliance_ethics">
        <div className="h2_title">COMPLIANCE AND ETHICS PROGRAM</div>
        <h2 className="subtitle_60">Core Elements of Lupin&apos;s Program</h2>

        <div className="ethics_container">
          <div className="ethics_left">
            <div className="ethics_linking">
              {elementdata.map((item, index) => (
                <a
                  href="#"
                  key={item.id}
                  className={`ethics_link ${activeLink === index ? 'active' : ''}`}
                  data-ethics={index + 1}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(index);
                  }}
                >
                  <Image
                    src={getMediaUrl(item.image.url)}
                    alt={item.title}
                    width={item.image.width}
                    height={item.image.height}
                  />
                  <div className="ethic_link_container">
                    <div className="subtitle_22">{item.title}</div>
                    <div className="black_cta">
                      <div className="cta_container">
                        <span>Know more</span>
                        <Image
                          src="/images/icons/white_arrow.webp"
                          alt="arrow"
                          width="20"
                          height="14"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          
          <div className={`ethics_right ${isRightSectionVisible ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleBackButtonClick();
          }}
          ></div>
            <div className={`ethics_right_container ${isRightSectionVisible ? 'active' : ''}`}>
              {elementdata.map((item, index) => (
                <div
                  className={`ethics_box ${activeLink === index ? 'active' : ''}`}
                  id={`ethics-${index + 1}`}
                  key={item.id}
                >
                  <div className="subtitle_5217">{item.title}</div>
                  <div className="ethics_content">
                    <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                    
                  </div>
                  {/* {item.title.includes("Policies & Procedures") && (
                    <div className="ethics_cta">
                       <Link href="https://www.lupin.com/investors/policies/" className="black_cta" target="_blank">
                      <div className="cta_container">
                      <span>To Learn More Click here </span>
                     <Image src="/images/icons/white_arrow.webp" alt="White Arrow" width="20" height="14" />
                    </div>
                   </Link>
              </div>
                    )} */}
                </div>
                
              ))}
              <a href="#" className="back_btn" 
              onClick={(e) => {
                e.preventDefault();
                handleBackButtonClick();
              }}
              >
              Back
            </a>
            </div>
            
          
        </div>
      </section>
      <section data-section="ethic_brand" className="innovative_brand ethic_brand">
      <div className="brand_container">
        <Link href="/images/about/lupin-2023-compliance-declaration-for-website-final.pdf" target="_blank" className="brand_box">
            <Image src="/images/icons/up_arrow.webp" alt="Up Arrow" width="57" height="62" class="brand_arrow" />
            <span className="subtitle_30">
                Declaration of  Compliance &
                Ethics Program
                for California
            </span>
        </Link>
    </div>
  </section>
    </div>
  );
}




