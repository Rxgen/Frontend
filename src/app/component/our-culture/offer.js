"use client" ;

import Image from "next/image";


export default function Offer() {
    return (
        <section data-section="culture_offer" className="culture_offer">
    <h2 className="subtitle_60">
        Lupin&apos;s U.S. offering <br />
        career opportunities across <br />
        diverse fields
    </h2>
    <div className="culture_links_container">
        <div className="culture_link">Research and Development</div>
        <div className="culture_link">Supply Chain and Warehousing</div>
        <div className="culture_link">Finance and Accounting</div>
        <div className="culture_link">Sales and Marketing</div>
        <div className="culture_link">Manufacturing</div>
        <div className="culture_link">Human Resources</div>
        <div className="culture_link">Information Technology</div>
        <div className="culture_link">Legal and Compliance</div>
        <div className="culture_link">Procurement</div>
        <div className="culture_link">Operational Excellence</div>
        <div className="culture_link">Environmental&apos; Health&apos; and Safety</div>
    </div>
    <div className="flower_section">
    <div className="flower_bg">
        <Image src="/images/flower_bg.webp" alt="BIg Flower " width="1500" height="1500" />
    </div>
</div>
</section>
    )
}