'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const METALS = [
  { key: 'XAU', label: 'Gold', img: '/gold-bars.png', cls: 'gold', fallback: 4400 },
  { key: 'XAG', label: 'Silver', img: '/silver-bars.png', cls: 'silver', fallback: 75 },
  { key: 'XPT', label: 'Platinum', img: '/platinum-bars.png', cls: 'platinum', fallback: 2000 },
];

export default function PriceCards({ onPrices }) {
  const [unit, setUnit] = useState('oz');
  const [prices, setPrices] = useState(null);
  const prevRef = useRef({});

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
          results[key] = { price, chg: price - base[key] };
        } catch {
          if (!base[key]) base[key] = fallback;
          results[key] = { price: fallback, chg: 0 };
        }
      }));
      try { localStorage.setItem(baseKey, JSON.stringify(base)); } catch {}
      prevRef.current = results;
      setPrices(results);
      onPrices?.(results);
    }
    fetch_();
    const id = setInterval(fetch_, 90000);
    return () => clearInterval(id);
  }, [onPrices]);

  const fmtOz = (p) => '$' + Number(p).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const fmtG = (p) => '$' + (p / 31.1035).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const fmt = (p) => unit === 'oz' ? fmtOz(p) : fmtG(p);
  const fmtChg = (c) => (c >= 0 ? '+' : '') + fmtOz(unit === 'oz' ? c : c / 31.1035);

  return (
    <>
      <div className="spot-head-row">
        <div className="spot-toggle">
          <button className={unit === 'oz' ? 'on' : ''} onClick={() => setUnit('oz')}>Per oz</button>
          <button className={unit === 'g' ? 'on' : ''} onClick={() => setUnit('g')}>Per gram</button>
        </div>
      </div>
      <div className="price-cards">
        {METALS.map(({ key, label, img, cls }) => {
          const p = prices?.[key];
          return (
            <div key={key} className={`price-card ${cls}`}>
              <div className="pc-bars">
                <Image src={img} alt={label + ' bars'} width={150} height={120} style={{ objectFit: 'contain', objectPosition: 'left center' }} />
              </div>
              <span className="pc-metal">{label}</span>
              <div className="pc-price-row">
                <span className="card-price">{p ? fmt(p.price) : '—'}</span>
                {p && <span className={`card-chg ${p.chg >= 0 ? 'up' : 'down'}`}>{fmtChg(p.chg)}</span>}
              </div>
              <span className="pc-live">Live · {unit === 'oz' ? 'Troy oz' : 'Gram'}</span>
              <a href="tel:12408259001" className="pc-cta">Call to lock price →</a>
            </div>
          );
        })}
      </div>
      <p className="spot-note">Prices are indicative spot from a free public feed and refresh every 90 s. Call to lock your price.</p>
    </>
  );
}
