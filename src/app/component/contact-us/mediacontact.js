"use client ";
import Link from "next/link";
import Image from "next/image";


export default function Mediacontact (){
    return (
        <section data-section="media_contact" className="media_contact">
    <div className="media_contact_container">
        <h2 className="subtitle_60">Media Contact</h2>
        <div className="subtitle_395">Rajalakshmi Azariah</div>
        <div className="media_detail">
            Vice President & Global Head -
            Corporate Communications
        </div>
        <span className="contact_mail">
            <a href="mailto:rajalakshmiazariah@lupin.com">rajalakshmiazariah@lupin.com</a>
        </span>
        <Link href="" className="black_cta">
             <div className="cta_container">
              <span>See current role openings</span>
                <Image src="/images/icons/white_arrow.webp" alt="White Arrow" width="20" height="14" />
           </div>
       </Link>
    </div>
</section>
    )
}