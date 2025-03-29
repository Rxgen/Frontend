'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import TermsPopup from './terms-popup';

export default function ClientLayoutWrapper({ children }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

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