"use client";
import React, { useState } from "react";
import Productlist from "../component/product/productlist";

export default function Filter() {
  const [selectedLetter, setSelectedLetter] = useState("");

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter); // Update the selected letter state
  };

  return (
    <section data-section="product_filter" className="product_filter">
      <div className="filter_container">
        <div className="product_search">
          <div className="subtitle_24">Search Product Catalog</div>
          <form action="">
            <input type="text" placeholder="PRODUCT NAME" />
            <input type="text" placeholder="BRAND NAME" />
            <input type="text" placeholder="NDC" />
            <button type="submit" className="product_btn black_cta">
              <div className="cta_container">
                <span>Submit</span>
                <img
                  src="assets/images/icons/white_arrow.webp"
                  alt=""
                  width="20"
                  height="14"
                />
              </div>
            </button>
            <a href="corporate.php" className="black_cta clear_btn">
              <div className="cta_container">
                <span>Clear</span>
                <img
                  src="assets/images/icons/white_arrow.webp"
                  alt=""
                  width="20"
                  height="14"
                />
              </div>
            </a>
          </form>
        </div>
        <div className="product_category">
          <div className="subtitle_24">Filter by Category</div>
          <div className="category_tab">
            <a href="" className="tab_link">
              ALL PRODUCTS
            </a>
            <a href="" className="tab_link">
              NEW PRODUCTS
            </a>
            <a href="" className="tab_link">
              INHALATIONS
            </a>
            <a href="" className="tab_link">
              INJECTABLES
            </a>
          </div>
        </div>
        <div className="product_letters">
          <div className="subtitle_24">Filter by Letters</div>
          <div className="product_keyboard">
            {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
              <button
                key={letter}
                type="button"
                className={`keyboard_btn ${
                  selectedLetter === letter ? "active" : ""
                }`}
                onClick={() => handleLetterClick(letter)}
              >
                <span>{letter}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product List */}
      {selectedLetter && <Productlist letter={selectedLetter} />}
    </section>
  );
}
