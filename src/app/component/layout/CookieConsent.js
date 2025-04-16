'use client'; 

import React, { useState, useEffect } from 'react';

export default function CookieConsentPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowPopup(true);
    }
  }, []);

  const handleConsent = (type) => {
    let prefs = {
      necessary: true,
      functional: type === 'all',
      performance: type === 'all',
      analytics: type === 'all',
      advertisement: type === 'all',
      others: type === 'all',
    };

    localStorage.setItem('cookieConsent', type);
    localStorage.setItem('cookiePrefs', JSON.stringify(prefs));

    document.cookie = `cookieConsent=${type}; path=/; max-age=31536000`;

    setShowPopup(false);

    if (type === 'all') {
      loadGoogleAnalytics(); // Optional: only load if allowed
    }
  };

  const loadGoogleAnalytics = () => {
    if (window.gtag) return;

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX'; // Replace with your GA ID
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXX');
  };

  if (!showPopup) return null;

  return (
    <div className="cookies_popup">
      <div className="cookies_popup_container">
        <div className="subtitle_20">Consent to Collection Cookie</div>
        <p className="para">
          This website uses cookies to enhance your overall web browsing experience, provide you with ads tailored to your interests, and allow
          us to measure our audience and collect other analytical data about the use of our website.
        </p>
        <p className="para">
          By clicking "Accept All" you consent to the collection of your personal information (which may include your Consumer Health Data)
          through 1st and 3rd party cookies (or similar). To edit your cookie preferences, use the options below.
        </p>
        <p className="para">
          For more information, please visit our <Link href="/privacy-policy" className="light_link border_link">Privacy Statement</Link>.
        </p>
        <div className="cookies_btn_container">
          <button className="green_bg" onClick={() => handleConsent('all')}>
            Accept All Cookies
          </button>
          <button className="green_bg" onClick={() => handleConsent('necessary')}>
            Reject All Non-Essential Cookies
          </button>
          <button className="white_bg" onClick={() => alert('Open preferences center')}>
            Cookie Preference Center
          </button>
        </div>
        <p className="para">
          Depending on where you live, you may also be able to exercise your right to opt out or withdraw your consent.{' '}
          <Link href="/your-privacy-choices" className="light_link border_link">Do Not Sell/Share My Personal Information</Link>.
        </p>
      </div>
    </div>
  );
}
