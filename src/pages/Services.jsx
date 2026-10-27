import { Check } from 'lucide-react';
import { usePageSeo } from '../hooks/useSeo.js';
import { services } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { IconChip } from '../components/Icon.jsx';

export default function Services() {
  usePageSeo('services');
  return (
    <>
      <PageHero crumb="Our Services" title={services.headline} />

      <section className="section section--white" aria-labelledby="overview-title">
        <div className="container">
          <h2 id="overview-title" className="sr-only">Our Services</h2>
          <ol className="grid grid--4">
            {services.overview.map((s, i) => (
              <li key={s.id}>
                <a className={`card service-card tone-${i}`} href={`#${services.detailed[i].id}`}>
                  <span className="num" aria-hidden="true">{i + 1}</span>
                  <IconChip name={s.icon} />
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="details-title">
        <h2 id="details-title" className="sr-only">Our Services in detail</h2>
        <div className="container services-layout">
          <nav className="services-nav" aria-label="Services">
            <ul>
              {services.detailed.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            {services.detailed.map((s, i) => (
              <article key={s.id} id={s.id} className={`detail tone-${i}`}>
                <div className="detail-head">
                  <IconChip name={s.icon} />
                  <h3>{s.title}</h3>
                </div>
                {s.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                <p className="list-label">{services.listLabel}</p>
                <ul className="check-list">
                  {s.list.map((li) => (
                    <li key={li}>
                      <Check aria-hidden="true" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
                {s.note && <p className="note">{s.note}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
