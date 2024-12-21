"use client";

import Image from "next/image";
import Link from "next/link";

export default function News({ newsData }) {
  console.log("news data" ,newsData);

  return (
    <section data-section="home_news" className="home_news">
      <div className="news_upper">
        <h2 className="h2_title">NEWS</h2>
        <h3 className="subtitle_60">{newsData.title}</h3>
        <p className="para scroll_content">{newsData.description}</p>
      </div>
      <div className="news_internal_links">
        {newsData.news_link.map((news, index) => (
          <Link
            key={news.id}
            href={news.news_link}
            target="_blank"
            className="internal_links"
            data-news={`0${index + 1}`}
          >
            <div className="news_link_title scroll_content">
              {news.news_title}
            </div>
            <div className="news_date_container">
              <div className="news_date">{new Date(news.Date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}</div>
              <div className="news_arrow">
                <Image
                  src="/images/icons/chervon_right.webp"
                  alt=""
                  width="7"
                  height="11"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="news_cta">
      <Link href="https://www.lupin.com/media/" className="black_cta" target="_blank">
        <div className="cta_container">
          <span>View All</span>
          <Image
            src="/images/icons/white_arrow.webp"
            alt=""
            width={20}
            height={14}
          />
        </div>
      </Link>
      </div>
    </section>
  );
}
