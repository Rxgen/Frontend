"use client";
import Link from "next/link";
import Image from "next/image";

export default function PressNews({PressNewsData}){

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      };
    return(
        <div>
<section data-section="news_section" className="news_section press_section">
        <h2 className="subtitle_60">Press Releases</h2>
        <div className="news_search_container">
          <input type="text" placeholder="Search News" />
          <button type="submit">Search</button>
        </div>
        <div className="news_container">
          {PressNewsData.map((newsItem, index) => (
            newsItem.boolean && (
              <Link key={index} href={`/media/${newsItem.slug}`} className="news_content">
                <div className="news_date">{formatDate(newsItem.date)}</div>
                <p className="para">{newsItem.news_title}</p>
              </Link>
            )
          ))}
        </div>
      </section>

<section data-section="news_contact" className="media_contact news_contact">
<div className="media_contact_container">
  <div className="media_contact_Links">
    <h2 className="subtitle_40">Media</h2>
    <div className="subtitle_395">Rajalakshmi Azariah</div>
    <div className="media_detail">
      Vice President & Global Head -
      Corporate Communications
    </div>
    <span className="contact_mail">
      <Link href="mailto:rajalakshmiazariah@lupin.com">rajalakshmiazariah@lupin.com</Link>
    </span>
  </div>
</div>
</section>
        </div>
        
    )
}

