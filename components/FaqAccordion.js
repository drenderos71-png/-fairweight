'use client';
import { useState } from 'react';

const FAQS_EN = [
  { q: 'How do you decide what my gold or silver is worth?', a: 'We weigh each piece in front of you and price it against the current market (spot) rate for that metal and purity. No guesswork and no hidden cuts — you see exactly how the offer is calculated.' },
  { q: 'Do I have to come to you?', a: 'No — we are fully mobile. We come to your home or a public place you are comfortable with, anywhere in the DMV. No appointment runaround.' },
  { q: 'How fast do I get paid?', a: 'Same visit. Once you accept the offer, you are paid in cash on the spot — no checks, no holds, no waiting.' },
  { q: 'What kinds of items do you buy?', a: 'Gold and silver in any form — coins, bars, jewelry, chains, scrap, broken pieces, and sterling flatware. We also buy platinum. New, used, old or broken, it all has value.' },
  { q: 'Will you pay off my pawned items?', a: 'Yes. We can pay off pawned gold or silver and pay you on top of what is owed. Bring your ticket and we will walk through the numbers with you.' },
  { q: 'Is there a minimum amount?', a: 'No minimum. Whether it is a single ring or an entire estate, we will take a look and give you a free quote.' },
  { q: 'How do I get started?', a: 'Call or text 240-825-9001 with a quick description of what you have, and we will set up a time that works for you.' },
];

const FAQS_ES = [
  { q: '¿Cómo deciden cuánto vale mi oro o plata?', a: 'Pesamos cada pieza frente a usted y la valoramos según el precio actual del mercado (spot) para ese metal y pureza. Sin adivinanzas y sin cortes ocultos — usted ve exactamente cómo se calcula la oferta.' },
  { q: '¿Tengo que ir a ustedes?', a: 'No — somos completamente móviles. Vamos a su casa o a un lugar público donde se sienta cómodo, en cualquier parte del área. Sin complicaciones de citas.' },
  { q: '¿Qué tan rápido me pagan?', a: 'La misma visita. Una vez que acepta la oferta, le pagamos en efectivo al instante — sin cheques, sin retenciones, sin esperas.' },
  { q: '¿Qué tipo de artículos compran?', a: 'Oro y plata en cualquier forma — monedas, barras, joyas, cadenas, chatarra, piezas rotas y cubiertos de plata esterlina. También compramos platino. Nuevo, usado, viejo o roto, todo tiene valor.' },
  { q: '¿Pagan mis artículos empeñados?', a: 'Sí. Podemos pagar oro o plata empeñada y pagarle a usted por encima de lo que debe. Traiga su boleta y revisamos los números juntos.' },
  { q: '¿Hay una cantidad mínima?', a: 'No hay mínimo. Ya sea un solo anillo o una herencia completa, lo revisamos y le damos una cotización gratis.' },
  { q: '¿Cómo empiezo?', a: 'Llame o envíe un texto al 240-825-9001 con una breve descripción de lo que tiene, y coordinamos una hora que le convenga.' },
];

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
