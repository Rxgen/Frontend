"use client" ;
import Image from "next/image";

export default function CultureLife ( {lifedata} ){

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    const imageUrl = getMediaUrl(lifedata.image.url);

    return (
        <section data-section="life_culture" className="life_culture culture_growth">
    <Image src={imageUrl} alt={lifedata.image.alternativeText || 'Life Image'} className="culture_img" width={lifedata.image.width} height={lifedata.image.height} />

    <div className="culture_content">
        <h2 className="subtitle_60">{lifedata.heading}</h2>
        <p className="para">
        {lifedata.description}
        </p>
    </div>
</section>
    )
}