'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'How do I get a quote?',
    a: 'Just call or text us at 240-825-9001. We can give you a ballpark over the phone or text, then meet at a location convenient for you for a final appraisal with certified scales and acid/XRF testing.',
  },
  {
    q: 'Where do we meet?',
    a: "We come to you anywhere in the DMV — your home, a coffee shop, or another public spot. We serve DC, Maryland (Prince George's, Montgomery, Howard, Anne Arundel counties and more), and Northern Virginia.",
  },
  {
    q: 'What items do you buy?',
    a: "Gold jewelry (all karats), silver jewelry and flatware, gold and silver coins, bullion bars, dental gold, platinum jewelry, and more. When in doubt, call — if it's precious metal, we're interested.",
  },
  {
    q: 'How is the price set?',
    a: "We pay a percentage of the live spot price. The exact percentage depends on karat, condition, and weight. We show you the scale and our math so you know exactly what you're getting.",
  },
  {
    q: 'Do you buy broken or damaged jewelry?',
    a: 'Yes. Broken chains, bent rings, tangled bracelets — the metal content is what matters, not the condition.',
  },
  {
    q: 'How are you different from a pawn shop or mail-in service?',
    a: 'We come to you (no pawn-shop visit), pay same-day cash, use certified scales, and show our work. Mail-in services make you wait weeks and ship your valuables through the mail.',
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq-list">
      {FAQS.map((f, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
            {f.q}
            <span className="pm" />
          </button>
          <div className="faq-a" style={{ maxHeight: open === i ? 400 : 0 }}>
            <div className="faq-a-inner">{f.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
