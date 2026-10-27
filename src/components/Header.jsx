import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { routes } from '../data/routes.js';

const navRoutes = routes.filter((r) => r.key !== 'home' && r.key !== 'contact');
const label = (r) => r.shortLabel || r.label;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const buttonRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-link" aria-label="SocialMint home">
          <Logo height={26} />
        </Link>

        <nav className="nav-desktop" aria-label="Main">
          <ul className="nav-list">
            {navRoutes.map((r) => (
              <li key={r.key}>
                <NavLink to={r.path} className="nav-link" end>
                  {label(r)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Link to="/contact" className="btn btn--primary header-cta">
          Contact Us
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          <span>Menu</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="nav-mobile" aria-label="Main">
          <ul>
            {navRoutes.map((r) => (
              <li key={r.key}>
                <NavLink to={r.path} className="nav-link" end>
                  {r.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" className="btn btn--primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
