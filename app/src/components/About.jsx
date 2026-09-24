import Section from './Section';
import { highlights, profile, stats, yearsOfExperience } from '../data';

export default function About() {
  const years = yearsOfExperience();
  return (
    <Section id="about" eyebrow="About me" title="Who am I?" intro={`Senior Frontend Developer with ${years}+ years of experience building responsive, scalable and high-performance web applications.`}>
      <ul className="stats">
        {stats.map((s) => (
          <li key={s.label} className="card stats__item">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>

      <div className="about">
        <div className="about__text">
          <p>
            I’m a frontend developer who loves turning complex products into simple, fast interfaces. Over {years}+ years
            I’ve built travel booking engines, a travel metasearch platform, airline marketing tools and enterprise HR
            and timesheet systems.
          </p>
          <p>
            My core stack is <strong>Angular</strong> (Angular 19+, Standalone Components, Signals, RxJS, NgRx) and{' '}
            <strong>React</strong> (Hooks, Redux), with TypeScript, JavaScript (ES6+), HTML5 and SCSS. I build reusable
            component libraries and design systems, and I care about performance: I’ve cut page load times by more than
            50% on travel platforms.
          </p>
          <p>
            I also work with Vue.js, Node.js, Express.js, NestJS, PostgreSQL and Azure, design in Figma, Sketch and
            Adobe XD, and use AI-assisted tools like Cursor AI and Claude AI to ship faster.
          </p>
          <p className="muted">Domain knowledge: Travel, Airline Retailing, Human Resource Management, e-Commerce and Workflow Automation.</p>
          <ul className="chips">
            {highlights.map((h, i) => <li key={h} className={i < 2 ? 'is-hl' : ''}>{h}</li>)}
          </ul>
        </div>

        <aside className="card profile-card">
          <div className="profile-card__avatar">LF</div>
          <h3>{profile.name}</h3>
          <p className="muted">{profile.title}</p>
          <dl>
            <div><dt>Date of birth</dt><dd>{profile.dob}</dd></div>
            <div><dt>Nationality</dt><dd>{profile.nationality}</dd></div>
            <div><dt>Address</dt><dd>{profile.location}</dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={profile.phoneHref}>{profile.phone}</a></dd></div>
          </dl>
        </aside>
      </div>
    </Section>
  );
}
