"use client";
import Link from "next/link";
import Image from "next/image";

export default function News({News}){
  console.log("Press News Data " , News)

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

   const sortedNews = News
  .filter((newsItem) => newsItem) 
  .sort((a, b) => new Date(b.date) - new Date(a.date)) 
  .slice(0, 4);  


    return(
      <div>
      <section data-section="news_section" className="news_section">
    <h2 className="subtitle_60">Press Releases</h2>
    <div className="news_container">
    {sortedNews.map((newsItem, index) => (
     newsItem.boolean && (
    <Link key={index} href={`media/${newsItem.slug}`} className="news_content">
      <div className="news_date">{formatDate(newsItem.date)}</div>
      <p className="para">{newsItem.news_title}</p>
    </Link>
  )
))}
    </div>
    <div className="center_cta">
        <Link href="https://www.lupin.com/media/press-releases/" target="_blank" className="green_cta">
            <div className="cta_container">
                <span>Explore All News</span>
                <Image src="/images/icons/white_arrow.webp" alt="White Arrow" width="20" height="14" />
            </div>
        </Link>
        <Link href="/media/press-releases" className="green_cta">
            <div className="cta_container">
                <span>Explore All U.S. News</span>
                <Image src="/images/icons/white_arrow.webp" alt="White Arrow" width="20" height="14" />
            </div>
        </Link>
    </div>
</section>
<section data-section="news_contact" className="media_contact news_contact">
<div className="media_contact_container">
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
</div>
</section>
</div>
    )
}