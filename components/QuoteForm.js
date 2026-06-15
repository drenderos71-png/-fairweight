'use client';
import { useState } from 'react';

export default function QuoteForm() {
  const [form, setForm] = useState({ name: '', phone: '', items: '', zip: '' });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const body = `Hi, I'd like a quote!\nName: ${form.name}\nPhone: ${form.phone}\nZIP: ${form.zip}\nItems: ${form.items}`;
  const smsHref = `sms:12408259001&body=${encodeURIComponent(body)}`;

  return (
    <div className="quote-form">
      <div className="field">
        <label>Your Name</label>
        <input type="text" placeholder="Jane Smith" value={form.name} onChange={set('name')} />
      </div>
      <div className="field-row">
        <div className="field">
          <label>Phone / Text</label>
          <input type="tel" placeholder="(301) 555-0000" value={form.phone} onChange={set('phone')} />
        </div>
        <div className="field">
          <label>ZIP Code</label>
          <input type="text" placeholder="20782" maxLength={10} value={form.zip} onChange={set('zip')} />
        </div>
      </div>
      <div className="field">
        <label>What do you have?</label>
        <textarea placeholder="e.g. 14k gold ring, silver flatware set, gold coins…" value={form.items} onChange={set('items')} />
      </div>
      <div className="quote-actions">
        <a href={smsHref} className="btn-gold">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          Send as Text
        </a>
        <a href="tel:12408259001" className="btn-ghost">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.06 6.06l.48-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Just Call
        </a>
      </div>
      <p className="form-note">Tapping "Send as Text" opens your messages app — no app login needed. We reply fast.</p>
    </div>
  );
}
