'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const [canLoadGA, setCanLoadGA] = useState(false);

  const checkConsent = () => {
    const gpcEnabled = typeof window !== 'undefined' && navigator.globalPrivacyControl === true;

    const storedPrefs = localStorage.getItem('cookiePreferences');
    if (!storedPrefs) {
      setCanLoadGA(false);
      return;
    }

    const prefs = JSON.parse(storedPrefs);

    // Block GA if rejected OR GPC is enabled
    if (prefs?.analytics === true && !gpcEnabled) {
      setCanLoadGA(true);
    } else {
      setCanLoadGA(false);
    }
  };

  useEffect(() => {
    checkConsent();

    // Listen for storage events (cross-tab)
    window.addEventListener('storage', checkConsent);

    // Listen for custom consent change events (same-tab)
    window.addEventListener('cookieConsentChanged', checkConsent);

    return () => {
      window.removeEventListener('storage', checkConsent);
      window.removeEventListener('cookieConsentChanged', checkConsent);
    };
  }, []);

  if (!canLoadGA) return null;

  // Page-specific measurement ID
  const isAlbuterolPage = pathname === '/product/albuterol-sulfate-inhalation-aerosol';
  const GA_ID = isAlbuterolPage ? 'GTM-WFD9MZW' : 'G-Z65NXZ560J';

  return (
    <>
      {/* Load GA library AFTER consent */}
      <Script
        id="ga-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* Initialize GA AFTER consent */}
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              anonymize_ip: true
            });
          `,
        }}
      />
    </>
  );
}
