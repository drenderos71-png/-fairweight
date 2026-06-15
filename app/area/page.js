import DmvMapClient from '@/components/DmvMapClient';

export const metadata = {
  title: 'Service Area — Fairweight DMV',
  description: 'We buy gold and silver across DC, Maryland, and Northern Virginia. Mobile service — we come to you.',
};

const AREAS = {
  Maryland: ['Hyattsville', 'College Park', 'Greenbelt', 'Beltsville', 'Silver Spring', 'Takoma Park', 'Riverdale Park', 'Lanham', 'Landover', 'Capitol Heights', 'Oxon Hill', 'Temple Hills', 'Suitland', 'Gaithersburg', 'Rockville', 'Germantown', 'Upper Marlboro', 'Bowie', 'Laurel', 'Annapolis'],
  'Washington DC': ['Capitol Hill', 'Anacostia', 'Columbia Heights', 'Petworth', 'Brookland', 'Congress Heights', 'Georgetown', 'Shaw / U Street', 'Southeast DC', 'Northeast DC'],
  Virginia: ['Alexandria', 'Arlington', 'Falls Church', 'Fairfax', 'Reston', 'Herndon', 'Centreville', 'Manassas', 'Woodbridge', 'Springfield', 'Annandale', 'Vienna', 'Ashburn', 'Sterling'],
};

export default function AreaPage() {
  return (
    <>
      <div className="page-hero">
        <span className="deco-label center">Service Area</span>
        <h1>We Serve the <span className="gold-text">Entire DMV</span></h1>
        <p>Mobile gold &amp; silver buying across DC, Maryland, and Northern Virginia. We come to you — at your home, your office, or anywhere convenient.</p>
        <div className="ornament"><i /><div className="dia" /><i /></div>
      </div>

      {/* Map + intro */}
      <section className="band">
        <div className="wrap">
          <div className="area-grid">
            <div className="area-aside">
              <span className="deco-label">Where We Go</span>
              <h2 className="section-title">Anywhere in<br /><span className="gold-text">DC · MD · VA</span></h2>
              <p style={{ color: 'var(--muted)', marginTop: 18, lineHeight: 1.75 }}>
                Based in Hyattsville, MD, we&rsquo;re centrally located to reach every corner of the metro. Prince George&rsquo;s County, Montgomery County, Howard County, Northern Virginia — call and we&rsquo;ll come.
              </p>
              <div className="map-badge" style={{ marginTop: 26, display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 20px', border: '1px solid var(--line)', borderRadius: 3, background: 'var(--panel)' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cream)' }}>Hyattsville, MD — Home Base</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginTop: 18 }}>
                Don&rsquo;t see your city? <a href="tel:12408259001" style={{ color: 'var(--gold)' }}>Call us</a> — if you&rsquo;re in the DMV, we&rsquo;ll probably come.
              </p>
            </div>
            <div>
              <DmvMapClient />
            </div>
          </div>
        </div>
      </section>

      {/* Area lists */}
      <section className="band alt">
        <div className="wrap">
          <div className="band-head">
            <span className="deco-label center">Coverage</span>
            <h2 className="section-title">Cities &amp; Communities<br /><span className="gold-text">We Serve</span></h2>
          </div>
          <div className="area-cols">
            {Object.entries(AREAS).map(([state, cities]) => (
              <div key={state} className="area-col">
                <h4>{state}</h4>
                <ul>
                  {cities.map(c => <li key={c}>{c}</li>)}
                </ul>
              </div>
            ))}
            <p className="area-note">
              Don&rsquo;t see your city? <a href="tel:12408259001">Call us at 240-825-9001</a> — we&rsquo;ll let you know if we can make it out.
            </p>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <div className="ornament"><i /><div className="dia" /><i /></div>
          <h2>We&rsquo;re nearby.<br /><span className="gold-text">Let us come to you.</span></h2>
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
