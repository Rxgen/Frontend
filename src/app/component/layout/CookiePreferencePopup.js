'use client';
import { useEffect, useState } from 'react';
import { setCookie, getCookie } from './utils/cookieUtils';
import { CookieAccordion } from './CookieAccordion';
import Link from 'next/link';
import Image from 'next/image';

const COOKIE_CATEGORIES = [
  'necessary',
  'functional',
  'performance',
  'analytics',
  'advertisement',
  'others',
];

const CookieConsentPopup = ({ isActive, onClose, onSavePreferences }) => {
  const [visible, setVisible] = useState(false);
  const [prefs, setPrefs] = useState({
    necessary: true,
    functional: false,
    performance: false,
    analytics: false,
    advertisement: false,
    others: false,
  });

  useEffect(() => {
    const seen = getCookie('viewed_cookie_policy');
    if (!seen) setVisible(true);
  }, []);

  const savePreferences = (e) => {
    e.preventDefault();
    COOKIE_CATEGORIES.forEach((cat) => {
      setCookie(`cookielawinfo-checkbox-${cat}`, prefs[cat]);
    });

    setCookie('viewed_cookie_policy', true);
    setVisible(false);
    onSavePreferences?.();
  };

  if (!visible && !isActive) return null;

  return (
    <div>
      <div className={`cookies_preferences ${isActive ? 'active' : ''}`}>
        <h3 className="subtitle_22">Consent to Collection Cookie</h3>
        <div className='para_container'>
          <p className="para">
            This website uses cookies to enhance your overall web browsing experience, provide you with ads tailored to your interests, and allow us to measure our audience and collect other analytical data about the use of our website.
          </p>
          <p className="para">
            By clicking &quot;Accept All&quot; you consent to the collection of your personal information (which may include your Consumer Health Data) through 1st and 3rd party cookies (or similar). To edit your cookie preferences, use the options below.
          </p>
          <p className="para">
            For more information, please visit our <Link href="/privacy-policy" className="light_link border_link">Privacy Statement</Link>.
          </p>
          <p className="para">
            Depending on where you live, you may also be able to exercise your right to opt out or withdraw your consent.
            <Link href="/your-privacy-choices" className="light_link border_link"> Do Not Sell/Share My Personal Information</Link>.
          </p>
        </div>

        <CookieAccordion preferences={prefs} setPreferences={setPrefs} />

        <div className="cookies_btn_container">
          <Link href="#" onClick={savePreferences} className="green_bg">
            Save & Accept
          </Link>
        </div>

        <Link href="#" className="close_cookies" onClick={(e) => {
          e.preventDefault();
          setVisible(false);
          onClose?.();
        }}>
          <Image src="/images/icons/close_popup.webp" alt="Close Popup" width={14} height={14} />
        </Link>
      </div>
    </div>
  );
};

export default CookieConsentPopup;
