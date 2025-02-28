"use client";
import Image from "next/image"; 
import Link from "next/link";

export default function Offering({ offeringData }) {
    const getMediaUrl = (url) =>
        `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    return (
        <section data-section="our_offers" className="our_offers">
            <h2 className="h2_title">OUR OFFERINGS</h2>
            <div className="offer_container">
                <h3 className="subtitle_60">{offeringData.title}</h3>
                <p className="para">{offeringData.subtitle}</p>
                <div className="offers_detail">
                    {offeringData.content_block.map((offer, index) => (
                        <div key={index} className="offers_item">
                            <Link href={offer.url} className="offer_img">
                                <Image
                                    src={getMediaUrl(offer.image.url)} 
                                    alt={offer.heading}
                                    width={offer.image.width}
                                    height={offer.image.height}
                                />
                            </Link>
                            <Link href={offer.url}>
                                <div className="offer_text">
                                    {offer.heading.split('  ').map((text, idx) => (
                                        <span key={idx}>
                                            {text} <br />
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link href="/our-offerings" className="circle_cta">
                             <span>Know More</span>
                        <Image
                            src="/images/icons/white_arrow.webp"
                            alt="Arrow"
                            width={20}
                            height={14}
                        />
                    </Link>
             </div>
        </section>
    );
}
