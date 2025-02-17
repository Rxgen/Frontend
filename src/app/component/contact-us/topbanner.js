"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import SvgMap from "./svgmap";

export default function TopBanner() {
  const countries = [
    {
      countryCode: "CA",
      countryClass: "canada",
      companyLogoSrc: "/images/contact/icons/canada.webp",
      companyLogoWidth: 91,
      companyLogoHeight: 33,
      flagSrc: "/images/globe/img_11.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"https://www.lupinpharma.ca/",
    },
    {
      countryCode: "US",
      countryClass: "pharma",
      companyLogoSrc: "/images/contact/icons/pharma.webp",
      companyLogoWidth: 95,
      companyLogoHeight: 35,
      flagSrc: "/images/globe/img_12.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"#",
    },
    {
      countryCode: "MX",
      countryClass: "grin",
      companyLogoSrc: "/images/contact/icons/grin.webp",
      companyLogoWidth: 184,
      companyLogoHeight: 65,
      flagSrc: "/images/globe/img_9.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"https://laboratoriosgrin.com/",
    },
    {
      countryCode: "BR",
      countryClass: "med",
      companyLogoSrc: "/images/contact/icons/med.webp",
      companyLogoWidth: 162,
      companyLogoHeight: 28,
      flagSrc: "/images/globe/img_10.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"https://medquimica.ind.br/",
    },
    {
      countryCode: "UK",
      countryClass: "healthCare",
      companyLogoSrc: "/images/contact/icons/health.webp",
      companyLogoWidth: 81,
      companyLogoHeight: 35,
      flagSrc: "/images/globe/img_3.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"https://www.lupinhealthcare.co.uk/",
    },
    {
      countryCode: "NL",
      countryClass: "nanomi",
      companyLogoSrc: "/images/contact/icons/nanomi.webp",
      companyLogoWidth: 77,
      companyLogoHeight: 22,
      flagSrc: "/images/globe/img_8.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"https://www.nanomi.com/",
    },
    {
      countryCode: "GE",
      countryClass: "hormosan",
      companyLogoSrc: "/images/contact/icons/hormoson.webp",
      companyLogoWidth: 115,
      companyLogoHeight: 12,
      flagSrc: "/images/globe/img_7.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"https://www.hormosan.com/",
    },
    {
      countryCode: "CH",
      countryClass: "lahsal",
      companyLogoSrc: "/images/contact/icons/lahsal.webp",
      companyLogoWidth: 100,
      companyLogoHeight: 100,
      flagSrc: "/images/globe/img_2_new.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"https://lupin-neurosciences.com/our-world/",
    },
    {
      countryCode: "FR",
      countryClass: "france",
      companyLogoSrc: "/images/contact/icons/med-france.webp",
      companyLogoWidth: 144,
      companyLogoHeight: 43,
      flagSrc: "/images/globe/img_13.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"#",
    },
    {
      countryCode: "SA",
      countryClass: "dynamic",
      companyLogoSrc: "/images/contact/icons/dynamic.webp",
      companyLogoWidth: 179,
      companyLogoHeight: 38,
      flagSrc: "/images/globe/img_4.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"https://www.mydynamics.co.za/",
    },
    {
      countryCode: "IN",
      countryClass: "lupinIn",
      companyLogoSrc: "/images/contact/icons/lupin.webp",
      companyLogoWidth: 45,
      companyLogoHeight: 54,
      flagSrc: "/images/globe/img_1.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"https://www.lupin.com/",
    },
    {
      countryCode: "PH",
      countryClass: "multiCare",
      companyLogoSrc: "/images/contact/icons/multicare.webp",
      companyLogoWidth: 151,
      companyLogoHeight: 26,
      flagSrc: "/images/globe/img_6.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"https://www.multicare.com.ph/",
    },
    {
      countryCode: "AU",
      countryClass: "genericHealth",
      companyLogoSrc: "/images/contact/icons/generic.webp",
      companyLogoWidth: 144,
      companyLogoHeight: 43,
      flagSrc: "/images/globe/img_5.webp",
      pinSrc: "/images/contact/pin_img.webp",
      country_link:"https://generichealth.com.au/",
    },
    
  ];
  const [activeCountryCode, setActiveCountryCode] = useState(null);
  let interval;

  const toggleActiveClass = () => {
    const currentCountryIndex = countries.findIndex(
      (country) => country.countryCode === activeCountryCode
    );
    const nextCountryIndex = (currentCountryIndex + 1) % countries.length;
    const nextCountryCode = countries[nextCountryIndex].countryCode;

    const previousPath = document.querySelector(`#${activeCountryCode}`);
    if (previousPath) {
      previousPath.classList.remove('active');
    }

    const countryPath = document.querySelector(`#${nextCountryCode}`);
    if (countryPath) {
      countryPath.classList.add('active');
    }
    setActiveCountryCode(nextCountryCode);
  };

  
  useEffect(() => {
    interval = setInterval(toggleActiveClass, 2000); 
    return () => clearInterval(interval); 
  }, [activeCountryCode]); 

  const handleCountryHover = (countryCode) => {
    setActiveCountryCode(countryCode);
    const previousPath = document.querySelector(`#${activeCountryCode}`);
    if (previousPath) {
      previousPath.classList.remove('active');
    }
    const countryPath = document.querySelector(`#${countryCode}`);
    if (countryPath) {
      countryPath.classList.add('active');
    }
  };


  const handleMouseLeave = () => {
    if (activeCountryCode) {
      const countryPath = document.querySelector(`#${activeCountryCode}`);
      if (countryPath) {
        countryPath.classList.remove('active');
      }
      setActiveCountryCode(null);  
    }
  };
     
  return (
    
      <section
        data-section="contact_banner_section" className="contact_banner inner_banner banner_section"
      >
        <div className="map_container">
        <SvgMap />
    {countries.map((country, index) => (
            <Link
              key={country.countryCode}
              href={country.country_link}
              data-map=""
              data-country={country.countryCode}
              className={`country ${country.countryClass} ${index === countries.findIndex(c => c.countryCode === activeCountryCode) ? 'active' : ''}`}
              onMouseEnter={() => handleCountryHover(country.countryCode)} 
              onMouseLeave={handleMouseLeave} 
            >
              <div className="country_company">
                <Image
                  src={country.companyLogoSrc}
                  alt={country.countryCode}
                  width={country.companyLogoWidth}
                  height={country.companyLogoHeight}
                />
              </div>
              <div className="country_logo">
                <Image
                  src={country.flagSrc}
                  alt={`${country.countryCode} flag`}
                  width={38}
                  height={26}
                  className="flag_logo"
                />
                <Image
                  src={country.pinSrc}
                  alt={`${country.countryCode} pin`}
                  width={681}
                  height={1213}
                  className="pin_logo"
                />
              </div>
            </Link>
          ))}
        </div>
        <h1 className="subtitle_66">Contact Us</h1>
      </section>
    
  );
}
