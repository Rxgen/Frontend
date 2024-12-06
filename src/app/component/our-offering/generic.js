"use client ";
import Link from "next/link";
import Image from "next/image";

export default function Generic({genericdata}) {

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    const imageUrl = getMediaUrl(genericdata.image.url);


    return (
<section data-section="generic_offer" className="generic_offer">
    <Image src={imageUrl} alt={genericdata.image.alternativeText} className="generic_img" width={genericdata.image.width} height={genericdata.image.height} />
    <div className="generic_offer_container">
        <div className="generic_offer_content">
            <h2 className="subtitle_60">{genericdata.heading}</h2>
            <p className="para">
            {genericdata.description}
            </p>
            <Link href="/generic-medicine" className="black_cta">
            <div className="cta_container">
                <span>Know more</span>
                <Image src="/images/icons/white_arrow.webp" alt="White Arrow" width="20" height="14" />
            </div>
        </Link>
        </div>
        <Image src="/images/flower_bg.webp" alt="Big Flower" className="flower_offer" width="1500" height="1500" />
    </div>
</section>
    )
}