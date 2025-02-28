import { Inter } from "next/font/google";
import "./globals.css";  
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import SmartGuide from "./component/layout/smartguide";




const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header />
       <main id="wrapper" className="wrapper">
        {children}
        <SmartGuide />

        </main>
        <Footer />
        
        </body>
    </html>
  );
}