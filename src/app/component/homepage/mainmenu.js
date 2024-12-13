"use client";
import { useState } from "react";
import Link from "next/link";

const Mainmenu = () => {
  const [activeLink, setActiveLink] = useState(null);

  
  const handleLinkEnter = (linkId) => {
    setActiveLink(linkId); 
  };

  
  const handleLinkLeave = () => {
    setActiveLink(null);
  };

  return (
    <div className="inner_menu_nav">
      <div className="menu_container">
        <div className="menu_nav_item">
          <span
            className={`nav_link ${activeLink === "aboutUs" ? "active" : ""}`}
            onMouseEnter={() => handleLinkEnter("aboutUs")}
            onMouseLeave={handleLinkLeave}
          >
            <Link href="about.php" className="link_item">About Us</Link>
            <div className="menu_sub_nav">
              <div className={`sub_menu ${activeLink === "aboutUs" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="corporate.php">Corporate Overview</Link></span>
                <span className="sub_menu_link"><Link href="leadership.php">Our Leadership</Link></span>
                <span className="sub_menu_link"><Link href="our-history.php">Our History</Link></span>
                <span className="sub_menu_link"><Link href="core-values.php">Our Values</Link></span>
                <span className="sub_menu_link"><Link href="science-and-innovation.php">Science & Innovation</Link></span>
                <span className="sub_menu_link"><Link href="">Compliance & Ethics Program</Link></span>
              </div>
            </div>
          </span>
          <span
            className={`nav_link ${activeLink === "ourImpact" ? "active" : ""}`}
            onMouseEnter={() => handleLinkEnter("ourImpact")}
            onMouseLeave={handleLinkLeave}
          >
            <Link href="sustainability.php" className="link_item">Our Impact</Link>
            <div className="menu_sub_nav">
              <div className={`sub_menu ${activeLink === "ourImpact" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="sustainability.php">Sustainability</Link></span>
              </div>
            </div>
          </span>

          <span
            className={`nav_link ${activeLink === "ourOffering" ? "active" : ""}`}
            onMouseEnter={() => handleLinkEnter("ourOffering")}
            onMouseLeave={handleLinkLeave}
          >
            <Link href="our-offering.php" className="link_item">Our Offering</Link>
            <div className="menu_sub_nav">
              <div className={`sub_menu ${activeLink === "ourOffering" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="generic-medicine.php">Generic / Complex Generics</Link></span>
                <span className="sub_menu_link"><Link href="innovative-medicine.php">Innovative Medicines</Link></span>
                <span className="sub_menu_link"><Link href="product-listing.php">Product</Link></span>
              </div>
            </div>
          </span>
          
          <span
            className={`nav_link ${activeLink === "people" ? "active" : ""}`}
            onMouseEnter={() => handleLinkEnter("people")}
            onMouseLeave={handleLinkLeave}
          >
            <Link href="people.php" className="link_item">People</Link>
            <div className="menu_sub_nav">
              <div className={`sub_menu ${activeLink === "people" ? "active" : ""}`}>
                <span className="sub_menu_link"><Link href="our-culture.php">Our Culture</Link></span>
                <span className="sub_menu_link"><Link href="career.php">Career</Link></span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Mainmenu;
