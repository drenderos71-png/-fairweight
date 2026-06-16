'use client';
import { useEffect } from 'react';

const SEL = '.btn-gold, .btn-ghost, .phone-btn, .pc-cta, .nav-cta, .ms-cta, .mc-call, .mc-text, .est-chip, .city-link';

export default function TapFx() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onDown = (e) => {
      const btn = e.target.closest(SEL);
      if (!btn) return;

      try { navigator.vibrate && navigator.vibrate(8); } catch {}

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 1.5;
      const x = (e.clientX ?? rect.left + rect.width / 2) - rect.left;
      const y = (e.clientY ?? rect.top + rect.height / 2) - rect.top;

      const r = document.createElement('span');
      r.className = 'tap-ripple';
      r.style.width = r.style.height = `${size}px`;
      r.style.left = `${x - size / 2}px`;
      r.style.top = `${y - size / 2}px`;
      if (getComputedStyle(btn).position === 'static') btn.style.position = 'relative';
      if (getComputedStyle(btn).overflow !== 'hidden') btn.style.overflow = 'hidden';
      btn.appendChild(r);
      r.addEventListener('animationend', () => r.remove());
    };

    document.addEventListener('pointerdown', onDown, { passive: true });
    return () => document.removeEventListener('pointerdown', onDown);
  }, []);

  return null;
}
