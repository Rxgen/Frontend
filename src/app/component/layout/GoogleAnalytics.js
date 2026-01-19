'use client';

import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

export default function GoogleAnalytics() {
  const pathname = usePathname();

  const updateConsent = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Wait for gtag to be available (scripts load asynchronously)
    const checkAndUpdate = () => {
      // Ensure dataLayer and gtag are initialized
      if (!window.dataLayer) {
        window.dataLayer = [];
      }
      if (!window.gtag) {
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
      }

      // STEP 1: GPC detection MUST happen FIRST (before any consent update)
      // Check navigator.globalPrivacyControl
      // Returns true → GPC is enabled and detected
      // Returns false or undefined → GPC is not enabled
      const gpcValue = navigator.globalPrivacyControl;
      const gpcEnabled = gpcValue === true; // Explicitly check for true (handles false and undefined)
      
      // STEP 2: If GPC is enabled, ALWAYS deny (override user choice)
      if (gpcEnabled) {
        // GPC detected - force deny all tracking
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
        
        // Also update dataLayer for GTM
        window.dataLayer.push({
          'event': 'consent_update',
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
        return;
      }

      // STEP 3: Check user consent
      const storedPrefs = localStorage.getItem('cookiePreferences');
      
      if (!storedPrefs) {
        // No consent yet - keep default denied state
        return;
      }

      const prefs = JSON.parse(storedPrefs);

      // STEP 4: Update consent based on user choice (GPC already checked above)
      if (prefs?.analytics === true) {
        // User accepted - grant consent (TRUE)
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted',
          'ad_storage': prefs?.advertisement ? 'granted' : 'denied',
          'ad_user_data': prefs?.advertisement ? 'granted' : 'denied',
          'ad_personalization': prefs?.advertisement ? 'granted' : 'denied'
        });
        
        // Also update dataLayer for GTM
        window.dataLayer.push({
          'event': 'consent_update',
          'analytics_storage': 'granted',
          'ad_storage': prefs?.advertisement ? 'granted' : 'denied',
          'ad_user_data': prefs?.advertisement ? 'granted' : 'denied',
          'ad_personalization': prefs?.advertisement ? 'granted' : 'denied'
        });
      } else {
        // User rejected - deny consent
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
        
        // Also update dataLayer for GTM
        window.dataLayer.push({
          'event': 'consent_update',
          'analytics_storage': 'denied',
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied'
        });
      }
    };

    // Try immediately, or wait a bit if scripts are still loading
    if (window.gtag) {
      checkAndUpdate();
    } else {
      // Wait for gtag to be available (max 2 seconds)
      let attempts = 0;
      const maxAttempts = 20;
      const interval = setInterval(() => {
        attempts++;
        if (window.gtag || attempts >= maxAttempts) {
          clearInterval(interval);
          checkAndUpdate();
        }
      }, 100);
    }
  }, [pathname]);

  useEffect(() => {
    updateConsent();

    // Listen for storage events (cross-tab)
    window.addEventListener('storage', updateConsent);

    // Listen for custom consent change events (same-tab)
    window.addEventListener('cookieConsentChanged', updateConsent);

    return () => {
      window.removeEventListener('storage', updateConsent);
      window.removeEventListener('cookieConsentChanged', updateConsent);
    };
  }, [updateConsent]);

  return null;
}
