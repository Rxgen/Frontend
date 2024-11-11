import Image from "next/image" ;



export default function Corporate () {
    return (
        <section data-section="corporate_banner" className="corporate_banner inner_banner" id="corporate_banner">
        <picture>
            <source media="(max-width: 540px)" srcSet="/images/homepage/banner/mobile/banner_bg_1.webp" />
    <Image
      src="/images/corporate/banner.webp"
      alt=""
      className="banner_img"
      width="1920"
      height="771"
    />
  </picture>
  <h1 className="subtitle_66">Corporate Overview</h1>
  </section>
    );
  };
  
  