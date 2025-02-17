"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function PressNews({PressNewsData}){
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9;
  const sortedNews = PressNewsData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = sortedNews.slice(indexOfFirstNews, indexOfLastNews);

  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        {currentNews.map((newsItem, index) => (
          newsItem && (
            <Link key={index} href={`/media/${newsItem.slug}`} className="news_content">
              <div className="news_date">{formatDate(newsItem.date)}</div>
              <p className="para">{newsItem.news_title}</p>
            </Link>
          )
        ))}
      </div>

      {/* Pagination */}
      <div className="product_pagination">
      {Array.from({ length: Math.ceil(sortedNews.length / newsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className="pagination_number"
          >
            {index + 1}
          </button>
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

