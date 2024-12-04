"use client ";

import Link from "next/link";

export default function Product ( {productdata}){

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    const imageUrl = getMediaUrl(productdata.image.url);

    return (
        <section data-section="generic_offer" className="generic_offer">
        <img src={imageUrl} alt={productdata.image.alternativeText} className="generic_img" width={productdata.image.width} height={productdata.image.height} />
        <div className="generic_offer_container">
            <div className="generic_offer_content">
                <h2 className="subtitle_60">{productdata.heading}</h2>
                <p className="para">
                    {productdata.description}
                </p>
                <Link href="/products" className="black_cta">
                   <div className="cta_container">
                     <span>Know more</span>
                      <img src="/images/icons/white_arrow.webp" alt="White Arrow " width="20" height="14" />
                 </div>
                </Link>
            </div>
            <img src="/images/flower_bg.webp" alt="" className="flower_offer" width="1500" height="1500" />
        </div>
    </section>

    )

}