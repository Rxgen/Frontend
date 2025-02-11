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
      <div>

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



<section data-section="post_section" className="post_section">
    <div className="subtitle_30">Related Post</div>
    <div className="news_container">
        <Link href="" className="news_content">
            <div className="news_date">February 3, 2025</div>
            <p className="para">Lupin Receives Tentative Approval from U.S. FDA for Darunavir, Cobicistat, Emtricitabine, and Tenofovir Alafenamide Tablets</p>
        </Link>
        <Link href="" className="news_content">
            <div className="news_date">February 1, 2025</div>
            <p className="para">Lupin Announces Closure of Inspection by U.S. FDA at its Somerset Facility with No Observations</p>
        </Link>
        <Link href="" className="news_content">
            <div className="news_date">January 28, 2025</div>
            <p className="para">Lupin Receives Approval from U.S. FDA for Ipratropium Bromide Nasal Solution (Nasal Spray), 0.06%</p>
        </Link>
    </div>
</section>
      </div>
    
        
    )
}

