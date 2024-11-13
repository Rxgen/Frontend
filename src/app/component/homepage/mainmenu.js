    "use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Mainmenu = ({ isMenuOpen, toggleMenu }) => {
  const [activeLink, setActiveLink] = useState(1); // Controls active submenu on hover

  return (
    <div className={`inner_menu ${isMenuOpen ? "active" : ""}`}>
      <div className="inner_menu_nav">
        <div className="menu_nav_item">
          <span
            className={`nav_link ${activeLink === 1 ? "active" : ""}`}
            data-link="1"
            onMouseEnter={() => setActiveLink(1)}
          >
            <a href="#" className="link_item">About Us</a>
          </span>
          <span
            className={`nav_link ${activeLink === 2 ? "active" : ""}`}
            data-link="2"
            onMouseEnter={() => setActiveLink(2)}
          >
            <a href="#" className="link_item">Our Impact</a>
          </span>
          <span
            className={`nav_link ${activeLink === 3 ? "active" : ""}`}
            data-link="3"
            onMouseEnter={() => setActiveLink(3)}
          >
            <a href="#" className="link_item">Our Offering</a>
          </span>
          <span
            className={`nav_link ${activeLink === 4 ? "active" : ""}`}
            data-link="4"
            onMouseEnter={() => setActiveLink(4)}
          >
            <a href="#" className="link_item">People</a>
          </span>
        </div>

        {/* Sub-menus based on activeLink */}
        <div className="menu_sub_nav">
          <div className={`sub_menu ${activeLink === 1 ? "active" : ""}`} id="link-1">
            <span className="sub_menu_link"><a href="#">Corporate Overview</a></span>
            <span className="sub_menu_link"><a href="#">Our Leadership</a></span>
            <span className="sub_menu_link"><a href="#">Our History</a></span>
            <span className="sub_menu_link"><a href="#">Our Values</a></span>
            <span className="sub_menu_link"><a href="#">Science & Innovation</a></span>
            <span className="sub_menu_link"><a href="#">Compliance & Ethics Program</a></span>
            <span className="sub_menu_link"><a href="#">Declaration of Compliance</a></span>
          </div>
          <div className={`sub_menu ${activeLink === 2 ? "active" : ""}`} id="link-2">
            <span className="sub_menu_link"><a href="#">Sustainability</a></span>
          </div>
          <div className={`sub_menu ${activeLink === 3 ? "active" : ""}`} id="link-3">
            <span className="sub_menu_link"><a href="#">Generic / Complex Generics</a></span>
            <span className="sub_menu_link"><a href="#">Innovative Medicines</a></span>
            <span className="sub_menu_link"><a href="#">Product Listing</a></span>
            <span className="sub_menu_link"><a href="#">Product Detail</a></span>
          </div>
          <div className={`sub_menu ${activeLink === 4 ? "active" : ""}`} id="link-4">
            <span className="sub_menu_link"><a href="#">Our Culture</a></span>
            <span className="sub_menu_link"><a href="#">Career</a></span>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="nav_social">
        <a href="#"><img src="/images/icons/linked_in_black.webp" alt="LinkedIn" width="57" height="57" /></a>
        <a href="#"><img src="/images/icons/twitter_black.webp" alt="Twitter" width="57" height="57" /></a>
      </div>
    </div>
  );
};

export default Mainmenu;

