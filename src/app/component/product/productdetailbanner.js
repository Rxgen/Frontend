"use client";
import Image from "next/image";

export default function DetailBanner (){
    return (
        <section data-section="product_listing_banner" className="product_listing_banner inner_banner banner_section">
    <picture>
        <source media="(max-width: 540px)" srcSet="/images/homepage/banner/mobile/banner_bg_1.webp"/>
        <Image src="/images/product-detail/banner.webp" alt="Desktop Banenr" className="banner_img" width="1920" height="771" />
    </picture>
    <h1 className="subtitle_66">Generics / Products</h1>
</section>
    )
}