import Image from "next/image"; 
import Link from "next/link";

export default function Offering (){
    return (
<section data-section="our_offers" className="our_offers">
    <h2 className="h2_title">OUR OFFERINGS</h2>
    <div className="offer_container">
        <h3 className="subtitle_60">Driving Patient Impact</h3>
        <p className="para">
            Lupin, a global pharmaceutical company in the US currently
            produces more than 180 affordable generic medications and is
            the 3rd largest pharmaceutical company in the U.S. in terms of
            prescriptions dispensed.
        </p>
        <div className="offers_detail">
            <div className="offers_item">
                <Image src="/images/homepage/\offering/img_1.webp" alt="" width="379" height="451" />
                <div className="offer_text">
                    Generic I Complex <br />
                    Generics
                </div>
            </div>
            <div className="offers_item">
                <Image src="/images/homepage/\offering/img_2.webp" alt="" width="379" height="451" />
                <div className="offer_text">
                    Innovative <br />
                    Medicines
                </div>
            </div>
            <div className="offers_item">
                <Image src="/images/homepage/\offering/img_3.webp" alt="" width="379" height="451" />
                <div className="offer_text">
                    Our <br />
                    Products
                </div>
            </div>
        </div>
        <a href="" className="circle_cta">
            <span>Know More</span>
            <Image src="/images/icons/white_arrow.webp" alt="" width="20" height="14" />
        </a>
    </div>
</section>
    );
}