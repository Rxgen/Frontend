"use client ";
import Link from "next/link";
import Image from "next/image";



export default function Mediacontact (){
    return (
        <section data-section="media_contact" className="media_contact">
        <div className="media_contact_container">
            <div className="media_contact_Links">
                <div className="subtitle_40">Careers</div>
                <a href="mailto:usacareers@lupin.com" className="contact_links">usacareers@lupin.com</a>
            </div>
            <div className="media_contact_Links">
                <h2 className="subtitle_40">Media</h2>
                <div className="subtitle_395">Rajalakshmi Azariah</div>
                <div className="media_detail">
                    Vice President & Global Head -
                    Corporate Communications
                </div>
                <span className="contact_mail">
                    <a href="mailto:rajalakshmiazariah@lupin.com">rajalakshmiazariah@lupin.com</a>
                </span>
            </div>
            <div className="media_contact_Links">
                <div className="subtitle_40">Enquiries</div>
                <a href="mailto:customerService-lpi@lupin.com" className="contact_links">customerservice-lpi@lupin.com</a>
            </div>
        </div>
        <div className="cta_contact">
        <Link
        href="https://careers-lupinpharmaceuticals.icims.com/jobs/intro?hashed=-435710719&mobile=false&width=1020&height=500&bga=true&needsRedirect=false&jan1offset=-300&jun1offset=-240" target="_blank"
      >
        <div className="black_cta" target="_blank" rel="noopener noreferrer">
          <div className="cta_container">
            <span>See current role openings</span>
            <Image
              src="/images/icons/white_arrow.webp"
              alt="White Arrow"
              width="20"
              height="14"
            />
          </div>
        </div>
      </Link>
        </div>
    </section>
    )
}