"use client";
import React from 'react';

export default function ProductDetails({ productdata }) {
  
  const product = productdata[0];
  console.log("Product after Destructuring:", productdata);
  console.log(product.ndc);

  const ndcList = product.ndc && typeof product.ndc === 'string' 
    ? product.ndc.split(',').map(ndc => ndc.trim()) 
    : [];
    const getMediaUrl = (url) =>
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;

  return (
    
      <section className="product_detail_section">
        <div className="product_detail_item">
          {/* Check if product_images is defined and has at least one image */}
          {product.product_images && product.product_images.length > 0 && (
            <img
              src={`https://lupinus-cms.devmaffia.in${product.product_images[0]?.url}`}
              alt={product.product_name}
              width="279"
              height="236"
            />
          )}
        </div>
        <div className="product_detail_container">
          <div className="subtitle_4692">{product.product_name}</div>
          <div className="product_info">
            <div className="info_item">
              <div className="info_title">Strength</div>
              <span>:</span>
              <div className="info_detail">{product.pack_size || 'N/A'}</div>
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
                  'N/A'
                )}
              </div>
            </div>
            <div className="info_item">
              <div className="info_title">TE Rating</div>
              <span>:</span>
              <div className="info_detail">{product.te_rating || 'N/A'}</div>
            </div>
            <div className="info_item">
              <div className="info_title">Brand Name</div>
              <span>:</span>
              <div className="info_detail">
                {product.brand && product.brand.name ? product.brand.name : 'N/A'}
              </div>
            </div>
          </div>
          <div className="product_pdf">
            {/* Check if product.pdf_files exists and has items */}
            {product.pdf_files && product.pdf_files.length > 0 ? (
              product.pdf_files.map((file, index) => (
                <a
                  key={index}
                  href={`https://lupinus-cms.devmaffia.in${file.url}`}
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
    
  );
}