"use client";
import { Inter } from "next/font/google";
import "./globals.css";  
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import SmartGuide from "./component/layout/smartguide";
import TermsPopup from "./component/layout/terms-popup";
import { useEffect, useState } from "react";




const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const [isHomepage, setIsHomepage] = useState(false);
  useEffect(() => {
    if (window.location.pathname === "/") {
      setIsHomepage(true); 
    }
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
       <Header />
       <main id="wrapper" className="wrapper">
        {children}
        {isHomepage && <TermsPopup />}
        <SmartGuide />

        </main>
        <Footer />
        
        </body>
    </html>
  );
}