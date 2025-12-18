'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import TermsPopup from './terms-popup';

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
      {mounted && isHomepage && <TermsPopup />}
    </>
  );
}