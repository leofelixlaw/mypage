import { useState } from 'react';
import Section from './Section';
import { experience, yearsOfExperience } from '../data';

function Points({ points }) {
  return <ul className="bullets">{points.map((p) => <li key={p}>{p}</li>)}</ul>;
}

export default function Experience() {
  const [open, setOpen] = useState(0);
  return (
    <Section id="experience" tone="tint" eyebrow="Career" title="Experience" intro={`${yearsOfExperience()}+ years of frontend development across travel, airline and enterprise products.`}>
      <ol className="timeline">
        {experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <li key={job.company} className={`timeline__item ${isOpen ? 'is-open' : ''}`}>
              <span className="timeline__dot" aria-hidden="true" />
              <div className="card job">
                <button type="button" className="job__head" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span className="job__period">{job.period}</span>
                  <span className="job__title">
                    <strong>{job.company}</strong>
                    <span>{job.role} · {job.location}</span>
                  </span>
                  <span className="job__chevron" aria-hidden="true" />
                </button>
                <div className="job__body" hidden={!isOpen}>
                  <p className="muted">{job.summary}</p>
                  {job.points && <Points points={job.points} />}
                  {job.roles && job.roles.map((r) => (
                    <div key={r.title} className="job__role">
                      <h4>{r.title} <small>{r.period}</small></h4>
                      <Points points={r.points} />
                    </div>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
