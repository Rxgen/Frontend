'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import CookieConsentPopup from './CookiePreferencePopup';

export default function CookiePopup() {
  const [isMainPopupVisible, setIsMainPopupVisible] = useState(false);
  const [isPreferencePopupVisible, setIsPreferencePopupVisible] = useState(false);
  const [showSecondBanner, setShowSecondBanner] = useState(false);
  const [isPrivacyPopupVisible, setIsPrivacyPopupVisible] = useState(false);
  const [isGPCBannerVisible, setIsGPCBannerVisible] = useState(false);
  const [gpcEnabled, setGpcEnabled] = useState(false);

  // Check for GPC signal on page load
  const checkGPC = () => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
    
    // Check navigator.globalPrivacyControl
    // Returns true → GPC is enabled and detected
    // Returns false or undefined → GPC is not enabled
    const gpcValue = navigator.globalPrivacyControl;
    
    // Explicitly check for true (handles false and undefined cases)
    if (gpcValue === true) {
      return true; // GPC enabled
    }
    
    // If undefined or false, GPC is not enabled
    return false;
  };

  useEffect(() => {
    // STEP 1: Page Load - User visits website
    
    // STEP 2: GPC Detection - MUST happen FIRST (before any other logic)
    const gpc = checkGPC();
    setGpcEnabled(gpc);

    const checkConsent = () => {
      const hasPreferences = localStorage.getItem('cookiePreferences');

      // Re-check GPC signal (always check first - before any GTM/GA logic)
      const currentGPC = checkGPC();
      setGpcEnabled(currentGPC);
      
      // STEP 3: Show Cookie Consent Banner
      // Banner must always be visible until user clicks Accept/Reject/Manage Preferences
      if (!hasPreferences) {
        setIsMainPopupVisible(true);
        document.body.classList.add('overflow');
      } else {
        // User has made a choice - hide banner
        setIsMainPopupVisible(false);
        document.body.classList.remove('overflow');
      }
    };

    checkConsent();
    window.addEventListener('storage', checkConsent);
    
    // Monitor GPC signal changes (check periodically)
    const gpcCheckInterval = setInterval(() => {
      const currentGPC = checkGPC();
      if (currentGPC !== gpcEnabled) {
        setGpcEnabled(currentGPC);
        checkConsent();
      }
    }, 1000);

    return () => {
      window.removeEventListener('storage', checkConsent);
      clearInterval(gpcCheckInterval);
    };
  }, [gpcEnabled, isMainPopupVisible]);

  const handleAcceptAll = (e) => {
    e.preventDefault();
    
    // User can Accept All even with GPC, but GPC will override in GoogleAnalytics component
    const preferences = {
      necessary: true,
      functional: true,
      performance: true,
      analytics: true,
      advertisement: true,
      others: true,
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    
    // Dispatch custom event to notify GoogleAnalytics component
    // GoogleAnalytics will check GPC and override if needed
    // Use setTimeout to ensure localStorage is written before event fires
    setTimeout(() => {
      window.dispatchEvent(new Event('cookieConsentChanged'));
    }, 0);

    if (showSecondBanner) {
      setIsMainPopupVisible(false);
      setShowSecondBanner(false);
      document.body.classList.remove('overflow');
    } else {
      setShowSecondBanner(true);
    }
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
    
    // Dispatch custom event to notify GoogleAnalytics component
    window.dispatchEvent(new Event('cookieConsentChanged'));
    
    setIsMainPopupVisible(false);
    setShowSecondBanner(false);
    document.body.classList.remove('overflow');
    
    // Show privacy popup
    setIsPrivacyPopupVisible(true);
    document.body.classList.add('overflow');
  };

  const closePrivacyPopup = () => {
    setIsPrivacyPopupVisible(false);
    document.body.classList.remove('overflow');
  };

  const closeGPCBanner = () => {
    setIsGPCBannerVisible(false);
    document.body.classList.remove('overflow');
    // Show privacy popup after closing GPC banner
    setIsPrivacyPopupVisible(true);
    document.body.classList.add('overflow');
  };

  return (
    <div>
      <div id="cookies_popup" className={`cookies_popup ${isMainPopupVisible && !isPreferencePopupVisible ? 'active' : ''}`}>
        <div className="cookies_popup_container">
          <div className="subtitle_20">Consent to Collection Cookie</div>

          {!showSecondBanner && (
            <div className="firstBanner">
              {/* GPC Message - Show when GPC is detected */}
              {gpcEnabled && (
                <div style={{ 
                  backgroundColor: '#f0f8ff', 
                  border: '1px solid #0066cc', 
                  borderRadius: '4px', 
                  padding: '12px', 
                  marginBottom: '16px' 
                }}>
                  <p className="para" style={{ margin: 0, fontWeight: 'bold', color: '#0066cc' }}>
                    🔒 Global Privacy Control detected. Non-essential cookies are disabled by default.
                  </p>
                  <p className="para" style={{ margin: '8px 0 0 0', fontSize: '0.9em' }}>
                    You can still choose to accept all cookies if you wish, but your GPC preference will be respected for tracking purposes.
                  </p>
                </div>
              )}
              
              <p className="para">
                This website uses cookies to enhance your overall web browsing experience, provide you with ads tailored to your interests,
                and allow us to measure our audience and collect other analytical data about the use of our website.
              </p>
              <p className="para">
                By clicking &quot;Accept All&quot; you consent to the collection of your personal information (which may include your Consumer Health Data)
                through 1st and 3rd party cookies (or similar). To edit your cookie preferences, use the options below.
              </p>
              <p className="para">
                For more information, please visit our <Link href="/privacy-policy" className="light_link border_link">Privacy Statement</Link>.
              </p>
            </div>
          )}

          <div className="Secondbanner" style={{ display: showSecondBanner ? 'inline-block' : 'none' }}>
            <p className="para">Thank you for consenting to the use of cookies on our website.</p>
            <p className="para">We use cookies to enhance your overall web browsing experience, provide you with ads tailored to your interests, allow us to measure our audience, and collect other analytical data about the use of our website.</p>
            <p className="para">We share personal information (including Consumer Health Data) collected through cookies with our advertising and analytics partners.</p>
            <p className="para">By clicking &quot;Accept All&quot; you consent to the sharing of your personal information (including Consumer Health Data) through 1st and 3rd party cookies (or similar). To edit your cookie preferences, use the options below.</p>
            <p className="para">For more information, please visit our <Link href="/privacy-policy" className="light_link border_link">Privacy Statement</Link>.</p>
          </div>

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
        onSavePreferences={() => {
          setIsPreferencePopupVisible(false);
          setShowSecondBanner(true);
        }}
      />

      {/* GPC Signal Banner - Shows when GPC signal is detected */}
      <div className={`privacyPopup optpopup ${isGPCBannerVisible ? 'active' : ''}`} id="gpcBanner">
        <div className="privacyPopupOverlay" onClick={closeGPCBanner}></div>

        <div className="privacyPopupContent">
          <button className="popupClose" onClick={closeGPCBanner} type="button">×</button>

          <h3>Global Privacy Control Detected</h3>
          <p>
            We have detected your Global Privacy Control (GPC) signal. In accordance with California law, 
            we have automatically honored your privacy preference and disabled all non-essential cookies and tracking.
          </p>
          <p>
            Your opt-out request has been honored. Only necessary cookies required for the website to function 
            are enabled.
          </p>

          <button className="popupBtn" onClick={closeGPCBanner} type="button">Okay</button>
        </div>
      </div>

      {/* Privacy Popup - Shows when user rejects all non-essential cookies */}
      <div className={`privacyPopup optpopup ${isPrivacyPopupVisible ? 'active' : ''}`} id="privacyPopup">
        <div className="privacyPopupOverlay" onClick={closePrivacyPopup}></div>

        <div className="privacyPopupContent">
          <button className="popupClose" onClick={closePrivacyPopup} type="button">×</button>

          <h3>Opt-Out Request Honored</h3>
          <p>
          We have respected your privacy preference. Your opt-out request through cookie settings or Global Privacy Control signal has been honored.
          </p>

          <button className="popupBtn" onClick={closePrivacyPopup} type="button">Okay</button>
        </div>
      </div>
    </div>
  );
}
