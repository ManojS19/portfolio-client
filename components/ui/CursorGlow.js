'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0;
    let dx = 0, dy = 0;
    let rafId;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', onMove, { passive: true });

    // Dot follows instantly; ring lags
    function animate() {
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
      dx += (mx - dx) * 0.12;
      dy += (my - dy) * 0.12;
      ring.style.left = dx + 'px';
      ring.style.top  = dy + 'px';
      rafId = requestAnimationFrame(animate);
    }
    rafId = requestAnimationFrame(animate);

    // Scale on hover of interactive elements
    const onEnter = () => ring.style.transform = 'translate(-50%,-50%) scale(2)';
    const onLeave = () => ring.style.transform = 'translate(-50%,-50%) scale(1)';
    document.querySelectorAll('a,button,[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', width: '6px', height: '6px',
          borderRadius: '50%', background: '#c8102e',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none', zIndex: 9999,
          boxShadow: '0 0 8px rgba(200,16,46,0.8)',
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', width: '30px', height: '30px',
          borderRadius: '50%', border: '1px solid rgba(200,16,46,0.5)',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none', zIndex: 9998,
          transition: 'transform 0.3s ease, border-color 0.3s ease',
        }}
      />
      {/* Ambient glow */}
      <div
        id="cursor-glow-ambient"
        style={{
          position: 'fixed', width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,16,46,0.04) 0%, transparent 70%)',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none', zIndex: 9997,
          left: '50%', top: '50%',
        }}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        * { cursor: none !important; }
        @media (hover: none) {
          * { cursor: auto !important; }
          div[style*="position: fixed"][style*="6px"] { display: none; }
        }
      ` }} />
    </>
  );
}
