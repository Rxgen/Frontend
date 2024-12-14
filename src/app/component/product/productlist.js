"use client";

import { useState, useLayoutEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Products({ productdata = [], totalPages, currentPage }) {
  const [products, setProducts] = useState(productdata);
  const [isActive, setIsActive] = useState(false); 
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  //const [filteredProducts, setFilteredProducts] = useState(productdata); // Filtered products
  const [loading, setLoading] = useState(false);
  const [gridView, setGridView] = useState("two_grid"); 
  const router = useRouter();

  useLayoutEffect(() => {
    // Ensure that the element exists before trying to scroll
    const productListSection = document.getElementById("product_listing");
    if (productListSection) {
      productListSection.scrollIntoView({
        behavior: "smooth", // Adds smooth scrolling
        block: "start", // Scrolls to the top of the section
      });
    }
  }, [router.pathname]);

  const handleToggle = () => {
    setIsActive(true); // Show dropdown
};

const handleMouseLeave = () => {
    setIsActive(false); // Hide dropdown
};

  const handlePageChange = (page) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.location.search = params.toString(); 
  };

  const CategoryClick = (category) => {
    setSelectedCategory(category); 
    setIsActive(false);
    router.push(`/products?category=${category}`); 
};

  console.log("Products data ", productdata);
  console.log("length",productdata.length);

  const getMediaUrl = (url) => {
    return `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  };

  const handleGridView = (viewType) => {
    setGridView(viewType);
  };


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
          {productdata.length * totalPages}
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
            <Image
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
            <Image
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
            <Image
              src="/images/icons/grid_2.webp"
              alt="Three Grid View"
              width="25"
              height="16"
            />
          </button>
        </div>

        {/* Category Filter */}
        <div className="product_select">
    <div className="select_detail" onClick={handleToggle} >{selectedCategory}</div>
    <ul className={`select_box ${isActive ? "active" : ""}`} onMouseLeave={handleMouseLeave}>
    {productdata.map((product) =>
                        product.category?.name ? (
                            <li
                                key={product.category.id}
                                onClick={() => CategoryClick(product.category.name)}
                            >
                                {product.category.name}
                            </li>
                        ) : null
                    )}
    </ul>
</div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* Check if there are no filtered products */}
          {productdata.length === 0 ? (
            <div>
            <section
              data-section="product_listing"
              className="product_listing"
              id="product_listing"
            >
              <div className="no_products_found">
                No products found
              </div>
            </section>
          </div>
          ) : (
            <>
              {/* Product Items */}
              <div className={`product_item_container ${
          gridView === "three_grid" ? "active" : " "
        } ${gridView}`}>
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
                        <Image
                          src={imageUrl}
                          alt={product_name.trim() || "Product image"}
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
                         pdf.pdf && pdf.pdf.url ? (
                        <a
                            key={pdf.id}
                            href={getMediaUrl(pdf.pdf.url)} 
                            className="pdf_link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {pdf.name}
                          </a>
                        ) : (
                          <span key={pdf.id}>No PDF available</span> // Show message when no PDF is available
                        )
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
      <div className="product_pagination">
 
  <button type="button" className="keyboard_btn product_prev"
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
    <Image src="/images/icons/green_arrow.webp" alt="Green Arrow" width={8} height={13} />
  </button>
  {[...Array(totalPages)].map((_, index) => {
    const page = index + 1;
    return (
      <button
        key={page}
        type="button"
        onClick={() => handlePageChange(page)}
        className="pagination_number" 
        disabled={currentPage === page}
      >
        <span>{page}</span>
      </button>
    );
  })}

  {/* Next Button */}
  <button type="button" className="keyboard_btn product_next"
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
   <Image src="/images/icons/green_arrow.webp" alt="Green Arrow for pagination" width={8} height={13} />
  </button>
</div>
</section>
    
  );
}


