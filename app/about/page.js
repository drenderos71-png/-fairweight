import Link from 'next/link';

export const metadata = {
  title: 'About Fairweight — Our Story',
  description: 'A family business built on honest scales and fair dealings. Learn the story behind Fairweight, mobile gold and silver buyers in the DMV.',
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <span className="deco-label center">Our Story</span>
        <h1>Built on <span className="gold-text">Honest Weight</span></h1>
        <p>A DMV family business founded on a simple principle: the scale never lies, and neither do we.</p>
        <div className="ornament"><i /><div className="dia" /><i /></div>
      </div>

      {/* Story */}
      <section className="band">
        <div className="wrap">
          <div className="story-grid">
            <div className="story-media">
              <div className="gk-border" />
              <div className="img-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                PHOTO
              </div>
            </div>
            <div className="story-copy">
              <span className="deco-label">How It Started</span>
              <h2 className="section-title">From Our Family<br />to Yours</h2>
              <p>Fairweight was born out of a simple frustration: too many people in our community were getting shortchanged — by pawn shops that lowballed, by mail-in services that disappeared their valuables for weeks, and by buyers who wouldn&rsquo;t show their math.</p>
              <p>We decided to do it differently. We come to you, we show you the scale, we explain every step, and we pay fairly — because in our family, your word and your weight are everything.</p>
              <p>Based in Hyattsville, MD, we serve the entire DMV. Gold, silver, platinum — whatever you have, we&rsquo;ll tell you what it&rsquo;s worth and make you a fair offer on the spot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="band alt">
        <div className="wrap">
          <div className="band-head">
            <span className="deco-label center">By the Numbers</span>
            <h2 className="section-title">Why People Choose Us</h2>
          </div>
          <div className="stats-grid">
            {[
              { big: '500+', lbl: 'Satisfied Sellers', sub: 'And counting' },
              { big: '3', lbl: 'States Served', sub: 'DC · MD · VA' },
              { big: '100%', lbl: 'Transparent Pricing', sub: 'We show our math' },
              { big: '$0', lbl: 'Cost to Get a Quote', sub: 'Always free' },
            ].map(({ big, lbl, sub }) => (
              <div key={lbl} className="stat">
                <div className="big gold-text">{big}</div>
                <div className="lbl">{lbl}</div>
                <div className="sub">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="band">
        <div className="wrap">
          <div className="why-grid">
            <div className="why-list">
              {[
                { h: 'We Come to You', p: 'No driving across town, no waiting in a shop. We meet at your home, a coffee shop, or anywhere you feel comfortable.' },
                { h: 'Certified Scales', p: 'We use calibrated, certified digital scales and show you the reading. You see every gram.' },
                { h: 'Live Spot Price', p: 'Our offers are based on the live spot price — not some number we invented. You can look it up on your phone.' },
                { h: 'Same-Day Cash', p: 'Accept our offer and you have cash in hand before we leave. No checks, no delays, no wire transfer wait.' },
                { h: 'No Pressure', p: 'Not happy with the offer? No problem. There&rsquo;s zero obligation and zero hard feelings.' },
              ].map(({ h, p }) => (
                <div key={h} className="why-item">
                  <div className="check">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4>{h}</h4>
                    <p>{p}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="why-aside">
              <span className="deco-label">Why Fairweight</span>
              <h2 className="section-title">The Difference Is<br /><span className="gold-text">Transparency</span></h2>
              <p className="lede">Most buyers profit by keeping you in the dark. We profit by treating you right so you come back — and send your friends.</p>
              <div className="seal">
                <div className="scales-wrap">
                  <svg className="scales" viewBox="0 0 40 36" width="40" height="36" fill="none">
                    <line x1="20" y1="4" x2="20" y2="32" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="6" y1="4" x2="34" y2="4" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="6" y1="4" x2="2" y2="14" strokeWidth="1.4" strokeLinecap="round"/>
                    <line x1="34" y1="4" x2="38" y2="14" strokeWidth="1.4" strokeLinecap="round"/>
                    <path d="M2 14 a8 8 0 0 0 8 0" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
                    <path d="M30 14 a8 8 0 0 0 8 0" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
                    <line x1="14" y1="32" x2="26" y2="32" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div className="t1">Fairweight Certified</div>
                  <div className="t2">Honest Weight · Fair Dealings</div>
                </div>
              </div>
            </div>
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

      <section className="contact">
        <div className="wrap">
          <div className="ornament"><i /><div className="dia" /><i /></div>
          <h2>Ready to get<br /><span className="gold-text">a fair offer?</span></h2>
          <p className="sub">Call or text anytime. Free appraisal, no pressure.</p>
          <a href="tel:12408259001" className="phone-btn">
            <span className="label">Call or Text Anytime</span>
            <span className="number">240-825-9001</span>
          </a>
        </div>
      </section>
    </>
  );
}
