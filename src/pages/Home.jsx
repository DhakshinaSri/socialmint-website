import { Link } from 'react-router-dom';
import { Share2, BarChart3 } from 'lucide-react';
import { usePageSeo } from '../hooks/useSeo.js';
import { brand, home } from '../data/content.js';
import { IconChip } from '../components/Icon.jsx';
import Mark from '../components/Mark.jsx';

export default function Home() {
  usePageSeo('home');
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="container hero-grid">
          <div>
            <span className="kicker">{brand.tagline}</span>
            <h1 id="home-title">{home.headline}</h1>
            <p className="lead">{home.lead}</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn--primary">
                {home.cta}
              </Link>
              <Link to="/services" className="btn btn--outline">
                Our Services
              </Link>
            </div>
          </div>

          <ul className="mosaic" aria-label="Focus areas">
            <li className="tile tile--sun" style={{ '--i': 0 }}>
              <Share2 className="tile-icon" aria-hidden="true" />
              <span className="tile-title">{brand.descriptors[0]}</span>
            </li>
            <li className="tile tile--carrot" style={{ '--i': 2 }}>
              <div className="tile-bars" aria-hidden="true">
                {[38, 62, 48, 86, 70, 100].map((h, i) => (
                  <span key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
              <span className="tile-title">
                <BarChart3 className="tile-icon" aria-hidden="true" style={{ marginBottom: 12 }} />
                {brand.descriptors[2]}
              </span>
            </li>
            <li className="tile tile--cream" style={{ '--i': 1 }} aria-hidden="true">
              <Mark className="tile-mark" />
            </li>
            <li className="tile tile--kiwi" style={{ '--i': 3 }}>
              <svg className="tile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="40" height="40">
                <path d="M12 3a9 9 0 1 0 9 9" />
                <circle cx="12" cy="12" r="3.2" />
                <path d="M17 3v4M15 5h4" />
              </svg>
              <span className="tile-title">{brand.descriptors[1]}</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--white" aria-label="Introduction">
        <div className="container split">
          <p className="intro-lead">{home.intro[0]}</p>
          <div className="prose">
            <p>{home.intro[1]}</p>
            <p>{home.intro[2]}</p>
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="stronger-title">
        <div className="container split">
          <h2 id="stronger-title">{home.stronger.title}</h2>
          <div className="prose">
            {home.stronger.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="what-title">
        <div className="container">
          <div className="section-head">
            <h2 id="what-title">{home.whatWeDo.title}</h2>
          </div>
          <ul className="grid grid--3">
            {home.whatWeDo.items.map((item, i) => (
              <li key={item.title} className={`card tone-${i}`}>
                <IconChip name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="section-actions">
            <Link to="/services" className="btn btn--outline">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--kiwi" aria-labelledby="direction-title">
        <div className="container">
          <div className="split">
            <h2 id="direction-title">{home.direction.title}</h2>
            <div className="prose">
              {home.direction.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <p className="intro-lead" style={{ marginTop: 40, maxWidth: '40ch' }}>
            {home.direction.approach}
          </p>
          <ol className="approach" aria-label="Our approach">
            {home.direction.steps.map((s) => (
              <li key={s}>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="built-title">
        <div className="container split">
          <h2 id="built-title">{home.built.title}</h2>
          <div className="prose">
            {home.built.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="ready-title">
        <div className="container">
          <div className="cta-band">
            <div>
              <h2 id="ready-title">{home.ready.title}</h2>
              {home.ready.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link to="/contact" className="btn btn--primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
