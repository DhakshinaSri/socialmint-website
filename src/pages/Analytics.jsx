import { usePageSeo } from '../hooks/useSeo.js';
import { analytics } from '../data/content.js';
import PageHero from '../components/PageHero.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { IconChip } from '../components/Icon.jsx';

function ChartVisual() {
  const bars = [34, 52, 44, 70, 62, 88];
  return (
    <div className="chart-visual" aria-hidden="true">
      <svg viewBox="0 0 360 260" width="100%" role="presentation">
        <rect x="0" y="0" width="360" height="260" rx="20" fill="#FBF7EC" />
        {[60, 110, 160, 210].map((y) => (
          <line key={y} x1="24" x2="336" y1={y} y2={y} stroke="#E7DDBF" strokeWidth="2" />
        ))}
        {bars.map((h, i) => (
          <rect
            key={i}
            x={34 + i * 52}
            y={230 - h * 2}
            width="34"
            height={h * 2}
            rx="9"
            fill={['#FFCA26', '#9ABC04', '#F3E8CC', '#F86015', '#FFCA26', '#9ABC04'][i]}
            stroke="#19532B"
            strokeWidth="2"
          />
        ))}
        <polyline
          points="51,150 103,118 155,132 207,86 259,100 311,52"
          fill="none"
          stroke="#19532B"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[[51, 150], [103, 118], [155, 132], [207, 86], [259, 100], [311, 52]].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="6" fill="#fff" stroke="#19532B" strokeWidth="3" />
        ))}
      </svg>
    </div>
  );
}

export default function Analytics() {
  usePageSeo('analytics');
  return (
    <>
      <PageHero
        crumb="Marketing Analytics"
        kicker={analytics.kicker}
        title={analytics.headline}
        lead={analytics.paragraphs[0]}
        shapes={<ChartVisual />}
      />

      <section className="section section--white" aria-label="Our analytics approach">
        <div className="container split">
          <p className="intro-lead">{analytics.paragraphs[1]}</p>
          <div className="prose">
            <p>{analytics.paragraphs[2]}</p>
            <p>{analytics.paragraphs[3]}</p>
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="understand-title">
        <div className="container">
          <div className="section-head">
            <h2 id="understand-title">{analytics.understandTitle}</h2>
          </div>
          <ul className="analytics-grid">
            {analytics.understand.map((u, i) => (
              <li key={u.title} className={`card tone-${i}`}>
                <IconChip name={u.icon} />
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--white" aria-labelledby="decisions-title">
        <div className="container split">
          <h2 id="decisions-title">{analytics.decisions.title}</h2>
          <div className="prose">
            {analytics.decisions.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--kiwi" aria-label="Summary">
        <div className="container">
          <div className="statement">
            <p>{analytics.closing}</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
