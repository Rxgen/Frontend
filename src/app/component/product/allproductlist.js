"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Filter from "../component/product/filter";

export default function Products({ productdata = [] }) {
    
  const [products, setProducts] = useState(productdata); // Set initial products
  const [filteredProducts, setFilteredProducts] = useState(productdata); // For filtered results
  const [loading, setLoading] = useState(false);

  // Update products list based on filter
  const handleFilter = (filterData) => {
    setLoading(true);
    setFilteredProducts(filterData); // Set filtered data
    setLoading(false);
  };

  return (
    <div>
      {/* Filter Component */}
      <Filter onFilter={handleFilter} allProducts={products} />

      <section
        data-section="product_listing"
        className="product_listing"
        id="product_listing"
      >
        {/* Loading State */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {/* Product Listing */}
            <div className="product_nav">
              <div className="product_text">
                <span id="product_number" className="product_number">
                  {filteredProducts.length}
                </span>{" "}
                ITEMS FOUND
              </div>
              {/* Grid and Category Options */}
              <div className="product_grid">
                <div className="grid_text">GRID</div>
                <button className="grid_button two_grid active">
                  <img
                    src="assets/images/icons/grid_1.webp"
                    alt=""
                    width="16"
                    height="16"
                  />
                </button>
                <button className="grid_button three_grid">
                  <img
                    src="assets/images/icons/grid_2.webp"
                    alt=""
                    width="25"
                    height="16"
                  />
                </button>
              </div>
              <div className="product_select">
                <select name="" id="">
                  <option value="">ANTI-INFLAMMATORY</option>
                  <option value="">ANTI-INFLAMMATORY</option>
                  <option value="">ANTI-INFLAMMATORY</option>
                </select>
              </div>
            </div>

            {/* Product Items */}
            <div className="product_item_container">
              {filteredProducts.map((product) => {
                const imageUrl = product.product_images?.[0]?.id
                  ? `https://lupinus-cms.devmaffia.in/uploads/product_${product.product_images[0].id}.webp`
                  : "assets/images/placeholder.webp"; // Fallback image

                return (
                  <div className="product_item" key={product.id}>
                    <div className="product_box">
                      <img
                        src={imageUrl}
                        alt={product.product_name.trim()}
                        width="543"
                        height="460"
                      />
                      <Link
                        href={`/products/${product.slug}`}
                        className="view_cta"
                      >
                        VIEW MORE
                      </Link>
                    </div>
                    <div className="product_detail">
                      <div className="subtitle_35">
                        {product.product_name.trim()}
                      </div>
                      <div className="product_pdf">
                        {product.pdf_files.map((pdf) =>
                          pdf.boolean ? (
                            <a
                              href={`https://lupinus-cms.devmaffia.in/uploads/${pdf.name
                                .toLowerCase()
                                .replace(/ /g, "_")}.pdf`}
                              key={pdf.id}
                              className="pdf_link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {pdf.name.toUpperCase()}
                            </a>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
