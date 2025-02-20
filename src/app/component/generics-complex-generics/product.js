"use client" ;

import Link from "next/link";
import Image from "next/image";


export default function Product({productdata}){

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    return (
<section data-section="generic_product" className="generic_product">
    <div className="product_container">
        <h2 className="subtitle_60">Quality is at the core of everything we do</h2>
        <Link href="/products">
      <div className="black_cta">
        <div className="cta_container">
          <span>Search our products</span>
          <Image src="/images/icons/white_arrow.webp" alt="White Arrow" width="20" height="14" />
        </div>
      </div>
    </Link>
    </div>
    <div className="generic_product_detail">
    {productdata.map((product) => {
        return (
          <div key={product.id} className="generic_product_items">
            <Image
              src={getMediaUrl(product.image.url)}
              alt={product.description}
              width={product.image.width}
              height={product.image.height}
            />
            <p className="para">{product.description}</p>
          </div>
        );
      })}
    </div>
</section>
    )
}


