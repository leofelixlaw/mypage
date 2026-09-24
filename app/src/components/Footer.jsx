import { useEffect, useState } from 'react';
import SocialLinks from './SocialLinks';
import { profile } from '../data';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; SCSS.</p>
        <SocialLinks className="socials--light" />
      </div>
      <a href="#top" className={`to-top ${showTop ? 'is-visible' : ''}`} aria-label="Back to top">↑</a>
    </footer>
  );
}
