'use client';
import dynamic from 'next/dynamic';

const DmvMap = dynamic(() => import('./DmvMap'), { ssr: false });

export default function DmvMapClient() {
  return <DmvMap />;
}
