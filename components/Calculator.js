'use client';
import { useState, useMemo } from 'react';

const PURITY = {
  '24k': 0.999, '22k': 0.9167, '18k': 0.75, '14k': 0.5833, '10k': 0.4167,
  '999': 0.999, '925': 0.925, '900': 0.900,
};
const UNIT_TO_OZT = { g: 1 / 31.1035, ozt: 1, dwt: 1 / 20, kg: 32.1507 };

const L = {
  en: {
    title: 'Value Calculator', hint: 'Spot prices change constantly — enter today’s rate for your metal.',
    metal: 'Metal', gold: 'Gold', silver: 'Silver', platinum: 'Platinum',
    spot: 'Spot price (USD per troy oz)', amount: 'Amount', unit: 'Unit', purity: 'Purity',
    grams: 'Grams', ozt: 'Troy ounces', dwt: 'Pennyweight (dwt)', kg: 'Kilograms',
    result: 'Estimated Metal Value', enter: 'Enter an amount to see an estimate.',
    disclaimer: 'Estimate only, based on pure metal content at the spot price you entered. It is not an offer and excludes numismatic or designer premiums. Your in-person quote is always free.',
    cta: 'Get Your Exact Offer', at: 'at',
  },
  es: {
    title: 'Calculadora de Valor', hint: 'Los precios del mercado cambian constantemente — ingrese la tasa de hoy para su metal.',
    metal: 'Metal', gold: 'Oro', silver: 'Plata', platinum: 'Platino',
    spot: 'Precio spot (USD por onza troy)', amount: 'Cantidad', unit: 'Unidad', purity: 'Pureza',
    grams: 'Gramos', ozt: 'Onzas troy', dwt: 'Pennyweight (dwt)', kg: 'Kilogramos',
    result: 'Valor Estimado del Metal', enter: 'Ingrese una cantidad para ver un estimado.',
    disclaimer: 'Solo un estimado, basado en el contenido de metal puro al precio que ingresó. No es una oferta y excluye primas numismáticas o de diseñador. Su cotización en persona siempre es gratis.',
    cta: 'Obtenga su Oferta Exacta', at: 'a',
  },
};

export default function Calculator({ lang = 'en' }) {
  const t = L[lang];
  const [metal, setMetal] = useState('gold');
  const [spot, setSpot] = useState('4400');
  const [qty, setQty] = useState('10');
  const [unit, setUnit] = useState('g');
  const [purity, setPurity] = useState('14k');

  const { value, sub } = useMemo(() => {
    const s = parseFloat(spot), q = parseFloat(qty);
    const f = PURITY[purity] ?? 1, u = UNIT_TO_OZT[unit] ?? 1;
    if (isNaN(s) || isNaN(q) || q <= 0) return { value: '$0.00', sub: t.enter };
    const v = q * u * f * s;
    const unitTxt = unit === 'g' ? 'g' : unit === 'ozt' ? 'oz' : unit === 'dwt' ? 'dwt' : 'kg';
    const metalTxt = lang === 'es' ? { gold: 'oro', silver: 'plata', platinum: 'platino' }[metal] : metal;
    return {
      value: v.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      sub: `${q} ${unitTxt} · ${purity.toUpperCase()} ${metalTxt} ${t.at} $${s}/ozt`,
    };
  }, [metal, spot, qty, unit, purity, lang, t]);

  return (
    <div className="calc-grid">
      <form className="calc-card" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <h3>{t.title}</h3>
        <p className="hint">{t.hint}</p>
        <div className="field">
          <label>{t.metal}</label>
          <select value={metal} onChange={(e) => setMetal(e.target.value)}>
            <option value="gold">{t.gold}</option>
            <option value="silver">{t.silver}</option>
            <option value="platinum">{t.platinum}</option>
          </select>
        </div>
        <div className="field">
          <label>{t.spot}</label>
          <input type="number" inputMode="decimal" min="0" step="0.01" value={spot} onChange={(e) => setSpot(e.target.value)} />
        </div>
        <div className="field-row">
          <div className="field">
            <label>{t.amount}</label>
            <input type="number" inputMode="decimal" min="0" step="0.01" value={qty} onChange={(e) => setQty(e.target.value)} />
          </div>
          <div className="field">
            <label>{t.unit}</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="g">{t.grams}</option>
              <option value="ozt">{t.ozt}</option>
              <option value="dwt">{t.dwt}</option>
              <option value="kg">{t.kg}</option>
            </select>
          </div>
        </div>
        <div className="field">
          <label>{t.purity}</label>
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
        <span className="rlabel">{t.result}</span>
        <span className="rvalue gold-text">{value}</span>
        <span className="rsub">{sub}</span>
        <p className="disclaimer">{t.disclaimer}</p>
        <a className="btn-gold" href="tel:+12408259001">{t.cta}</a>
      </div>
    </div>
  );
}
