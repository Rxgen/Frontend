"use client";
import Image from "next/image";

export default function Community( {communitydata}){

    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    const ImageUrl = communitydata?.image?.url
    ? getMediaUrl(communitydata.image?.url)
    : "assets/images/about/banner.webp";
    return (
        <section data-section="community_section" className="community_section">
    <Image src={ImageUrl} alt="Community" className="" width="646" height="590" />
    <div className="community_container">
        <h2 className="subtitle_60">{communitydata.heading}</h2>
        <p className="para">
           {communitydata.description}
        </p>
    </div>
<div className="flower_bg_container" >
    <div className="flower_bg">
        <Image src="/images/flower_bg.webp" alt="Big flower " width="1500" height="1500" />
    </div>
</div>
</section>
    )

}