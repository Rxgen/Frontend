"use client";
import { useState } from "react";

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

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact-forms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            organization: formData.organization,
            email: formData.email,
            contact: formData.contact,
            subject: formData.subject,
            query: formData.query,
            acceptedTerms: formData.acceptedTerms,
          },
        }),
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
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again later.");
    }
  };

  return (
    <section data-section="contact_form" className="contact_form">
      <form onSubmit={handleSubmit}>
        <div className="form_container">
          <label className="form_label">
            <input
              type="text"
              placeholder="NAME"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="form_error">{errors.name}</span>}
          </label>
          <label className="form_label">
            <input
              type="text"
              placeholder="ORGANIZATION"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
            {errors.organization && <span className="form_error">{errors.organization}</span>}
          </label>
          <label className="form_label">
            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="form_error">{errors.email}</span>}
          </label>
          <label className="form_label">
            <input
              type="number"
              placeholder="CONTACT"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
            {errors.contact && <span className="form_error">{errors.contact}</span>}
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
              <option value="subject1">Subject Line 1</option>
              <option value="subject2">Subject Line 2</option>
              <option value="subject3">Subject Line 3</option>
            </select>
            {errors.subject && <span className="form_error">{errors.subject}</span>}
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
          {errors.query && <span className="form_error">{errors.query}</span>}
          </label>
        </div>
        <button type="submit" className="green_cta">
          <div className="cta_container">
            <span>Submit</span>
            <img
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
          {errors.acceptedTerms && <span className="form_error">{errors.acceptedTerms}</span>}
        </div>
        {errors.form && <p className="form_error">{errors.form}</p>}
        {success && <p className="form_success">Thank you! Your message has been sent successfully.</p>}
      </form>
    </section>
  );
}
