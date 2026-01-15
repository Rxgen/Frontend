'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
// import TermsPopup from './terms-popup'; // Commented out - disabled on homepage

export default function ClientLayoutWrapper({ children }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';
  //const isHomepage = pathname.toLowerCase() === '/' || pathname.toLowerCase() === '/us';

  

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {children}
      {/* TermsPopup disabled on homepage - can be re-enabled later */}
      {/* {mounted && isHomepage && <TermsPopup />} */}
    </>
  );
}