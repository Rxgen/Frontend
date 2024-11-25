"use client"

export default function popup(){

    return (
        
        <div id="popup" className="guide_popup">
  <div className="popup_content">
    <div className="guide_container">
      <a href="" className="close_btn">
        <img src="/images/icons/close_popup.webp" alt="" width="14" height="14" /> <span>Close</span>
      </a>
      <h2 className="subtitle_4172">Search Product</h2>
      <form id="guide_form">
        <div className="guide_form_container">
          <div className="form_group">
            <label htmlFor="product-name">Product name</label>
            <select id="product-name" defaultValue="">
              <option value="" disabled>
                Select a product
              </option>
              <option value="product1">Product 1</option>
              <option value="product2">Product 2</option>
              <option value="product3">Product 3</option>
            </select>
          </div>
          <div className="form_group">
            <label htmlFor="ndc">NDC</label>
            <select id="ndc" defaultValue="">
              <option value="" disabled>
                Select NDC
              </option>
              <option value="12345">12345</option>
              <option value="67890">67890</option>
              <option value="98765">98765</option>
            </select>
          </div>
          <div className="form_group">
            <label htmlFor="brand-name">Brand name</label>
            <select id="brand-name" defaultValue="">
              <option value="" disabled>
                Select a brand
              </option>
              <option value="brandA">Brand A</option>
              <option value="brandB">Brand B</option>
              <option value="brandC">Brand C</option>
            </select>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="black_cta">
            <div className="cta_container">
              <span>Submit</span>
              <img src="/images/icons/white_arrow.webp" alt="" width="20" height="14" />
            </div>
          </button>
          <button type="button" className="clear_btn">Clear</button>
        </div>
      </form>
    </div>
    <img src="/images/guide_bg.webp" alt="" className="guide_bg" width="1574" height="658" />
  </div>
</div>


    )
}