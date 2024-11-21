"use client";
import { useState, useEffect } from "react";
import { fetchNewProducts } from "../homepage/Api/fetchfilternew";
import Link from "next/link";

export default function Productlist({ letter }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(letter);

    useEffect(() => {
        async function loadProducts() {
            setLoading(true);
            const productData = await fetchNewProducts(letter);
            setProducts(productData);
            setLoading(false);
        }

        loadProducts();
    }, [letter]); // Re-run when the `letter` prop changes

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (products.length === 0) {
        return <div>No products found for "{letter}"</div>;
    }

    return (
        <div>
            <section
                data-section="product_listing"
                className="product_listing"
                id="product_listing"
            >
                <div className="product_nav">
                    <div className="product_text">
                        <span id="product_number" className="product_number">
                            {products.length}
                        </span>{" "}
                        ITEMS FOUND
                    </div>
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

                <div>
                    <h1>Product Listing</h1>
                    <div className="product_item_container">
                        {products.map((product) => {
                            // Get product image URL
                            const imageUrl = product.product_images?.[0]?.id
                                ? `https://lupinus-cms.devmaffia.in/uploads/product_${product.product_images[0].id}.webp`
                                : "assets/images/placeholder.webp"; // Fallback image if none available

                            return (
                                <div className="product_item" key={product.id}>
                                    {/* Product Image */}
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

                                    {/* Product Details */}
                                    <div className="product_detail">
                                        <div className="subtitle_35">
                                            {product.product_name.trim()}
                                        </div>

                                        {/* PDF Files */}
                                        <div className="product_pdf">
                                            {product.pdf_files.map((pdf) =>
                                                pdf.boolean ? (
                                                    <a
                                                        href={`https://lupinus-cms.devmaffia.in/uploads/${pdf.name
                                                            .toLowerCase()
                                                            .replace(
                                                                / /g,
                                                                "_"
                                                            )}.pdf`}
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
                </div>
            </section>
        </div>
    );
}
