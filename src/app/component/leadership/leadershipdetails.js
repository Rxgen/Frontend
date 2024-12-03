"use client";
import Topbanner from "@/app/component/leadership/topbanner";

export default function Leadershipdetails ({ leadershipdetaildata }) {
    console.log( "Leadesrhip Details data check ", leadershipdetaildata[0].leadership_details );

    const leadership=leadershipdetaildata[0].leadership_details;
    console.log("Single Details",leadership[0])
    
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    
    
    return (
        <section data-section="leader_detail_section" className="leader_detail_section">
    <div className="leader_detail_container">
        <img src={
    leadership[0]?.image?.formats?.small?.url
      ? getMediaUrl(leadership[0].image.formats.small.url)
      : "/asset/images/leadesrship/image.webp" 
  }
  alt={leadership[0]?.image?.alternativeText || "Default Alt Text"} className="leader_detail_img" width="450" height="560" />
        <div className="leader_detail_content">
            <h2 className="subtitle_45">{leadership[0].name }</h2>
            <div className="para detail_para">{leadership[0].designation }</div>
            <p className="para">
                {leadership[0].description }
            </p>
            <a href={leadership[0].social_link} target="_blank" rel="noopener noreferrer" className="linked_in"><img src="/images/icons/linked_in_logo.webp" alt="" width="40" height="40" /></a>
        </div>
    </div>
    <img src="/images/flower_bg.webp" alt="" className="flower_bg_img" width="895" height="851" />
</section>
        
       
    )
}