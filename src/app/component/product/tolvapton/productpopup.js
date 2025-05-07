"use client";
import Link from "next/link";

export default function ProductPopup({ isActive, onAccept , onReject}) {
  return (
    <div
      id="product_popup"
      className={`guide_popup disclaimer_popup  ${isActive ? "active" : ""}`}
    >
      <div className="popup_content">
        <div className="guide_container">
          <div className="subtitle_20 txt_center">
            This webpage is intended for U.S. Healthcare <br />
            Professionals. Please confirm:
          </div>
          <div className="product_pdf w100">
            <Link href="#" className="green_cta" onClick={onAccept}>
              I am healthcare professional
            </Link>
          </div>
          <div className="product_pdf w100">
            <Link href="#" className="black_cta" onClick={onReject}>I am not healthcare professional</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


