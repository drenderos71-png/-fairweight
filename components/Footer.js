import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap foot-inner">
        <div className="foot-tag">
          <span style={{ fontFamily: 'var(--serif)', color: 'var(--gold)' }}>Fairweight</span>
          <span className="sep" />
          <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', color: 'var(--muted)' }}>Honest Weight. Fair Dealings.</span>
        </div>
        <nav className="foot-nav">
          <Link href="/">Home</Link>
          <Link href="/prices">Live Prices</Link>
          <Link href="/buy">What We Buy</Link>
          <Link href="/about">About</Link>
          <Link href="/area">Service Area</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p className="foot-meta">
          &copy; {year} Fairweight &nbsp;·&nbsp; Hyattsville, MD &nbsp;·&nbsp;{' '}
          <a href="tel:12408259001">240-825-9001</a>
        </p>
      </div>
    </footer>
  );
}
