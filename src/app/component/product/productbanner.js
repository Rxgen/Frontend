"use client";

export default function ProductBanner() {
    return (
      <section data-section="product_listing_banner" className="product_listing_banner inner_banner" id="product_listing_banner">
        <picture>
          <source media="(max-width: 540px)" srcSet="/images/homepage/banner/mobile/banner_bg_1.webp" />
          <img src="/images/product-detail/banner.webp" alt="" className="banner_img" width="1920" height="771" />
        </picture>
        <h1 className="subtitle_66">Generics / Products</h1>
      </section>
    );
  }
  