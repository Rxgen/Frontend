"use client " ;
import Image from "next/image";

export default function Benefit( { benefitdata } ) {

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    const imageUrl = getMediaUrl(benefitdata.image.url);

    return (
        <section data-section="benefits_growth" className="benefits_growth culture_growth">
        <Image src={imageUrl} alt={benefitdata.image.alternativeText || 'benefit Image'} className="culture_img" width="693" height="638" />
        <div className="culture_content">
            <h2 className="subtitle_60"> {benefitdata.heading}</h2>
            <p className="para">
            {benefitdata.description}
            </p>
        </div>
    </section>
    )
}