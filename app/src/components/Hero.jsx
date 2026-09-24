import { useEffect, useState } from 'react';
import { profile, yearsOfExperience } from '../data';

function useRotatingWord(words, delay = 2200) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % words.length), delay);
    return () => clearInterval(t);
  }, [words, delay]);
  return words[i];
}

export default function Hero() {
  const word = useRotatingWord(profile.roles);
  const years = yearsOfExperience();

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="hero__badge"><span className="dot" /> Available for new opportunities</span>
          <h1>
            Hi, I’m <span className="hl">{profile.name}</span>
            <br />
            {profile.title}
          </h1>
          <p className="hero__lead">
            {years}+ years crafting fast, accessible and beautiful web apps with{' '}
            <span key={word} className="hero__word">{word}</span>
          </p>
          <div className="hero__actions">
            <a href="#experience" className="btn btn--primary">View experience</a>
            <a href="#contact" className="btn btn--ghost">Get in touch</a>
          </div>
          <ul className="hero__meta">
            <li>📍 {profile.location}</li>
            <li>✉️ <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          </ul>
        </div>

        <div className="hero__code" aria-hidden="true">
          <div className="code-card">
            <div className="code-card__bar"><i /><i /><i /><span>leo-felix.ts</span></div>
            <pre>
<span className="k">const</span> <span className="v">developer</span> = {'{'}{'\n'}
{'  '}name: <span className="s">'{profile.name}'</span>,{'\n'}
{'  '}role: <span className="s">'{profile.title}'</span>,{'\n'}
{'  '}experience: <span className="s">'{years}+ years'</span>,{'\n'}
{'  '}stack: [<span className="s">'Angular'</span>, <span className="s">'React'</span>, <span className="s">'Vue.js'</span>],{'\n'}
{'  '}styling: [<span className="s">'SCSS'</span>, <span className="s">'Design Systems'</span>],{'\n'}
{'  '}location: <span className="s">'Trichy, India'</span>,{'\n'}
{'  '}openToWork: <span className="b">true</span>,{'\n'}
{'}'};
            </pre>
          </div>
        </div>
      </div>
      <a href="#about" className="hero__scroll" aria-label="Scroll to About"><span /></a>
    </section>
  );
}
