import Image from "next/image" ;
import Link from "next/link";



export default function Corporate () {
    return (
        <section data-section="corporate_overview" className="corporate_overview">
        <div className="corporate_containers">
            <h2 className="h2_title">CORPORATE OVERVIEW</h2>
            <h3 className="subtitle_60">
                Transforming hope
                into healing.
            </h3>
            <p className="para">
                Lupin is a global pharmaceutical company whose
                product development pipeline includes complex
                inhalations branded generics projects, and a specialty
                focus on women's health. As a global pharma company,
                we work towards bringing novel products to the market
                that address unmet medical needs.
            </p>
            <a href="corporate.php" className="black_cta">
                <div className="cta_container">
                    <span>Know more</span>
                    <img src="/images/icons/white_arrow.webp" alt="" width="20" height="14" />
                </div>
            </a>
        </div>
        <div className="corporate_numbers_container">
            <div className="corporate_numbers_column">
                <div className="subtitle_40">In the US</div>
                <div className="corporate_number_detail">
                    <div className="corporate_number">150+</div>
                    <div className="corporate_text">commercialized products in the US</div>
                </div>
                <div className="corporate_number_detail">
                    <div className="corporate_number">3rd Major</div>
                    <div className="corporate_text">pharma company in the US, by number of prescriptions filled</div>
                </div>
                <div className="corporate_number_detail">
                    <div className="corporate_number">5M</div>
                    <div className="corporate_text">number of patient we reached in the US</div>
                </div>
            </div>
            <div className="corporate_numbers_column">
                <div className="subtitle_40">In the World</div>
                <div className="corporate_number_detail">
                    <div className="corporate_number">15</div>
                    <div className="corporate_text">manufacturing facilities globally</div>
                </div>
                <div className="corporate_number_detail">
                    <div className="corporate_number">7 R&D</div>
                    <div className="corporate_text">centers globally</div>
                </div>
                <div className="corporate_number_detail">
                    <div className="corporate_number">100+</div>
                    <div className="corporate_text">countries reached</div>
                </div>
            </div>
        </div>
        <div className="flower_bg_container">
            <div className="flower_bg">
                <img src="/images/flower_bg.webp" alt="" width="895" height="851" />
            </div>
        </div>
    </section>
  
    );
  };
  
  