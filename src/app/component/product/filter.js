"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Filter({ selectedLetter,selectedCategory }) {
  const [brandName, setBrandName] = useState("");
  const [productName, setProductName] = useState("");
  const [ndc, setNdc] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // Handler for selecting a letter
  const handleLetterClick = (letter) => {
    router.push(`/products?letter=${letter}`);
  };

  // Handler for selecting a category
  const handleCategoryClick = (category) => {
    router.push(`/products?category=${category}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams();

    if (productName) queryParams.append("productName", productName);
    if (brandName) queryParams.append("brand", brandName);
    if (ndc) queryParams.append("ndc", ndc);

    const queryString = queryParams.toString();
    router.push(`/products?${queryString}`);
  };

  const handleClear = () => {
    setProductName("");
    setBrandName("");
    setNdc("");
    router.push("/products"); // Clear filters by navigating to base route
  }

  return (
    <section data-section="product_filter" className="product_filter">
      <div className="filter_container">
        {/* Product Search Form */}
        <div className="product_search">
          <div className="subtitle_24">Search Product Catalog</div>
          <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="PRODUCT NAME"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        
      />
      <input
        type="text"
        placeholder="BRAND NAME"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)} // Update state on input change
      />
      <input type="text" 
      placeholder="NDC"  
      value={ndc}
      onChange={(e) => setNdc(e.target.value)}
      />
      <button type="submit" className="product_btn black_cta">
        <div className="cta_container">
          <span>Submit</span>
          <img
            src="/images/icons/white_arrow.webp"
            alt=""
            width="20"
            height="14"
          />
        </div>
      </button>
      <button
        type="button"
        className="black_cta clear_btn"
        onClick={handleClear}
      >
        <div className="cta_container">
          <span>Clear</span>
          <img
            src="/images/icons/white_arrow.webp"
            alt=""
            width="20"
            height="14"
          />
        </div>
      </button>
    </form>
        </div>

        {/* Product Category Filter */}
        <div className="product_category">
          <div className="subtitle_24">Filter by Category</div>
          <div className="category_tab">
            <a
              href="#"
              className="tab_link"
              onClick={() => handleCategoryClick("ALL_PRODUCTS")}
            >
              ALL PRODUCTS
            </a>
            <a
              href="#"
              className="tab_link"
              onClick={() => handleCategoryClick("NEW_PRODUCTS")}
            >
              NEW PRODUCTS
            </a>
            <a
              href="#"
              className="tab_link"
              onClick={() => handleCategoryClick("INHALATIONS")}
            >
              INHALATIONS
            </a>
            <a
              href="#"
              className="tab_link"
              onClick={() => handleCategoryClick("INJECTABLES")}
            >
              INJECTABLES
            </a>
          </div>
        </div>

        {/* Product Letter Filter */}
        <div className="product_letters">
          <div className="subtitle_24">Filter by Letters</div>
          <div className="product_keyboard">
            {Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").map((letter) => (
              <button
                key={letter}
                type="button"
                className={`keyboard_btn ${selectedLetter === letter ? "active" : ""}`}
                onClick={() => handleLetterClick(letter)}
              >
                <span>{letter}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
