'use client';
import dynamic from 'next/dynamic';

const GoldBar3D = dynamic(() => import('./GoldBar3D'), { ssr: false });

export default function GoldBar3DClient({ lang = 'en' }) {
  return <GoldBar3D lang={lang} />;
}
