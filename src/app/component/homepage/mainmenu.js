"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Mainmenu = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [locked, setLocked] = useState(false); 
  const [delayed, setDelayed] = useState(false); 

  const handleLinkEnter = (linkId) => {
    setActiveLink(linkId); 
  };

  const handleLinkLeave = () => {
    setLocked(true); 
    setDelayed(true); 

    setTimeout(() => {
      setLocked(false); 
      setDelayed(false); 
    }, 200);
  };

  const handleSubmenuEnter = () => {
    setLocked(true); 
  };

  const handleSubmenuLeave = () => {
    if (!delayed) {
      setLocked(false);
      setActiveLink(null); 
    }
  };

  return (
    <div className="inner_menu_nav">
      <div className="menu_container">
        <div className="menu_nav_item">
          {/* About Us Menu */}
          <span
            className={`nav_link ${activeLink === "aboutUs" ? "active" : ""}`}
            onMouseEnter={() => handleLinkEnter("aboutUs")}
            onMouseLeave={handleLinkLeave}
          >
            <Link href="/about-us" className="link_item">About Us</Link>
            <div
              className={`menu_sub_nav ${activeLink === "aboutUs" ? "active" : ""}`}
              onMouseEnter={handleSubmenuEnter} 
              onMouseLeave={handleSubmenuLeave} 
            >
              <div className={`sub_menu ${activeLink === "aboutUs" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="/corporate-overview">Corporate Overview</Link></span>
                <span className="sub_menu_link"><Link href="/leadership">Our Leadership</Link></span>
                <span className="sub_menu_link"><Link href="/our-history">Our History</Link></span>
                <span className="sub_menu_link"><Link href="/core-values">Our Values</Link></span>
                <span className="sub_menu_link"><Link href="/science-and-innovation">Science & Innovation</Link></span>
                <span className="sub_menu_link"><Link href="/compliance-and-ethics">Compliance & Ethics Program</Link></span>
              </div>
            </div>
          </span>

          {/* Our Impact Menu */}
          <span
            className={`nav_link ${activeLink === "ourImpact" ? "active" : ""}`}
            onMouseEnter={() => handleLinkEnter("ourImpact")}
            onMouseLeave={handleLinkLeave}
          >
            <Link href="/sustainability" className="link_item">Our Impact</Link>
            <div
              className={`menu_sub_nav ${activeLink === "ourImpact" ? "active" : ""}`}
              onMouseEnter={handleSubmenuEnter} 
              onMouseLeave={handleSubmenuLeave} 
            >
              <div className={`sub_menu ${activeLink === "ourImpact" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="/sustainability">Sustainability</Link></span>
              </div>
            </div>
          </span>

          {/* Our Offering Menu */}
          <span
            className={`nav_link ${activeLink === "ourOffering" ? "active" : ""}`}
            onMouseEnter={() => handleLinkEnter("ourOffering")}
            onMouseLeave={handleLinkLeave}
          >
            <Link href="/our-offering" className="link_item">Our Offering</Link>
            <div
              className={`menu_sub_nav ${activeLink === "ourOffering" ? "active" : ""}`}
              onMouseEnter={handleSubmenuEnter} // Lock submenu on hover
              onMouseLeave={handleSubmenuLeave} // Unlock submenu on leave
            >
              <div className={`sub_menu ${activeLink === "ourOffering" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="/generic-medicine">Generic / Complex Generics</Link></span>
                <span className="sub_menu_link"><Link href="/innovative-medicine">Innovative Medicines</Link></span>
                <span className="sub_menu_link"><Link href="/products">Product</Link></span>
              </div>
            </div>
          </span>

          {/* People Menu */}
          <span
            className={`nav_link ${activeLink === "people" ? "active" : ""}`}
            onMouseEnter={() => handleLinkEnter("people")}
            onMouseLeave={handleLinkLeave}
          >
            <Link href="/people" className="link_item">People</Link>
            <div
              className={`menu_sub_nav ${activeLink === "people" ? "active" : ""}`}
              onMouseEnter={handleSubmenuEnter} 
              onMouseLeave={handleSubmenuLeave}
            >
              <div className={`sub_menu ${activeLink === "people" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="/our-culture">Our Culture</Link></span>
                <span className="sub_menu_link"><Link href="/career">Career</Link></span>
              </div>
            </div>
          </span>
          <span className="nav_link">
                    <Link href="/contact-us" className="link_item" >Contact Us </Link>
                </span>
                <div className="nav_social">
                    <Link href=""><Image src="/images/icons/linked_in_black.webp" alt="Linkdin profile" width="79" height="79" />
                    </Link>
                </div>
        </div>
        <a href="" className="close_menu">
            <Image src="/images/icons/close.webp" alt="Close" width="32" height="32"/> 
        </a>
      </div>
    </div>
  );
};

export default Mainmenu;
