"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mainmenu from "../homepage/mainmenu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [innerMenuActive, setInnerMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
    setInnerMenuActive(!innerMenuActive);
  };

  const handleMouseLeave = () => {
    setMenuActive(false);
    setInnerMenuActive(false);
  };

  return (
    <div>
      <header>
        <Link href="/" className="lupin_logo">
          <Image src="/images/lupin_logo.webp" alt="Lupin Logo" width={134} height={49} />
        </Link>

        <ul className="menu_list">
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/sustainability">Our Impact</Link></li>
          <li><Link href="/our-offering">Our Offerings</Link></li>
          <li><Link href="/people">People</Link></li>
        </ul>

        <div className="menu_icons">
          <Link href="/" className="language_icon">
            <Image src="/images/icons/language.webp" alt="Language Icon" width={32} height={32} />
          </Link>
        </div>
      </header>

      
      <Link
        href="#"
        className={`menu ${menuActive ? 'active' : ''}`}
        onClick={handleMenuClick}
      >
        <div className="menu_icon">
          <span className="span_menu"></span>
          <span className="span_menu bottom_span_menu"></span>
        </div>
        <span className="menu_text">{menuActive ? 'Close' : 'Menu'}</span>
      </Link>

      
      <div
        className={`inner_menu ${innerMenuActive ? 'active' : ''}`}
        onMouseLeave={handleMouseLeave} 
      >
        <Mainmenu />
      </div>
    </div>
  );
};

export default Header;
