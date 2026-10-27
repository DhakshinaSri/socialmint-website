import { usePageSeo } from '../hooks/useSeo.js';
import { about } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { IconChip } from '../components/Icon.jsx';

export default function About() {
  usePageSeo('about');
  return (
    <>
      <PageHero crumb="About Us" kicker={about.kicker} title={about.headline} lead={about.paragraphs[0]} />

      <section className="section section--white" aria-label="About SocialMint">
        <div className="container split">
          <p className="intro-lead">{about.paragraphs[1]}</p>
          <div className="prose">
            {about.paragraphs.slice(2).map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-label="Mission and vision">
        <div className="container mv-grid">
          <div className="mv-card mv-card--sun">
            <h2>{about.mission.title}</h2>
            <p>{about.mission.text}</p>
          </div>
          <div className="mv-card mv-card--kiwi">
            <h2>{about.vision.title}</h2>
            <p>{about.vision.text}</p>
          </div>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="beliefs-title">
        <div className="container">
          <div className="section-head">
            <h2 id="beliefs-title">{about.beliefsTitle}</h2>
          </div>
          <ul className="beliefs">
            {about.beliefs.map((b, i) => (
              <li key={b.title} className={`card tone-${i}`}>
                <IconChip name={b.icon} />
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="way-title">
        <div className="container">
          <div className="way split">
            <h2 id="way-title">{about.way.title}</h2>
            <div className="prose">
              {about.way.paragraphs.map((p) => (
                <p key={p} style={{ color: 'var(--ink)' }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
