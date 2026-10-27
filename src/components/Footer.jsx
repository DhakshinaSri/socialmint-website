import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { brand } from '../data/content.js';
import { routes } from '../data/routes.js';

const byKey = Object.fromEntries(routes.map((r) => [r.key, r]));
const colA = ['about', 'why', 'how', 'faq'];
const colB = ['services', 'analytics', 'industries', 'contact'];

function Col({ keys, name }) {
  return (
    <nav className="footer-nav" aria-label={name}>
      <ul>
        {keys.map((k) => (
          <li key={k}>
            <Link to={byKey[k].path}>{byKey[k].label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand-link" aria-label="SocialMint home">
              <Logo height={26} />
            </Link>
            <p>{brand.tagline}</p>
            <ul className="descriptors" aria-label="Focus areas">
              {brand.descriptors.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <Col keys={colA} name="Company" />
          <Col keys={colB} name="Services and contact" />
        </div>
        <div className="footer-bottom">
          {brand.name} — {brand.tagline}
        </div>
      </div>
    </footer>
  );
}
