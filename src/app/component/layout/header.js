"use client";
import { useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import Mainmenu from "../homepage/mainmenu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [innerMenuActive, setInnerMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false); 


  useEffect(() => {
    const adjustInnerMenuHeight = () => {
      const bannerElement = document.querySelector(".banner_section");
      const innerMenuElement = document.querySelector(".inner_menu");

      if (bannerElement && innerMenuElement) {
        const bannerHeight = bannerElement.offsetHeight;
        const vwRatio = bannerHeight / window.innerWidth;
        innerMenuElement.style.height = `${vwRatio * 100}vw`;
        if (innerMenuElement.offsetHeight < window.innerWidth * 0.45) {
          innerMenuElement.classList.add("internal_menu");
        } else {
          innerMenuElement.classList.remove("internal_menu");
        }
      }
    };


    adjustInnerMenuHeight();
    window.addEventListener("resize", adjustInnerMenuHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", adjustInnerMenuHeight);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 180) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

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
      <header className={scrolled ? "header_bg" : ""}>
        <Link href="/" className="lupin_logo">
          <Image src="/images/lupin_logo.webp" alt="Lupin Logo" width={134} height={49} />
        </Link>

        <ul className="menu_list">
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/sustainability">Our Impact</Link></li>
          <li><Link href="/our-offerings">Our Offerings</Link></li>
          <li><Link href="/our-people">Our People</Link></li>
        </ul>

        <div className="menu_icons">
        <div className="language_icon">
  <Image src="/images/icons/language.webp" alt="Language" width={32} height={32} />
  <ul className="global_links">
    <li>
      <Link href="https://www.lupin.com/" target="_blank" className="global_link">
        <Image src="/images/globe/img_1.webp" alt="Corporate" width={38} height={26} />
        <span>Corporate</span>
      </Link>
    </li>
    <li>
      <Link href="https://www.lupinpharma.ca/" target="_blank" className="global_link">
        <Image src="/images/globe/img_11.webp" alt="CA - Lupin Pharma Canada" width={38} height={26} />
        <span>CA - Lupin Pharma Canada</span>
      </Link>
    </li>
    <li>
      <Link href="https://generichealth.com.au/" target="_blank" className="global_link">
        <Image src="/images/globe/img_5.webp" alt="AU - Generic Health" width={38} height={26} />
        <span>AU - Generic Health</span>
      </Link>
    </li>
    <li>
      <Link href="https://lupin-neurosciences.com/our-world/" target="_blank" className="global_link">
        <Image src="/images/globe/img_2_new.webp" alt="CH - LAHSA" width={38} height={26} />
        <span>CH - LAHSA</span>
      </Link>
    </li>
    <li>
      <Link href="https://www.hormosan.com/" target="_blank" className="global_link">
        <Image src="/images/globe/img_7.webp" alt="GE - Hormoson" width={38} height={26} />
        <span>GE - Hormoson</span>
      </Link>
    </li>
    <li>
      <Link href="https://www.mydynamics.co.za/" target="_blank" className="global_link">
        <Image src="/images/globe/img_8.webp" alt="NL - Nanomi" width={38} height={26} />
        <span>NL - Nanomi</span>
      </Link>
    </li>
    <li>
      <Link href="https://www.nanomi.com/" target="_blank" className="global_link">
        <Image src="/images/globe/img_4.webp" alt="SA - Pharma Dynamics" width={38} height={26} />
        <span>SA - Pharma Dynamics</span>
      </Link>
    </li>
    <li>
      <Link href="https://www.lupinhealthcare.co.uk/" target="_blank" className="global_link">
        <Image src="/images/globe/img_3.webp" alt="UK - Lupin Healthcare" width={38} height={26} />
        <span>UK - Lupin Healthcare</span>
      </Link>
    </li>
    <li>
      <Link href="https://www.multicare.com.ph/" target="_blank" className="global_link">
        <Image src="/images/globe/img_6.webp" alt="PH - Multicare" width={38} height={26} />
        <span>PH - Multicare</span>
      </Link>
    </li>
    <li>
      <Link href="https://medquimica.ind.br/en/" target="_blank" className="global_link">
        <Image src="/images/globe/img_10.webp" alt="BR - MedQuimica" width={38} height={26} />
        <span>BR - MedQuimica</span>
      </Link>
    </li>
    <li>
      <Link href="https://laboratoriosgrin.com/" target="_blank" className="global_link">
        <Image src="/images/globe/img_9.webp" alt="MX - Laboratorios Grin" width={38} height={26} />
        <span>MX - Laboratorios Grin</span>
      </Link>
    </li>
  </ul>
</div>

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
        <Mainmenu
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          setInnerMenuActive={setInnerMenuActive}
        />
      </div>
    </div>
  );
};

export default Header;
