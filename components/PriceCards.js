'use client';
import { useEffect, useState } from 'react';

const METALS = [
  { key: 'XAU', card: 'gold', label: 'Gold', img: '/gold-bars.png', fallback: 4400, cta: 'Sell Your Gold' },
  { key: 'XAG', card: 'silver', label: 'Silver', img: '/silver-bars.png', fallback: 75, cta: 'Sell Your Silver' },
  { key: 'XPT', card: 'platinum', label: 'Platinum', img: '/platinum-bars.png', fallback: 2000, cta: 'Sell Platinum' },
];

export default function PriceCards() {
  const [unit, setUnit] = useState('ozt');
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    async function fetch_() {
      const today = new Date().toDateString();
      const baseKey = 'fw_base_' + today;
      let base = {};
      try { base = JSON.parse(localStorage.getItem(baseKey) || '{}'); } catch {}
      const results = {};
      await Promise.all(METALS.map(async ({ key, fallback }) => {
        try {
          const r = await fetch(`https://api.gold-api.com/price/${key}`);
          const d = await r.json();
          const price = d.price ?? d.Price ?? d.ask ?? fallback;
          if (!base[key]) base[key] = price;
          results[key] = { price, open: base[key] };
        } catch {
          if (!base[key]) base[key] = fallback;
          results[key] = { price: fallback, open: base[key] };
        }
      }));
      try { localStorage.setItem(baseKey, JSON.stringify(base)); } catch {}
      setPrices(results);
    }
    fetch_();
    const id = setInterval(fetch_, 90000);
    return () => clearInterval(id);
  }, []);

  const conv = (p) => unit === 'g' ? p / 31.1035 : p;
  const fmt = (p) => '$' + conv(p).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const pct = (price, open) => {
    if (!open) return '+0.00%';
    const c = ((price - open) / open) * 100;
    return (c >= 0 ? '+' : '') + c.toFixed(2) + '%';
  };

  return (
    <>
      <div className="spot-head-row">
        <div className="spot-toggle" role="group" aria-label="Price unit">
          <button type="button" className={unit === 'g' ? 'on' : ''} onClick={() => setUnit('g')}>Price in Grams</button>
          <button type="button" className={unit === 'ozt' ? 'on' : ''} onClick={() => setUnit('ozt')}>Price in Ounces</button>
        </div>
      </div>
      <div className="price-cards">
        {METALS.map(({ key, card, label, img, cta }) => {
          const p = prices?.[key];
          const up = p ? p.price >= p.open : true;
          return (
            <div key={key} className={`price-card ${card}`}>
              <div className="pc-bars"><img src={img} alt={`${label} bars`} /></div>
              <span className="pc-metal">{label}</span>
              <div className="pc-mid">
                <div className="pc-price-row">
                  <span className="card-price">{p ? fmt(p.price) : '$0'}</span>
                  <span className={`card-chg ${up ? 'up' : 'down'}`}>({p ? pct(p.price, p.open) : '+0.00%'})</span>
                </div>
                <span className="pc-live">Live {label} Price</span>
              </div>
              <a className="pc-cta" href="/contact">{cta} &rarr;</a>
            </div>
          );
        })}
      </div>
      <p className="spot-note">Indicative &middot; USD per {unit === 'g' ? 'gram' : 'troy oz'} &middot; call to lock your price</p>
    </>
  );
}
