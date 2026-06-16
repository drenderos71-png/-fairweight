'use client';
import { useState } from 'react';
import { FAQS_EN, FAQS_ES } from '@/lib/faqs';

export default function FaqAccordion({ lang = 'en' }) {
  const FAQS = lang === 'es' ? FAQS_ES : FAQS_EN;
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
