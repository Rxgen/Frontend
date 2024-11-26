import { Inter } from "next/font/google";
import "./globals.css";  
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import Popup from "./component/layout/popup";
import Sticky from "./component/layout/sticky";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lupin U.S. | Branded + Generic Pharmaceutical Company",
  description: "We are an innovative, transnational pharmaceutical company with a legacy of excellence in the U.S. and extensive experience in product development and R&D.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header />
    
        {children}
        <Popup />
        <Sticky />
        <Footer />
        </body>
    </html>
  );
}