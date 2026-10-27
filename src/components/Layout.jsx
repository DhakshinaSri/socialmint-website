import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout() {
  const { pathname, hash } = useLocation();
  const mainRef = useRef(null);
  const first = useRef(true);

  // On page change: jump to the section in the hash, or reset scroll and move focus
  // to <main> so keyboard and screen-reader users start at the new content.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
    if (!first.current) mainRef.current?.focus({ preventScroll: true });
    first.current = false;
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="skip-link" onClick={(e) => { e.preventDefault(); mainRef.current?.focus(); mainRef.current?.scrollIntoView(); }}>
        Skip to main content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} style={{ outline: 'none' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
