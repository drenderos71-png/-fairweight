'use client';
import { useState } from 'react';

const FAQS = [
  { q: 'How do you decide what my gold or silver is worth?', a: 'We weigh each piece in front of you and price it against the current market (spot) rate for that metal and purity. No guesswork and no hidden cuts — you see exactly how the offer is calculated.' },
  { q: 'Do I have to come to you?', a: 'No — we are fully mobile. We come to your home or a public place you are comfortable with, anywhere in the DMV. No appointment runaround.' },
  { q: 'How fast do I get paid?', a: 'Same visit. Once you accept the offer, you are paid in cash on the spot — no checks, no holds, no waiting.' },
  { q: 'What kinds of items do you buy?', a: 'Gold and silver in any form — coins, bars, jewelry, chains, scrap, broken pieces, and sterling flatware. We also buy platinum. New, used, old or broken, it all has value.' },
  { q: 'Will you pay off my pawned items?', a: 'Yes. We can pay off pawned gold or silver and pay you on top of what is owed. Bring your ticket and we will walk through the numbers with you.' },
  { q: 'Is there a minimum amount?', a: 'No minimum. Whether it is a single ring or an entire estate, we will take a look and give you a free quote.' },
  { q: 'How do I get started?', a: 'Call or text 240-825-9001 with a quick description of what you have, and we will set up a time that works for you.' },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq-list reveal">
      {FAQS.map((f, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button className="faq-q" type="button" onClick={() => setOpen(open === i ? null : i)}>
            {f.q}
            <span className="pm" aria-hidden="true" />
          </button>
          <div className="faq-a" style={{ maxHeight: open === i ? 400 : 0 }}>
            <div className="faq-a-inner">{f.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
