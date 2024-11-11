import Image from "next/image";
import Link from "next/link";

export default function News (){
    return (
<section data-section="home_news" className="home_news">
    <div className="news_upper">
        <h2 className="h2_title">NEWS</h2>
        <h3 className="subtitle_60">In the News</h3>
        <p className="para scroll_content">
            Discover groundbreaking innovations and cutting-edge
            advancements in our news section.
        </p>
    </div>
    <div className="news_internal_links">
        <a href="" className="internal_links" data-news="01">
            <div className="news_link_title scroll_content">
                Pharma major Lupin receives US FDA approval for generic
                eye solution
            </div>
            <div className="news_date_container">
                <div className="news_date">March 1 , 2024</div>
                <div className="news_arrow"><Image src="/images/icons/chervon_right.webp" alt="" width="7" height="11"/></div>
            </div>
        </a>
        <a href="" className="internal_links" data-news="02">
            <div className="news_link_title scroll_content">
                Lupin rises over 3% after US FDA approves Mirabegron
                tablets
            </div>
            <div className="news_date_container">
                <div className="news_date">March 1 , 2024</div>
                <div className="news_arrow"><Image src="/images/icons/chervon_right.webp" alt="" width="7" height="11"/></div>
            </div>
        </a>
        <a href="" className="internal_links" data-news="03">
            <div className="news_link_title scroll_content">
                Lupin Receives Approval from U.S. FDA for Eslicarbazepine
                Acetate Tablets
            </div>
            <div className="news_date_container">
                <div className="news_date">March 1 , 2024</div>
                <div className="news_arrow"><Image src="/images/icons/chervon_right.webp" alt="" width="7" height="11"/></div>
            </div>
        </a>
    </div>
    <div className="news_cta">
        <a href="" className="black_cta">
            <div className="cta_container">
                <span>View All</span>
                <Image src="/images/icons/white_arrow.webp" alt="" width="20" height="14" />
            </div>
        </a>
    </div>
</section>
    );
}