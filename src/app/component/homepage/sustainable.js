import Image from "next/image";
import Link from "next/link";

export default function Sustainable (){
    return (
<section data-section="home_sustainability" className="home_sustainability">
    <Image src="/images/homepage/sustainability.webp" alt="" className="sustain_img" width="1103" height="923" />
    <div className="sustainability_container">
        <h2 className="h2_title">SUSTAINABILITY</h2>
        <h3 className="subtitle_60">
            We are
            committed
            towards
            sustainability
        </h3>
        <p className="para scroll_content">
            Lupin's business goals are aligned with the United
            Nations Sustainable Development Goals (SDGs). Our
            commitment to the planet and the communities in
            which we operate is demonstrated through our values,
            policies and processes.
        </p>
        <a href="" className="black_cta">
            <div className="cta_container">
                <span>Know more</span>
                <Image src="/images/icons/white_arrow.webp" alt="" width="20" height="14" />
            </div>
        </a>
    </div>
</section>
    );
}