"use client";

import { useState, useEffect } from 'react';

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      try {
        const response = await fetch(
          'https://lupinus-cms.devmaffia.in/api/products?filters[slug][$eq]=amlodipine-besylate-and-benazepril-hcl-capsules-usp&populate=*'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }

        const data = await response.json();

        if (data && data.data && data.data.length > 0) {
          setProduct(data.data[0]); // Assuming the first product in the array
        } else {
          console.error('No product found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  const ndcList = product.ndc ? product.ndc.split(',').map(ndc => ndc.trim()) : [];

  return (
    <div>
      <section className="product_detail_section">
        <div className="product_detail_item">
          {/* Assuming product has an image URL in `product_images` */}
          <img
            src={`https://lupinus-cms.devmaffia.in${product.product_images[0]?.url}`}
            alt={product.product_name}
            width="279"
            height="236"
          />
        </div>
        <div className="product_detail_container">
          <div className="subtitle_4692">{product.product_name}</div>
          <div className="product_info">
            <div className="info_item">
              <div className="info_title">Strength</div>
              <span>:</span>
              <div className="info_detail">{product.pack_size}</div>
            </div>
            <div className="info_item">
              <div className="info_title">NDC#</div>
              <span>:</span>
              <div className="info_detail">{ndcList.length > 0 ? (
                  <ul>
                    {ndcList.map((ndc, index) => (
                      <li key={index}>{ndc}</li>
                    ))}
                  </ul>
                ) : (
                  'N/A'
                )}</div>
            </div>
            <div className="info_item">
              <div className="info_title">TE Rating</div>
              <span>:</span>
              <div className="info_detail">{product.te_rating}</div>
            </div>
            <div className="info_item">
              <div className="info_title">Brand Name</div>
              <span>:</span>
              <div className="info_detail">{product.brand?.name}</div>
            </div>
          </div>
          <div className="product_pdf">
            {product.pdf_files.map((file, index) => (
              <a
                key={index}
                href={`https://lupinus-cms.devmaffia.in${file.url}`}
                className="pdf_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {file.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
