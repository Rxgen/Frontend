"use client" ;
import Image from "next/image";

export default function TopBanner (){
    return  (
<section data-section="ethics_banner_section" className="ethics_banner inner_banner banner_section">
    <picture>
        <source media="(max-width: 540px)" srcSet="/images/ethic/mob_banner.webp"/>
        <Image src="/images/ethic/banner.webp" alt="Banner" className="banner_img" width="1920" height="771"/>
    </picture>
    <h1 className="subtitle_66">Compliance and Ethics Program</h1>
</section>
    )
}