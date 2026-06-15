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
  { key: 'XAU', label: 'Gold', sym: 'XAU' },
  { key: 'XAG', label: 'Silver', sym: 'XAG' },
  { key: 'XPT', label: 'Platinum', sym: 'XPT' },
  { key: 'XPD', label: 'Palladium', sym: 'XPD' },
];

const FALLBACK = { XAU: 4400, XAG: 75, XPT: 2000, XPD: 1300 };

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prices, setPrices] = useState(null);
  const prevRef = useRef({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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
          const p = FALLBACK[key];
          if (!base[key]) base[key] = p;
          results[key] = { price: p, chg: 0 };
        }
      }));
      try { localStorage.setItem(baseKey, JSON.stringify(base)); } catch {}
      prevRef.current = results;
      setPrices(results);
    }
    fetchPrices();
    const id = setInterval(fetchPrices, 90000);
    return () => clearInterval(id);
  }, []);

  const fmt = (n) => '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const fmtChg = (n) => (n >= 0 ? '+' : '') + fmt(n);

  const tickerItems = prices
    ? METALS.map(({ key, label }) => {
        const { price, chg } = prices[key];
        return (
          <span key={key} className="tk">
            <span className="tk-name">{label}</span>
            <span className="tk-price">{fmt(price)}<span style={{ fontSize: '0.72rem', fontWeight: 400, opacity: 0.7 }}>/oz</span></span>
            <span className={`tk-chg ${chg >= 0 ? 'up' : 'down'}`}>{fmtChg(chg)}</span>
          </span>
        );
      })
    : METALS.map(({ key, label }) => (
        <span key={key} className="tk">
          <span className="tk-name">{label}</span>
          <span className="tk-price">—</span>
          <span className="tk-chg up">—</span>
        </span>
      ));

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap nav-inner">
          <Link href="/" className="brand">
            <EmblemSVG />
            <div className="brand-word">
              <span className="wordmark">FAIRWEIGHT</span>
              <span className="sub">Honest Weight · Fair Dealings</span>
            </div>
          </Link>
          <nav className="nav-links">
            {NAV.map(({ label, href }) => (
              <Link key={href} href={href} className={pathname === href ? 'active' : ''}>{label}</Link>
            ))}
          </nav>
          <a href="tel:12408259001" className="nav-cta">
            <PhoneIcon /> 240-825-9001
          </a>
          <button className={`nav-toggle${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
            <span className="bars" />
          </button>
        </div>
        <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          <nav className="mobile-links">
            {NAV.map(({ label, href }) => (
              <Link key={href} href={href} className={pathname === href ? 'active' : ''} onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
          </nav>
          <a href="tel:12408259001" className="btn-gold mobile-call">
            <PhoneIcon /> Call 240-825-9001
          </a>
        </div>
      </header>
      <div className="ticker" style={{ marginTop: 78 }}>
        <div className="ticker-track">
          <div className="ticker-group">{tickerItems}</div>
          <div className="ticker-group" aria-hidden="true">{tickerItems}</div>
        </div>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.06 6.06l.48-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function EmblemSVG() {
  return (
    <div className="emblem" style={{ '--em': '48px' }}>
      <svg className="em-scales" viewBox="0 0 40 36" fill="none">
        <line x1="20" y1="4" x2="20" y2="32" stroke="#D8B23F" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="6" y1="4" x2="34" y2="4" stroke="#D8B23F" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="6" y1="4" x2="2" y2="14" stroke="#D8B23F" strokeWidth="1.4" strokeLinecap="round"/>
        <line x1="34" y1="4" x2="38" y2="14" stroke="#D8B23F" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M2 14 a8 8 0 0 0 8 0" stroke="#D8B23F" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        <path d="M30 14 a8 8 0 0 0 8 0" stroke="#D8B23F" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        <line x1="14" y1="32" x2="26" y2="32" stroke="#D8B23F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <span className="em-fw">FW</span>
    </div>
  );
}
