'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CookieConsentPopup from './CookiePreferencePopup';

export default function CookiePopup() {
  const [isMainPopupVisible, setIsMainPopupVisible] = useState(false);
  const [isPreferencePopupVisible, setIsPreferencePopupVisible] = useState(false);

  
  useEffect(() => {
    const checkConsent = () => {
      const show = localStorage.getItem('triggerCookies');
      if (show === 'true') {
        setIsMainPopupVisible(true);
        document.body.classList.add('overflow');
        localStorage.removeItem('triggerCookies');
      }
    };
    checkConsent();
    window.addEventListener('storage', checkConsent);

    return () => {
      window.removeEventListener('storage', checkConsent);
    };
  }, []);

  const handleAcceptAll = (e) => {
    e.preventDefault();
    const preferences = {
      necessary: true,
      functional: true,
      performance: true,
      analytics: true,
      advertisement: true,
      others: true,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsMainPopupVisible(false);
    document.body.classList.remove('overflow');

    // Optional: dynamically load analytics
    // loadGoogleAnalytics();
  };

  const handleRejectNonEssential = (e) => {
    e.preventDefault();
    const preferences = {
      necessary: true,
      functional: false,
      performance: false,
      analytics: false,
      advertisement: false,
      others: false,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setIsMainPopupVisible(false);
    document.body.classList.remove('overflow');
  };


  return (
    <div>

      <div id="cookies_popup" className={`cookies_popup ${isMainPopupVisible && !isPreferencePopupVisible ? 'active' : ''}`}>
        <div className="cookies_popup_container">
          <div className="subtitle_20">Consent to Collection CookieTest</div>
  
          <p className="para">
            This website uses cookies to enhance your overall web browsing experience, provide you with ads tailored to your interests,
            and allow us to measure our audience and collect other analytical data about the use of our website.
          </p>
  
          <p className="para">
            By clicking "Accept All" you consent to the collection of your personal information (which may include your Consumer Health Data)
            through 1st and 3rd party cookies (or similar). To edit your cookie preferences, use the options below.
          </p>
  
          <p className="para">
            For more information, please visit our <Link href="/privacy-policy" className="light_link border_link">Privacy Statement</Link>.
          </p>
  
          <div className="cookies_btn_container">
            <Link href="#" onClick={handleAcceptAll} className="green_bg">Accept All Cookies</Link>
            <Link href="#" onClick={handleRejectNonEssential} className="green_bg">Reject All Non-Essential Cookies</Link>
            <Link href="#" className="white_bg" onClick={() => setIsPreferencePopupVisible(true)}>Cookie Preference Center</Link>
            
          </div>
  
          <p className="para">
            Depending on where you live, you may also be able to exercise your right to opt out or withdraw your consent.
            <Link href="/your-privacy-choices" className="light_link border_link">Do Not Sell/Share My Personal Information</Link>.
          </p>
        </div>
      </div>

      <CookieConsentPopup 
      isActive={isPreferencePopupVisible}
      onClose={() => setIsPreferencePopupVisible(false)}
      />
    </div>
  );
}
