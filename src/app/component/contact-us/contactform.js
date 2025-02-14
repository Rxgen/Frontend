'use client';

import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    number: '',
    subject: 'Product | Quality',
    query: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
  
    if (!formData.name) newErrors.name = 'This field is required';
    if (!formData.organization) newErrors.organization = 'This field is required';
    if (!formData.email) {
      newErrors.email = 'This field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.number) newErrors.number = 'This field is required';
    if (!formData.subject) newErrors.subject = 'This field is required';
    if (!formData.query) newErrors.query = 'This field is required';
    if (!formData.agree) newErrors.agree = 'You must agree to continue';
  
    return newErrors;
  };
  

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/leads`,
        { data: formData },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        
        setSuccessMessage('Thanks for contacting us!');

        await sendEmail(formData);

        setFormData({
          name: '',
          organization: '',
          email: '',
          number: '',
          subject: '',
          query: '',
          agree: false,
        });
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setSuccessMessage('Failed to submit. Please try again later.');
    }
  };

  const sendEmail = async (formData) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        setSuccessMessage(result.message); // Success message
      } else {
        setSuccessMessage(result.message || 'Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSuccessMessage('Failed to send email. Please try again later.');
    }
  };

  return (
    <section data-section="contact_form" className="contact_form">
      <h2 className="subtitle_60">Contact Us</h2>
      <form onSubmit={handleSubmit} className="form_detail">
        <div className="form_container">
          <label className="form_label">
            <input
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <span className="error_message">{errors.name}</span>}
          </label>

          <label className="form_label">
            <input
              type="text"
              name="organization"
              placeholder="ORGANIZATION"
              value={formData.organization}
              onChange={handleInputChange}
            />
            {errors.organization && <span className="error_message">{errors.organization}</span>}
          </label>

          <label className="form_label">
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <span className="error_message">{errors.email}</span>}
          </label>

          <label className="form_label">
            <input
              type="number"
              name="number"
              placeholder="CONTACT"
              value={formData.number}
              onChange={handleInputChange}
            />
            {errors.number && <span className="error_message">{errors.number}</span>}
          </label>

          <label className="form_label form_select">

            
            <select
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            >
             <option value="Product | Quality">Product | Quality</option>
                <option value="Product | Adverse events">Product | Adverse events</option>
                <option value="Product | Customer service">Product | Customer service</option>
                <option value="Product | Patient assistance">Product | Patient assistance</option>
                <option value="Product | Clinical trials">Product | Clinical trials</option>
                <option value="Partner with Lupin in the U.S. | Business development"> Partner with Lupin in the U.S. | Business development</option>
                <option value="Media Contact">Media Contact</option>
                <option value="Other Enquiry">Other Enquiry</option>
                
            </select>
            {errors.subject && <span className="error_message">{errors.subject}</span>}
          </label>

          <label className="form_label form_textarea">
            <textarea
              name="query"
              rows="10"
              placeholder="POST YOUR QUERY"
              value={formData.query}
              onChange={handleInputChange}
            ></textarea>
            {errors.query && <span className="error_message">{errors.query}</span>}
          </label>
        </div>

        <div className="contact_terms">
        {errors.agree && <span className="error_message">{errors.agree}</span>}
          <label>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleInputChange}
            />
            I agree and accept the Privacy Policy and the Terms of use of this website
          </label>
          
        </div>

        <button type="submit" className="green_cta">
          <div className="cta_container">
            <span>Submit</span>
            <Image
              src="/images/icons/white_arrow.webp"
              alt=""
              width="20"
              height="14"
            />
          </div>
        </button>

        {successMessage && <div className="success_message">{successMessage}</div>}
      </form>
    </section>
  );
};

export default ContactForm;
