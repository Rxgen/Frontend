"use client";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <footer>
      <Image 
        src="/images/flower_bg_footer.webp" 
        alt="Flower background footer" 
        className="flower_bg_footer" 
        width={935} 
        height={956} 
      />
      <Link href="#wrapper" className="up_arrow">
        <Image 
          src="/images/icons/chervon_up.webp" 
          alt="Up Arrow" 
          width={37} 
          height={37} 
        />
      </Link>
      <div className="footer_container">
        <div className="lupin_footer_container">
          <div className="lupin_address">
            <address>
              <span>Address</span>:
              <br />5801 Pelican Bay Blvd, Suite 
              500 <br />
              Naples, FL 34108
            </address>
            <div className="lupin_contact">
            <h2 className="subtitle_30">For Customer Service or  <br />Patient Assistance</h2>
            <span>
                Phone :
                <Link href="tel:+1 866-587-4617" className="border_link">&nbsp;+1 866-587-4617</Link>
              </span>
              <span>
                Email :
                <Link href="mailto:customerservice-lpi@lupin.com" className="border_link">&nbsp;customerservice-lpi@lupin.com</Link>
              </span>
            </div>
            <div className="lupin_contact">
            <h2 className="subtitle_30">For Product Quality and  <br />Adverse Events</h2>
            <span>
                Email :
                <Link href="mailto:dsrm@lupin.com" className="border_link">&nbsp;dsrm@lupin.com</Link>
                </span>
            </div>
            <Link href="https://www.linkedin.com/company/lupin-pharmaceuticals/" target="_blank" className="linked_in">
              <Image 
                src="/images/icons/linked_in.webp" 
                alt="LinkedIn" 
                width={94} 
                height={94} 
              />
            </Link>
          </div>
          <div className="lupin_footer_navigation">
            <div className="nav_footer_container">
              <div className="footer_nav">
                <span>
                  <Link href="/about-us" className="border_link">ABOUT US</Link>
                </span>
                <ul className="sub_footer">
                  <li><Link href="/corporate-overview" className="border_link">CORPORATE OVERVIEW</Link></li>
                  <li><Link href="/leadership" className="border_link">OUR LEADERSHIP</Link></li>
                  <li><Link href="/our-history" className="border_link">OUR HISTORY</Link></li>
                  <li><Link href="/core-value" className="border_link">OUR VALUES</Link></li>
                  <li><Link href="/science-and-innovation" className="border_link">SCIENCE & INNOVATION</Link></li>
                  <li><Link href="/compliance-and-ethics" className="border_link">COMPLIANCE & ETHICS PROGRAM</Link></li>
                </ul>
              </div>
              <div className="footer_nav">
                <span>
                  <Link href="/our-people" className="border_link">OUR PEOPLE</Link>
                </span>
                <ul className="sub_footer">
                  <li><Link href="/our-culture" className="border_link">OUR CULTURE</Link></li>
                  <li><Link href="/career" className="border_link">CAREER</Link></li>
                </ul>
              </div>
            </div>
            <div className="nav_footer_container">
              <div className="footer_nav">
                <span>
                  <Link href="/our-offerings" className="border_link">OUR OFFERINGS</Link>
                </span>
                <ul className="sub_footer">
                  <li><Link href="/generics-complex-generics" className="border_link">GENERICS & COMPLEX GENERICS </Link></li>
                  <li><Link href="/innovative-medicine" className="border_link">INNOVATIVE MEDICINES</Link></li>
                  <li><Link href="/products" className="border_link">OUR PRODUCTS</Link></li>
                  <li><Link href="/products#patient-education" className="border_link">PRODUCT EDUCATION</Link></li>
                  <li><Link href="/return-good-policy" className="border_link">RETURN GOODS POLICY</Link></li>
                </ul>
              </div>
              <div className="footer_nav">
                <span>
                  <Link href="/sustainability" className="border_link">OUR IMPACT</Link>
                </span>
              </div>
              <div className="footer_nav">
                <span>
                  <Link href="/media" target="_blank"className="border_link">MEDIA</Link>
                </span>
              </div>
              <div className="footer_nav">
                <span>
                  <Link href="/contact-us" className="border_link">CONTACT US</Link>
                </span>
              </div>
              <div className="footer_nav">
                <span>
                  <Link href="/sitemap" className="border_link">SITEMAP</Link>
                </span>
              </div>
            </div>
            <div className="nav_footer_container">
              <div className="footer_nav">
                <span>PRIVACY</span>
                <ul className="sub_footer">
                  <li><Link href="/your-privacy-choices" className="border_link inner_links">DO NOT SELL/ SHARE MY PERSONAL INFORMATION</Link></li>
                  <li><Link href="/privacy-policy" className="border_link inner_links">PRIVACY STATEMENT</Link></li>
                  <li><Link href="/pharmacovigilance" className="border_link inner_links">PHARMACOVIGILANCE PRIVACY STATEMENT</Link></li>
                  <li><Link href="/consumer-health" className="border_link inner_links">CONSUMER HEALTH DATA PRIVACY STATEMENT</Link></li>
                  <li><Link href="/notice" className="border_link inner_links">NOTICE AT COLLECTION</Link></li>
                </ul>
              </div>
              <div className="footer_nav">
                <span>LEGAL</span>
                <ul className="sub_footer">
                  <li><Link href="/images/terms-of-use-lupin-us-website.pdf" target="_blank" className="border_link inner_links">TERMS OF USE</Link></li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
      © 2025 Lupin Pharmaceuticals, Inc. All Rights Reserved.

      </div>
    </footer>
    
  );
};

export default Footer;
