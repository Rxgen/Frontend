"use client ";
import Image from "next/image";

export default function Growth ({growthdata}){

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    const imageUrl = getMediaUrl(growthdata.image.url);

    return (
        <section data-section="opportunity_growth" className="opportunity_growth culture_growth">
    <div class="culture_content">
        <h2 class="subtitle_60">{growthdata.heading}</h2>
        <p class="para">
            {growthdata.description}
        </p>
    </div>
    <Image src={imageUrl} alt={growthdata.image.alternativeText || 'Life Image'} className="culture_img" width="693" height="638" />
</section>
    )
}