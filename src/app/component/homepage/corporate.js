"use client";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

export default function Corporate({ corporateData }) {
  const { heading, description, corporate_numbers } = corporateData;
  const usNumbers = corporate_numbers.filter(item => item.region_name === "In the US");
  const worldNumbers = corporate_numbers.filter(item => item.region_name === "In the World");

  const formatNumber = (number, description) => {
    if (description.includes("Commercialized products")) {
      return <><span className="number_span"></span>+</>;
    }
    if (description.includes("pharma")) {
      return <><span className="number_span"></span>rd</>;
    }
    if (description.includes("Patients")) {
      return <><span className="number_span">~</span>Mn</>;
    }

    if (description.includes("manufacturing facilities")) {
        return <span className="number_span"></span>;
      }
      
      if (description.includes("Countries")) {
        return <><span className="number_span"></span>+</>;
      }
    return <span className="number_span"></span>;
  };

  return (
    <section data-section="corporate_overview" className="corporate_overview">
      <div className="corporate_containers">
        <h2 className="h2_title">CORPORATE OVERVIEW</h2>
        <h3 className="subtitle_60">{heading}</h3>
        <p className="para">{description}</p>
        <Link href="/corporate-overview" className="black_cta">
            <div className="cta_container">
             <span>Know more</span>
            <Image src="/images/icons/white_arrow.webp" alt="White Arrow" width="20" height="14" />
           </div>
        </Link>
      </div>

      <div className="corporate_numbers_container">
        <div className="corporate_numbers_column">
        <div className="subtitle_40">Well established <span>in the U.S. ...</span></div>
          {usNumbers.map((item, index) => (
            <div key={index} className="corporate_number_detail">
              <div className="corporate_number">
                <CountUp end={item.number} duration={2} separator="," />
                {formatNumber(item.number, item.description)}
              </div>
              <div className="corporate_text">{item.description}</div>
            </div>
          ))}
        </div>

        <div className="corporate_numbers_column">
        <div className="subtitle_40">... and <span>across the globe</span></div>
          {worldNumbers.map((item, index) => (
            <div key={index} className="corporate_number_detail">
              <div className="corporate_number">
                <CountUp end={item.number} duration={2} separator="," />
                {formatNumber(item.number, item.description)}
              </div>
              <div className="corporate_text">{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flower_bg_container">
        <div className="flower_bg">
          <Image src="/images/flower_bg.webp" alt="Flower" width="895" height="851" />
        </div>
      </div>
    </section>
  );
}
