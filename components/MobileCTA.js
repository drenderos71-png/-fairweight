'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function MobileCTA() {
  const pathname = usePathname();
  const es = pathname.startsWith('/es');
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // Hide while the hero (which has its own CTA) is on screen; reveal
    // once the visitor scrolls into the second section and beyond.
    const hero = document.querySelector('.hero, .page-hero');
    if (!hero) { setShown(true); return; }

    if (typeof IntersectionObserver === 'undefined') { setShown(true); return; }
    const io = new IntersectionObserver(
      ([e]) => setShown(e.intersectionRatio < 0.12),
      { threshold: [0, 0.12, 0.5, 1] }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [pathname]);

  return (
    <div
      className="mobile-cta"
      style={{ transform: shown ? 'translateY(0)' : 'translateY(120%)', pointerEvents: shown ? 'auto' : 'none' }}
      role="region"
      aria-label={es ? 'Contacto rápido' : 'Quick contact'}
    >
      <a className="mc-call" href="tel:+12408259001">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
        {es ? 'Llamar' : 'Call'}
      </a>
      <a className="mc-text" href="sms:+12408259001">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        {es ? 'Texto' : 'Text'}
      </a>
    </div>
  );
}
