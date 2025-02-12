"use client";
import Image from "next/image";

export default function PrivacyChoiceform() {
    return(
        <div className="para_content">
                            <form  className="form_detail">
                                <div className="form_container">
                                    <label htmlFor="" className="form_label">
                                        <input type="text" placeholder="Name" />
                                        <span className="error_message">Required this field</span>    
                                    </label>
                                    <label htmlFor="" className="form_label">
                                        <input type="text" placeholder="Last Name" />
                                        <span className="error_message">Required this field</span>    
                                    </label>
                                    <label htmlFor="" className="form_label">
                                        <input type="email" name="" id="" placeholder="Email" />
                                        <span className="error_message">Required this field</span>    
                                    </label>
                                    <label htmlFor="" className="form_label">
                                        <input type="email" name="" id="" placeholder="Confirm Email Address" />
                                        <span className="error_message">Required this field</span>    
                                    </label>
                                    <label htmlFor="" className="form_label">
                                        <input type="text" placeholder="Authorized Agent Name" />
                                    </label>
                                    <label htmlFor="" className="form_label">
                                        <input type="email" name="" id="" placeholder="Authorized Agent Email Address" />
                                    </label>
                                    <label htmlFor="" className="form_label form_select">
                                        <select name="" id="">
                                            <option value="" disabled defaultValue>State of Residency</option>
                                            <option value="">California</option>
                                            <option value="">Connecticut</option>
                                            <option value="">Nevada</option>
                                            <option value="">Washington</option>
                                        </select>
                                        <span className="error_message">Required this field</span>    
                                    </label>
                                    <label htmlFor="" className="form_label form_select">
                                        <select name="" id="">
                                            <option value="" disabled defaultValue>Select Your Right</option>
                                            <option value="">Revoke Consent For Processing Personal Information</option>
                                            <option value="">Opt Out of the Sale/Sharing of My Personal Information</option>
                                            <option value="">Update or Correct My Personal Information</option>
                                            <option value="">Delete My Personal Information</option>
                                            <option value="">Access My Personal Information</option>
                                            <option value="">Port My Personal Information</option>
                                        </select>
                                        <span className="error_message">Required this field</span>
                                    </label>
                                    
                                    <label htmlFor="" className="form_label form_textarea">
                                        <textarea name="" id="" cols="30" rows="10" placeholder="POST YOUR QUERY"></textarea>
                                    </label>

                                    <label htmlFor="" className="form_label form_select">
                                        <select name="" id="">
                                            <option value="" disabled defaultValue>Your Relationship to Lupin</option>
                                            <option value="">Individual Consumer</option>
                                            <option value="">Health Care Professional</option>
                                            <option value="">Job Applicant/Employee</option>
                                            <option value="">Distributor</option>
                                            <option value="">Vendor</option>
                                        </select>
                                        <span className="error_message">Required this field</span>
                                    </label>

                                    <span className="form_query">Do not include any sensitive personal information while submitting the request.</span>
                                </div>
                                <div className="contact_terms">
                                    <label>By submitting this form, you acknowledge that you understand that you may be sharing and that we may collect personal information relating to your health status.</label>
                                </div>
                                <button type="submit" className="green_cta">
                                    <div className="cta_container">
                                        <span>Submit</span>
                                        <Image src="/images/icons/white_arrow.webp" alt="White Arrow" width="20" height="14" />
                                    </div>
                                </button>
                                <div className="success_message">Thanks htmlFor contacting us</div>
                            </form>
                        </div>
    )
}