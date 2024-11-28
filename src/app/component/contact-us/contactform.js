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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      alert("You must accept the terms to submit the form.");
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}api/contact-forms`, {
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

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        // Optionally show a success message or reset the form
        alert("Your submission has been successfully sent!");
        setFormData({
          name: "",
          organization: "",
          email: "",
          contact: "",
          subject: "",
          query: "",
          acceptedTerms: false,
        });
      } else {
        throw new Error("Failed to submit the form.");
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
          </label>
          <label className="form_label">
            <input
              type="text"
              placeholder="ORGANIZATION"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </label>
          <label className="form_label">
            <input
              type="email"
              placeholder="EMAIL"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="form_label">
            <input
              type="number"
              placeholder="CONTACT"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            />
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
        </div>
      </form>
    </section>
  );
}
