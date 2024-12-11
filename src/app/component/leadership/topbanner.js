"use client ";
import Image from "next/image";

export default function Topbanner() {

    return (
      <section data-section="contact_banner" className="product_listing_banner inner_banner">
      <picture>
          <source media="(max-width: 540px)" srcSet="/images/homepage/banner/mobile/banner_bg_1.webp" />
          <Image src="/images/leadership/banner.webp" alt="Leadesrhip Banner" className="banner_img" width="1920" height="767" />
      </picture>
      <h1 className="subtitle_66">Leadership</h1>
  </section>
    )
}