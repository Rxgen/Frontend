"use client";
import Link from "next/link";
import Image from "next/image";

export default function News({News}){

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
    )
}