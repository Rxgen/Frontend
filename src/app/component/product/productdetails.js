"use client";
import React from "react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import Link from "next/link";
import { useState,useEffect } from "react";

export default function ProductDetails({ productdata }) {
  const product = productdata[0];
  console.log("Product after Destructuring:", productdata);
  console.log("Product Brand after Destructuring:", product.brand);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  const [PopupActive, setPopupActive] = useState(false);
  const [error, setError] = useState("");

  const ndcList = product.ndc && typeof product.ndc === "string"
    ? product.ndc.split(",").map((ndc) => ndc.trim())
    : [];

   
    // Youtube Video Play Functionalty
    useEffect(() => {
      const posterElements = document.querySelectorAll('.play_btn'); // Get all play buttons
      
      posterElements.forEach((posterElement) => {
        const handleImageClick = (event) => {
          console.log("Direct click on poster image!");
          const inhalerVideoElement = event.target.closest('.inhaler_video');
          if (inhalerVideoElement) {
            inhalerVideoElement.classList.add('active'); 
            const iframe = inhalerVideoElement.querySelector('iframe');
            if (iframe) {
              const iframeSrc = iframe.dataset.originalSrc || iframe.src;
              iframe.src = iframeSrc.includes('?') ? `${iframeSrc}&autoplay=1` : `${iframeSrc}?autoplay=1`;
              iframe.dataset.originalSrc = iframeSrc;
              console.log('Updated iframe src with autoplay');
            }
          }
        };
        posterElement.addEventListener('click', handleImageClick);
        return () => {
          posterElement.removeEventListener('click', handleImageClick);
        };
      });
    }, []);

    const openPopup = (e) => {
      e.preventDefault();
      setPopupActive(true);
    };

    const closePopup=(e)=>{
      e.preventDefault();
      setPopupActive(false)
    }

    const handleDownloadClick = (e) => {
      const checkbox = document.getElementById("check_term");
      if (!checkbox.checked) {
        e.preventDefault(); 
        setError("Please tick the box if you want to proceed"); 
      } else {
        setError(""); 
      }
    };

  // Utility function to generate media URLs
  const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

  const cleanContent = (content) => {
    return content
      .replace(/<p>\s*<img([^>]+)>\s*<\/p>/g, '<img$1>')
      .replace(/<p>(\s|&nbsp;)*<\/p>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const cleanedDescription = product.product_description
    ? cleanContent(product.product_description)
    : null;

  return (
    <div>
      <section className="product_detail_section" data-section="product_detail_section">
        <div className="product_detail_wrapper">
          <div className="product_detail_item">

            {product.product_images.length === 1 ? (
              <Image
                src={getMediaUrl(product.product_images[0].slide.url)}
                alt={product.product_images[0].slide.name}
                width={279}
                height={236}
              />
            ) : (
              <Swiper
                className="product_detail_swiper"
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, EffectFade]}
                effect="fade"
                navigation={{
                  nextEl: '.product_next',
                  prevEl: '.product_prev',
                }}
                loop={true}
              >
                {/* Render all images as Swiper slides */}
                {product.product_images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={getMediaUrl(image.slide.url)}
                      alt={image.slide.name}
                      width={279}
                      height={236}
                    />
                  </SwiperSlide>
                ))}

                {/* Custom next and prev buttons */}
                <div className="product_next product_arrow">
                  <Image
                    src="/images/icons/green_arrow_2.webp"
                    alt="Green arrow"
                    width="32"
                    height="32"
                  />
                </div>
                <div className="product_prev product_arrow">
                  <Image
                    src="/images/icons/green_arrow_2.webp"
                    alt="Green Arrow"
                    width="32"
                    height="32"
                  />
                </div>
              </Swiper>
            )}
          </div>

          <div className="product_detail_container">
            <h1 className="subtitle_4692">{product.product_name}</h1>
            <div className="product_info">
              <div className="info_item">
                <div className="info_title">Strength</div>
                <span>:</span>
                <div className="info_detail">
                  {product.strength && product.strength ? product.strength : 'N/A'}
                </div>
              </div>

              <div className="info_item">
                <div className="info_title">Pack Size</div>
                <span>:</span>
                <div className="info_detail">{product.pack_size || 'N/A'}</div>
              </div>

              <div className="info_item">
                <div className="info_title">NDC#</div>
                <span>:</span>
                <div className="info_detail">
                {product.ndc && product.ndc ? product.ndc : 'N/A'}
                </div>
              </div>

              <div className="info_item">
                <div className="info_title"> RLD/Brand Name </div>
                <span>:</span>
                <div className="info_detail">
                  {product.brand && product.brand.name ? product.brand.name : 'N/A'}
                </div>
              </div>

              <div className="info_item">
                <div className="info_title">TE Rating</div>
                <span>:</span>
                <div className="info_detail">{(product.te_rating || 'N/A').toUpperCase()}</div>
              </div>

              <div className="info_item">
                <div className="info_title">Therapeutic Category</div>
                <span>:</span>
                <div className="info_detail">
                  {product.category && product.category.name ? product.category.name : 'N/A'}
                </div>
              </div>
              {product.other_product_information && (
                <div className="info_item">
                  <div className="info_title">Other Product Info</div>
                  <span>:</span>
                  <div
                    className="info_detail"
                    dangerouslySetInnerHTML={{ __html: product.other_product_information }}
                  ></div>
                </div>
              )}
            </div>
            {product.saving_card_popup_content && (
            <div className="btn_container">
             <div className="product_pdf">
              {/* Render PDF links */}
              {product.pdf_files && product.pdf_files.length > 0 ? (
                product.pdf_files.map((file, index) => (
                  <a
                    key={index}
                    href={getMediaUrl(file.pdf.url)}
                    className="pdf_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {file.name}
                  </a>
                ))
              ) : (
                <div>No PDF files available</div>
              )}
            </div>

            {product.saving_card_popup_content && (
            <div className="popup_pdf">
              <Link href="#" className="pdf_link product_btn" onClick={openPopup}>Download Co-pay Savings Card</Link>
              <div className="para">General Terms & Conditions</div>
            </div>
            )}
              
            </div>
            )}

            {!product.saving_card_popup_content && (
            <div className="product_pdf">
              {/* Render PDF links */}
              {product.pdf_files && product.pdf_files.length > 0 ? (
                product.pdf_files.map((file, index) => (
                  <a
                    key={index}
                    href={getMediaUrl(file.pdf.url)}
                    className="pdf_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {file.name}
                  </a>
                ))
              ) : (
                <div>No PDF files available</div>
              )}
            </div>
             )}
          </div>
        </div>
        <p className="para product_para">*All registered trademarks are the property of their respective owners. These products are intended for U.S. residents only.</p>

      </section>
      {cleanedDescription && (

        <div
          dangerouslySetInnerHTML={{ __html: cleanedDescription }}
        />
      )}

      {product.saving_card_popup_content && (
      <div id="product_popup" className={`product_popup ${PopupActive ? 'active' : ''}`}>
        <div className="popup_container">
          <Link href="" className="close_btn" onClick={closePopup}><Image src="/images/icons/close.webp" alt="Close" width="32" height="32" /> <span>Close</span></Link>
          <div dangerouslySetInnerHTML={{ __html: product.saving_card_popup_content }} />
          <div className="contact_terms">
            <label htmlFor="check_term">
              <input type="checkbox" name="" id="check_term" />
              I am over the age of 18 and I agree to the Terms and Conditions.
            </label>
            {error && <div className="error">{error}</div>}
            <Link 
              href={product.download_saving_card_link}
              target="_blank" 
              className="pdf_link" 
              onClick={handleDownloadClick} 
              >
              Download Co-pay Savings Card
              
            </Link>
          </div>
        </div>
      </div>
      )}
    </div>

    
  );
}



