"use client";

import Link from "next/link";
import Image from "next/image";

 
export default function Life( { lifedata }){
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    const imageUrl = getMediaUrl(lifedata.image.url);

    return (
        <section data-section="people_growth" className="people_growth growth_work">
    <Image src={imageUrl} alt={lifedata.image.alternativeText || "People Image"} className="people_img" width={lifedata.image.width} height={lifedata.image.height} />
    <div className="people_content">
        <h2 className="subtitle_60">{lifedata.heading}</h2>
        <p className="para">
            {lifedata.description}
        </p>
        <Link href="/our-culture" className="green_cta">
              <div className="cta_container">
               <span>Know more</span>
               <Image src="/images/icons/white_arrow.webp" alt="White Arrow" width="20" height="14" />
          </div>
      </Link>
    </div>
    <div className="flower_bg">
    <Image src="/images/flower_bg.webp" alt="Flower Big" className="flower_bg_img" width="895" height="851" />
    </div>    
</section>
    )
}