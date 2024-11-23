"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Products({ productdata = [], totalPages, currentPage }) {
  // Initialize state
  const [products, setProducts] = useState(productdata); // Initial products from props
  //const [filteredProducts, setFilteredProducts] = useState(productdata); // Filtered products
  const [loading, setLoading] = useState(false);
  const [gridView, setGridView] = useState("two_grid"); // Default grid view is 2-grid

  const handlePageChange = (page) => {
    // Update the page in the URL (for server-side fetching)
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.location.search = params.toString(); // This triggers a page reload with updated searchParams
  };

  console.log("Products data ", productdata);
  console.log("length",productdata.length);

  
  


  // Helper function to construct full media URL
  const getMediaUrl = (url) => {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
  };

  // Handle filtering (placeholder for future filter logic)
  

  // Handle grid view toggle
  const handleGridView = (viewType) => {
    setGridView(viewType);
  };

  if (productdata.length === 0) {
    return (
      <div>
        <section
          data-section="product_listing"
          className="product_listing"
          id="product_listing"
        >
          <div className="no_products_found">
            <h2>No products found</h2>
          </div>
        </section>
      </div>
    );
  }

  return (
    <section
      data-section="product_listing"
      className="product_listing"
      id="product_listing"
    >
      {/* Product Navigation */}
      <div className="product_nav">
        <div className="product_text">
          <span id="product_number" className="product_number">
            {productdata.length}
          </span>{" "}
          ITEMS FOUND
        </div>

        {/* Grid View Options */}
        <div className="product_grid">
          <div className="grid_text">GRID</div>
          <button
            className={`grid_button one_grid ${gridView === "one_grid" ? "active" : ""}`}
            onClick={() => handleGridView("one_grid")}
          >
            <img
              src="/images/icons/grid_3.webp"
              alt="One Grid View"
              width="7"
              height="16"
            />
          </button>
          <button
            className={`grid_button two_grid ${gridView === "two_grid" ? "active" : ""}`}
            onClick={() => handleGridView("two_grid")}
          >
            <img
              src="/images/icons/grid_1.webp"
              alt="Two Grid View"
              width="16"
              height="16"
            />
          </button>
          <button
            className={`grid_button three_grid ${gridView === "three_grid" ? "active" : ""}`}
            onClick={() => handleGridView("three_grid")}
          >
            <img
              src="/images/icons/grid_2.webp"
              alt="Three Grid View"
              width="25"
              height="16"
            />
          </button>
        </div>

        {/* Category Filter */}
        <div className="product_select">
          <select name="category" id="category-select">
            <option value="">Select Category</option>
            {productdata.map((product) =>
              product.category?.name ? (
                <option key={product.category.id} value={product.category.name}>
                  {product.category.name}
                </option>
              ) : null
            )}
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* Check if there are no filtered products */}
          {productdata.length === 0 ? (
            <div className="no_products_found">
              <h2>No products found</h2>
            </div>
          ) : (
            <>
              {/* Product Items */}
              <div className={`product_item_container ${gridView}`}>
                {productdata.map((product) => {
                  // Safe access for product fields
                  const {
                    id,
                    product_name = "Unnamed Product",
                    slug = "#",
                    pdf_files = [],
                    product_images = [],
                  } = product;

                  // Get image URL or fallback image
                  const imageUrl =
                    product_images[0]?.slide?.url
                      ? getMediaUrl(product_images[0].slide.url)
                      : "/assets/images/placeholder.webp"; // Fallback image

                  return (
                    <div className="product_item" key={id}>
                      {/* Product Image */}
                      <div className="product_box">
                        <img
                          src={imageUrl}
                          alt={product_name.trim()}
                          width="543"
                          height="460"
                        />
                        <Link href={`/products/${slug}`} className="view_cta">
                          VIEW MORE
                        </Link>
                      </div>

                      {/* Product Name */}
                      <div className="product_detail">
                        <div className="subtitle_35">{product_name.trim()}</div>

                        {/* PDF Files */}
                        <div className="product_pdf">
                          {pdf_files.map((pdf) =>
                            pdf.boolean ? (
                              <a
                                key={pdf.id}
                                href={getMediaUrl(pdf.pdf.url)} 
                                className="pdf_link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {pdf.name}
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
        </>
      )}
      <div className="pagination">
  {/* Previous Button */}
  <button type="button" className="keyboard_btn"
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous
  </button>

  {/* Numbered Page Links */}
  {[...Array(totalPages)].map((_, index) => {
    const page = index + 1;
    return (
      <button
        key={page}
        type="button"
        onClick={() => handlePageChange(page)}
        className="keyboard_btn" 
        disabled={currentPage === page}
      >
        {page}
      </button>
    );
  })}

  {/* Next Button */}
  <button type="button"
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>


    </section>
    
  );
}


