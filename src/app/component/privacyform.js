"use client";
import Image from "next/image";
import { useState } from 'react';
import axios from 'axios';

export default function PrivacyChoiceform() {
    const [formData, setFormData] = useState({
      first_name: '',  
      last_name: '',
      email: '',
      confirm_email: '',
      agent_name: '',
      agent_email: '',
      state: '',
      right: '',
      request: '',
      relationship: '',
      });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};

    // Validate fields
    if (!formData.first_name) newErrors.first_name = 'This field is required';
    if (!formData.last_name) newErrors.last_name = 'This field is required';
    if (!formData.email) {
      newErrors.email = 'This field is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.confirm_email) {
      newErrors.confirm_email = 'This field is required';
    } else if (formData.email !== formData.confirm_email) {
      newErrors.confirm_email = 'Emails must match';
    }

    if (!formData.agent_name) newErrors.agent_name = 'This field is required';
    if (!formData.agent_email) newErrors.agent_email = 'This field is required';
    if (!formData.state) newErrors.state = 'This field is required';
    if (!formData.right) newErrors.right = 'This field is required';
    if (!formData.request) newErrors.request = 'This field is required';
    if (!formData.relationship) newErrors.relationship = 'This field is required';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target; 
    setFormData({
      ...formData,
      [name]: value, 
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
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/privacy-leads`,
        { data: formData },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage('Thanks for contacting us!');
        setFormData({
          first_name: '',  // Ensure default value is an empty string
          last_name: '',
          email: '',
          confirm_email: '',
          agent_name: '',
          agent_email: '',
          state: '',
          right: '',
          request: '',
          relationship: '',
        });
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setSuccessMessage('Failed to submit. Please try again later.');
    }
  };

return(
  <div className="para_content">
    <form onSubmit={handleSubmit} className="form_detail">
  <div className="form_container">
    
    <label className="form_label">
      <input
        type="text"
        name="first_name"  
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleInputChange}
      />
      {errors.first_name && <span className="error_message">{errors.first_name}</span>}
    </label>

    
    <label className="form_label">
      <input
        type="text"
        name="last_name"  
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleInputChange}
      />
      {errors.last_name && <span className="error_message">{errors.last_name}</span>}
    </label>

    
    <label className="form_label">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {errors.email && <span className="error_message">{errors.email}</span>}
    </label>

    
    <label className="form_label">
      <input
        type="email"
        name="confirm_email"  
        placeholder="Confirm Email Address"
        value={formData.confirm_email}
        onChange={handleInputChange}
      />
      {errors.confirm_email && <span className="error_message">{errors.confirm_email}</span>}
    </label>

    
    <label className="form_label">
      <input
        type="text"
        name="agent_name" 
        placeholder="Authorized Agent Name"
        value={formData.agent_name}
        onChange={handleInputChange}
      />
      {errors.agent_name && <span className="error_message">{errors.agent_name}</span>}
    </label>

    
    <label className="form_label">
      <input
        type="email"
        name="agent_email"  
        placeholder="Authorized Agent Email Address"
        value={formData.agent_email}
        onChange={handleInputChange}
      />
      {errors.agent_email && <span className="error_message">{errors.agent_email}</span>}
    </label>

    
    <label className="form_label form_select">
      <select
        name="state"
        value={formData.state}
        onChange={handleInputChange}
      >
        <option value="" disabled>Select State of Residency</option>
        <option value="California">California</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Nevada">Nevada</option>
        <option value="Washington">Washington</option>
      </select>
      {errors.state && <span className="error_message">{errors.state}</span>}
    </label>

    
    <label className="form_label form_select">
      <select
        name="right"
        value={formData.right}
        onChange={handleInputChange}
      >
        <option value="" disabled>Select Your Right</option>
        <option value="Revoke Consent For Processing Personal Information">
          Revoke Consent For Processing Personal Information
        </option>
        <option value="Opt Out of the Sale/Sharing of My Personal Information">
          Opt Out of the Sale/Sharing of My Personal Information
        </option>
        <option value="Update or Correct My Personal Information">
          Update or Correct My Personal Information
        </option>
        <option value="Delete My Personal Information">Delete My Personal Information</option>
        <option value="Access My Personal Information">Access My Personal Information</option>
        <option value="Port My Personal Information">Port My Personal Information</option>
      </select>
      {errors.right && <span className="error_message">{errors.right}</span>}
    </label>

    
    <label className="form_label form_textarea">
      <textarea
        name="request"  
        placeholder="Elaborate On Your Request"
        value={formData.request}
        onChange={handleInputChange}
      ></textarea>
      {errors.request && <span className="error_message">{errors.request}</span>}
    </label>

    
    <label className="form_label form_select">
      <select
        name="relationship"
        value={formData.relationship}
        onChange={handleInputChange}
      >
        <option value="" disabled>Your Relationship to Lupin</option>
        <option value="Individual Consumer">Individual Consumer</option>
        <option value="Health Care Professional">Health Care Professional</option>
        <option value="Job Applicant/Employee">Job Applicant/Employee</option>
        <option value="Distributor">Distributor</option>
        <option value="Vendor">Vendor</option>
      </select>
      {errors.relationship && <span className="error_message">{errors.relationship}</span>}
    </label>
    <button type="submit" className="green_cta">
      <div className="cta_container">
        <span>Submit</span>
      </div>
    </button>
  </div>
</form>
{successMessage && <div className="success_message">{successMessage}</div>}
</div>
    )
}