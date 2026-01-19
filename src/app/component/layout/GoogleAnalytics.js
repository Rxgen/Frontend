'use client';

import { useEffect, useCallback, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  // Load GA script only after user accepts (not initially)
  const loadTrackingScripts = useCallback(() => {
    if (scriptsLoaded || typeof window === 'undefined') return;

    // Determine GA ID based on pathname
    const isAlbuterolPage = pathname === '/product/albuterol-sulfate-inhalation-aerosol';
    const GA_ID = isAlbuterolPage ? 'GTM-WFD9MZW' : 'G-Z65NXZ560J';

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    // Initialize gtag function
    window.gtag = window.gtag || function() {
      window.dataLayer.push(arguments);
    };

    // Load GA script dynamically
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    
    gaScript.onload = () => {
      window.gtag('js', new Date());
      
      // Configure GA (consent already granted since user accepted)
      window.gtag('config', GA_ID, {
        anonymize_ip: true
      });
    };
    
    document.head.appendChild(gaScript);

    setScriptsLoaded(true);
  }, [pathname, scriptsLoaded]);

  const updateConsent = useCallback(() => {
    // STEP 1: GPC detection MUST happen FIRST (before any GTM/GA logic)
    const gpcEnabled = typeof window !== 'undefined' && navigator.globalPrivacyControl === true;
    
    // STEP 2: If GPC is enabled, DO NOT load scripts at all (even if user accepted)
    if (gpcEnabled) {
      // GPC detected - scripts never load, tracking never starts
      return;
    }

    // STEP 3: Check user consent
    const storedPrefs = localStorage.getItem('cookiePreferences');
    
    if (!storedPrefs) {
      // No consent yet - don't load scripts
      return;
    }

    const prefs = JSON.parse(storedPrefs);

    // STEP 4: Only load scripts if user accepted analytics AND GPC is OFF
    if (prefs?.analytics === true) {
      // User accepted AND GPC is OFF - load scripts
      if (!scriptsLoaded) {
        loadTrackingScripts();
      }
    } else {
      // User rejected - don't load scripts
    }
  }, [pathname, scriptsLoaded, loadTrackingScripts]);

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
