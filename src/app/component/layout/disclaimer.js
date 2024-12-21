"use client";
import Image from "next/image";
import Link from "next/link";


export default function DisclaimerPopup({ isDisclaimerOpen, closePopup }) {
    return (
<div id="disclaimer_popup" className={`guide_popup disclaimer_popup ${isDisclaimerOpen ? "active" : ""}`}>
  <div className="popup_content">
    <div className="guide_container">
      <Link href="" className="close_btn" onClick={(e) => { 
    e.preventDefault(); 
    closePopup(); 
   }}>
        <Image src="/images/icons/close_popup.webp" alt="Close Popup" width={14} height={14} />
        <span>Close</span>
      </Link>
      <div className="disclaimer_title">DISCLAIMER</div>
      <div className="disclaimer_para">
        Information provided on this site is intended for use only by residents of the United States. 
        The products discussed herein are available only upon prescription from a medical doctor or a 
        qualified medical professional. Consumers should not construe any information herein as medical 
        advice or as a substitute for discussions with a prescribing practitioner or other qualified medical 
        professional. Reader understands and agrees to the foregoing.
      </div>
    </div>
    <Image src="/images/guide_bg.webp" alt="Guide-bg" className="guide_bg" width={1574} height={658} />
  </div>
</div>
    )
}