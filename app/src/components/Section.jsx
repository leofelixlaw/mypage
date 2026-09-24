import { useReveal } from '../hooks';

export default function Section({ id, eyebrow, title, intro, tone = 'light', children }) {
  const [ref, visible] = useReveal();
  return (
    <section id={id} className={`section section--${tone}`}>
      <div ref={ref} className={`container reveal ${visible ? 'is-visible' : ''}`}>
        <header className="section__head">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {intro && <p className="section__intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
