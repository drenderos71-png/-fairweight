import Link from 'next/link';
import Image from 'next/image';
import PriceCards from '@/components/PriceCards';
import Estimator from '@/components/Estimator';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" id="hero" data-hero="photo">
        <div className="hero-bg-grad" aria-hidden="true" />
        <div className="hero-variant v-photo">
          <div className="photo-scrim" aria-hidden="true" />
          <div className="wrap photo-inner">
            <span className="deco-label">The DMV&rsquo;s Mobile Gold &amp; Silver Buyer</span>
            <h1>We Buy &amp; Sell <span className="gold-text">Gold &amp; Silver</span></h1>
            <p className="hero-lede">Honest weight, fair prices, and same-day cash &mdash; we come to you, anywhere in the DMV. Free in-person quotes, no pressure, no obligation.</p>
            <span className="mobile-badge">
              <svg viewBox="0 0 24 24"><path d="M2 7h11v8H2z"/><path d="M13 10h4l3 3v2h-7z"/><circle cx="6" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg>
              We Come To You &middot; Fully Mobile
            </span>
            <div className="subhead">
              <span>Mobile</span><span className="dot" /><span>Cash</span><span className="dot" /><span>Fair</span>
            </div>
            <div className="hero-actions">
              <a className="btn-gold" href="tel:+12408259001">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                <span>Call or Text:&nbsp;<span className="num">240-825-9001</span></span>
              </a>
              <Link className="btn-ghost" href="/contact">Get a Free Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile strip */}
      <section className="mobile-strip">
        <div className="wrap">
          <span className="ms-ic">
            <svg viewBox="0 0 24 24"><path d="M2 7h11v8H2z"/><path d="M13 10h4l3 3v2h-7z"/><circle cx="6" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg>
          </span>
          <span className="ms-text">
            <strong>We Come To You &mdash; No Storefront Needed</strong>
            <span>Fully mobile gold &amp; silver buying across the entire DMV. Free in-person quotes at your door.</span>
          </span>
          <a className="ms-cta" href="tel:+12408259001">Call or Text 240-825-9001</a>
        </div>
      </section>

      {/* Worth estimator */}
      <section className="band">
        <div className="wrap">
          <Estimator lang="en" />
        </div>
      </section>

      {/* About intro */}
      <section className="band light" id="about-intro">
        <div className="wrap story-grid">
          <div className="story-copy reveal">
            <span className="deco-label">Established in the DMV</span>
            <h2 className="section-title">Trusted Dealers.<br /><span className="gold-text">Fair Prices.</span></h2>
            <p>Welcome to Fairweight &mdash; the DMV&rsquo;s mobile gold &amp; silver buyer, based in Hyattsville, MD. We buy and sell gold, silver, and platinum with a commitment to complete transparency, and we come to you.</p>
            <p>We weigh and test every item right in front of you, then price it from the live market rate &mdash; no guesswork, no pressure, no surprises. Just honest weight and fair dealings.</p>
            <div className="bullion-actions" style={{ marginTop: 30 }}>
              <Link className="btn-gold" href="/about">Our Story</Link>
              <Link className="btn-ghost" href="/contact">Contact Us</Link>
            </div>
            <div className="meet">
              <div className="portrait">
                <span className="gk-border" aria-hidden="true" />
                <div className="img-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.1em' }}>PHOTO</div>
              </div>
              <div className="meet-who">
                <span className="eyebrow-sm">Meet Your Buyer</span>
                <h4>Your Brother&rsquo;s Name</h4>
                <span className="role">Founder &amp; Buyer</span>
                <p>When you reach out, you deal directly with me &mdash; not a salesperson. Honest assessments, fair prices, and I come to you anywhere in the DMV.</p>
              </div>
            </div>
          </div>
          <div className="story-media reveal">
            <span className="gk-border" aria-hidden="true" />
            <div className="img-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.1em' }}>PHOTO</div>
          </div>
        </div>
      </section>

      {/* Live prices */}
      <section className="band alt" id="spot">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Live Pricing</span>
            <h2 className="section-title">Today&rsquo;s spot prices</h2>
          </div>
          <PriceCards />
          <div style={{ textAlign: 'center', marginTop: 34 }}>
            <Link className="btn-ghost" href="/prices">See full live prices &amp; calculator</Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="band light" id="what">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">What We Do</span>
            <h2 className="section-title">Trusted service, on your terms</h2>
            <div className="ornament"><i /><span className="dia" /><i /></div>
          </div>
          <div className="cards-4">
            <div className="card reveal">
              <span className="ic"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="11.5" height="8.5" rx="1"/><path d="M13.5 9.5H18l3.5 3.5v2.5h-8z"/><circle cx="6.4" cy="17.4" r="1.9"/><circle cx="17" cy="17.4" r="1.9"/></svg></span>
              <h3>We Come<br />To You</h3>
              <p>Fully mobile service across the DMV. We meet you at home or a place you trust &mdash; no driving around.</p>
            </div>
            <div className="card reveal">
              <span className="ic"><svg viewBox="0 0 24 24"><rect x="2.5" y="7.5" width="19" height="9.5" rx="1.4"/><path d="M5.5 5.5h13"/><circle cx="12" cy="12.2" r="2.6"/><line x1="12" y1="9.4" x2="12" y2="15"/><path d="M13.2 10.3a1.4 1.4 0 0 0-1.2-.6c-.9 0-1.4.5-1.4 1.1 0 1.4 2.8.7 2.8 2.1 0 .7-.6 1.2-1.5 1.2a1.5 1.5 0 0 1-1.3-.7"/></svg></span>
              <h3>We Pay<br />Cash</h3>
              <p>Instant payment in cash, on the spot. No checks, no holds &mdash; your money, right away.</p>
            </div>
            <div className="card reveal">
              <span className="ic"><svg viewBox="0 0 24 24"><rect x="2.6" y="9" width="11" height="6" rx="3"/><rect x="10.4" y="9" width="11" height="6" rx="3"/></svg></span>
              <h3>New, Used,<br />Old &amp; Broken</h3>
              <p>We buy gold &amp; silver in any condition &mdash; coins, chains, rings, scrap and broken pieces.</p>
            </div>
            <div className="card reveal">
              <span className="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="5.4" r="2.5"/><path d="M9.6 8.4h4.8l-1.2 3.4H10.8z"/><path d="M8 18.6c0-2.8 1.4-4.4 2.6-6.8h2.8c1.2 2.4 2.6 4 2.6 6.8z"/><line x1="6.4" y1="20.2" x2="17.6" y2="20.2"/></svg></span>
              <h3>We Pay Off<br />Pawned Items</h3>
              <p>We pay off your pawned gold &amp; silver &mdash; <span className="accent">and pay you on top</span> of what&rsquo;s owed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="band alt" id="how">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">How It Works</span>
            <h2 className="section-title">Three simple steps</h2>
            <div className="ornament"><i /><span className="dia" /><i /></div>
          </div>
          <div className="steps">
            <div className="step reveal">
              <span className="num">01</span>
              <span className="step-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg></span>
              <h3>Contact Us</h3>
              <p>Call or text 240-825-9001 and tell us what you have.</p>
            </div>
            <div className="step reveal">
              <span className="num">02</span>
              <span className="step-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg></span>
              <h3>We Come To You</h3>
              <p>We meet you, weigh your items openly, and give a fair quote.</p>
            </div>
            <div className="step reveal">
              <span className="num">03</span>
              <span className="step-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="6" width="19" height="12" rx="1.6"/><circle cx="12" cy="12" r="2.7"/></svg></span>
              <h3>Get Paid Cash</h3>
              <p>Accept the offer and walk away with cash in hand &mdash; same visit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="band light">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Explore</span>
            <h2 className="section-title">Everything Fairweight</h2>
          </div>
          <div className="cards-4">
            <Link className="card reveal" href="/prices" style={{ textDecoration: 'none' }}>
              <span className="ic"><svg viewBox="0 0 24 24"><path d="M3 17l5-5 4 4 8-8"/><path d="M16 8h5v5"/></svg></span>
              <h3>Live Prices</h3>
              <p>Today&rsquo;s gold, silver &amp; platinum spot prices, plus a value calculator.</p>
            </Link>
            <Link className="card reveal" href="/buy" style={{ textDecoration: 'none' }}>
              <span className="ic"><svg viewBox="0 0 24 24"><rect x="2.6" y="9" width="11" height="6" rx="3"/><rect x="10.4" y="9" width="11" height="6" rx="3"/></svg></span>
              <h3>What We Buy</h3>
              <p>Coins, bullion, jewelry, scrap and broken pieces &mdash; in any condition.</p>
            </Link>
            <Link className="card reveal" href="/area" style={{ textDecoration: 'none' }}>
              <span className="ic"><svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></svg></span>
              <h3>Service Area</h3>
              <p>Fully mobile across Maryland, DC and Northern Virginia.</p>
            </Link>
            <Link className="card reveal" href="/about" style={{ textDecoration: 'none' }}>
              <span className="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6"/></svg></span>
              <h3>About Us</h3>
              <p>Honest weight, fair dealings &mdash; the principles behind Fairweight.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="scripture">
        <div className="wrap inner reveal">
          <span className="scales-lg" aria-hidden="true">
            <svg className="scales" width="58" height="58" viewBox="0 0 24 24"><path d="M12 6.2C10 4.6 7 4.4 4 5v13c3-.6 6-.4 8 1.2"/><path d="M12 6.2C14 4.6 17 4.4 20 5v13c-3-.6-6-.4-8 1.2"/><line x1="12" y1="6.2" x2="12" y2="19.2"/><path d="M6.4 8.4c1.4-.3 2.8-.3 3.8.2M6.4 11c1.4-.3 2.8-.3 3.8.2M13.8 8.6c1-.5 2.4-.5 3.8-.2M13.8 11.2c1-.5 2.4-.5 3.8-.2"/></svg>
          </span>
          <span className="scripture-label">Proverbs 11:1</span>
          <blockquote>&ldquo;A false balance is abomination to the Lord: but a <span className="gold-text">just weight</span> is his delight.&rdquo;</blockquote>
          <cite>Honest Weight &middot; Fair Dealings</cite>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact">
        <div className="wrap reveal">
          <span className="deco-label center">Ready When You Are</span>
          <h2 style={{ marginTop: 18 }}>Turn gold &amp; silver<br />into <span className="gold-text">cash today</span></h2>
          <p className="sub">Call or text us &mdash; we will come to you with a fair, no-pressure quote.</p>
          <a className="phone-btn" href="tel:+12408259001">
            <span className="label">Call or Text</span>
            <span className="number">240-825-9001</span>
          </a>
          <p className="loc">Hyattsville, MD &middot; Serving the DMV</p>
        </div>
      </section>
    </>
  );
}
