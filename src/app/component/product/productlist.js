"use client";
import { useState, useEffect , useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Products({ productdata = [], totalPages, currentPage ,totalproduct }) {
  const [products, setProducts] = useState(productdata);
  const [isActive, setIsActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");
  const [loading, setLoading] = useState(false);
  const [gridView, setGridView] = useState("two_grid");
  const router = useRouter();

  const imageRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);


  useEffect(() => {
    const storedGridView = localStorage.getItem('gridView');
    if (storedGridView) {
      setGridView(storedGridView); 
    } else {
      setGridView("two_grid"); 
    }
  }, []); 


  useEffect(() => {
    const adjustImageHeights = () => {
      const images = Array.from(document.querySelectorAll(".product_box img"));
      let maxHeight = 0;
      Promise.all(
        images.map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = resolve;
              }
            })
        )
      ).then(() => {
        images.forEach((img) => {
          maxHeight = Math.max(maxHeight, img.clientHeight);
        });
  
        images.forEach((img) => (img.style.height = `${maxHeight}px`));
      });
    };
  
    adjustImageHeights();
    window.addEventListener("resize", adjustImageHeights);
  
    return () => window.removeEventListener("resize", adjustImageHeights);
  }, [products]);

  
  const handleGridView = (viewType) => {
    setGridView(viewType); 
    localStorage.setItem('gridView', viewType); 

    
    const params = new URLSearchParams(window.location.search);
    params.set("grid", viewType); 
    params.set("page", currentPage); 
    window.history.replaceState(null, '', `?${params.toString()}`); 
  };

  
  const handlePageChange = (page) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", page); 
    params.set("grid", gridView); 
    window.location.search = params.toString(); 
  };


  const handleToggle = () => {
    setIsActive(true); // Show dropdown
  };

  const handleMouseLeave = () => {
    setIsActive(false); // Hide dropdown
  };

  

  const CategoryClick = (category) => {
    setSelectedCategory(category);
    setIsActive(false);
    router.push(`/products?category=${category}`);
  };



  const getMediaUrl = (url) => {
    return `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;
  };

 

  const uniqueCategories = [
    ...new Set(productdata.map((product) => product.category?.name).filter(Boolean)),
  ];


  return (
    <div>
      <section
        data-section="product_listing"
        className="product_listing"
        id="product_listing"
      >
        {/* Product Navigation */}
        <div className="product_nav">
          <div className="product_text">
            <span id="product_number" className="product_number">
              {totalproduct}
            </span>{" "}
            ITEMS FOUND
          </div>

          {/* Grid View Options */}
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

          {/* Category Filter */}
          <div className="product_select">
            <div className="select_detail" onClick={handleToggle} >{selectedCategory}</div>
            <ul className={`select_box ${isActive ? "active" : ""}`} onMouseLeave={handleMouseLeave}>
              {uniqueCategories.map((category, index) => (
                <li key={index} onClick={() => CategoryClick(category)}>
                  {category}
                </li>
              ))}
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
                <div className={`product_main_container ${gridView === "three_grid" ? "active" : ""} ${gridView}`}>
                  <div className={`product_item_container`}>
                    {productdata.map((product,index) => {

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
                        <div className="product_item" key={id}
                        >
                          {/* Product Image */}
                          <Link href={`/products/${slug}`} passHref className="product_box"
                          
                          >
                            <Image
                              src={imageUrl}
                              alt={product_name.trim() || "Product image"}
                              width="543"
                              height="460"
                               
                            />
                            <span className="view_cta">
                              VIEW MORE
                            </span>
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
                  <div className={`product_table_container`}>
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

              </>
            )}
          </>
        )}
        <div className="product_pagination">
          {/* Previous Button */}
          <Link
            href={`?page=${currentPage - 1}&grid=${gridView}`}
            className={`keyboard_btn product_prev ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={(e) => {
              if (currentPage === 1) {
                e.preventDefault();
              } else {
                handlePageChange(currentPage - 1);
              }
            }}
            aria-disabled={currentPage === 1}
          >
            <Image src="/images/icons/green_arrow.webp" alt="Previous Page" width={8} height={13} />
          </Link>

          {/* Pagination Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            if (
              page <= 5 ||  
              page === totalPages ||  
              (page >= currentPage - 2 && page <= currentPage + 2) 
            ) {
              return (
                <Link
                  key={page}
                  href={`?page=${page}&grid=${gridView}`}
                  className={`pagination_number ${currentPage === page ? 'active' : ''}`}
                  onClick={(e) => {
                    if (currentPage === page) {
                      e.preventDefault();
                    } else {
                      handlePageChange(page);
                    }
                  }}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  <span>{page}</span>
                </Link>
              );
            }

            if (page === 6 && currentPage > 4) {
              return (
                <span key="ellipsis-start" className="pagination_ellipsis">
                  <span>...</span>
                </span>
              );
            }

            if (page === totalPages - 1 && currentPage < totalPages - 3) {
              return (
                <span key="ellipsis-end" className="pagination_ellipsis">
                  <span>...</span>
                </span>
              );
            }

            return null;
          })}

          {/* Next Button */}
          <Link
            href={`?page=${currentPage + 1}&grid=${gridView}`}
            className={`keyboard_btn product_next ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={(e) => {
              if (currentPage === totalPages) {
                e.preventDefault();
              } else {
                handlePageChange(currentPage + 1);
              }
            }}
            aria-disabled={currentPage === totalPages}
          >
            <Image src="/images/icons/green_arrow.webp" alt="Next Page" width={8} height={13} />
          </Link>
        </div>

        <p className="para product_para">*All registered trademarks are the property of their respective owners. These products are intended for U.S. residents only.</p>


      </section>
      <div className="product_brand_container" id="patient-education">
        <h2 className="subtitle_30">EXPLORE PATIENT EDUCATION</h2>
        <div className="brand_container">
          <Link href="/products/albuterol-sulfate-inhalation-aerosol#albuterol" className="brand_box" style={{ height: '9.0882vw' }}>
            <Image src="/images/icons/up_arrow.webp" alt="albuterol " width={57} height={62} className="brand_arrow" />
            <span className="subtitle_20">
              Albuterol Sulfate Inhalation
            </span>
          </Link>
          <Link href="products/tiotropium-bromide-inhalation-powder-capsules#tiotropium" className="brand_box" style={{ height: '9.0882vw' }}>
            <Image src="/images/icons/up_arrow.webp" alt="tiotropium" width={57} height={62} className="brand_arrow" />
            <span className="subtitle_20">
              Tiotropium Bromide Inhalation Powder Capsule
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}


