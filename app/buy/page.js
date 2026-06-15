import Link from 'next/link';

export const metadata = {
  title: 'What We Buy — Fairweight Gold & Silver',
  description: 'We buy gold jewelry, silver flatware, coins, bullion bars, dental gold, and more. Certified testing, live spot prices, same-day cash.',
};

const ITEMS = [
  { cap: 'Gold Jewelry', sub: 'All karats' },
  { cap: 'Silver Jewelry', sub: 'Sterling & fine' },
  { cap: 'Gold Coins', sub: 'Bullion & numismatic' },
  { cap: 'Silver Coins', sub: 'Junk, ASE, Morgans' },
  { cap: 'Bullion Bars', sub: 'Gold & silver' },
  { cap: 'Silver Flatware', sub: 'Sterling sets' },
  { cap: 'Dental Gold', sub: 'Crowns & bridges' },
  { cap: 'Platinum', sub: 'Jewelry & settings' },
];

export default function BuyPage() {
  return (
    <>
      <div className="page-hero">
        <span className="deco-label center">What We Buy</span>
        <h1>Gold, Silver <span className="gold-text">&amp; More</span></h1>
        <p>From everyday jewelry to investment bullion — if it&rsquo;s precious metal, we want to see it.</p>
        <div className="ornament"><i /><div className="dia" /><i /></div>
      </div>

      {/* Gallery */}
      <section className="band">
        <div className="wrap">
          <div className="band-head">
            <span className="deco-label center">We Buy</span>
            <h2 className="section-title">Every Category of<br /><span className="gold-text">Precious Metal</span></h2>
          </div>
          <div className="gallery-grid">
            {ITEMS.map(({ cap, sub }) => (
              <div key={cap} className="gphoto">
                <div className="gphoto-img" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--panel)', color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.12em' }}>
                  PHOTO
                </div>
                <span className="cap">{cap}<small>{sub}</small></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Bullion */}
      <section className="band alt">
        <div className="wrap">
          <div className="bullion-grid">
            <div className="bullion-plate">
              <div className="gk-border" />
              <div className="img-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>PHOTO</div>
            </div>
            <div className="bullion-copy">
              <span className="deco-label">Bullion Specialists</span>
              <h2 className="section-title">We Pay <span className="gold-text">Premiums</span><br />on Bullion</h2>
              <p className="lede">Recognized mint product — American Gold Eagles, Canadian Maple Leafs, PAMP bars, Engelhard rounds — commands a premium above melt. We know the difference and pay accordingly.</p>
              <ul className="precision-list">
                {['American Gold & Silver Eagles', 'Canadian Maple Leafs', 'PAMP Suisse & Credit Suisse bars', 'Morgan & Peace silver dollars', 'Pre-1933 U.S. gold coins', 'Engelhard & Johnson Matthey rounds'].map(item => (
                  <li key={item}>
                    <span className="pc-check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="bullion-actions">
                <a href="tel:12408259001" className="btn-gold">Get a Bullion Quote</a>
                <Link href="/prices" className="btn-ghost">See Live Prices</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Verify */}
      <section className="precision band">
        <div className="wrap">
          <div className="precision-grid">
            <div className="precision-plate">
              <div className="gk-border" />
              <div className="img-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>PHOTO</div>
            </div>
            <div className="precision-copy">
              <span className="deco-label">Our Process</span>
              <h2 className="section-title">Precision <span className="gold-text">Testing</span><br />You Can Watch</h2>
              <p className="lede">Every item is tested in front of you. No black boxes, no back rooms — the scale faces you and the results are yours to see.</p>
              <ul className="precision-list">
                {['Calibrated digital scales (0.01g precision)', 'Acid testing for gold karat verification', 'XRF (X-ray fluorescence) for non-destructive analysis', 'Magnet test for silver authenticity', 'Visual hallmark inspection'].map(item => (
                  <li key={item}>
                    <span className="pc-check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="band">
        <div className="wrap">
          <div className="band-head">
            <span className="deco-label center">How It Works</span>
            <h2 className="section-title">From Your Drawer<br /><span className="gold-text">to Cash in Hand</span></h2>
          </div>
          <div className="steps">
            {[
              { n: '01', title: 'Call or Text', body: 'Tell us what you have. We&rsquo;ll estimate a range over the phone so you know what to expect — no surprises.' },
              { n: '02', title: 'We Come to You', body: 'We meet at a time and place convenient for you. Your home, a library, a coffee shop — your choice.' },
              { n: '03', title: 'Test &amp; Offer', body: 'We test everything on the spot, show you the readings, and make you an offer based on live spot price.' },
              { n: '04', title: 'Get Paid', body: 'Accept the offer and you walk away with cash immediately. No waiting, no checks.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="step">
                <div className="num">{n}</div>
                <h3>{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <div className="ornament"><i /><div className="dia" /><i /></div>
          <h2>Have something to sell?<br /><span className="gold-text">Let&rsquo;s talk.</span></h2>
          <a href="tel:12408259001" className="phone-btn">
            <span className="label">Call or Text Anytime</span>
            <span className="number">240-825-9001</span>
          </a>
        </div>
      </section>
    </>
  );
}
