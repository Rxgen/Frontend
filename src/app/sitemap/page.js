"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Sitemap() {
  return (
    <main id="wrapper" className="wrapper">
      <section data-section="site_banner" className="inner_banner site_banner">
        <picture>
          <source media="(max-width: 540px)" srcSet="/images/mob_sitemap.webp" />
          <Image
            src="/images/sitemap.webp"
            alt="Sitemap Banner"
            className="banner_img"
            width={1920}
            height={771}
          />
        </picture>
        <h1 className="subtitle_66">Sitemap</h1>
      </section>

      <section data-section="site_section" className="site_section banner_section">
        <div className="site_container">
          <h2 className="subtitle_24">About Us</h2>
          <div className="site_content">
            <Link href="/about-us">ABOUT US</Link>
            <Link href="/corporate-overview">CORPORATE OVERVIEW</Link>
            <Link href="/leadership">LEADERSHIP</Link>
            <Link href="/our-history">OUR HISTORY</Link>
            <Link href="/core-value">OUR VALUES</Link>
            <Link href="/science-and-innovation">SCIENCE & INNOVATION</Link>
            <Link href="/compliance-and-ethics">COMPLIANCE & ETHICS PROGRAM</Link>
            <span></span>
          </div>
        </div>

        <div className="site_container">
          <h2 className="subtitle_24">Our Offering</h2>
          <div className="site_content">
            <Link href="/our-offering">OUR OFFERINGS</Link>
            <Link href="/generic-medicine">GENERICS & COMPLEX GENERICS </Link>
            <Link href="/innovative-medicine">INNOVATIVE MEDICINES</Link>
            <Link href="/products">OUR PRODUCTS</Link>
          </div>
        </div>

        <div className="site_container">
          <h2 className="subtitle_24">Our Impact</h2>
          <div className="site_content">
            <Link href="/sustainability">SUSTAINABILITY</Link>
          </div>
        </div>

        <div className="site_container">
          <h2 className="subtitle_24">People</h2>
          <div className="site_content">
            <Link href="/people">PEOPLE</Link>
            <Link href="/our-culture">OUR CULTURE</Link>
            <Link href="/career">CAREER</Link>
          </div>
        </div>

        <div className="site_container">
          <h2 className="subtitle_24">Privacy</h2>
          <div className="site_content">
            <Link href="/your-privacy-choices">DO NOT SELL/SHARE MY PERSONAL INFORMATION</Link>
            <Link href="/privacy-policy">PRIVACY POLICY</Link>
            <Link href="/pharmacovigilance">PHARMACOVIGILANCE</Link>
            <Link href="/consumer-health">CONSUMER HEALTH PRIVACY STATEMENT</Link>
            <Link href="/notice">NOTICE AT COLLECTION</Link>
          </div>
        </div>

        <div className="site_container">
          <h2 className="subtitle_24">Contact</h2>
          <div className="site_content">
            <Link href="/contact-us">CONTACT US</Link>
          </div>
        </div>
        <div className="site_container">
          <h2 className="subtitle_24">Media</h2>
          <div className="site_content">
            <Link href="/media">Media</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
