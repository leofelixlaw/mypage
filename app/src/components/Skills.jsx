import Section from './Section';
import { languages, skillBars } from '../data';
import { useReveal } from '../hooks';

export default function Skills() {
  const [ref, visible] = useReveal(0.3);
  return (
    <Section id="skills" eyebrow="What I do best" title="My Skills" intro="Passionate about simple yet sophisticated user experiences that my clients and I are proud of.">
      <div className="skills" ref={ref}>
        <ul className="bars">
          {skillBars.map((s) => (
            <li key={s.name}>
              <div className="bars__label"><span>{s.name}</span><span>{s.level}%</span></div>
              <div className="bars__track"><div className="bars__fill" style={{ width: visible ? `${s.level}%` : 0 }} /></div>
            </li>
          ))}
        </ul>
        <div className="card langs">
          <h3>Languages</h3>
          <ul>
            {languages.map((l) => <li key={l.name}><strong>{l.name}</strong><span>{l.level}</span></li>)}
          </ul>
        </div>
      </div>
    </Section>
  );
}
