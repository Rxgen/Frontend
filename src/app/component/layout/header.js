 "use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Mainmenu from "../homepage/mainmenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [isMenuOpen]); 

  return (
    <div>
      <header>
        <a href="/" className="lupin_logo">
          <Image src="/images/lupin_logo.webp" alt="Lupin Logo" width={134} height={49} />
        </a>

        <ul className="menu_list">
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/our-impact">Our Impact</Link></li>
          <li><Link href="/our-offering">Our Offerings</Link></li>
          <li><Link href="/people">People</Link></li>
        </ul>

        <div className="menu_icons">
          <a href="/" className="language_icon">
            <Image src="/images/icons/language.webp" alt="Language Icon" width={32} height={32} />
          </a>
        </div>
      </header>

      {/* Menu Toggle Button */}
      <a href="#" className={ `menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
     
        <div className="menu_icon">
          <span className="span_menu"></span>
          <span className="span_menu bottom_span_menu"></span>
        </div>
        <span className="menu_text">{isMenuOpen ? 'Close' : 'Menu'}</span>
      </a>

      { <Mainmenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />}
    </div>
  );
};

export default Header;
