"use client";

import Link from "next/link";
import Image from "next/image";

export default function Newsdetail ({ Newsdetaildata }) {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      };
    return (
    <section data-section="newsroom_section" className="newsroom_section">
      <div className="para_container">
        <h2 className="subtitle_30">
         {Newsdetaildata[0].news_title}
        </h2>
      </div>

      <div className="para_container">
        <div className="news_date">
          <span>{formatDate(Newsdetaildata[0].date)}</span>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: Newsdetaildata[0].news_detail }}  ></div>

      {/* If you'd like to add an image */}
      <div className="para_container">
        <p className="para"><span>For further information or queries please contact –</span></p>
        <div className="news_detail">
            <div className="name">Rajalakshmi Azariah</div>
            <p className="para">Vice President & Global Head – Corporate Communications, Lupin</p>
            <Link href="mailto:rajalakshmiazariah@lupin.com">rajalakshmiazariah@lupin.com</Link>
        </div>
        <div className="safe_text">*Safe Harbor Statement</div>
       </div> 
    
    </section>
        
    )
}

