import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function Products({ productdata = [], totalPages, currentPage, totalproduct }) {
  const [gridView, setGridView] = useState("two_grid"); // Default grid view
  const router = useRouter();

  // Step 1: Use `localStorage` to set the grid view on page load
  useEffect(() => {
    // On initial load, retrieve the grid view from `localStorage`
    const storedGridView = localStorage.getItem('gridView');
    if (storedGridView) {
      setGridView(storedGridView); // If available, use the saved grid view
    } else {
      setGridView("two_grid"); // Default grid view
    }
  }, []); // This only runs once on mount

  // Step 2: Handle grid view change and persist it in `localStorage`
  const handleGridView = (viewType) => {
    setGridView(viewType); // Update the grid view state
    localStorage.setItem('gridView', viewType); // Persist the grid view in localStorage

    // Update the URL query parameters for grid view and current page
    const params = new URLSearchParams(window.location.search);
    params.set("grid", viewType); // Persist grid view
    params.set("page", currentPage); // Keep the current page
    window.history.replaceState(null, '', `?${params.toString()}`); // Update the URL without reloading the page
  };

  // Step 3: Handle page change and ensure grid view is maintained
  const handlePageChange = (page) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page); // Update the page number
    params.set("grid", gridView); // Keep the current grid view
    window.location.search = params.toString(); // Update the URL and reload the page
  };

  return (
    <div>
      {/* Product View Toggle */}
      <div className="product_grid">
        <button
          className={`grid_text two_grid ${gridView === "two_grid" ? "active" : ""}`}
          onClick={() => handleGridView("two_grid")}
        >
          GRID
        </button>
        <button
          className={`grid_text three_grid ${gridView === "three_grid" ? "active" : ""}`}
          onClick={() => handleGridView("three_grid")}
        >
          LIST
        </button>
      </div>

      {/* Product Items */}
      <div className={`product_main_container ${gridView === "three_grid" ? "active" : ""} ${gridView}`}>
        <div className="product_item_container">
          {productdata.map((product) => {
            const {
              id,
              product_name = "Unnamed Product",
              slug = "#",
              pdf_files = [],
              product_images = [],
            } = product;

            const imageUrl =
              product_images[0]?.slide?.url
                ? getMediaUrl(product_images[0].slide.url)
                : "/assets/images/placeholder.webp";

            return (
              <div className="product_item" key={id}>
                {/* Product Image */}
                <Link href={`/products/${slug}`} passHref className="product_box">
                  <Image
                    src={imageUrl}
                    alt={product_name.trim() || "Product image"}
                    width="543"
                    height="460"
                  />
                  <span className="view_cta">VIEW MORE</span>
                </Link>

                {/* Product Name */}
                <div className="product_detail">
                  <Link href={`/products/${slug}`} passHref>
                    <div className="subtitle_30">{product_name.trim()}</div>
                  </Link>

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

        {/* Product Table Container */}
        <div className="product_table_container">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Strength</th>
                <th>Image (not to scale)</th>
                <th>Pack Size</th>
                <th>NDC #</th>
                <th>RLD / Brand Name</th>
                <th>TE Rating</th>
                <th>Therapeutic Category</th>
              </tr>
            </thead>
            <tbody>
              {productdata.map((product) => {
                const {
                  id,
                  product_name = "Unnamed Product",
                  slug = "#",
                  strength = "Unknown Strength",
                  product_images = [],
                  ndc = "Unknown NDC",
                  brand_name = "Unknown Brand",
                  te_rating = "Unknown Rating",
                  category = "Unknown Category",
                } = product;

                // Get image URL (default to placeholder if no image)
                const imageUrl = product_images[0]?.slide?.url
                  ? getMediaUrl(product_images[0].slide.url)
                  : "/assets/images/placeholder.webp";

                return (
                  <tr key={id}>
                    <td>
                      <a href={`/products/${slug}`} rel="noopener noreferrer">
                        {product_name.trim() || "Unnamed Product"}
                      </a>
                    </td>
                    <td>
                      {product.custom_strength_list_view && product.custom_strength_list_view.length > 0
                        ? product.custom_strength_list_view.split(',').map((strength, index) => (
                            <span key={index}>
                              {strength.trim()}
                              {index < product.custom_strength_list_view.split(',').length - 1 && <br />}
                            </span>
                          ))
                        : product.strength
                          ? product.strength.split(',').map((strength, index) => (
                              <span key={index}>
                                {strength.trim()}
                                {index < product.strength.split(',').length - 1 && <br />}
                              </span>
                            ))
                          : "Unknown Strength"
                      }
                    </td>
                    <td>
                      <Image src={imageUrl} alt={product_name.trim() || "Product image"} width="100" height="100" />
                    </td>
                    <td>
                      {product.custom_pack_size_list_view && product.custom_pack_size_list_view.length > 0
                        ? product.custom_pack_size_list_view.split(',').map((size, index) => (
                            <span key={index}>
                              {size.trim()}
                              {index < product.custom_pack_size_list_view.split(',').length - 1 && <br />}
                            </span>
                          ))
                        : product.pack_size
                          ? product.pack_size.split(',').map((size, index) => (
                              <span key={index}>
                                {size.trim()}
                                {index < product.pack_size.split(',').length - 1 && <br />}
                              </span>
                            ))
                          : "Unknown Size"
                      }
                    </td>
                    <td>
                      {product.ndc ? product.ndc.split(',').map((ndc, index) => (
                        <span key={index}>
                          {ndc.trim()}
                          {index < product.ndc.split(',').length - 1 && <br />}
                        </span>
                      )) : "N/A"}
                    </td>
                    <td>{product.brand?.name}</td>
                    <td>{(product.te_rating || "N/A").toUpperCase()}</td>
                    <td>{product.category?.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="product_pagination">
        {/* Previous Button */}
        <button
          type="button"
          className="keyboard_btn product_prev"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span>&lt;</span>
        </button>

        {/* Pagination Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          if (
            page <= 5 ||
            page === totalPages ||
            (page >= currentPage - 2 && page <= currentPage + 2)
          ) {
            return (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                className={`pagination_number ${currentPage === page ? 'active' : ''}`}
                disabled={currentPage === page}
              >
                <span>{page}</span>
              </button>
            );
          }

          if (page === 6 && currentPage > 4) {
            return (
              <button key="ellipsis-start" type="button" className="pagination_ellipsis" disabled>
                <span>...</span>
              </button>
            );
          }

          if (page === totalPages - 1 && currentPage < totalPages - 3) {
            return (
              <button key="ellipsis-end" type="button" className="pagination_ellipsis" disabled>
                <span>...</span>
              </button>
            );
          }

          return null;
        })}

        {/* Next Button */}
        <button
          type="button"
          className="keyboard_btn product_next"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span>&gt;</span>
        </button>
      </div>
    </div>
  );
}
