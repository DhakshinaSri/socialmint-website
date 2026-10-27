import { Plus } from 'lucide-react';
import { usePageSeo } from '../hooks/useSeo.js';
import { faq } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function Faq() {
  usePageSeo('faq');
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
  return (
    <>
      <PageHero crumb="Frequently Asked Questions" title={faq.headline} />
      <section className="section section--white" aria-label="Questions and answers">
        <div className="container">
          <div className="faq-list">
            {faq.items.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>
                  <h2 className="faq-q">{item.q}</h2>
                  <span className="plus" aria-hidden="true">
                    <Plus size={20} />
                  </span>
                </summary>
                <p className="answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CtaBand />
    </>
  );
}
