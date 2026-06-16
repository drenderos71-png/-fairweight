'use client';
import { useEffect } from 'react';

export default function TiltGold() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    let raf = 0;
    let target = 50;
    let current = 50;

    const onOrient = (e) => {
      // gamma: left/right tilt (-90..90). Map to a shimmer position 0..100.
      const g = e.gamma == null ? 0 : Math.max(-45, Math.min(45, e.gamma));
      target = 50 + (g / 45) * 50;
      if (!raf) raf = requestAnimationFrame(loop);
    };

    const loop = () => {
      current += (target - current) * 0.12;
      root.style.setProperty('--tilt', current.toFixed(2) + '%');
      if (Math.abs(target - current) > 0.2) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    };

    let attached = false;
    const attach = () => {
      if (attached) return;
      attached = true;
      root.classList.add('tilt-on');
      window.addEventListener('deviceorientation', onOrient, { passive: true });
    };

    const DOE = typeof DeviceOrientationEvent !== 'undefined' ? DeviceOrientationEvent : null;
    if (DOE && typeof DOE.requestPermission === 'function') {
      // iOS 13+: needs a user gesture. Request silently on first tap; if the
      // user grants it, tilt turns on — otherwise the CSS sheen keeps playing.
      const ask = () => {
        DOE.requestPermission().then((s) => { if (s === 'granted') attach(); }).catch(() => {});
        window.removeEventListener('touchend', ask);
      };
      window.addEventListener('touchend', ask, { once: true, passive: true });
      return () => window.removeEventListener('touchend', ask);
    }
    // Android / desktop sensors: attach directly.
    attach();
    return () => {
      window.removeEventListener('deviceorientation', onOrient);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
