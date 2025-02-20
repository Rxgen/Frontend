"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Mainmenu = ({ menuActive, setMenuActive, setInnerMenuActive }) => {
  const [activeLink, setActiveLink] = useState("aboutUs");
  const [locked, setLocked] = useState(false); 
  const [delayed, setDelayed] = useState(false); 

  const closeMenu = () => {
    setMenuActive(false);
    setInnerMenuActive(false);
  };


  useEffect(() => {
    if (!menuActive) {
      const innerMenuElement = document.querySelector(".inner_menu");
      if (innerMenuElement) {
        innerMenuElement.classList.remove("active");
      }
    }
  }, [menuActive]);

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
    //setLocked(true); 
  };

  const handleSubmenuLeave = () => {
    
      
      setActiveLink(null); 
    
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
            <Link href="/about-us" className="link_item" onClick={closeMenu} >About Us</Link>
            <div
              className={`menu_sub_nav ${activeLink === "aboutUs" ? "active" : ""}`}
              onMouseEnter={handleSubmenuEnter} 
              onMouseLeave={handleSubmenuLeave} 
            >
              <div className={`sub_menu ${activeLink === "aboutUs" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="/corporate-overview" onClick={closeMenu} >Corporate Overview</Link></span>
                <span className="sub_menu_link"><Link href="/leadership" onClick={closeMenu}>Our Leadership</Link></span>
                <span className="sub_menu_link"><Link href="/our-history" onClick={closeMenu}>Our History</Link></span>
                <span className="sub_menu_link"><Link href="/core-value" onClick={closeMenu}>Our Values</Link></span>
                <span className="sub_menu_link"><Link href="/science-and-innovation" onClick={closeMenu}>Science & Innovation</Link></span>
                <span className="sub_menu_link"><Link href="/compliance-and-ethics" onClick={closeMenu}>Compliance & Ethics Program</Link></span>
              </div>
            </div>
          </span>

          {/* Our Impact Menu */}
          <span
            className={`nav_link ${activeLink === "ourImpact" ? "active" : ""}`}
            onMouseEnter={() => handleLinkEnter("ourImpact")}
            onMouseLeave={handleLinkLeave}
          >
            <Link href="/sustainability" className="link_item" onClick={closeMenu}>Our Impact</Link>
            <div
              className={`menu_sub_nav ${activeLink === "ourImpact" ? "active" : ""}`}
              onMouseEnter={handleSubmenuEnter} 
              onMouseLeave={handleSubmenuLeave} 
            >
              <div className={`sub_menu ${activeLink === "ourImpact" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="/sustainability" onClick={closeMenu}>Sustainability</Link></span>
              </div>
            </div>
          </span>

          {/* Our Offering Menu */}
          <span
            className={`nav_link ${activeLink === "ourOffering" ? "active" : ""}`}
            onMouseEnter={() => handleLinkEnter("ourOffering")}
            onMouseLeave={handleLinkLeave}
          >
            <Link href="/our-offering" className="link_item" onClick={closeMenu}>Our Offering</Link>
            <div
              className={`menu_sub_nav ${activeLink === "ourOffering" ? "active" : ""}`}
              onMouseEnter={handleSubmenuEnter} // Lock submenu on hover
              onMouseLeave={handleSubmenuLeave} // Unlock submenu on leave
            >
              <div className={`sub_menu ${activeLink === "ourOffering" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="/generics-complex-generics" onClick={closeMenu}>Generics & Complex Generics</Link></span>
                <span className="sub_menu_link"><Link href="/innovative-medicine" onClick={closeMenu}>Innovative Medicines</Link></span>
                <span className="sub_menu_link"><Link href="/products" onClick={closeMenu}>Our Products</Link></span>
              </div>
            </div>
          </span>

          {/* People Menu */}
          <span
            className={`nav_link ${activeLink === "people" ? "active" : ""}`}
            onMouseEnter={() => handleLinkEnter("people")}
            onMouseLeave={handleLinkLeave}
          >
            <Link href="/people" className="link_item" onClick={closeMenu}>People</Link>
            <div
              className={`menu_sub_nav ${activeLink === "people" ? "active" : ""}`}
              onMouseEnter={handleSubmenuEnter} 
              onMouseLeave={handleSubmenuLeave}
            >
              <div className={`sub_menu ${activeLink === "people" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="/our-culture" onClick={closeMenu}>Our Culture</Link></span>
                <span className="sub_menu_link"><Link href="/career" onClick={closeMenu}>Career</Link></span>
              </div>
            </div>
          </span>
          <span className="nav_link">
                    <Link href="/contact-us" className="link_item" onClick={closeMenu}> Contact Us </Link>
                </span>
                <div className="nav_social">
                    <Link href=""><Image src="/images/icons/linked_in_black.webp" alt="Linkdin profile" width="79" height="79" />
                    </Link>
                </div>
        </div>
        <Link href="" className="close_menu" onClick={closeMenu}>
            <Image src="/images/icons/close.webp" alt="Close" width="32" height="32"/> 
        </Link>
      </div>
    </div>
  );
};

export default Mainmenu;
