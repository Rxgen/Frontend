import Image from "next/image";
import Link from "next/link";

export default function About (){
    return (
<section data-section="home_about" className="home_about">
    <div className="home_about_container">
        <div className="home_about_img">
            <video width="960" height="968">
                <source src="assets/videos/about.mp4" type="video/mp4" />
            </video>
        </div>
        <div className="home_about_content">
            <h2 className="h2_title">ABOUT US</h2>
            <h3 className="subtitle_60">
                We work <br />
                towards making <br />
                a positive <br />
                difference <br />
            </h3>
            <div className="about_internal_links scroll_content">
            <Link href="/leadership" className="internal_links">
                    Our Leadership
                </Link>
                <Link href="/history" className="internal_links">
                   Our History
                </Link>
                <Link href="/values" className="internal_links">
                    Values we live by
                </Link>
                <Link href="/science" className="internal_links">
                    Science & Innovation
                </Link>
            </div>
            <a href="" className="circle_cta">
                <span>Know More</span>
                <Image src="/images/icons/white_arrow.webp" alt="" width="20" height="14" />
            </a>
        </div>
    </div>
</section>
    );
}