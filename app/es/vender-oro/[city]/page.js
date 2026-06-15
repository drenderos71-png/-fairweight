import { notFound } from 'next/navigation';
import { CITIES, getCity } from '@/lib/cities';
import CityPage from '@/components/CityPage';

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const title = `Compramos Oro y Plata en ${city.name}, MD | Fairweight`;
  const description = `${city.es.lede} Comprador móvil de oro y plata en ${city.name}, ${city.county}. Llame o texto 240-825-9001.`;
  return {
    title,
    description,
    alternates: {
      canonical: `/es/vender-oro/${city.slug}`,
      languages: {
        'en-US': `/sell-gold/${city.slug}`,
        'es-US': `/es/vender-oro/${city.slug}`,
      },
    },
    openGraph: { title, description, url: `https://fairweightdmv.com/es/vender-oro/${city.slug}`, locale: 'es_US' },
  };
}

export default async function Page({ params }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Compra de oro y plata',
    provider: {
      '@type': 'JewelryStore',
      name: 'Fairweight',
      telephone: '+1-240-825-9001',
      url: 'https://fairweightdmv.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Hyattsville', addressRegion: 'MD', addressCountry: 'US' },
    },
    areaServed: { '@type': 'City', name: `${city.name}, MD` },
    availableLanguage: ['Spanish', 'English'],
    url: `https://fairweightdmv.com/es/vender-oro/${city.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CityPage city={city} lang="es" />
    </>
  );
}
