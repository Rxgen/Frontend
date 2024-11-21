"use client";

export default function Filter() {

    return(
        <section data-section="product_filter" className="product_filter">
    <div className="filter_container">
        <div className="product_search">
            <div className="subtitle_24">Search Product Catalog</div>
            <form action="">
                <input type="text" placeholder="PRODUCT NAME" />
                <input type="text" placeholder="BRAND NAME" />
                <input type="text" placeholder="NDC" />
                <button type="submit" className="product_btn black_cta">
                    <div className="cta_container">
                        <span>Submit</span>
                        <img src="assets/images/icons/white_arrow.webp" alt="" width="20" height="14"/>
                    </div>
                </button>
                <a href="corporate.php" className="black_cta clear_btn">
                    <div className="cta_container">
                        <span>Clear</span>
                        <img src="assets/images/icons/white_arrow.webp" alt="" width="20" height="14" />
                    </div>
                </a>
            </form>
        </div>
        <div className="product_category">
            <div className="subtitle_24">Filter by Category</div>
            <div className="category_tab">
                <a href="" className="tab_link">ALL PRODUCTS</a>
                <a href="" className="tab_link">NEW PRODUCTS</a>
                <a href="" className="tab_link">INHALATIONS</a>
                <a href="" className="tab_link">INJECTABLES</a>
            </div>
        </div>
        <div className="product_letters">
            <div className="subtitle_24">Filter by Letters</div>
            <div className="product_keyboard">
                <button type="submit" className="keyboard_btn"><span>A</span></button>
                <button type="submit" className="keyboard_btn"><span>B</span></button>
                <button type="submit" className="keyboard_btn"><span>C</span></button>
                <button type="submit" className="keyboard_btn"><span>D</span></button>
                <button type="submit" className="keyboard_btn"><span>E</span></button>
                <button type="submit" className="keyboard_btn"><span>F</span></button>
                <button type="submit" className="keyboard_btn"><span>G</span></button>
                <button type="submit" className="keyboard_btn"><span>H</span></button>
                <button type="submit" className="keyboard_btn"><span>I</span></button>
                <button type="submit" className="keyboard_btn"><span>J</span></button>
                <button type="submit" className="keyboard_btn"><span>K</span></button>
                <button type="submit" className="keyboard_btn"><span>L</span></button>
                <button type="submit" className="keyboard_btn"><span>M</span></button>
                <button type="submit" className="keyboard_btn"><span>N</span></button>
                <button type="submit" className="keyboard_btn"><span>O</span></button>
                <button type="submit" className="keyboard_btn"><span>P</span></button>
                <button type="submit" className="keyboard_btn"><span>Q</span></button>
                <button type="submit" className="keyboard_btn"><span>R</span></button>
                <button type="submit" className="keyboard_btn"><span>S</span></button>
                <button type="submit" className="keyboard_btn"><span>T</span></button>
                <button type="submit" className="keyboard_btn"><span>U</span></button>
                <button type="submit" className="keyboard_btn"><span>V</span></button>
                <button type="submit" className="keyboard_btn"><span>W</span></button>
                <button type="submit" className="keyboard_btn"><span>X</span></button>
                <button type="submit" className="keyboard_btn"><span>Y</span></button>
                <button type="submit" className="keyboard_btn"><span>Z</span></button>

            </div>
        </div>
    </div>
</section>
    )
}