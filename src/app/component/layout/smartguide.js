"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SmartGuide = () => {
  const [isPopupActive, setIsPopupActive] = useState(false);
  const [productName, setProductName] = useState("");
  const [products, setProducts] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isNdcActive, setIsNdcActive] = useState(false);
  const [ndc, setNdc] = useState("");
  const [brandName, setBrandName] = useState("");
  const [isBrandActive, setIsBrandActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();


  //const populateFields = ["brand","product_images.slide", "pdf_files.pdf"]; // Populate fields array

  // Fetch products based on productName, NDC, and brand
  useEffect(() => {

    const populateFields = ["brand","product_images.slide", "pdf_files.pdf"];
    const fetchProducts = async () => {
      setLoading(true);

      // Construct filters based on the provided values
      const filters = [];

      
      if (productName.length >= 3) {
        filters.push(`filters[product_name][$startsWith]=${productName}`);
      }

      if (ndc.length >= 3) {
        filters.push(`filters[ndc][$contains]=${ndc}`);
      }

      if (brandName.length >= 3) {
        console.log("Brand Serach Filter")
        filters.push(`filters[brand][name][$startsWith]=${brandName}`);
      }

      // Construct the populate part of the query string
      const populateQuery = populateFields
        .map((field, index) => `populate[${index}]=${field}`)
        .join("&");

      const queryString = [
        ...filters,
        populateQuery,
      ].join("&"); 

      try {
        const response = await fetch(
          `https://lupinus-cms.devmaffia.in/api/products?${queryString}`
        );
        console.log("APi Url For Serach Filter ",`https://lupinus-cms.devmaffia.in/api/products?${queryString}`)
        const data = await response.json();
        setProducts(data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    // Only fetch products if there is any input (productName, NDC, or brand)
    if (productName || ndc || brandName) {
      fetchProducts();
    } else {
      setProducts([]);
    }
  }, [productName, ndc, brandName]);

  const togglePopup = () => {
    setIsPopupActive((prevState) => !prevState);
  };

  const closePopup = () => {
    setIsPopupActive(false);
  };

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    setProductName(value);
    setIsActive(value.length >= 3);
  };
  const handleNdcChange = (e) => {
    const value = e.target.value;
    setNdc(value);
    setIsNdcActive(value.length >= 3); 
  };

  const handleBrandNameChange = (e) => {
    const value = e.target.value;
    setBrandName(value);
    setIsBrandActive(value.length >= 3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = [];
    if (productName) queryParams.push(`productName=${productName}`);
    if (ndc) queryParams.push(`ndc=${ndc}`);
    if (brandName) queryParams.push(`brand=${brandName}`);
    const queryString = queryParams.join("&");
    router.push(`/products?${queryString}`);
    closePopup();
  };

  return (
    <div>
      <a
        href="#"
        className="sticky_guide"
        onClick={(e) => {
          e.preventDefault();
          togglePopup();
        }}
      >
        <span>Smart Guide</span>
      </a>

      <div id="popup" className={`guide_popup ${isPopupActive ? "active" : ""}`}>
        <div className="popup_content">
          <div className="guide_container">
            <a
              href="#"
              className="close_btn"
              onClick={(e) => {
                e.preventDefault();
                closePopup();
              }}
            >
              <Image
                src="/images/icons/close_popup.webp"
                alt="Close"
                width="14"
                height="14"
              />
              <span>Close</span>
            </a>
            <h2 className="subtitle_4172">Search Product</h2>
            <form id="guide_form" onSubmit={handleSubmit}>
              <div className="guide_form_container">
                <div className="form_group">
                  <label htmlFor="product-name">Product Name</label>
                  <input
                    type="text"
                    id="product-name"
                    className="searchable_input"
                    value={productName}
                    onChange={handleProductNameChange}
                    placeholder="Type to search"
                  />
                  {productName.length >= 3 && (
                    <ul className={`guide_list ${isActive ? "active" : ""}`}>
                      {loading ? (
                        <li>Loading...</li>
                      ) : products.length > 0 ? (
                        products.map((product) => (
                          <li
                            key={product.id}
                            onClick={() => {
                              console.log(`Product clicked: name is clicked`);
                              setProductName(product.product_name);
                              setIsActive(false);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {product.product_name}
                          </li>
                        ))
                      ) : (
                        <li>No products found</li>
                      )}
                    </ul>
                  )}
                </div>

                <div className="form_group">
                  <label htmlFor="ndc">NDC</label>
                  <input
                    type="text"
                    id="ndc"
                    className="searchable_input"
                    value={ndc}
                    onChange={handleNdcChange}
                    placeholder="Type to search NDC"
                  />
                  <ul className={`guide_list ${isNdcActive ? "active" : ""}`}>
                    {products.map((product) =>
                      (product.ndc || "")
                        .split(",")
                        .filter((ndc) => ndc.trim() !== "")
                        .map((ndcItem, index) => (
                          <li
                            key={`${product.id}-${index}`}
                            onClick={() => {
                              console.log(`NDC clicked: ${ndcItem.trim()}`);
                              setNdc(ndcItem.trim());
                              setIsNdcActive(false);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            {ndcItem.trim()}
                          </li>
                        ))
                    )}
                  </ul>
                </div>

                <div className="form_group">
                  <label htmlFor="product-name">Brand Name</label>
                        <input
                            type="text"
                            id="brand-name"
                            className="searchable_input"
                            value={brandName}
                            onChange={handleBrandNameChange}
                            placeholder="Type to search Brand"
                        />
                    {brandName.length >= 3 && (
                      <ul className={`guide_list ${isBrandActive ? "active" : ""}`}>
                        {products.length > 0 ? (
                          products.map((product, index) => (
                            product.brand && product.brand.name ? ( 
                              <li
                                key={index}
                                onClick={() => {
                                  console.log(`Brand clicked: ${product.brand.name}`);
                                  setBrandName(product.brand.name);
                                  setIsBrandActive(false); 
                                }}
                                style={{ cursor: "pointer" }}
                              >
                                {product.brand.name}
                              </li>
                            ) : null 
                          ))
                        ) : (
                          <li>No brands found</li>
                        )}
                      </ul>
                       )}
                </div>
                
            </div>

              <div className="form-actions">
                <button type="submit" className="black_cta">
                  <div className="cta_container">
                    <span>Submit</span>
                    <Image
                      src="/images/icons/white_arrow.webp"
                      alt="White Arrow"
                      width="20"
                      height="14"
                    />
                  </div>
                </button>
                <button
                  type="button"
                  className="clear_btn"
                  onClick={() => {
                    setProductName("");
                    setNdc("");
                    setBrandName("");
                    setProducts([]);
                  }}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
          <Image
            src="/images/guide_bg.webp"
            alt="Guide"
            className="guide_bg"
            width="1574"
            height="658"
          />
        </div>
      </div>
    </div>
  );
};

export default SmartGuide;
