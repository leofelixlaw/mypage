import Section from './Section';
import { education } from '../data';

export default function Education() {
  return (
    <Section id="education" tone="tint" eyebrow="Background" title="Education">
      <ul className="edu">
        {education.map((e) => (
          <li key={e.degree} className="card edu__item">
            <span className="edu__icon" aria-hidden="true">🎓</span>
            <div>
              <h3>{e.degree}</h3>
              <p className="muted">{e.school} · {e.period}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
