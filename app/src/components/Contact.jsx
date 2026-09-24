import { useState } from 'react';
import Section from './Section';
import SocialLinks from './SocialLinks';
import { profile } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <Section id="contact" tone="tint" eyebrow="Contact" title="Let’s work together" intro="Open to full-time and freelance frontend roles. Available to join immediately.">
      <div className="contact">
        <div className="card contact__main">
          <h3>Say hello 👋</h3>
          <p className="muted">The fastest way to reach me is by email or LinkedIn. I usually reply within a day.</p>
          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${profile.email}?subject=Hello%20Leo`}>Email me</a>
            <button type="button" className="btn btn--outline" onClick={copyEmail}>{copied ? 'Copied ✓' : 'Copy email'}</button>
            <a className="btn btn--outline" href="https://www.linkedin.com/in/leo-felix-95b4552a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="card contact__info">
          <div><span className="label">Location</span><a href={profile.mapUrl} target="_blank" rel="noopener noreferrer">{profile.location}</a></div>
          <div><span className="label">Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
          <div><span className="label">Phone</span><a href={profile.phoneHref}>{profile.phone}</a></div>
          <div><span className="label">Find me online</span><SocialLinks /></div>
        </div>
      </div>
    </Section>
  );
}
