"use client ";
import Link from "next/link";
import Image from "next/image";



export default function Mediacontact (){
    return (
        <section data-section="media_contact" className="media_contact">
        <div className="media_contact_container">
            <div className="media_contact_Links">
                <div className="subtitle_40">Careers</div>
                <Link href="mailto:usacareers@lupin.com" className="contact_links">usacareers@lupin.com</Link>
            </div>
            <div className="media_contact_Links">
                <h2 className="subtitle_40">Media</h2>
                <div className="subtitle_34">Rajalakshmi Azariah</div>
                <div className="media_detail">
                    Vice President & Global Head -
                    Corporate Communications
                </div>
                <span className="contact_mail">
                    <Link href="mailto:rajalakshmiazariah@lupin.com">rajalakshmiazariah@lupin.com</Link>
                </span>
                <br/>
            <div className="subtitle_34">Elise Titan</div>
            <div className="media_detail">
                Director, U.S. Communications
            </div>
            <span className="contact_mail">
                <Link href="mailto:elisetitan@lupin.com ">elisetitan@lupin.com</Link>
            </span>
            </div>
            <div className="media_contact_Links">
                <div className="subtitle_40">Enquiries</div>
                <a href="mailto:customerService-lpi@lupin.com" className="contact_links">customerservice-lpi@lupin.com</a>
            </div>
        </div>
        
    </section>
    )
}