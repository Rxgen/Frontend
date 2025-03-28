"use client";

import { useState } from 'react';

export default function Policy() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <>
      <main id="wrapper" className="wrapper">
      
        <section className="privacy_section inner_section">
        <div className="privacy_pointer">
            <div className="subtitle_40 text_center">RETURN GOODS POLICY</div>
            <p className="para text_center">Returning products is fast and simple. See below for details.</p>
        </div>
          
          {/* Accordion Sections */}
          <div className="accordion">
            <div className="accordion-item">
              <button 
                className={`accordion-button ${activeSection === 'procedure' ? 'active' : ''}`}
                onClick={() => toggleSection('procedure')}
              >
                Lupin U.S. Branded Products Returns Goods Policy
              </button>
              <div className={`accordion-content ${activeSection === 'procedure' ? 'show' : ''}`}>
                
{/* new data show */}

<div className="para">Effective July 15, 2019:</div>
            <div className="para_content">
                <p className="para">
                Lupin Pharmaceuticals, Inc (LPI) is committed to excellence in customer service and satisfaction. Should you need to return branded goods, please send product and debit memo(s) to Inmar and follow the instructions below:
                </p>
            </div>
            <div className="para_content">
                <p className="para">
                    Inmar – South Dock <br />
                    4332 Empire Road <br />
                    Fort Worth, TX 76155 <br />
                    Phone: 1-800-967-5952 <br />
                    Fax: 817-868-5343
                </p>
            </div>
            <div className="para_content">
                <p className="para"><a href="https://www.inmar.com/" target="_blank">www.inmar.com</a></p>
            </div>
            <div className="privacy_pointer">
                <div className="subtitle_40">PROCEDURE FOR RETURNING BRANDED GOODS:</div>
                <div className="para_content">
                    <p className="para">Requests for Return Authorizations (box labels) can be made by any of the below methods:
                    </p>
                    </div>
                    <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">Accessing the Inmar website at https://returns.healthcare.inmar.com (you will need to upload a PDF copy of your debit memo)</p>
                        </li>
                        <li>
                            <p className="para">E-mail your debit memo to rarequest@inmar.com. Be sure to include the below detail:</p>
                            <ul className="unOrder_sub_list">
                            <li>
                                <p className="para">Customer name, street address, account number, DEA number, and e-mail address</p>
                            </li>
                        </ul>
                        </li>
                        
                        <li><p className="para">Wholesaler name, street address, account number, DEA number, and e-mail address.</p></li>
                        <li><p className="para">The product name, NDC number, Quantity, Lot Number and Expiration Date</p></li>
                        <li><p className="para">Fax your debit memo to Inmar at 817-868-5343</p></li>
                    </ul>
                </div>
                </div>
                <div className="privacy_pointer">
                <div className="subtitle_40">RETURNABLE ITEMS:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">Returns include the following manufacture’s labeler code only: 27437 only.</p>
                        </li>
                        <li>
                            <p className="para">Products with less than six (6) months remaining shelf life.</p>
                        </li>
                        <li>
                            <p className="para">Expired products that are not more than 6 months past expiration date.</p>
                        </li>
                        <li>
                            <p className="para">Latent defect claims made within 3 business days of receipt.</p>
                        </li>
                        <li>
                            <p className="para">Products that have been damaged in transit with a signed BOL noting the damage and where LPI has been notified within three (3) business days from the date of receipt and returned within 30 days.</p>
                        </li>
                        <li>
                            <p className="para">Products shipped in error on the part of LPI provided LPI Customer Service is notified of the error within five (5) business days of receipt.</p>
                        </li>
                    </ul>
                    </div>
                    </div>

                <div className="privacy_pointer">
                <div className="subtitle_40">NON-RETURNABLE ITEMS:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                    <li>
                        <p className="para">Products with more than six (6) months remaining shelf life.</p>
                    </li>
                    <li>
                        <p className="para">Products retained more than six (6) months beyond the expiration date.</p>
                    </li>
                    <li>
                        <p className="para">Private Label products, repacked goods or patient labeled product.</p>
                        </li>
                    <li>
                        <p className="para">Products with a missing label or with missing lot number and/or expiration date or products marked, coded or adulterated in any way.</p>
                        </li>
                    <li>
                        <p className="para">Products sold on a non-returnable basis.</p>
                    </li>
                    <li>
                        <p className="para">Partial product for suspensions, liquids, powders, solutions, creams, and ointments.</p>
                    </li>
                    <li>
                        <p className="para">Products sold as free goods or products provided at no charge for promotional incentives, samples or short-dated products sold as such.</p>
                    </li>
                    <li>
                        <p className="para">Products damaged due to insurable causes such as fire or natural disasters, or if damaged/deteriorated due to improper handling or storage by the customer.</p>
                    </li>
                    <li>
                        <p className="para">Products involved in distressed, sacrifice, fire, flood or bankruptcy sale.</p>
                    </li>
                    <li>
                        <p className="para">Overstock, unless agreed by LPI in writing.</p>
                    </li>
                    <li>
                        <p className="para">Products not purchased directly from LPI.</p>
                    </li>
                    <li>
                        <p className="para">Products purchased or distributed contrary to federal, state or local laws.</p>
                    </li>
                    </ul>                 
                </div>
                </div>

                <div className="privacy_pointer">
                <div className="subtitle_40">TRANSPORTATION:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">Transportation charges on all returned goods are the responsibility of the customer except when due to a LPI error, as determined by LPI.</p>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="privacy_pointer">
                <div className="subtitle_40">THIRD PARTY PROCESSING:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">Third party processors must comply with all requirements of LPI’s Return Goods Policy.</p>
                        </li>
                        <li>
                            <p className="para">LPI will not process returns using pricing from the third party’s internally generated price list.</p>
                        </li>
                        <li>
                            <p className="para">LPI will not reimburse any service fees to the customer of processing agent for the miscellaneous fees (i.e., handling, processing fees) or freight charges incurred.</p>
                        </li>
                        <li>
                            <p className="para">Third party returns must be in compliance with LPI’s return policy.</p>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="privacy_pointer">
                <div className="subtitle_40">TERMS OF POLICY:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">For direct customers, a credit will be issued based upon the lower of the current published price at the time the returned merchandise is received OR the original invoice price.</p>
                        </li>
                        <li>
                            <p className="para">For indirect customers, a refund will be issued based upon the lower of the current published price at the time the returned merchandise is received OR the original published price at point of purchase from the wholesaler.</p>
                        </li>
                        <li>
                            <p className="para">Credit is based on the original invoice price using lot numbers.</p>
                        </li>
                        <li>
                            <p className="para">No Partial credit for suspensions, liquids, powders, solutions, ointments.</p>
                        </li>
                        <li>
                            <p className="para">Partial bottles for Tablets and Capsules will be issued partial credit based on an exact count methodology.</p>
                        </li>
                        <li>
                            <p className="para">Credit will be applied against future orders. Cash will not be issued.</p>
                        </li>
                        <li>
                            <p className="para">Transportation charges including insurance are to be prepaid by customer.</p>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="privacy_pointer">
                <div className="subtitle_40">DISCLAIMERS:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">LPI does not pay or reimburse fees incurred for the processing of or destruction of products processed through a third party returns processing company.
                            </p>
                        </li>
                        <li>
                            <p className="para">Products that do not qualify for credit or reimbursement will be destroyed and not returned to the customer. Customer will be notified of non-credited items.</p>
                        </li>
                        <li>
                            <p className="para">LPI reserves the right to change or update this policy upon written notice to customers.</p>
                        </li>
                        
                        
                    </ul>
                </div>
                </div>
              </div>
            </div>





            <div className="accordion-item">
              <button 
                className={`accordion-button ${activeSection === 'returnable' ? 'active' : ''}`}
                onClick={() => toggleSection('returnable')}
              >
               Lupin U.S. Generic Products Returns Goods Policy
              </button>
              <div className={`accordion-content ${activeSection === 'returnable' ? 'show' : ''}`}>
              <div className="para">Effective: April 1, 2022</div>
            <div className="para_content">
                <p className="para">
                Lupin Pharmaceuticals, Inc (LPI) is committed to excellence in customer service and satisfaction. Should you need to return Lupin Pharmaceuticals, Inc. goods, please send Product and debit memo(s) to Inmar and follow the instructions below:
                </p>
            </div>
            <div className="para_content">
                <p className="para">
                Inmar RX Solutions Inc., <br />
                3845 Grand Lakes Way, Suite 125, <br />
                Grand Prairie, Texas 75050 <br />
                Phone: 1-800-967-5952 <br />
                Fax: 817-868-5343
                </p>
            </div>
            <div className="para_content">
                <p className="para"><a href="https://www.inmar.com/" target="_blank">www.inmar.com</a></p>
            </div>
            <div className="privacy_pointer">
                <div className="subtitle_40">PROCEDURE FOR RETURNING GOODS:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">Requests for Return Authorizations (box labels) can be made by any of the below methods:</p>
                        </li>
                        <li>
                            <p className="para">Accessing the Inmar website at <a href="https://returns.healthcare.inmar.com" target="_blank">https://returns.healthcare.inmar.com</a> (you will need to upload a PDF copy of your debit memo)</p>
                            <ul className="unOrder_sub_list">
                                <li>
                                    <p className="para">E-mail your debit memo to rarequest@inmar.com. Be sure to include the below detail:</p>
                                </li>
                                <li>
                                    <p className="para">Customer name, street address, account number, DEA number, and e-mail address</p>
                                </li>
                                <li>
                                    <p className="para">Wholesaler name, street address, account number, DEA number, and e-mail address.</p>
                                </li>
                                <li>
                                    <p className="para">The Product name, NDC number, Quantity, Lot Number and Expiration Date</p>
                                </li>
                                <li>
                                    <p className="para">Debit memo reference ID # and debit memo date</p>
                                </li>
                                <li>
                                    <p className="para">Reason for return and proof of purchase if required by LPI or its representatives</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p className="para"><u>When Combining Product in One Box: </u>If you are combining multiple products with different RA labels in one box, make sure that an Inmar RA label is affixed to each inner package. However, a controlled substance (Schedule III-V) must be placed in a sealed bag within the box and the applicable RA label affixed on the outside of the sealed bag. Write “MIXED RAS” on the outside of the box.</p>
                        </li>
                        <li>
                            <p className="para">Do not photocopy a RA label or use a RA label more than once. Also, it is recommended to use FedEx or UPS as both for best tracking capabilities. The USPS is not recommended for shipment.</p>
                        </li>
                        <li>
                            <p className="para">Customers who do not follow the above processing procedures could be assessed a fee if LPI is charged a processing fee by Inmar for a non-complaint shipped box.</p>
                        </li>
                        <li>
                            <p className="para">Fax your debit memo to Inmar at 817-868-5343.</p>
                        </li>
                    </ul>
                    </div>
                    </div>

                <div className="privacy_pointer">
                <div className="subtitle_40">RETURNABLE ITEMS:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">Returns include the following manufacture’s labeler codes only: 68180, 43386, and 70748 (“Product”).</p>
                        </li>
                        <li>
                            <p className="para">Products with less than six (6) months remaining shelf life.</p>
                        </li>
                        <li>
                            <p className="para">Expired Products that are not more than 12 months past expiration date.</p>
                        </li>
                        <li>
                            <p className="para">Concealed damage claims made within 10 days of receipt of shipment.</p>
                        </li>
                        <li>
                            <p className="para">Products that have been damaged in transit with a signed BOL noting the damage and where LPI has been notified within five (5) business days from the date of receipt and returned within 30 days. Customer will limit approved damaged Product returns to packages/cases that are actually damaged and unsaleable to qualify for credit from LPI. Further, the customer must provide LPI with pictures of the damaged Product to be eligible for Product credit.</p>
                        </li>
                        <li>
                            <p className="para">Products shipped in error on the part of LPI provided LPI Customer Service is notified of the error within five (5) business days of receipt. The customer will make reasonable efforts to retain over-shipped Product along with receiving appropriate LPI invoicing for kept Product.</p>
                        </li>
                        <li>
                            <p className="para">•   Customers should contact Lupin Customer Service Department at 866-587-4617or CustomerService-LPI@Lupin.com to report damaged Product or shipment errors and obtain a RA.</p>
                        </li>
                    </ul>
                    </div>
                    </div>

                <div className="privacy_pointer">
                <div className="subtitle_40">NON-RETURNABLE ITEMS:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                    <li>
                        <p className="para">Products with more than six (6) months remaining shelf life.</p>
                    </li>
                    <li>
                        <p className="para">Products retained more than twelve (12) months beyond the expiration date.</p>
                    </li>
                    <li>
                        <p className="para">Private Label Products, repacked goods or patient labeled Product.</p>
                        </li>
                    <li>
                        <p className="para">Products with a missing label or with missing lot number and/or expiration date or Products marked, coded or adulterated in any way.</p>
                        </li>
                    <li>
                        <p className="para">Products sold on a non-returnable basis.</p>
                    </li>
                    <li>
                        <p className="para">Partial package Product.</p>
                    </li>
                    <li>
                        <p className="para">Products sold as free goods or Products provided at no charge for promotional incentives, samples or short-dated Products sold as such.</p>
                    </li>
                    <li>
                        <p className="para">Products damaged due to insurable causes such as fire or natural disasters, or if damaged/deteriorated due to improper handling or storage by the customer.</p>
                    </li>
                    <li>
                        <p className="para">Products involved in distressed, sacrifice, fire, flood or bankruptcy sale.</p>
                    </li>
                    <li>
                        <p className="para">Customer overstocked Product.</p>
                    </li>
                    <li>
                        <p className="para">Products not purchased directly from LPI nor through an authorized distributor of record.</p>
                    </li>
                    <li>
                        <p className="para">Products purchased or distributed contrary to federal, state or local laws.</p>
                    </li>
                    <li>
                        <p className="para">Products purchased for future events including speculative purposes.</p>
                    </li>
                    <li>
                        <p className="para">Outdated returns per debit memo claim totaling $50 or less in value based on LPI calculations.</p>
                    </li>
                    <li>
                        <p className="para">An inter pack Product NDC returned outside of Product package sold by LPI.</p>
                    </li>
                    <li>
                        <p className="para">Forms only returns (i.e. physical Product packages must accompany the return claim).</p>
                    </li>
                    <li>
                        <p className="para">Product returned in another manufacturer’s labeler code.</p>
                    </li>
                    <li>
                        <p className="para">Product returns received by LPI or Inmar thirty (30) calendar days or more after the date of the RA.</p>
                    </li>
                    <li>
                        <p className="para">Returns without a valid RA number or missing the RA number.</p>
                    </li>
                    <li>
                        <p className="para">Overfilled, reconstituted or mixed filled Product package</p>
                    </li>
                    </ul>                 
                </div>
                </div>

                <div className="privacy_pointer">
                <div className="subtitle_40">TRANSPORTATION:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">Transportation charges on all returned goods are the responsibility of the customer except when due to an LPI error, as determined by LPI.</p>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="privacy_pointer">
                <div className="subtitle_40">THIRD PARTY PROCESSING:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">Third party processors must comply with all requirements of LPI’s Return Goods Policy.</p>
                        </li>
                        <li>
                            <p className="para">LPI will not process returns using pricing from the third party’sinternally generated price list.</p>
                        </li>
                        <li>
                            <p className="para">LPI will not reimburse any service fees to the customer of processing agent for the miscellaneous fees (i.e., handling, processing fees) or freight charges incurred.</p>
                        </li>
                        <li>
                            <p className="para">Third party returns must be in compliance with LPI’sreturn policy.</p>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="privacy_pointer">
                <div className="subtitle_40">TERMS OF POLICY:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">For direct customers, LPI will issue credit for returns that will be calculated at the lower of the original net invoice price, or current net contract price less a ten percent (10%) processing fee.</p>
                        </li>
                        <li>
                            <p className="para">For direct customers returning a non-contract Product purchased indirectly, a credit will be given at a predetermined LPI return price less a ten percent (10%) processing fee.</p>
                        </li>
                        <li>
                            <p className="para">For third-party customers, the return will be valued and a credit issued at calculated net contract price to your wholesaler or distributor less a ten percent (10%) processing fee, or if such a price is not readily available then a predetermined LPI return price less a ten percent (10%) processing fee will be applied.</p>
                        </li>
                        <li>
                            <p className="para">LPI reserves the right to make the final determination on the valuation of the return.</p>
                        </li>
                        <li>
                            <p className="para">Full bottles will be issued a full credit.</p>
                        </li>
                        <li>
                            <p className="para">LPI will not accept deductions from invoices for returns but will instead issue a credit memo. Please do not make any deductions from remittances in anticipation of credit.</p>
                        </li>
                        <li>
                            <p className="para">Return good credit must be taken within one year of the date issued or the credit will expire.</p>
                        </li>
                        <li>
                            <p className="para">Proof of return is the customer’s responsibility.</p>
                        </li>
                        <li>
                            <p className="para">A customer will not be permitted to return LPI Product in the current calendar year in excess of one percent (1%) of the customer’s LPI Product purchases from the prior calendar year.</p>
                        </li>
                        <li>
                            <p className="para">The period of customer Sales return claims arising out of audit should not be more than 18 months from the date of Audit intimation.</p>
                        </li>
                        <li>
                            <p className="para">Audit frequency should not be more than once in a 5 year cycle</p>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="privacy_pointer">
                <div className="subtitle_40">DISCLAIMERS:</div>
                <div className="para_content">
                    <ul className="inner_list unOrder_list">
                        <li>
                            <p className="para">LPI does not pay or reimburse fees incurred for the processing of or destruction of Products processed through a third party returns processing company.

                            </p>
                        </li>
                        <li>
                            <p className="para">Products that do not qualify for credit or reimbursement will be destroyed and not returned to the customer. Customer will be notified of non-credited items.</p>
                        </li>
                        <li>
                            <p className="para">LPI reserves the right to change or update this policy upon written notice to customers.</p>
                        </li>   
                    </ul>
                </div>
                </div>
              </div>
            </div>
            </div>
        </section>
      </main>
    </>
  )
}



