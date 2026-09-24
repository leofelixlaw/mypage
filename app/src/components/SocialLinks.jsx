import { socials } from '../data';

export default function SocialLinks({ className = '' }) {
  return (
    <ul className={`socials ${className}`}>
      {socials.map((s) => (
        <li key={s.label}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
            <span className="socials__icon" style={{ '--icon': `url(${s.icon})` }} />
          </a>
        </li>
      ))}
    </ul>
  );
}
