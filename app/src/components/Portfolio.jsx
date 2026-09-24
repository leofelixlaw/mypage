import Section from './Section';
import { portfolio } from '../data';

export default function Portfolio() {
  return (
    <Section id="portfolio" eyebrow="Selected work" title="Portfolio" intro="A selection of travel and web products I have designed and built.">
      <ul className="works">
        {portfolio.map((w) => (
          <li key={w.title}>
            <a href={w.href} target="_blank" rel="noopener noreferrer" className="work">
              <img src={w.image} alt={`${w.title} screenshot`} loading="lazy" />
              <span className="work__overlay">
                <span className="work__tag">{w.tag}</span>
                <strong>{w.title}</strong>
                <span className="work__link">View project ↗</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
