import { usePageSeo } from '../hooks/useSeo.js';
import { industries } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { IconChip } from '../components/Icon.jsx';

export default function Industries() {
  usePageSeo('industries');
  return (
    <>
      <PageHero crumb="Industries We Serve" title={industries.headline} lead={industries.lead} />
      <section className="section section--white" aria-label="Industries">
        <div className="container">
          <ul className="industry-grid">
            {industries.items.map((it, i) => (
              <li key={it.title} className={`card tone-${i}`}>
                <IconChip name={it.icon} />
                <h2 className="h3-card">{it.title}</h2>
                <p>{it.text}</p>
              </li>
            ))}
            <li className="closing-tile span-2">{industries.closing}</li>
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
