import QuoteForm from '@/components/QuoteForm';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'Contact Fairweight — Get a Free Quote',
  description: 'Text or call for a free, no-pressure appraisal. We buy gold, silver, and platinum across the DMV. 240-825-9001.',
};

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <span className="deco-label center">Get in Touch</span>
        <h1>Get Your <span className="gold-text">Free Quote</span></h1>
        <p>Fill in a few details below and we&rsquo;ll get back to you fast — or just call us directly at 240-825-9001.</p>
        <div className="ornament"><i /><div className="dia" /><i /></div>
      </div>

      {/* Quote form */}
      <section className="band">
        <div className="wrap">
          <div className="quote-grid">
            <div className="quote-aside">
              <span className="deco-label">Contact Us</span>
              <h2 className="section-title">Fast, Free<br /><span className="gold-text">No Pressure</span></h2>
              <p className="lede">Send us a quick text with your items, or just call. We typically respond within minutes during business hours.</p>
              <ul className="quote-points">
                {[
                  { icon: 'check', text: 'Free appraisal — no cost, no obligation' },
                  { icon: 'map', text: 'We come to you anywhere in the DMV' },
                  { icon: 'clock', text: 'Same-day appointments available' },
                  { icon: 'cash', text: 'Cash paid on the spot' },
                ].map(({ icon, text }) => (
                  <li key={text}>
                    <span className="qd">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--gold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
              <div className="quote-phone">
                <span className="small">Call or Text Direct</span>
                <a href="tel:12408259001">240-825-9001</a>
              </div>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="band alt">
        <div className="wrap">
          <div className="band-head">
            <span className="deco-label center">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>
          <FaqAccordion />
        </div>
      </section>

      {/* Big CTA */}
      <section className="contact">
        <div className="wrap">
          <div className="ornament"><i /><div className="dia" /><i /></div>
          <h2>Still have questions?<br /><span className="gold-text">Just call.</span></h2>
          <p className="sub">We&rsquo;re real people. Call or text and we&rsquo;ll answer right away.</p>
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
