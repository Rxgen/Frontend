"use client";
import { useState } from 'react';
import React from 'react';

export default function ContentImage({ contentdata }) {
  const [activeLink, setActiveLink] = React.useState(0);

  const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;

  return (
    <div>
    <section data-section="about_inner" className="about_inner">
      <div className="about_bg">
        {contentdata.map((item, index) => (
          <picture
            className={`about_picture ${activeLink === index ? 'active' : ''}`}
            id={`aboutInner-${index + 1}`}
            key={item.id}
          >
            <source
              media="(max-width:540px)"
              srcSet={getMediaUrl(item.mobile_image.formats.small.url)}
            />
            <img
              src={getMediaUrl(item.desktop_image.formats.small.url)}
              alt={item.desktop_image.alternativeText || ""}
              width={item.desktop_image.width}
              height={item.desktop_image.height}
              layout="responsive"
            />
          </picture>
        ))}
      </div>

      <div className="about_inner_container">
        <div className="about_inner_box">
          {contentdata.map((item, index) => (
            <div
              className={`about_inner_item ${activeLink === index ? 'active' : ''}`}
              data-about={`${index + 1}`}
              key={item.id}
              onMouseEnter={() => setActiveLink(index)}
            >
              <div className="about_inner_detail">
                <h2 className="subtitle_40">
                  {item.heading.split(" ").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < item.heading.split(" ").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h2>
                <div className="about_inner_content">
                  <p className="para">{item.description}</p>
                  <a href={item.cta.cta_url} className="green_cta">
                    <div className="cta_container">
                      <span>{item.cta.cta_text}</span>
                      <img
                        src="/images/icons/white_arrow.webp"
                        alt="arrow"
                        width="20"
                        height="14"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <section data-section="about_brand" className="innovative_brand about_brand">
      <div className="brand_container">
        <a href="">
          <img 
            src="/images/about/declaration.webp" 
            alt="Brand Declaration"
            width={589}
            height={320}
          />
        </a>
      </div>
    </section>
    </div>
  );
}