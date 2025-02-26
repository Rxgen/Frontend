"use client";
import React from "react";
import Image from "next/image";

export default function ProductDetails({ productdata }) {
  const product = productdata[0];
  console.log("Product after Destructuring:", productdata);
  console.log("Product Brand after Destructuring:", product.brand);

  const ndcList = product.ndc && typeof product.ndc === "string"
    ? product.ndc.split(",").map((ndc) => ndc.trim())
    : [];

  // Utility function to generate media URLs
  const getMediaUrl = (url) => `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${url}`;

  const cleanContent = (content) => {
    return content
      .replace(/<p>\s*<img([^>]+)>\s*<\/p>/g, '<img$1>') 
      .replace(/<p>(\s|&nbsp;)*<\/p>/g, '') 
      .replace(/\s+/g, ' ') 
      .trim(); 
  };

  const cleanedDescription = product.product_description
    ? cleanContent(product.product_description)
    : null;

  return (
    <div>
<section className="product_detail_section">
      <div className="product_detail_item">
        {/* Render product image */}
        {product.product_images && product.product_images.length > 0 && (
          <Image
            src={getMediaUrl(product.product_images[0].slide.url)}
            alt={product.product_name}
            width="279"
            height="236"
          />
        )}
      </div>

      <div className="product_detail_container">
        <h1 className="subtitle_4692">{product.product_name}</h1>
        <div className="product_info">
        <div className="info_item">
                <div className="info_title">Strength</div>
                <span>:</span>
                <div className="info_detail">{product.strength && product.strength ? product.strength : "N/A"}</div>
            </div>

          <div className="info_item">
            <div className="info_title">Pack Size</div>
            <span>:</span>
            <div className="info_detail">{product.pack_size || "N/A"}</div>
          </div>

          <div className="info_item">
            <div className="info_title">NDC#</div>
            <span>:</span>
            <div className="info_detail">
              {ndcList.length > 0 ? (
                <ul>
                  {ndcList.map((ndc) => (
                    <li key={ndc}>{ndc}</li>
                  ))}
                </ul>
              ) : (
                "N/A"
              )}
            </div>
          </div>

          <div className="info_item">
            <div className="info_title"> RLD/Brand Name </div>
            <span>:</span>
            <div className="info_detail">
              {product.brand && product.brand.name ? product.brand.name : "N/A"}
            </div>
          </div>

          <div className="info_item">
            <div className="info_title">TE Rating</div>
            <span>:</span>
            <div className="info_detail">{(product.te_rating || "N/A").toUpperCase()}</div>
          </div>

          <div className="info_item">
            <div className="info_title">Therapeutic Category</div>
            <span>:</span>
            <div className="info_detail">
              {product.category && product.category.name ? product.category.name : "N/A"}
            </div>
          </div>
        </div>

        <div className="product_pdf">
          {/* Render PDF links */}
          {product.pdf_files && product.pdf_files.length > 0 ? (
            product.pdf_files.map((file, index) => (
              <a
                key={index}
                href={getMediaUrl(file.pdf.url)}
                className="pdf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.name}
              </a>
            ))
          ) : (
            <div>No PDF files available</div>
          )}
        </div>
      </div>
    </section>
    {cleanedDescription && (
          
          <div
            dangerouslySetInnerHTML={{ __html: cleanedDescription }}
          />
        )}
    </div>
  );
}



