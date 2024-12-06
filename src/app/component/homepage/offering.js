import Image from "next/image"; 
import Link from "next/link";

export default function Offering ({offeringData}){

    const getMediaUrl = (url) =>
        `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    return (
<section data-section="our_offers" className="our_offers">
      <h2 className="h2_title">OUR OFFERINGS</h2>
      <div className="offer_container">
        <h3 className="subtitle_60">{offeringData.title}</h3>
        <p className="para">{offeringData.subtitle}</p>

        <div className="offers_detail">
          {offeringData.content_block.map((block, index) => (
            <div key={block.id} className="offers_item">
              <Image
                src={getMediaUrl(block.image.url)}
                alt={block.heading || "Offering Image"}
                width={block.image.width || 379}
                height={block.image.height || 451}
              />
              <div className="offer_text">{block.heading}</div>
            </div>
          ))}
        </div>

        
              <Link href="#" className="circle_cta">
              <span>Know More</span>
        <Image
          src="/images/icons/white_arrow.webp" 
          alt="White Arrow"
          width={20}
          height={14}
        />
      </Link>
      </div>
    </section>
    );
}