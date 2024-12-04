"use client";

import Link from "next/link";

 
export default function Life({lifedata}){
    

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    const imageUrl = getMediaUrl(lifedata.image.url);

    return (
        <section data-section="people_growth" className="people_growth growth_work">
    <img src={imageUrl} alt={lifedata.image.alternativeText} className="people_img" width={lifedata.image.width} height={lifedata.image.height} />
    <div className="people_content">
        <h2 className="subtitle_60">{lifedata.heading}</h2>
        <p className="para">
            {lifedata.description}
        </p>
        <Link href="" className="green_cta">
              <div className="cta_container">
               <span>Know more</span>
               <img src="/images/icons/white_arrow.webp" alt="Know More" width="20" height="14" />
          </div>
      </Link>
    </div>
    <img src="/images/flower_bg.webp" alt="Flower Big" className="flower_bg_img" width="895" height="851" />
</section>
    )
}