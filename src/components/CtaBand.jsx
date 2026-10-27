import { Link } from 'react-router-dom';
import { home } from '../data/content.js';

export default function CtaBand() {
  return (
    <section className="cta-wrap" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2 id="cta-title">{home.ready.title}</h2>
            <p>{home.ready.paragraphs[1]}</p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
