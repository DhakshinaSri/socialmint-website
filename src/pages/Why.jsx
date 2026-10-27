import { usePageSeo } from '../hooks/useSeo.js';
import { why } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { IconChip } from '../components/Icon.jsx';

export default function Why() {
  usePageSeo('why');
  return (
    <>
      <PageHero crumb="Why Choose SocialMint?" title="Why Choose SocialMint?" lead={why.headline} />
      <section className="section section--white" aria-label="Reasons to choose SocialMint">
        <div className="container">
          <ul className="grid grid--3">
            {why.items.map((it, i) => (
              <li key={it.title} className={`card tone-${i}`}>
                <IconChip name={it.icon} />
                <h2 className="h3-card">{it.title}</h2>
                <p>{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section--cream" aria-labelledby="honest-title">
        <div className="container">
          <div className="honest">
            <h2 id="honest-title">{why.honest.title}</h2>
            <p>{why.honest.text}</p>
          </div>
          <p className="closing-line">{why.closing}</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
