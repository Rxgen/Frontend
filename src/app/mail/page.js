'use client';

import { useState } from 'react';

const MailPage = () => {
  const [message, setMessage] = useState('');

  const sendEmail = async () => {
    console.log("Hii");
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message); // Success message
      } else {
        setMessage(result.message || 'Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to send email. Please try again later.');
    }
  };

  return (
    <section>
        <div style={{ marginTop: '123px' }}>
        <button onClick={sendEmail} className="product_btn black_cta">Send Email</button>
        </div>
      
     

      {message && <p>{message}</p>} {/* Show success or error message */}
    </section>
  );
};

export default MailPage;

