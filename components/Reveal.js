'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll('.reveal'));

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const noIO = typeof IntersectionObserver === 'undefined';

    // Safety: if motion is off or IO is unavailable, show everything immediately.
    if (reduce || noIO) {
      root.classList.remove('js-anim');
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    root.classList.add('js-anim');

    const inView = (el) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > 0;
    };

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    els.forEach((el, i) => {
      if (inView(el)) {
        el.classList.add('in'); // already visible on load — show right away
      } else {
        el.style.transitionDelay = `${Math.min(i % 4, 3) * 70}ms`;
        io.observe(el);
      }
    });

    // Final safety net: nothing should ever stay invisible. If anything is
    // still hidden after the page settles, reveal it.
    const failSafe = setTimeout(() => {
      els.forEach((el) => { if (!el.classList.contains('in') && inView(el)) el.classList.add('in'); });
    }, 1500);

    return () => { io.disconnect(); clearTimeout(failSafe); };
  }, [pathname]);

  return null;
}
