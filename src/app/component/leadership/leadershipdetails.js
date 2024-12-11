"use client";

import Image from "next/image";

export default function Leadershipdetails ({ leadershipdetaildata }) {
    
    console.log("Ladership details",leadershipdetaildata)
    const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

    const pdfUrl = leadershipdetaildata[0]?.pdf?.url ? getMediaUrl(leadershipdetaildata[0].pdf.url) : null;

    return (
        <section data-section="leader_detail_section" className="leader_detail_section">
    <div className="leader_detail_container">
        <Image src={
    leadershipdetaildata[0]?.image?.url
      ? getMediaUrl(leadershipdetaildata[0].image.url)
      : "/asset/images/leadesrship/image.webp" 
  }
  alt={leadershipdetaildata[0]?.image?.alternativeText || "Default Alt Text"} className="leader_detail_img" width="450" height="560" />
        <div className="leader_detail_content">
            <h2 className="subtitle_45">{leadershipdetaildata[0].leader_name }</h2>
            <div className="para detail_para">{leadershipdetaildata[0].designation }</div>
            <p className="para">
                {leadershipdetaildata[0].description }
            </p>
            <div className="pdf_detail">
            {pdfUrl && (
                <a href={pdfUrl} className="pdf_btn" target="_blank" download>
                        Download PDF
                    </a>
                     )}
                       <a 
                            href={getMediaUrl(leadershipdetaildata[0].image.url)}  
                            className="pdf_btn"
                            target="_blank"
                            download={leadershipdetaildata[0].leader_name + "-image"} 
                > Download Image </a> 
                
            </div>
            {/* <a href={leadershipdetaildata[0].social_link} target="_blank" rel="noopener noreferrer" className="linked_in"><Image src="/images/icons/linked_in_logo.webp" alt="Linkdin" width="40" height="40" /></a> */}
        </div>
    </div>
    <Image src="/images/flower_bg.webp" alt="Flower big " className="flower_bg_img" width="895" height="851" />
</section>
        
       
    )
}