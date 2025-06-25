"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function PressNews({PressNewsData, totalPages, currentPage=2  }){
  console.log("Press News all Data", PressNewsData);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const sortedNews = PressNewsData.sort((a, b) => new Date(b.date) - new Date(a.date));
  /* const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = sortedNews.slice(indexOfFirstNews, indexOfLastNews);

  const totalPages = Math.ceil(sortedNews.length / newsPerPage); 

  const paginate = (pageNumber) => setCurrentPage(pageNumber);  */

  const handlePageChange = (page) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.location.search = params.toString();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/media/press-releases?search=${searchQuery}`);
    }
  };

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
      
        <input
          type="text"
          placeholder="Search News"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>Search</button>
      
      </div>
      <div className="news_container">
        {sortedNews.map((newsItem, index) => (
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
  {/* Previous Link */}
  <Link
    href={`?page=${currentPage - 1}`}
    className={`keyboard_btn product_prev ${currentPage === 1 ? 'disabled' : ''}`}
    aria-disabled={currentPage === 1}
    onClick={(e) => {
      if (currentPage === 1) e.preventDefault();
      else handlePageChange(currentPage - 1);
    }}
  >
    <Image src="/images/icons/green_arrow.webp" alt="Previous Page" width={8} height={13} />
  </Link>

  {/* Pagination numbers */}
  {[...Array(totalPages)].map((_, index) => {
    const page = index + 1;

    if (
      page <= 5 ||
      page === totalPages ||
      (page >= currentPage - 2 && page <= currentPage + 2)
    ) {
      return (
        <Link
          key={page}
          href={`?page=${page}`}
          className={`pagination_number ${currentPage === page ? 'active' : ''}`}
          aria-current={currentPage === page ? 'page' : undefined}
          onClick={(e) => {
            if (currentPage === page) e.preventDefault();
            else handlePageChange(page);
          }}
        >
          <span>{page}</span>
        </Link>
      );
    }

    if (page === 6 && currentPage > 4) {
      return (
        <span key="ellipsis-start" className="pagination_ellipsis">...</span>
      );
    }

    if (page === totalPages - 1 && currentPage < totalPages - 3) {
      return (
        <span key="ellipsis-end" className="pagination_ellipsis">...</span>
      );
    }

    return null;
  })}

  {/* Next Link */}
  <Link
    href={`?page=${currentPage + 1}`}
    className={`keyboard_btn product_next ${currentPage === totalPages ? 'disabled' : ''}`}
    aria-disabled={currentPage === totalPages}
    onClick={(e) => {
      if (currentPage === totalPages) e.preventDefault();
      else handlePageChange(currentPage + 1);
    }}
  >
    <Image src="/images/icons/green_arrow.webp" alt="Next Page" width={8} height={13} />
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
  </div>
</div>
</section>
        </div>
        
    )
}

