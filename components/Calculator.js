'use client';
import { useState, useEffect } from 'react';

const PURITIES = {
  gold: [
    { label: '24k — 99.9%', val: 0.999 },
    { label: '22k — 91.7%', val: 0.917 },
    { label: '18k — 75%',   val: 0.750 },
    { label: '14k — 58.3%', val: 0.583 },
    { label: '10k — 41.7%', val: 0.417 },
  ],
  silver: [
    { label: '.999 Fine',    val: 0.999 },
    { label: '.925 Sterling', val: 0.925 },
    { label: '.900 Coin',    val: 0.900 },
    { label: '.800 European', val: 0.800 },
  ],
  platinum: [{ label: '95% Pure', val: 0.950 }, { label: '90% Pure', val: 0.900 }, { label: '85% Pure', val: 0.850 }],
};

const UNITS = [
  { label: 'Troy oz',  val: 1 },
  { label: 'Grams',    val: 1 / 31.1035 },
  { label: 'Pennyweight', val: 1 / 20 },
  { label: 'Kilograms', val: 32.1507 },
];

const FALLBACK = { XAU: 4400, XAG: 75, XPT: 2000 };
const METAL_KEYS = { gold: 'XAU', silver: 'XAG', platinum: 'XPT' };

export default function Calculator() {
  const [metal, setMetal] = useState('gold');
  const [unit, setUnit] = useState('Troy oz');
  const [weight, setWeight] = useState('');
  const [purityIdx, setPurityIdx] = useState(1);
  const [spot, setSpot] = useState(null);
  const [customSpot, setCustomSpot] = useState('');

  useEffect(() => {
    async function fetchSpot() {
      const key = METAL_KEYS[metal];
      try {
        const r = await fetch(`https://api.gold-api.com/price/${key}`);
        const d = await r.json();
        setSpot(d.price ?? d.Price ?? d.ask ?? FALLBACK[key]);
      } catch {
        setSpot(FALLBACK[key]);
      }
    }
    fetchSpot();
    setCustomSpot('');
    setPurityIdx(0);
  }, [metal]);

  const effectiveSpot = customSpot ? parseFloat(customSpot) : spot;
  const unitVal = UNITS.find(u => u.label === unit)?.val ?? 1;
  const purity = PURITIES[metal][purityIdx]?.val ?? 1;
  const w = parseFloat(weight);
  const value = (!isNaN(w) && w > 0 && effectiveSpot) ? w * unitVal * purity * effectiveSpot : null;

  const fmtUSD = (n) => n?.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }) ?? '—';
  const fmtSpot = (n) => n ? '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2 }) : '…';

  return (
    <div className="calc-grid">
      <div className="calc-card">
        <h3>Value Calculator</h3>
        <p className="hint">Estimate the pure metal value of your items.</p>
        <div className="field">
          <label>Metal</label>
          <select value={metal} onChange={e => setMetal(e.target.value)}>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>
        <div className="field-row">
          <div className="field">
            <label>Weight</label>
            <input type="number" min="0" step="any" placeholder="0.00" value={weight} onChange={e => setWeight(e.target.value)} />
          </div>
          <div className="field">
            <label>Unit</label>
            <select value={unit} onChange={e => setUnit(e.target.value)}>
              {UNITS.map(u => <option key={u.label}>{u.label}</option>)}
            </select>
          </div>
        </div>
        <div className="field">
          <label>Purity / Karat</label>
          <select value={purityIdx} onChange={e => setPurityIdx(Number(e.target.value))}>
            {PURITIES[metal].map((p, i) => <option key={i} value={i}>{p.label}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Spot Price / oz (live: {fmtSpot(spot)})</label>
          <input type="number" min="0" step="any" placeholder={spot ? String(Math.round(spot)) : 'Loading…'} value={customSpot} onChange={e => setCustomSpot(e.target.value)} />
        </div>
      </div>
      <div className="calc-result">
        <span className="rlabel">Estimated Pure Metal Value</span>
        <span className="rvalue gold-text">{value !== null ? fmtUSD(value) : '—'}</span>
        <p className="rsub">
          {value !== null
            ? `Based on ${weight} ${unit} of ${PURITIES[metal][purityIdx]?.label} ${metal} at ${fmtSpot(effectiveSpot)}/oz`
            : 'Enter your item details to see an estimate.'}
        </p>
        <p className="disclaimer">Pure metal value only — actual offer depends on item condition, market liquidity, and our assessment.</p>
        <a href="tel:12408259001" className="btn-gold" style={{ marginTop: 16 }}>
          Call for a Real Quote
        </a>
      </div>
    </div>
  );
}
