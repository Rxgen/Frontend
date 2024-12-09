"use client";

import Image from "next/image";


export default function Element( {elementdata} ){
    return(

        <section data-section="compliance_ethics" className="compliance_ethics">
    <div className="h2_title">COMPLIANCE AND ETHICS PROGRAM</div>
    <h2 className="subtitle_60">Core Elements of Lupin&apos;s Program</h2>
    <div className="ethics_container">
        <div className="ethics_left">
            <Image src="/images/ethic/element.webp" alt="" className="elements_img" width="1147" height="583" />
            <div className="ethics_linking">
                <a href="" className="ethics_link" data-ethics="1"></a>
                <a href="" className="ethics_link" data-ethics="2"></a>
                <a href="" className="ethics_link" data-ethics="3"></a>
                <a href="" className="ethics_link" data-ethics="4"></a>
                <a href="" className="ethics_link" data-ethics="5"></a>
                <a href="" className="ethics_link" data-ethics="6"></a>
                <a href="" className="ethics_link" data-ethics="7"></a>
                <a href="" className="ethics_link" data-ethics="8"></a>
            </div>
        </div>
        <div className="ethics_right">
            
        </div>
    </div>
</section>
    )
}