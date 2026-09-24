import { useState } from 'react';
import Section from './Section';
import { techGroups } from '../data';

export default function TechStack() {
  const [filter, setFilter] = useState('All');
  const groups = filter === 'All' ? techGroups : techGroups.filter((g) => g.name === filter);
  const total = techGroups.reduce((n, g) => n + g.items.length, 0);

  return (
    <Section id="stack" tone="dark" eyebrow={`${total} technologies`} title="Tech Stack" intro="Frameworks, languages and tools I’ve learnt and used over the years.">
      <div className="filters" role="tablist" aria-label="Filter technologies">
        {['All', ...techGroups.map((g) => g.name)].map((name) => (
          <button key={name} type="button" role="tab" aria-selected={filter === name} className={filter === name ? 'is-active' : ''} onClick={() => setFilter(name)}>
            {name}
          </button>
        ))}
      </div>
      {groups.map((group) => (
        <div key={group.name} className="tech-group">
          <h3>{group.name}</h3>
          <ul className="tech-grid">
            {group.items.map((t) => (
              <li key={t.name}>
                <a href={t.url} target="_blank" rel="noopener noreferrer" className="tech-tile" title={t.name}>
                  <img src={t.icon} alt="" loading="lazy" width="40" height="40" />
                  <span>{t.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
}
