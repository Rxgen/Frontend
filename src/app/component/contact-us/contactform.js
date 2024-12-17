"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    contact: "",
    subject: "",
    query: "",
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
        newErrors.name = ' Name is required';
    }

    if (!formData.organization.trim()) {
        newErrors.organization = 'Organization is required';
    }

    if (!formData.contact.trim()) {
        newErrors.contact = 'Contact Number is required';
    } else if (!/^\d{10}$/.test(formData.contact)) {
        newErrors.contact = 'Contact Number must be 10 digits';
    }

    if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
        newErrors.subject = 'Subject is required';
    }

    if (!formData.query.trim()) {
        newErrors.query = 'Message is required';
    }

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    console.log('Validation Errors:', newErrors); 
    return Object.keys(newErrors).length === 0;
};

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);

    if (!validateForm()) {
      console.log('Form is invalid'); 
      return; 
    }
    console.log('Form is valid');

    
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact-forms`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formData }),
      });

console.log("API URL for Form Submting",`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact-forms`)
      if (response.ok) {
        console.log("responce is okay");
        setSuccess(true);
        setFormData({
          name: "",
          organization: "",
          email: "",
          contact: "",
          subject: "",
          query: "",
          acceptedTerms: false,
        });
        setErrors({});
    } else {
      const result = await response.json();
       console.error('Error response:', result);
       setErrors({ form: result?.error?.message || 'Submission failed' });
      }
    };  

  return (
    <section data-section="contact_form" className="contact_form">
      <form onSubmit={handleSubmit} className="form_detail">
        <div className="form_container">
          <label className="form_label">
            <input
              type="text"
              placeholder="NAME"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error_message">{errors.name}</span>}
          </label>
          <label className="form_label">
            <input
              type="text"
              placeholder="ORGANIZATION"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
            {errors.organization && <span className="error_message">{errors.organization}</span>}
          </label>
          <label className="form_label">
            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error_message">{errors.email}</span>}
          </label>
          <label className="form_label">
            <input
              type="number"
              placeholder="CONTACT"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
            {errors.contact && <span className="error_message">{errors.contact}</span>}
          </label>
          <label className="form_label form_select">
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="" disabled defaultValue>
                SELECT SUBJECT LINE
              </option>
              <option value="Active">Active Pharmaceutical Ingredients (API) Related Enquiry</option>
              <option value="medicine">Medicine Availability Related Enquiry</option>
              <option value="drug">Drug Adverse Effect/Adverse Event Related/Product Complaint/Medical Information Enquiry</option>
              <option value="careers">Careers</option>
              <option value="suppliers">For Suppliers</option>
              <option value="Other"> Other Enquiry</option>
            </select>
            {errors.subject && <span className="error_message">{errors.subject}</span>}
          </label>
          <label className="form_label form_textarea">
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              cols="30"
              rows="10"
              placeholder="POST YOUR QUERY"
            ></textarea>
          {errors.query && <span className="error_message">{errors.query}</span>}
          </label>
        </div>
        <button type="submit" className="green_cta">
          <div className="cta_container">
            <span>Submit</span>
            <Image
              src="/images/icons/white_arrow.webp"
              alt="Submit"
              width="20"
              height="14"
            />
          </div>
        </button>
        <div className="contact_terms">
          <label htmlFor="term_check">
            I agree and accept the Privacy Policy and the Terms of use of this website
          </label>
          <input
            type="checkbox"
            name="acceptedTerms"
            id="term_check"
            checked={formData.acceptedTerms}
            onChange={handleChange}
          />
          {errors.acceptedTerms && <span className="error_message">{errors.acceptedTerms}</span>}
        </div>
        {errors.form && <p className="error_message">{errors.form}</p>}
        {success && <p className="form_success">Thank you! Your message has been sent successfully.</p>}
      </form>
    </section>
  );
}
