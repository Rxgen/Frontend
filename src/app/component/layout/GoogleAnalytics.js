"use client" ;
import Script from "next/script";
import { usePathname } from 'next/navigation';

export function GoogleTagManager() {
  const pathname = usePathname();
  const isAlbuterolPage = pathname === "/product/albuterol-sulfate-inhalation-aerosol";
  const gtmId = isAlbuterolPage ? "GTM-WFD9MZW" : "G-Z65NXZ560J";
  

  return (
    <>
      
      <Script
        id="gtm-script"
        strategy="beforeInteractive" 
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
      />

      {/* GTM Inline Script */}
      <Script
        id="google-tag-manager"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtmId}');
          `,
        }}
      />
    </>
  );
}



