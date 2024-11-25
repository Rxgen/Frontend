import Image from "next/image"; 
import Link from "next/link";

export default function Offering ({offeringData}){

    const getMediaUrl = (url) =>
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;

    return (
<section data-section="our_offers" className="our_offers">
      <h2 className="h2_title">OUR OFFERINGS</h2>
      <div className="offer_container">
        <h3 className="subtitle_60">{offeringData.title}</h3>
        <p className="para">{offeringData.subtitle}</p>

        <div className="offers_detail">
          {offeringData.content_block.map((block, index) => (
            <div key={block.id} className="offers_item">
              <img
                src={getMediaUrl(block.image.url)}
                alt={block.heading || "Offering Image"}
                width={block.image.width || 379}
                height={block.image.height || 451}
              />
              <div className="offer_text">{block.heading}</div>
            </div>
          ))}
        </div>

        {/* Add CTA if required */}
        <a href="#" className="circle_cta">
          <span>Know More</span>
          <img
            src="/images/icons/white_arrow.webp" // Replace with a dynamic icon if available in data
            alt="Know More"
            width={20}
            height={14}
          />
        </a>
      </div>
    </section>
    );
}