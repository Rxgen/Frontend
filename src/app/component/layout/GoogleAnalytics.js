import Script from "next/script";

export function GoogleTagManager() {
  const gtmId = "G-Z65NXZ560J";

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
