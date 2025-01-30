"use client" ;
import CountUp from "react-countup";
import Image from "next/image";

export default function Growth ( {growthdata} ){
    return (
<section data-section="generic_growth" className="generic_growth" id="generic_growth">
<div className="growth_numbers">
      {growthdata.map((item) => (
        <div key={item.id} className="grwoth_item">
          <div className="subtitle_126">
          <CountUp 
                start={0} 
                end={item.number} 
                duration={3}  
                separator="" 
                suffix={item.number === 2 ? 'nd' : ''}
              />
          </div>
          <p className="para">{item.description}</p>
        </div>
      ))}
    </div>
    <div className="growth_container">
        <Image src="/images/generic/growth_product.webp" alt="Growth Product" width="646" height="590" />
        <div className="growth_content">
            <h2 className="subtitle_60">Sustaining growth by evolving our product offering</h2>
            <p className="para">
            Since entering the pharmaceutical generics market in 2003 with ANDA approval for Cefuroxime Axetil Tablets, we have received over 300 FDA approvals and currently market more than 150 generics products in the U.S. We are the 3rd largest generic company in the U.S. by the number of unbranded and branded generic prescriptions filled. Our evolution into complex generics, particularly in inhalation and complex injectables, has been substantial, with these now making up 40% of our U.S. portfolio. We have over 100 products in the pipeline across a wide range of therapeutic areas and dosage forms, focusing on first-to-market launches of complex generics. A robust pipeline, strong customer relationships, and flawless execution drive our consistent track record of growth on the generic side. 
            </p>
            <p className="para">
            Our vertical integration spans from the process development of the active pharmaceutical ingredient (API) to the submission of dossiers for finished dosages, allowing us to control the supply chain and deliver quality products at the right time and price. Integrated manufacturing enables us to maintain high standards and closely monitor the integrity of our generic products, a competitive advantage in an industry where customers’ trust and safety are non-negotiable. 
            </p>
            <p className="para">
            Supply chain excellence has been a cornerstone of our strategy for over a decade. We are committed to consistently supplying high-quality products on time, making us a reliable and trusted partner. Our strategic investments and market agility underscore our ability to provide affordable generic medications to the market. 
            </p>
        </div>
    </div>
</section>
    )
}