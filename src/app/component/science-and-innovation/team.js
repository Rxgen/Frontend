"use client";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
    return (
        <section data-section="science_team" className="science_team patient_container">
    <Image src="/images/science/team.webp" alt="Team Image" className="team_img" width="602" height="655" />
    <div className="team_container">
        <div className="team_content">
            <h2 className="subtitle_30">Diversified Product Portfolio</h2>
            <p className="para">
                Our R&D efforts are the cornerstone of our mission to become a frontrunner in the
                development of medicines that address a range of unmet needs. By investing in
                cutting-edge research, we have established ourselves as global leaders in both <Link href="https://www.lupin.com/US/generics-complex-generics" className="hrefpara">generics
                and complex generics</Link> while paving the way for advances in specialty pharmaceuticals.
            </p>
        </div>
        <div className="team_content">
            <h2 className="subtitle_30">Our Efforts</h2>
            <p className="para">
                Our R&D efforts are the cornerstone of our mission to become a frontrunner in the
                development of medicines that address a range of unmet needs. By investing in
                cutting-edge research, we have established ourselves as global leaders in both generics
                and complex generics while paving the way for advances in specialty pharmaceuticals.
            </p>
        </div>
        <div className="team_content">
            <h2 className="subtitle_30">Our Teams</h2>
            <p className="para">
                Our R&D teams across the US, India and Europe are dedicated to developing a broad range of
                generic and complex generics products across the entire spectrum of routes of administration and
                dosage forms, with special attention to inhalation delivery and respiratory products. Additionally, our
                teams at Nanomi lead the way in developing controlled-release microspheres and nanoparticles,
                harnessing the power of proprietary Microsieve technology for advanced parenteral drug delivery.
            </p>
        </div>
    </div>
    <div className="flower_bg_container">
        <div className="flower_bg">
            <Image src="/images/flower_bg.webp" alt="Big Flower" width="1500" height="1500" />
        </div>
    </div>
</section>
    )
}