'use client';
import { useEffect, useRef } from 'react';

export default function GoldBar3D({ lang = 'en' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    let cleanup = () => {};
    let started = false;

    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        io.disconnect();
        start().then((fn) => { cleanup = fn || cleanup; }).catch(() => {
          // WebGL unavailable or import failed — leave the space empty, never crash
          if (mountRef.current) mountRef.current.closest('.goldbar3d')?.style.setProperty('display', 'none');
        });
      }
    }, { threshold: 0.2 });
    io.observe(el);

    async function start() {
      const THREE = await import('three');

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const w = el.clientWidth;
      const h = el.clientHeight || 300;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 100);
      camera.position.set(0, 1.6, 6);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(w, h);
      el.appendChild(renderer.domElement);

      // a studio environment so the metal actually reflects light and reads as gold
      let roughness = 0.32;
      try {
        const { RoomEnvironment } = await import('three/examples/jsm/environments/RoomEnvironment.js');
        const pmrem = new THREE.PMREMGenerator(renderer);
        scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      } catch {
        roughness = 0.5; // no env map — soften so the gold colour still shows
      }

      // a stamped top face: "FAIRWEIGHT / 999.9 / FINE GOLD"
      const cnv = document.createElement('canvas');
      cnv.width = 512; cnv.height = 256;
      const ctx = cnv.getContext('2d');
      ctx.fillStyle = '#D8B23F'; ctx.fillRect(0, 0, 512, 256);
      ctx.fillStyle = 'rgba(120,90,15,0.55)';
      ctx.textAlign = 'center';
      ctx.font = '600 54px Georgia, serif';
      ctx.fillText('FAIRWEIGHT', 256, 96);
      ctx.font = '700 46px Georgia, serif';
      ctx.fillText('999.9', 256, 156);
      ctx.font = '600 30px Georgia, serif';
      ctx.fillText('FINE GOLD', 256, 200);
      const stamp = new THREE.CanvasTexture(cnv);
      stamp.anisotropy = 4;

      const goldMat = new THREE.MeshStandardMaterial({ color: 0xE9C25A, metalness: 1, roughness });
      const topMat = new THREE.MeshStandardMaterial({ color: 0xE9C25A, metalness: 1, roughness: roughness + 0.02, map: stamp });
      // BoxGeometry face order: +x,-x,+y,-y,+z,-z. +y is the top.
      const mats = [goldMat, goldMat, topMat, goldMat, goldMat, goldMat];

      const bar = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.62, 1.4), mats);
      // slight trapezoid taper like a cast bar
      const pos = bar.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        if (y > 0) { pos.setX(i, pos.getX(i) * 0.9); pos.setZ(i, pos.getZ(i) * 0.9); }
      }
      pos.needsUpdate = true;
      bar.geometry.computeVertexNormals();
      bar.rotation.set(0.3, -0.5, 0);
      scene.add(bar);

      // lights to give the metal life (no env-map asset needed)
      scene.add(new THREE.AmbientLight(0xffffff, 0.55));
      const key = new THREE.DirectionalLight(0xfff2cc, 2.6); key.position.set(4, 6, 5); scene.add(key);
      const rim = new THREE.DirectionalLight(0xffd27a, 1.8); rim.position.set(-5, 2, -4); scene.add(rim);
      const fill = new THREE.PointLight(0xffffff, 1.2, 30); fill.position.set(-2, -3, 6); scene.add(fill);

      // drag to spin, with inertia + gentle auto-rotate
      let dragging = false, lastX = 0, lastY = 0, velX = 0.004, velY = 0;
      const down = (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY; velX = velY = 0; };
      const move = (e) => {
        if (!dragging) return;
        const dx = e.clientX - lastX, dy = e.clientY - lastY;
        lastX = e.clientX; lastY = e.clientY;
        velX = dx * 0.01; velY = dy * 0.01;
        bar.rotation.y += velX; bar.rotation.x += velY;
      };
      const up = () => { dragging = false; };
      renderer.domElement.style.touchAction = 'pan-y';
      renderer.domElement.addEventListener('pointerdown', down);
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);

      let frame = 0;
      const animate = () => {
        frame = requestAnimationFrame(animate);
        if (!dragging) {
          if (!reduce) bar.rotation.y += 0.004;
          velX *= 0.94; velY *= 0.94;
          bar.rotation.y += velX; bar.rotation.x += velY;
          bar.rotation.x += (0.3 - bar.rotation.x) * 0.02; // settle tilt
        }
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        const nw = el.clientWidth, nh = el.clientHeight || 300;
        camera.aspect = nw / nh; camera.updateProjectionMatrix();
        renderer.setSize(nw, nh);
      };
      window.addEventListener('resize', onResize);

      return () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        window.removeEventListener('resize', onResize);
        renderer.dispose();
        bar.geometry.dispose();
        goldMat.dispose(); topMat.dispose(); stamp.dispose();
        if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      };
    }

    return () => { io.disconnect(); cleanup(); };
  }, []);

  return (
    <div className="goldbar3d">
      <div ref={mountRef} className="goldbar3d-canvas" />
      <span className="goldbar3d-hint">{lang === 'es' ? 'Gírelo con el dedo' : 'Spin it with your finger'}</span>
    </div>
  );
}
