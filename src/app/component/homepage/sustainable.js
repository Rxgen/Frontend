import Image from "next/image";
import Link from "next/link";

export default function Sustainable ( {sustainabilityData }){

    const getMediaUrl = (url) =>
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;


    return (
<section data-section="home_sustainability" className="home_sustainability">
    <img src={getMediaUrl(sustainabilityData.content_block.image.formats.small.url)} alt="" className="sustain_img" width="1103" height="923" />
    <div className="sustainability_container">
        <h2 className="h2_title">SUSTAINABILITY</h2>
        <h3 className="subtitle_60">
        {sustainabilityData.content_block.heading}
        </h3>
        <p className="para scroll_content">
        {sustainabilityData.content_block.description}
        </p>
        <a href="" className="black_cta">
            <div className="cta_container">
                <span>Know more</span>
                <img src="/images/icons/white_arrow.webp" alt="" width="20" height="14" />
            </div>
        </a>
    </div>
</section>
    );
}