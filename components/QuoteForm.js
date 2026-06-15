'use client';
import { useState } from 'react';

export default function QuoteForm() {
  const [form, setForm] = useState({ name: '', phone: '', area: '', items: '' });
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const body = `Hi Fairweight, I'd like a quote.\nName: ${form.name}\nPhone: ${form.phone}\nArea: ${form.area}\nItems: ${form.items}`;
  const smsHref = `sms:+12408259001&body=${encodeURIComponent(body)}`;

  const onText = (e) => { e.preventDefault(); window.location.href = smsHref; };

  return (
    <form className="quote-form reveal" onSubmit={onText}>
      <div className="field"><label>Your name</label><input type="text" placeholder="First &amp; last name" value={form.name} onChange={set('name')} /></div>
      <div className="field"><label>Phone</label><input type="tel" placeholder="(240) 000-0000" value={form.phone} onChange={set('phone')} /></div>
      <div className="field"><label>Your area</label><input type="text" placeholder="e.g. Silver Spring, MD" value={form.area} onChange={set('area')} /></div>
      <div className="field"><label>What do you have?</label><textarea placeholder="e.g. a few gold chains, some silver coins, a class ring…" value={form.items} onChange={set('items')} /></div>
      <div className="quote-actions">
        <button className="btn-gold" type="submit">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Text My Request
        </button>
        <a className="btn-ghost" href="tel:+12408259001">Call Instead</a>
      </div>
      <p className="form-note">Tapping &ldquo;Text My Request&rdquo; opens your messaging app with your details pre-filled to 240-825-9001. Your info is never shared.</p>
    </form>
  );
}
