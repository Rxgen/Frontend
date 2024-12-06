"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Mainmenu = ({ isMenuOpen, toggleMenu }) => {
  
  const [activeLink, setActiveLink] = useState(null);
  const handleMouseEnter = (linkIndex) => {
    setActiveLink(linkIndex);
  };

  

  return (
    <div className={`inner_menu ${isMenuOpen ? "active" : ""}`}>
      <div className="inner_menu_nav">
        <div className="menu_nav_item">
          <span
            className={`nav_link ${activeLink === 1 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(1)}
            
          >
            <Link href="#" className="link_item">About Us</Link>
            <div className="menu_sub_nav">
              <div className={`sub_menu ${activeLink === 1 ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="/corporate-overview">Corporate Overview</Link></span>
                <span className="sub_menu_link"><Link href="/leadership">Our Leadership</Link></span>
                <span className="sub_menu_link"><Link href="#">Our History</Link></span>
                <span className="sub_menu_link"><Link href="/core-value" >Our Values</Link></span>
                <span className="sub_menu_link"><Link href="/science-and-innovation" >Science & Innovation</Link></span>
                <span className="sub_menu_link"><Link href="#">Compliance & Ethics Program</Link></span>
              </div>
            </div>
          </span>

          <span
            className={`nav_link ${activeLink === 2 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(2)}
            
          >
            <Link href="#" className="link_item">Our Impact</Link>
            <div className="menu_sub_nav">
              <div className={`sub_menu ${activeLink === 1 ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="/sustainability">Sustainability</Link></span>
              </div>
            </div>
          </span>

          <span
            className={`nav_link ${activeLink === 3 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(3)}
           
          >
            <Link href="#" className="link_item">Our Offering</Link>
            <div className="menu_sub_nav">
              <div className={`sub_menu ${activeLink === 1 ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="/generic-medicine" >Generic / Complex Generics</Link></span>
                <span className="sub_menu_link"><Link href="/innovative-medicine" >Innovative Medicines</Link></span>
                <span className="sub_menu_link"><Link href="/products" >Product Listing</Link></span>
                <span className="sub_menu_link"><Link href="/products">Product Detail</Link></span>
              </div>
            </div>
          </span>

          <span
            className={`nav_link ${activeLink === 4 ? "active" : ""}`}
            onMouseEnter={() => handleMouseEnter(4)}
            
          >
            <Link href="#" className="link_item">People</Link>
            <div className="menu_sub_nav">
              <div className={`sub_menu ${activeLink === 1 ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="#" >Our Culture</Link></span>
                <span className="sub_menu_link"><Link href="/career" >Career</Link></span>
              </div>
            </div>
          </span>
        </div>

        {/* Social Links */}
        <div className="nav_social">
        <Link href="/linkdin">
           <Image 
              src="/images/icons/linked_in_black.webp" 
              alt="LinkedIn" 
              width={79} 
              height={79} 
           />
      </Link>
    </div>
      </div>
    </div>
  );
};

export default Mainmenu;


