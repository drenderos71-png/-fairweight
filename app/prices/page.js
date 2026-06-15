import PriceCards from '@/components/PriceCards';
import Calculator from '@/components/Calculator';

export const metadata = {
  title: 'Live Metal Prices — Fairweight',
  description: 'Live gold, silver, and platinum spot prices updated every 90 seconds. Use our value calculator to estimate what your items are worth.',
};

export default function PricesPage() {
  return (
    <>
      <div className="page-hero">
        <span className="deco-label center">Live Spot</span>
        <h1>Today&rsquo;s <span className="gold-text">Metal Prices</span></h1>
        <p>Refreshed every 90 seconds from a live public feed. Call us to lock your price — 240-825-9001.</p>
        <div className="ornament"><i /><div className="dia" /><i /></div>
      </div>

      <section className="band">
        <div className="wrap">
          <PriceCards />
        </div>
      </section>

      <section className="band alt">
        <div className="wrap">
          <div className="band-head">
            <span className="deco-label center">Calculator</span>
            <h2 className="section-title">Estimate Your Value</h2>
            <p className="lede">Enter your item&rsquo;s weight and karat to see its pure metal value at today&rsquo;s spot price.</p>
          </div>
          <Calculator />
        </div>
      </section>
    </>
  );
}
