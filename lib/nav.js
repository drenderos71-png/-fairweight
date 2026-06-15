export const NAV_EN = [
  { label: 'Home', href: '/' },
  { label: 'Live Prices', href: '/prices' },
  { label: 'What We Buy', href: '/buy' },
  { label: 'About', href: '/about' },
  { label: 'Service Area', href: '/area' },
  { label: 'Contact', href: '/contact' },
];

export const NAV_ES = [
  { label: 'Inicio', href: '/es' },
  { label: 'Precios', href: '/es/precios' },
  { label: 'Qué Compramos', href: '/es/que-compramos' },
  { label: 'Nosotros', href: '/es/nosotros' },
  { label: 'Área', href: '/es/area' },
  { label: 'Contacto', href: '/es/contacto' },
];

const PAIRS = [
  ['/', '/es'],
  ['/prices', '/es/precios'],
  ['/buy', '/es/que-compramos'],
  ['/about', '/es/nosotros'],
  ['/area', '/es/area'],
  ['/contact', '/es/contacto'],
];

// Given the current path, return the equivalent path in the other language.
export function otherLangHref(pathname) {
  // city pages
  let m = pathname.match(/^\/sell-gold\/([^/]+)$/);
  if (m) return `/es/vender-oro/${m[1]}`;
  m = pathname.match(/^\/es\/vender-oro\/([^/]+)$/);
  if (m) return `/sell-gold/${m[1]}`;

  for (const [en, es] of PAIRS) {
    if (pathname === en) return es;
    if (pathname === es) return en;
  }
  // fallback to the other language home
  return pathname.startsWith('/es') ? '/' : '/es';
}
