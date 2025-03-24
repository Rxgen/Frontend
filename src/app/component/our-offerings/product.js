"use client ";

import Link from "next/link";
import Image from "next/image";

export default function Product ( {productdata}){

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
    const imageUrl = getMediaUrl(productdata.image.url);

    return (
        <section data-section="generic_offer" className="generic_offer">
        <Image src={imageUrl} alt={productdata.image.alternativeText || "Product Image"} className="generic_img" width={productdata.image.width} height={productdata.image.height} />
        <div className="generic_offer_container">
            <div className="generic_offer_content">
                <h2 className="subtitle_60">{productdata.heading}</h2>
                <p className="para">
                    {productdata.description}
                </p>
                <Link href="/products" className="black_cta">
                   <div className="cta_container">
                     <span>Our Products</span>
                      <Image src="/images/icons/white_arrow.webp" alt="White Arrow " width="20" height="14" />
                 </div>
                </Link>
                <Link href="/products#patient-education" className="black_cta" style={{ marginLeft: '3vw' }}>
                   <div className="cta_container">
                     <span>Product Education</span>
                      <Image src="/images/icons/white_arrow.webp" alt="White Arrow " width="20" height="14" />
                 </div>
                </Link>
            </div>
            <Image src="/images/flower_bg.webp" alt="White Arrow" className="flower_offer" width="1500" height="1500" />
        </div>
        </section>


    )

}