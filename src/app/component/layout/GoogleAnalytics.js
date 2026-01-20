"use client";

import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function GoogleAnalytics() {
  const pathname = usePathname();

  // -----------------------------
  // Helpers
  // -----------------------------
  const isGPCEnabled = () => {
    if (typeof window === "undefined" || typeof navigator === "undefined") return false;
    return navigator.globalPrivacyControl === true;
  };

  const safeParsePrefs = () => {
    try {
      const stored = localStorage.getItem("cookiePreferences");
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      // If corrupted JSON, remove it and fallback to denied
      localStorage.removeItem("cookiePreferences");
      return null;
    }
  };

  const ensureGtagReady = () => {
    // Ensure dataLayer exists
    if (!window.dataLayer) window.dataLayer = [];

    // Ensure gtag function exists
    if (!window.gtag) {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
    }
  };

  const setConsentDefaultDenied = () => {
    // Consent Mode default should be denied until user accepts
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  };

  const applyConsent = (consent) => {
    window.gtag("consent", "update", consent);

    // Optional: push to dataLayer (useful if GTM is used)
    window.dataLayer.push({
      event: "consent_update",
      ...consent,
    });
  };

  // -----------------------------
  // Main Consent Update Logic
  // -----------------------------
  const updateConsent = useCallback(() => {
    if (typeof window === "undefined") return;

    ensureGtagReady();
    setConsentDefaultDenied();

    // STEP 1: If GPC is enabled -> ALWAYS deny
    if (isGPCEnabled()) {
      applyConsent({
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      return;
    }

    // STEP 2: Read user preferences
    const prefs = safeParsePrefs();

    // If user has not made a choice yet -> keep denied
    if (!prefs) return;

    // STEP 3: Apply user consent
    const analyticsGranted = prefs?.analytics === true;
    const adsGranted = prefs?.advertisement === true;

    if (analyticsGranted) {
      applyConsent({
        analytics_storage: "granted",
        ad_storage: adsGranted ? "granted" : "denied",
        ad_user_data: adsGranted ? "granted" : "denied",
        ad_personalization: adsGranted ? "granted" : "denied",
      });
    } else {
      applyConsent({
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }, []);

  // -----------------------------
  // Pageview Tracking (optional)
  // Only track if allowed (no GPC + analytics consent true)
  // -----------------------------
  const trackPageView = useCallback(() => {
    if (typeof window === "undefined") return;

    // Don't track if GPC is enabled
    if (isGPCEnabled()) return;

    const prefs = safeParsePrefs();
    if (!prefs || prefs?.analytics !== true) return;

    ensureGtagReady();

    // If GA4 is configured, this will work:
    // window.gtag("event", "page_view", { page_path: pathname });
    // (Keeping minimal to avoid config mismatch issues)
    window.gtag("event", "page_view", {
      page_path: pathname,
    });
  }, [pathname]);

  // -----------------------------
  // Effects
  // -----------------------------
  useEffect(() => {
    // Run once on mount + whenever route changes
    updateConsent();
    trackPageView();

    // Cross-tab updates
    const onStorage = () => updateConsent();

    // Same-tab custom event from cookie.js
    const onConsentChanged = () => updateConsent();

    window.addEventListener("storage", onStorage);
    window.addEventListener("cookieConsentChanged", onConsentChanged);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("cookieConsentChanged", onConsentChanged);
    };
  }, [updateConsent, trackPageView]);

  return null;
}
