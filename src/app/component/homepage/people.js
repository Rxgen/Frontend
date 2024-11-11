import Image from "next/image";
import Link from "next/link";

export default function People() {
    return (
        <section data-section="home_our_team" className="home_our_team">
    <div className="team_container">
        <h2 className="h2_title">PEOPLE</h2>
        <div className="pl_10">
            <h3 className="subtitle_60">
                Our people are <br />
                our greatest <br />
                assets and we <br />
                work towards <br />
                building a <br />
                future-ready <br />
                workforce
            </h3>
            <div className="para scroll_content">
                Our team of passionate professionals brings
                together deep pharmaceutical expertise and a
                commitment to innovation, driving forward solutions
                that enhance patient care. We are dedicated to
                making a meaningful impact in the healthcare
                industry through collaboration and excellence.
            </div>
        </div>
    </div>
    <div className="teams_detail">
        <div className="team_item">
            <Image src="/images/homepage/people/img_1.webp" alt="" width="452" height="538" />
            <div className="team_text">Our Culture</div>
        </div>
        <div className="team_item">
            <Image src="/images/homepage/people/img_2.webp" alt="" width="452" height="538" />
            <div className="team_text">Work with us</div>
        </div>
    </div>
    <a href="" className="circle_cta">
        <span>Look</span>
        <Image src="/images/icons/white_arrow.webp" alt="" width="20" height="14" />
    </a>
</section>
    )

}