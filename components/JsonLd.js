export default function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'JewelryStore',
    name: 'Fairweight',
    description:
      'Mobile gold & silver buyer serving the DMV — Washington DC, Maryland, and Northern Virginia. Honest weight, fair prices, same-day cash.',
    slogan: 'Honest Weight. Fair Dealings.',
    url: 'https://fairweightdmv.com',
    telephone: '+1-240-825-9001',
    priceRange: '$$',
    image: 'https://fairweightdmv.com/og-image.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyattsville',
      addressRegion: 'MD',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Washington, DC' },
      { '@type': 'AdministrativeArea', name: 'Maryland' },
      { '@type': 'AdministrativeArea', name: 'Northern Virginia' },
    ],
    knowsAbout: ['Gold buying', 'Silver buying', 'Platinum buying', 'Bullion', 'Coins', 'Estate jewelry'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
