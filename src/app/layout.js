import { Inter } from 'next/font/google';
import './globals.css';
import Header from './component/layout/header';
import Footer from './component/layout/footer';
import SmartGuide from './component/layout/smartguide';
import ClientLayoutWrapper from './component/layout/ClientLayoutWrapper';
import { GoogleTagManager } from './component/layout/GoogleAnalytics';
import CookiePopup from './component/layout/cookie';
import GoogleTagManagerNoscript from './component/layout/GoogleTagManagerNoscript';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children ,isHomepage}) {
  
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
        
      </head>
      <body className={inter.className}>
        <Header />
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