"use client"; 
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function TermsPopup() {
    const [isActive, setIsActive] = useState(true); 
   
  const handlePopupClick = (e) => {
    e.preventDefault(); 
    setIsActive(false); 
    
  };
  return (
    <div id="terms_popup" className={`guide_popup disclaimer_popup terms_popup ${isActive ? "active" : ""}`}>
  <div className="popup_content">
    <div className="guide_container">
      <div className="subtitle_30">We have updated our terms.</div>
      <div className="disclaimer_para">
      We encourage you to review our updated <Link href="/images/terms-of-use-lupin-us-website.pdf" target="_blank">Terms of Use.</Link> <br />By continuing, you agree to the updated Terms listed here.
      </div>
      <div className="product_pdf">
        <Link href="/" className="pdf_link" onClick={handlePopupClick}>Continue</Link>
      </div>
    </div>
    <Image src="/images/guide_bg.webp" alt="Guide " className="guide_bg" width="1574" height="658" />
    
  </div>
</div>
  );
}

