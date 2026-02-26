"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import CookieConsentPopup from "./CookiePreferencePopup";

export default function CookiePopup() {
  const [isMainPopupVisible, setIsMainPopupVisible] = useState(false);
  const [isPreferencePopupVisible, setIsPreferencePopupVisible] = useState(false);
  const [showSecondBanner, setShowSecondBanner] = useState(false);

  const [isPrivacyPopupVisible, setIsPrivacyPopupVisible] = useState(false);
  const [isGPCBannerVisible, setIsGPCBannerVisible] = useState(false);

  const [gpcEnabled, setGpcEnabled] = useState(false);

  // -----------------------------
  // Helpers
  // -----------------------------
  const lockBodyScroll = () => document.body.classList.add("overflow");
  const unlockBodyScroll = () => document.body.classList.remove("overflow");

  const checkGPC = () => {
    if (typeof window === "undefined" || typeof navigator === "undefined") return false;
    return navigator.globalPrivacyControl === true;
  };

  const getStoredPreferences = () => {
    try {
      const stored = localStorage.getItem("cookiePreferences");
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      // If JSON is corrupted, remove it
      localStorage.removeItem("cookiePreferences");
      return null;
    }
  };

  const dispatchConsentChange = () => {
    // Notify GA component in same tab
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  // -----------------------------
  // Main logic: Decide what to show
  // -----------------------------
  const syncPopupState = useCallback(() => {
    if (typeof window === "undefined") return;

    const gpc = checkGPC();
    setGpcEnabled(gpc);

    const prefs = getStoredPreferences();

    // ✅ CASE 1: GPC enabled
    // - Hide main cookie banner
    // - Show GPC popup only once (optional)
    if (gpc) {
      setIsMainPopupVisible(false);
      setShowSecondBanner(false);

      // Show GPC banner only once per browser
      const gpcShown = localStorage.getItem("gpc_banner_shown");
      if (!gpcShown) {
        setIsGPCBannerVisible(true);
        lockBodyScroll();
        localStorage.setItem("gpc_banner_shown", "1");
      } else {
        setIsGPCBannerVisible(false);
        unlockBodyScroll();
      }

      return;
    }

    // ✅ CASE 2: GPC not enabled
    // - Show main cookie banner only if no saved preferences
    if (!prefs) {
      setIsMainPopupVisible(true);
      lockBodyScroll();
    } else {
      setIsMainPopupVisible(false);
      unlockBodyScroll();
    }
  }, []);

  // -----------------------------
  // On mount
  // -----------------------------
  useEffect(() => {
    syncPopupState();

    // If user changes consent in another tab
    const onStorage = () => syncPopupState();
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
      unlockBodyScroll();
    };
  }, [syncPopupState]);

  // -----------------------------
  // Handlers
  // -----------------------------
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

    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    dispatchConsentChange();

    // Show your second banner as per existing UI behaviour
    if (showSecondBanner) {
      setIsMainPopupVisible(false);
      setShowSecondBanner(false);
      unlockBodyScroll();
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

    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
    dispatchConsentChange();

    setIsMainPopupVisible(false);
    setShowSecondBanner(false);
    unlockBodyScroll();

    // Show privacy popup
    setIsPrivacyPopupVisible(true);
    lockBodyScroll();
  };

  const closePrivacyPopup = () => {
    setIsPrivacyPopupVisible(false);
    unlockBodyScroll();
  };

  const closeGPCBanner = () => {
    setIsGPCBannerVisible(false);
    unlockBodyScroll();

    // Optional: Show privacy popup after closing GPC popup
    setIsPrivacyPopupVisible(true);
    lockBodyScroll();
  };

  return (
    <div>
      {/* MAIN COOKIE BANNER */}
      <div
        id="cookies_popup"
        className={`cookies_popup ${
          isMainPopupVisible && !isPreferencePopupVisible ? "active" : ""
        }`}
      >
        <div className="cookies_popup_container">
          <div className="subtitle_20">Consent to Collection Cookie</div>

          {!showSecondBanner && (
            <div className="firstBanner">
              <p className="para">
                This website uses cookies to enhance your overall web browsing experience, provide you with ads
                tailored to your interests, and allow us to measure our audience and collect other analytical data
                about the use of our website.
              </p>

              <p className="para">
                By clicking &quot;Accept All&quot; you consent to the collection of your personal information
                (which may include your Consumer Health Data) through 1st and 3rd party cookies (or similar). To edit
                your cookie preferences, use the options below.
              </p>

              <p className="para">
                For more information, please visit our{" "}
                <Link href="/privacy-policy" className="light_link border_link">
                  Privacy Statement
                </Link>
                .
              </p>
            </div>
          )}

          <div className="Secondbanner" style={{ display: showSecondBanner ? "inline-block" : "none" }}>
            <p className="para">Thank you for consenting to the use of cookies on our website.</p>
            <p className="para">
              We use cookies to enhance your overall web browsing experience, provide you with ads tailored to your
              interests, allow us to measure our audience, and collect other analytical data about the use of our
              website.
            </p>
            <p className="para">
              We share personal information (including Consumer Health Data) collected through cookies with our
              advertising and analytics partners.
            </p>
            <p className="para">
              By clicking &quot;Accept All&quot; you consent to the sharing of your personal information (including
              Consumer Health Data) through 1st and 3rd party cookies (or similar). To edit your cookie preferences,
              use the options below.
            </p>
            <p className="para">
              For more information, please visit our{" "}
              <Link href="/privacy-policy" className="light_link border_link">
                Privacy Statement
              </Link>
              .
            </p>
          </div>

          <div className="cookies_btn_container">
            <Link href="#" onClick={handleAcceptAll} className="green_bg">
              Accept All Cookies
            </Link>

            <Link href="#" onClick={handleRejectNonEssential} className="green_bg">
              Reject All Non-Essential Cookies
            </Link>

            <Link
              href="#"
              className="white_bg"
              onClick={(e) => {
                e.preventDefault();
                setIsPreferencePopupVisible(true);
              }}
            >
              Cookie Preference Center
            </Link>
          </div>

          <p className="para">
            Depending on where you live, you may also be able to exercise your right to opt out or withdraw your
            consent.
            <Link href="/your-privacy-choices" className="light_link border_link">
              Do Not Sell/Share My Personal Information
            </Link>
            .
          </p>
        </div>
      </div>

      {/* COOKIE PREFERENCE CENTER */}
      <CookieConsentPopup
        isActive={isPreferencePopupVisible}
        onClose={() => setIsPreferencePopupVisible(false)}
        onSavePreferences={() => {
          setIsPreferencePopupVisible(false);
          setShowSecondBanner(true);
          dispatchConsentChange();
        }}
      />

      {/* GPC POPUP (One-time) */}
      <div className={`privacyPopup optpopup ${isGPCBannerVisible ? "active" : ""}`} id="gpcBanner">
        <div className="privacyPopupOverlay" onClick={closeGPCBanner}></div>

        <div className="privacyPopupContent">
          <button className="popupClose" onClick={closeGPCBanner} type="button">
            ×
          </button>

          <h3>Global Privacy Control Detected</h3>
          <p>
            We have detected your Global Privacy Control (GPC) signal. In accordance with applicable privacy laws,
            we have automatically honored your preference and disabled all non-essential cookies and tracking.
          </p>
          <p>Only necessary cookies required for the website to function are enabled.</p>

          <button className="popupBtn" onClick={closeGPCBanner} type="button">
            Okay
          </button>
        </div>
      </div>

      {/* PRIVACY POPUP */}
      <div className={`privacyPopup optpopup ${isPrivacyPopupVisible ? "active" : ""}`} id="privacyPopup">
        <div className="privacyPopupOverlay" onClick={closePrivacyPopup}></div>

        <div className="privacyPopupContent">
          <button className="popupClose" onClick={closePrivacyPopup} type="button">×</button>

          <h3>Opt-Out Request Honored</h3>
          <p>
            We have respected your privacy preference. Your opt-out request through cookie settings or Global Privacy
            Control signal has been honored.
          </p>

          <button className="popupBtn" onClick={closePrivacyPopup} type="button">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
