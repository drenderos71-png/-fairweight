'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Live Prices', href: '/prices' },
  { label: 'What We Buy', href: '/buy' },
  { label: 'About', href: '/about' },
  { label: 'Service Area', href: '/area' },
  { label: 'Contact', href: '/contact' },
];

const METALS = [
  { key: 'XAU', label: 'Gold' },
  { key: 'XAG', label: 'Silver' },
  { key: 'XPT', label: 'Platinum' },
  { key: 'XPD', label: 'Palladium' },
];

const FALLBACK = { XAU: 4400, XAG: 75, XPT: 2000, XPD: 1300 };

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    async function fetchPrices() {
      const today = new Date().toDateString();
      const baseKey = 'fw_base_' + today;
      let base = {};
      try { base = JSON.parse(localStorage.getItem(baseKey) || '{}'); } catch {}
      const results = {};
      await Promise.all(METALS.map(async ({ key }) => {
        try {
          const r = await fetch(`https://api.gold-api.com/price/${key}`);
          const d = await r.json();
          const price = d.price ?? d.Price ?? d.ask ?? FALLBACK[key];
          if (!base[key]) base[key] = price;
          results[key] = { price, chg: price - base[key] };
        } catch {
          if (!base[key]) base[key] = FALLBACK[key];
          results[key] = { price: FALLBACK[key], chg: 0 };
        }
      }));
      try { localStorage.setItem(baseKey, JSON.stringify(base)); } catch {}
      setPrices(results);
    }
    fetchPrices();
    const id = setInterval(fetchPrices, 90000);
    return () => clearInterval(id);
  }, []);

  const fmt = (n) => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const tickRow = (key, label) => {
    const p = prices?.[key];
    return (
      <div className="tk" key={key + label}>
        <span className="tk-name">{label}</span>
        <span className="tk-price">{p ? fmt(p.price) : '$0'}</span>
        <span className={`tk-chg ${p && p.chg < 0 ? 'down' : 'up'}`}>{p && p.chg < 0 ? '▼' : '▲'}</span>
      </div>
    );
  };

  const tickGroup = (hidden) => (
    <div className="ticker-group" aria-hidden={hidden ? 'true' : undefined}>
      {METALS.map(({ key, label }) => tickRow(key, label))}
    </div>
  );

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="Fairweight home">
          <Emblem size="46px" />
          <span className="brand-word">
            <span className="wordmark">FAIRWEIGHT</span>
            <span className="sub">Honest Weight &middot; Fair Dealings</span>
          </span>
        </Link>
        <nav className="nav-links">
          {NAV.map(({ label, href }) => (
            <Link key={href} href={href} className={pathname === href ? 'active' : ''}>{label}</Link>
          ))}
        </nav>
        <a className="nav-cta" href="tel:+12408259001"><PhoneIcon /> 240-825-9001</a>
        <button
          className={`nav-toggle${menuOpen ? ' open' : ''}`}
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className="bars" />
        </button>
      </div>
      <div className="ticker" id="ticker">
        <div className="ticker-track">
          {tickGroup(false)}
          {tickGroup(true)}
        </div>
      </div>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobile-menu">
        <nav className="mobile-links">
          {NAV.map(({ label, href }) => (
            <Link key={href} href={href} className={pathname === href ? 'active' : ''} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
        </nav>
        <a className="btn-gold mobile-call" href="tel:+12408259001"><PhoneIcon /> Call or Text: 240-825-9001</a>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>
    </svg>
  );
}

function Emblem({ size }) {
  return (
    <span className="emblem" style={{ '--em': size }} aria-hidden="true">
      <svg className="em-scales" viewBox="0 0 48 31">
        <circle cx="24" cy="3" r="1.5"/>
        <line x1="24" y1="4.4" x2="24" y2="24"/>
        <line x1="8" y1="9" x2="40" y2="9"/>
        <circle cx="24" cy="9" r="1.3"/>
        <path d="M8 9 L4 16"/><path d="M8 9 L12 16"/>
        <path d="M3.4 16 a4.6 4.6 0 0 0 9.2 0 Z"/>
        <path d="M40 9 L36 16"/><path d="M40 9 L44 16"/>
        <path d="M35.4 16 a4.6 4.6 0 0 0 9.2 0 Z"/>
        <line x1="18" y1="24" x2="30" y2="24"/>
        <line x1="20" y1="27" x2="28" y2="27"/>
      </svg>
      <span className="em-fw">FW</span>
    </span>
  );
}
