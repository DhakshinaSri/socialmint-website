import { usePageSeo } from '../hooks/useSeo.js';
import { how } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function How() {
  usePageSeo('how');
  return (
    <>
      <PageHero crumb="How We Work" title={how.headline} />
      <section className="section section--white" aria-label="Our process">
        <div className="container">
          <ol className="timeline">
            {how.steps.map((s) => (
              <li key={s.number}>
                <span className="step-num" aria-hidden="true">{s.number}</span>
                <div className="card">
                  <h2 className="h3-card"><span className="sr-only">Step {s.number}: </span>{s.title}</h2>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
