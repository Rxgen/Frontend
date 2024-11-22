import { Inter } from "next/font/google";
import "./globals.css";  
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Advanced Floor Tiles & Flooring Solutions - Welspun Flooring",
  description: "Find the complete flooring solutions at Welspun flooring. choose from the best designer &amp; modern floor tiles collections inspired by various elements of everyday life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Header />
    
        {children}
        <Footer />
        </body>
    </html>
  );
}