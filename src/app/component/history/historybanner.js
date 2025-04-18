"use client" ;
import Image from "next/image";

export default function HistoryBanner (){
    return  (
        <section data-section="history_banner" className="history_banner inner_banner banner_section">
    <picture>
        <source media="(max-width: 540px)" srcSet="/images/history/history_mob_banner.png" />
        <Image src="/images/history/banner.webp" alt="Desktop Banner" className="banner_img" width="1920" height="771" />
    </picture>
    <h1 className="subtitle_66">Our History</h1>
</section>
    )
}