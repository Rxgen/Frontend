'use client';

  export default function GoogleTagManagerNoscript() {
    const gtmId = "GTM-WFD9MZW";
    
    return (
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }}
      />
    );
  }

  
  
