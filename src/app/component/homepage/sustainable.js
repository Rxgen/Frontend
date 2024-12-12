import Image from "next/image";
import Link from "next/link";

export default function Sustainable ( {sustainabilityData }){


    return (
    <section data-section="home_sustainability" className="home_sustainability">
    <picture>
        <source media="(max-width: 540px)" srcSet="/images/homepage/sustainability_mob.webp" />
        <Image src="/images/homepage/sustainability.webp" alt="Flower" className="sustain_img" width="1103" height="923" />
    </picture>
    <div className="sustainability_container">
        <h2 className="h2_title">SUSTAINABILITY</h2>
        <h3 className="subtitle_60">
            {sustainabilityData.heading}
        </h3>
        <p className="para">
            {sustainabilityData.sub_heading}
        </p>
        <Link href="/sustainability" className="black_cta">
            <div className="cta_container">
        <span>Know more</span>
        <Image src="/images/icons/white_arrow.webp" alt="White Arrow" width={20} height={14} />
          </div>
      </Link>
    </div>
</section>
    );
}