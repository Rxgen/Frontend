
"use client";
import Link  from "next/link";
import Image from "next/image";



const Footer = ({}) => {
    return (
      <footer>
      <Image src="/images/flower_bg_footer.webp" alt="" className="flower_bg_footer" width="893" height="914" />
      <a href="#home_banner" className="up_arrow"><Image src="/images/icons/chervon_up.webp" alt="" width="37" height="37" />
      </a>
      <div className="footer_container">
          <a href="" className="lupin_footer_logo">
              <Image src="/images/lupin_logo.webp" alt="" width="134" height="49" />
              </a>
          
          <div className="lupin_footer_container">
              <div className="lupin_address">
                  <address>
                      Harborplace Tower 111 S.
                      Calvert Street, 21 st Floor,
                      Baltimore, MD 21202
                  </address>
                  <div className="lupin_contact">
                      <span>
                          <a href="tel:+8665874617" className="border_link">866-587-4617 </a>
                      </span>
                      <span>
                          <a href="mailto:CustomerService-lpi@lupin.com" className="border_link">CustomerService-lpi@lupin.com </a>
                      </span>
                      <span>
                          <a href="mailto:dsrm@lupin.com" className="border_link">dsrm@lupin.com </a>
                      </span>
                  </div>
                  <a href="" className="linked_in"><Image src="/images/icons/linked_in.webp" alt="" width="94" height="94" /> </a>
              </div>
              <div className="lupin_footer_navigation">
                  <div className="footer_nav">
                  <span>
        <Link href="/about-us" >
         ABOUT US
        </Link>
      </span>
      <span>
        <Link href="/patient-education" className="border_link">
          PATIENT EDUCATION
        </Link>
      </span>
      <span>
        <Link href="/specialty" className="border_link">
          SPECIALTY
        </Link>
      </span>
      <span>
        <Link href="/generics" className="border_link">
          GENERICS
        </Link>
      </span>
      <span>
        <Link href="/medical-affairs" className="border_link">
          MEDICAL AFFAIRS
        </Link>
      </span>
      <span>
        <Link href="/product-development" className="border_link">
          PRODUCT DEVELOPMENT
        </Link>
      </span>
      <span>
        <Link href="/life-at-lupin">
          LIFE AT LUPIN
        </Link>
      </span>
                  </div>
                  <div className="footer_nav">
                  <span>
        <Link href="/resources" className="border_link">
          RESOURCES
        </Link>
      </span>
      <span>
        <Link href="/people" className="border_link">
          PEOPLE
        </Link>
      </span>
      <span>
        <Link href="/media" className="border_link">
          MEDIA
        </Link>
      </span>
      <span>
        <Link href="/articles" className="border_link">
          ARTICLES
        </Link>
      </span>
      <span>
        <Link href="/privacy-policy" className="border_link">
          PRIVACY POLICY
        </Link>
      </span>
      <span>
        <Link href="/important-notice" className="border_link">
          IMPORTANT NOTICE
        </Link>
      </span>
      <span>
        <Link href="/product-development" className="border_link">
          PRODUCT DEVELOPMENT
        </Link>
      </span>
                  </div>
                  <div className="footer_nav">
                  <span>
        <Link href="/do-not-sell-share-my-personal-information" className="border_link">
          DO NOT SELL/SHARE MY PERSONAL INFORMATION
        </Link>
      </span>
      <span>
        <Link href="/privacy" className="border_link">
          PRIVACY
        </Link>
      </span>
      <span>
        <Link href="/pharmacovigilance" className="border_link">
          PHARMACOVIGILANCE
        </Link>
      </span>
      <span>
        <Link href="/consumer-health-privacy-statement" className="border_link">
          CONSUMER HEALTH PRIVACY STATEMENT
        </Link>
      </span>
      <span>
        <Link href="/disclaimer" className="border_link">
          DISCLAIMER
        </Link>
      </span>
      <span>
        <Link href="/sitemap" className="border_link">
          SITEMAP
        </Link>
      </span>
      <span>
        <Link href="/notice-at-collection" className="border_link">
          NOTICE AT COLLECTION
        </Link>
      </span>
                  </div>
              </div>
          </div>
      </div>
      <div className="copyright">Copywrite @ 2024 Lupin Phamaceuticals„ All Rights Reserved.</div>
  </footer>
    );
  };
  
  export default Footer;