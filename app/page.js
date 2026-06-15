import Link from 'next/link';
import Image from 'next/image';
import PriceCards from '@/components/PriceCards';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-grad" />
        <div className="wrap">
          <div className="hero-inner">
            <span className="deco-label">Mobile · DMV · Same-Day Cash</span>
            <h1>
              We Come<br />
              <span className="gold-sheen">To You.</span>
            </h1>
            <p className="subhead">
              <span className="dot" />
              Gold &amp; Silver Buyers
              <span className="dot" />
              Hyattsville, MD
            </p>
            <p className="hero-lede">
              Certified scales. Acid &amp; XRF testing. Live spot pricing. We buy gold, silver, and platinum jewelry, coins, and bullion across DC, Maryland, and Northern Virginia — at a time and place that works for you.
            </p>
            <div className="hero-actions">
              <a href="tel:12408259001" className="btn-gold">
                <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.06 6.06l.48-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call 240-825-9001
              </a>
              <Link href="/prices" className="btn-ghost">See Live Prices</Link>
            </div>
            <span className="mobile-badge">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              Serving DC · MD · VA
            </span>
          </div>
        </div>
      </section>

      {/* Live Prices */}
      <section className="band" id="prices">
        <div className="wrap">
          <div className="band-head">
            <span className="deco-label center">Live Spot</span>
            <h2 className="section-title">Today&rsquo;s Metal Prices</h2>
            <p className="lede">Indicative live spot refreshed every 90 seconds. Call to lock your price.</p>
          </div>
          <PriceCards />
        </div>
      </section>

      {/* What We Do */}
      <section className="band alt" id="what-we-do">
        <div className="wrap">
          <div className="band-head">
            <span className="deco-label center">What We Buy</span>
            <h2 className="section-title">Gold, Silver &amp; More</h2>
            <p className="lede">If it&rsquo;s precious metal, we want it. We buy across every category — from everyday jewelry to investment bullion.</p>
          </div>
          <div className="cards-4">
            {[
              { icon: 'ring', title: 'Jewelry', desc: 'All karats of gold, sterling silver, and platinum jewelry — broken, tangled, or mismatched welcome.' },
              { icon: 'coin', title: 'Coins', desc: 'Gold and silver numismatic and bullion coins — American Eagles, Maple Leafs, Morgans, junk silver bags, and more.' },
              { icon: 'bar', title: 'Bullion', desc: 'Investment-grade gold and silver bars and rounds, graded or ungraded. We pay premiums on recognized mint product.' },
              { icon: 'misc', title: 'Flatware &amp; More', desc: 'Sterling silver flatware, dental gold, gold watches, platinum settings, and other precious-metal scrap.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="card reveal">
                <div className="ic"><WhatIcon name={icon} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link href="/buy" className="btn-gold">See Everything We Buy</Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="band" id="how">
        <div className="wrap">
          <div className="band-head">
            <span className="deco-label center">Process</span>
            <h2 className="section-title">Simple. Transparent. Yours.</h2>
          </div>
          <div className="steps">
            {[
              { n: '01', title: 'Call or Text', body: 'Reach us at 240-825-9001. Tell us what you have and we&rsquo;ll give you a ballpark estimate right away.' },
              { n: '02', title: 'We Meet You', body: 'Pick a time and place anywhere in the DMV. We come to you — your home, a coffee shop, anywhere comfortable.' },
              { n: '03', title: 'Get Paid', body: 'We weigh, test, and price on the spot. No obligation — accept our offer and walk away with cash in hand.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="step reveal">
                <div className="num">{n}</div>
                <div className="step-ic">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--gold)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scripture */}
      <section className="scripture">
        <div className="wrap inner">
          <svg className="scales-lg" viewBox="0 0 58 58" fill="none">
            <circle cx="29" cy="29" r="27.5" stroke="#D8B23F" strokeWidth="1" opacity="0.4"/>
            <line x1="29" y1="10" x2="29" y2="46" stroke="#D8B23F" strokeWidth="1.4" strokeLinecap="round"/>
            <line x1="12" y1="11" x2="46" y2="11" stroke="#D8B23F" strokeWidth="1.4" strokeLinecap="round"/>
            <line x1="12" y1="11" x2="7" y2="23" stroke="#D8B23F" strokeWidth="1.3" strokeLinecap="round"/>
            <line x1="46" y1="11" x2="51" y2="23" stroke="#D8B23F" strokeWidth="1.3" strokeLinecap="round"/>
            <path d="M7 23 a9 9 0 0 0 10 0" stroke="#D8B23F" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <path d="M41 23 a9 9 0 0 0 10 0" stroke="#D8B23F" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <line x1="22" y1="46" x2="36" y2="46" stroke="#D8B23F" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <span className="scripture-label">Our Foundation</span>
          <blockquote>
            &ldquo;A false balance is an abomination to the Lord,<br />
            but a <span className="gold-text">just weight</span> is his delight.&rdquo;
          </blockquote>
          <cite>— Proverbs 11:1</cite>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact">
        <div className="wrap">
          <div className="ornament"><i /><div className="dia" /><i /></div>
          <h2>Ready to sell?<br /><span className="gold-text">Let&rsquo;s talk today.</span></h2>
          <p className="sub">Free appraisal. No pressure. We come to you anywhere in the DMV.</p>
          <a href="tel:12408259001" className="phone-btn">
            <span className="label">Call or Text Anytime</span>
            <span className="number">240-825-9001</span>
          </a>
          <p className="loc">Hyattsville, MD · Serving DC, Maryland &amp; Northern Virginia</p>
        </div>
      </section>
    </>
  );
}

function WhatIcon({ name }) {
  const props = { viewBox: '0 0 24 24', width: 26, height: 26, fill: 'none', stroke: 'var(--gold)', strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'ring') return <svg {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10"/></svg>;
  if (name === 'coin') return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5C9.5 8.12 10.62 7 12 7s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5-2.5 1.12-2.5 2.5S10.62 17 12 17s2.5-1.12 2.5-2.5"/></svg>;
  if (name === 'bar') return <svg {...props}><rect x="2" y="7" width="20" height="10" rx="2"/><line x1="6" y1="7" x2="6" y2="17"/><line x1="18" y1="7" x2="18" y2="17"/><line x1="2" y1="12" x2="22" y2="12"/></svg>;
  return <svg {...props}><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="2"/></svg>;
}
