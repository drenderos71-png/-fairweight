import Link from 'next/link';
import PriceCards from '@/components/PriceCards';
import Estimator from '@/components/Estimator';

export const metadata = {
  title: 'Compramos y Vendemos Oro y Plata | Fairweight — Móvil, Maryland',
  description: 'Fairweight compra y vende oro y plata en Maryland y el área. Servicio móvil, cotizaciones gratis en persona, peso honesto y efectivo el mismo día. Llame o texto 240-825-9001. Hablamos español.',
  alternates: { canonical: '/es', languages: { 'en-US': '/', 'es-US': '/es' } },
};

export default function HomeEs() {
  return (
    <>
      <section className="hero" id="hero" data-hero="photo">
        <div className="hero-bg-grad" aria-hidden="true" />
        <div className="hero-variant v-photo">
          <div className="photo-scrim" aria-hidden="true" />
          <div className="wrap photo-inner">
            <span className="deco-label">El Comprador Móvil de Oro y Plata de Maryland</span>
            <h1>Compramos y Vendemos <span className="gold-text">Oro y Plata</span></h1>
            <p className="hero-lede">Peso honesto, precios justos y efectivo el mismo día — vamos a usted, en cualquier parte de Maryland y el área. Cotizaciones gratis en persona, sin presión, sin compromiso. Hablamos español.</p>
            <span className="mobile-badge">
              <svg viewBox="0 0 24 24"><path d="M2 7h11v8H2z"/><path d="M13 10h4l3 3v2h-7z"/><circle cx="6" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg>
              Vamos a Usted &middot; Totalmente Móvil
            </span>
            <div className="subhead">
              <span>Móvil</span><span className="dot" /><span>Efectivo</span><span className="dot" /><span>Justo</span>
            </div>
            <div className="hero-actions">
              <a className="btn-gold" href="tel:+12408259001">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
                <span>Llame o Texto:&nbsp;<span className="num">240-825-9001</span></span>
              </a>
              <Link className="btn-ghost" href="/es/contacto">Cotización Gratis</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-strip">
        <div className="wrap">
          <span className="ms-ic">
            <svg viewBox="0 0 24 24"><path d="M2 7h11v8H2z"/><path d="M13 10h4l3 3v2h-7z"/><circle cx="6" cy="17" r="1.6"/><circle cx="17" cy="17" r="1.6"/></svg>
          </span>
          <span className="ms-text">
            <strong>Vamos a Usted &mdash; Sin Tienda Necesaria</strong>
            <span>Compra de oro y plata totalmente móvil en toda Maryland y el área. Cotizaciones gratis en su puerta.</span>
          </span>
          <a className="ms-cta" href="tel:+12408259001">Llame o Texto 240-825-9001</a>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <Estimator lang="es" />
        </div>
      </section>

      <section className="band light" id="about-intro">
        <div className="wrap story-grid">
          <div className="story-copy reveal">
            <span className="deco-label">Establecidos en Maryland</span>
            <h2 className="section-title">Distribuidores de Confianza.<br /><span className="gold-text">Precios Justos.</span></h2>
            <p>Bienvenido a Fairweight — el comprador móvil de oro y plata de Maryland, con base en Hyattsville. Compramos y vendemos oro, plata y platino con un compromiso de total transparencia, y vamos a usted.</p>
            <p>Pesamos y probamos cada artículo frente a usted, y lo valoramos según el precio del mercado en vivo — sin adivinanzas, sin presión, sin sorpresas. Solo peso honesto y tratos justos.</p>
            <div className="bullion-actions" style={{ marginTop: 30 }}>
              <Link className="btn-gold" href="/es/nosotros">Nuestra Historia</Link>
              <Link className="btn-ghost" href="/es/contacto">Contáctenos</Link>
            </div>
            <div className="meet">
              <div className="portrait">
                <span className="gk-border" aria-hidden="true" />
                <div className="img-wrap" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '3/4', color: 'var(--muted)', fontSize: '0.62rem', letterSpacing: '0.1em' }}>FOTO</div>
              </div>
              <div className="meet-who">
                <span className="eyebrow-sm">Conozca a su Comprador</span>
                <h4>El Nombre de su Hermano</h4>
                <span className="role">Fundador y Comprador</span>
                <p>Cuando nos contacta, trata directamente conmigo — no con un vendedor. Evaluaciones honestas, precios justos, y voy a usted en toda Maryland.</p>
              </div>
            </div>
          </div>
          <div className="story-media reveal">
            <span className="gk-border" aria-hidden="true" />
            <div className="img-wrap" style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '4/3', color: 'var(--muted)', fontSize: '0.72rem', letterSpacing: '0.1em' }}>FOTO</div>
          </div>
        </div>
      </section>

      <section className="band alt" id="spot">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Precios en Vivo</span>
            <h2 className="section-title">Precios del metal de hoy</h2>
          </div>
          <PriceCards lang="es" />
          <div style={{ textAlign: 'center', marginTop: 34 }}>
            <Link className="btn-ghost" href="/es/precios">Ver precios en vivo y calculadora</Link>
          </div>
        </div>
      </section>

      <section className="band light" id="what">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Qué Hacemos</span>
            <h2 className="section-title">Servicio de confianza, a su manera</h2>
            <div className="ornament"><i /><span className="dia" /><i /></div>
          </div>
          <div className="cards-4">
            {[
              ['Vamos<br />a Usted', 'Servicio totalmente móvil en toda Maryland. Lo encontramos en su casa o un lugar de confianza — sin manejar.'],
              ['Pagamos<br />Efectivo', 'Pago instantáneo en efectivo, al momento. Sin cheques, sin retenciones — su dinero, de inmediato.'],
              ['Nuevo, Usado,<br />Viejo y Roto', 'Compramos oro y plata en cualquier condición — monedas, cadenas, anillos, chatarra y piezas rotas.'],
              ['Pagamos Artículos<br />Empeñados', 'Pagamos su oro y plata empeñada — <span class="accent">y le pagamos a usted por encima</span> de lo que debe.'],
            ].map(([h, p]) => (
              <div key={h} className="card reveal">
                <span className="ic"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg></span>
                <h3 dangerouslySetInnerHTML={{ __html: h }} />
                <p dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band alt" id="how">
        <div className="wrap">
          <div className="band-head reveal">
            <span className="deco-label center">Cómo Funciona</span>
            <h2 className="section-title">Tres pasos simples</h2>
            <div className="ornament"><i /><span className="dia" /><i /></div>
          </div>
          <div className="steps">
            {[
              ['01', 'Contáctenos', 'Llame o envíe un texto al 240-825-9001 y díganos qué tiene.'],
              ['02', 'Vamos a Usted', 'Lo encontramos, pesamos sus artículos abiertamente, y le damos una cotización justa.'],
              ['03', 'Reciba Efectivo', 'Acepte la oferta y váyase con efectivo en mano — la misma visita.'],
            ].map(([n, h, p]) => (
              <div key={n} className="step reveal">
                <span className="num">{n}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scripture">
        <div className="wrap inner reveal">
          <span className="scripture-label">Proverbios 11:1</span>
          <blockquote>&ldquo;El peso falso es abominación a Jehová; mas la <span className="gold-text">pesa cabal</span> le agrada.&rdquo;</blockquote>
          <cite>Peso Honesto &middot; Tratos Justos</cite>
        </div>
      </section>

      <section className="contact">
        <div className="wrap reveal">
          <span className="deco-label center">Cuando Esté Listo</span>
          <h2 style={{ marginTop: 18 }}>Convierta oro y plata<br />en <span className="gold-text">efectivo hoy</span></h2>
          <p className="sub">Llámenos o envíe un texto — vamos a usted con una cotización justa, sin presión.</p>
          <a className="phone-btn" href="tel:+12408259001">
            <span className="label">Llame o Texto</span>
            <span className="number">240-825-9001</span>
          </a>
          <p className="loc">Hyattsville, MD &middot; Sirviendo Maryland y el área</p>
        </div>
      </section>
    </>
  );
}
