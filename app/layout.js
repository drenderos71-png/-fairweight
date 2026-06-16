import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import './effects.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import MobileCTA from '@/components/MobileCTA';
import TapFx from '@/components/TapFx';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://fairweightdmv.com'),
  title: {
    default: 'Fairweight — We Buy & Sell Gold & Silver | Mobile, DMV',
    template: '%s | Fairweight',
  },
  description:
    'Fairweight buys and sells gold & silver across the DMV. Mobile service, free in-person quotes, honest weight, and same-day cash. Call or text 240-825-9001.',
  keywords: [
    'gold buyer DMV', 'sell gold Maryland', 'sell silver Washington DC',
    'mobile gold buyer', 'cash for gold Hyattsville', 'sell gold near me',
    'gold and silver buyer Virginia', 'bullion buyer DMV', 'sell coins DMV',
  ],
  applicationName: 'Fairweight',
  authors: [{ name: 'Fairweight' }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fairweightdmv.com',
    siteName: 'Fairweight',
    title: 'Fairweight — We Buy & Sell Gold & Silver | Mobile, DMV',
    description:
      'Honest weight, fair prices, same-day cash. Mobile gold & silver buyer serving DC, Maryland & Northern Virginia. Call or text 240-825-9001.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairweight — We Buy & Sell Gold & Silver | Mobile, DMV',
    description:
      'Honest weight, fair prices, same-day cash. Mobile gold & silver buyer serving the DMV. Call or text 240-825-9001.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport = {
  themeColor: '#15110a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        <Reveal />
        <TapFx />
      </body>
    </html>
  );
}
