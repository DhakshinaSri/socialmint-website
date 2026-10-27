import { Link } from 'react-router-dom';

export default function PageHero({ crumb, kicker, title, lead, children, shapes }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <div className="container page-hero-grid">
        <div>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span aria-current="page">{crumb}</span>
              </li>
            </ol>
          </nav>
          {kicker && <span className="kicker">{kicker}</span>}
          <h1 id="page-title">{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
        {shapes || (
          <div className="hero-shapes" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        )}
      </div>
    </section>
  );
}
