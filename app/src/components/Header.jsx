import { useState } from 'react';
import { nav, profile } from '../data';
import { useActiveSection, useScrolled } from '../hooks';

const ids = nav.map((n) => n.id);

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const scrolled = useScrolled();

  return (
    <header className={`site-header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container site-header__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand__mark">LF</span>
          <span className="brand__text">{profile.name}</span>
        </a>
        <button
          type="button"
          className={`nav-toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <nav className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} className="btn btn--sm btn--primary site-nav__cta">Hire me</a>
        </nav>
      </div>
    </header>
  );
}
