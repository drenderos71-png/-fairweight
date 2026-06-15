'use client';
import { useState, useMemo } from 'react';

const PURITY = {
  '24k': 0.999, '22k': 0.9167, '18k': 0.75, '14k': 0.5833, '10k': 0.4167,
  '999': 0.999, '925': 0.925, '900': 0.900,
};
const UNIT_TO_OZT = { g: 1 / 31.1035, ozt: 1, dwt: 1 / 20, kg: 32.1507 };

export default function Calculator() {
  const [metal, setMetal] = useState('gold');
  const [spot, setSpot] = useState('4400');
  const [qty, setQty] = useState('10');
  const [unit, setUnit] = useState('g');
  const [purity, setPurity] = useState('14k');

  const { value, sub } = useMemo(() => {
    const s = parseFloat(spot), q = parseFloat(qty);
    const f = PURITY[purity] ?? 1, u = UNIT_TO_OZT[unit] ?? 1;
    if (isNaN(s) || isNaN(q) || q <= 0) return { value: '$0.00', sub: 'Enter an amount to see an estimate.' };
    const v = q * u * f * s;
    return {
      value: v.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      sub: `${q} ${unit === 'g' ? 'g' : unit === 'ozt' ? 'troy oz' : unit === 'dwt' ? 'dwt' : 'kg'} of ${purity.toUpperCase()} ${metal} at $${s}/ozt`,
    };
  }, [metal, spot, qty, unit, purity]);

  return (
    <div className="calc-grid">
      <form className="calc-card" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <h3>Value Calculator</h3>
        <p className="hint">Spot prices change constantly &mdash; enter today&rsquo;s rate for your metal.</p>
        <div className="field">
          <label>Metal</label>
          <select value={metal} onChange={(e) => setMetal(e.target.value)}>
            <option value="gold">Gold</option>
            <option value="silver">Silver</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>
        <div className="field">
          <label>Spot price (USD per troy oz)</label>
          <input type="number" inputMode="decimal" min="0" step="0.01" value={spot} onChange={(e) => setSpot(e.target.value)} />
        </div>
        <div className="field-row">
          <div className="field">
            <label>Amount</label>
            <input type="number" inputMode="decimal" min="0" step="0.01" value={qty} onChange={(e) => setQty(e.target.value)} />
          </div>
          <div className="field">
            <label>Unit</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="g">Grams</option>
              <option value="ozt">Troy ounces</option>
              <option value="dwt">Pennyweight (dwt)</option>
              <option value="kg">Kilograms</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label>Purity</label>
          <select value={purity} onChange={(e) => setPurity(e.target.value)}>
            <option value="24k">24K (.999)</option>
            <option value="22k">22K</option>
            <option value="18k">18K</option>
            <option value="14k">14K</option>
            <option value="10k">10K</option>
            <option value="999">.999 Fine</option>
            <option value="925">.925 Sterling Silver</option>
            <option value="900">.900 Coin Silver</option>
          </select>
        </div>
      </form>
      <div className="calc-result">
        <span className="rlabel">Estimated Metal Value</span>
        <span className="rvalue gold-text">{value}</span>
        <span className="rsub">{sub}</span>
        <p className="disclaimer">Estimate only, based on pure metal content at the spot price you entered. It is not an offer and excludes numismatic or designer premiums. Your in-person quote is always free.</p>
        <a className="btn-gold" href="tel:+12408259001">Get Your Exact Offer</a>
      </div>
    </div>
  );
}
