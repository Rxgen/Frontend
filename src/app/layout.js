import { Inter } from 'next/font/google';
import './globals.css';
import Header from './component/layout/header';
import Footer from './component/layout/footer';
import SmartGuide from './component/layout/smartguide';
import ClientLayoutWrapper from './component/layout/ClientLayoutWrapper';
//import { GoogleTagManager } from './component/layout/GoogleAnalytics';
import GoogleAnalytics from './component/layout/GoogleAnalytics';
import CookiePopup from './component/layout/cookie';
import GoogleTagManagerNoscript from './component/layout/GoogleTagManagerNoscript';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children ,isHomepage}) {
  const GA_ID = 'G-Z65NXZ560J';
  const GTM_ID = 'GTM-WFD9MZW';

  return (
    <html lang="en">
      <head>
        {/* Google Consent Mode v2 - Default to denied, visible in page source for SEO */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              // Google Consent Mode v2 - Default state: denied (no tracking until consent)
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
            `,
          }}
        />
        
        {/* Google Tag Manager - Visible in page source for SEO */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','` + GTM_ID + `');
            `,
          }}
        />
        
        {/* Google Analytics - Visible in page source for SEO */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '` + GA_ID + `', {
                anonymize_ip: true
              });
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {/* Analytics ONLY after consent */}
        <GoogleAnalytics />
        <GoogleTagManagerNoscript />
        <main id="wrapper" className="wrapper">
          <ClientLayoutWrapper isHomepage={isHomepage}>
            {children}
          </ClientLayoutWrapper>
          <SmartGuide />
          <CookiePopup />
        </main>
        <Footer />
      </body>
    </html>
  );
}