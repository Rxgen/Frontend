"use client";
import Image from "next/image";

export default function Respiratory (){
    return (
        <section data-section="science_respiratory" className="science_team patient_container">
    <Image src="/images/science/respiratory.webp" alt="Respiratory" className="team_img" width="602" height="655" />
    <div className="respiratory_container">
        <h2 className="subtitle_60">Respiratory Research</h2>
        <p className="para">
        Inhalation therapy has emerged as a critical route for drug delivery, particularly in respiratory care. By directly targeting the lungs, inhalation allows for high pulmonary drug concentrations while minimizing systemic exposure, reducing the risk of side effects. This makes it the optimal choice for treating chronic respiratory conditions such as asthma and chronic obstructive pulmonary disease (COPD), where rapid and localized drug action is essential.
        </p>
        <p className="para">
        At Lupin, we have been at the forefront of pioneering advancements in inhalation therapy. Our expertise in this field has led us to be one of the first companies to successfully genericize ProAir (Albuterol), a vital rescue medication for asthma and COPD patients, ensuring timely access to life-saving treatment. We also became the first to introduce a generic version of Spiriva Handihaler (Tiotropium), a dry powder inhaler used for long-term maintenance of COPD. 
        </p>
        <p className="para">
        Our ongoing commitment to respiratory health drives us to continuously expand our portfolio of affordable and high-quality inhalation therapies. In addition to generics, we are actively working on the development of innovative, next-generation respiratory treatments to address unmet needs and improve patient outcomes.

        </p>
    </div>
</section>
    )

}