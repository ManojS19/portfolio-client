'use client';
import { useEffect, useRef } from 'react';

export default function LiquidBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, animId;
    let t = 0;

    // Metaball / flowing orb system
    const orbs = [
      { x: 0.2, y: 0.3, vx: 0.0003, vy: 0.0002, r: 0.28, color: [200, 16, 46] },
      { x: 0.8, y: 0.7, vx: -0.0002, vy: 0.0003, r: 0.22, color: [140, 10, 30] },
      { x: 0.5, y: 0.2, vx: 0.0001, vy: -0.0003, r: 0.18, color: [201, 168, 76] },
      { x: 0.7, y: 0.5, vx: -0.0003, vy: -0.0002, r: 0.20, color: [200, 16, 46] },
      { x: 0.3, y: 0.8, vx: 0.0002, vy: -0.0001, r: 0.16, color: [255, 107, 53] },
    ];

    // Floating particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.5 + 0.3,
      speed: Math.random() * 0.0003 + 0.0001,
      angle: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.4 + 0.1,
      pulse: Math.random() * Math.PI * 2,
    }));

    // Grid lines
    const GRID_COLS = 12;
    const GRID_ROWS = 8;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function drawGrid() {
      ctx.strokeStyle = 'rgba(200,16,46,0.04)';
      ctx.lineWidth = 1;
      const cw = W / GRID_COLS;
      const rh = H / GRID_ROWS;
      for (let c = 0; c <= GRID_COLS; c++) {
        ctx.beginPath();
        ctx.moveTo(c * cw, 0);
        ctx.lineTo(c * cw, H);
        ctx.stroke();
      }
      for (let r = 0; r <= GRID_ROWS; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * rh);
        ctx.lineTo(W, r * rh);
        ctx.stroke();
      }
    }

    function drawOrbs() {
      orbs.forEach((orb) => {
        // Bounce
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < 0 || orb.x > 1) orb.vx *= -1;
        if (orb.y < 0 || orb.y > 1) orb.vy *= -1;

        const cx = orb.x * W;
        const cy = orb.y * H;
        const radius = orb.r * Math.min(W, H);

        // Outer glow
        const outerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.8);
        outerGrad.addColorStop(0, `rgba(${orb.color.join(',')},0.06)`);
        outerGrad.addColorStop(1, `rgba(${orb.color.join(',')},0)`);
        ctx.fillStyle = outerGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Core glow
        const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        coreGrad.addColorStop(0, `rgba(${orb.color.join(',')},0.12)`);
        coreGrad.addColorStop(0.5, `rgba(${orb.color.join(',')},0.05)`);
        coreGrad.addColorStop(1, `rgba(${orb.color.join(',')},0)`);
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawParticles() {
      particles.forEach((p) => {
        p.pulse += 0.02;
        p.angle += p.speed * 0.5;
        p.x += Math.cos(p.angle) * p.speed * 0.3;
        p.y += Math.sin(p.angle) * p.speed * 0.3 - p.speed * 0.5;
        if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }
        if (p.x < 0) p.x = 1;
        if (p.x > 1) p.x = 0;

        const alpha = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.fillStyle = `rgba(200,16,46,${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x * W, p.y * H, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawScanLines() {
      // Horizontal scan lines for a tech CRT feel
      ctx.fillStyle = 'rgba(0,0,0,0.03)';
      for (let y = 0; y < H; y += 3) {
        ctx.fillRect(0, y, W, 1);
      }
    }

    // Waveform at the bottom — sine wave horizon
    function drawHorizon() {
      t += 0.005;
      ctx.save();
      ctx.globalAlpha = 0.06;

      // Three layered waves
      [
        { amp: 40, freq: 0.006, phase: 0, color: '#c8102e' },
        { amp: 25, freq: 0.009, phase: Math.PI / 3, color: '#c9a84c' },
        { amp: 18, freq: 0.013, phase: Math.PI * 0.7, color: '#ff6b35' },
      ].forEach(({ amp, freq, phase, color }) => {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        for (let x = 0; x <= W; x += 2) {
          const y = H * 0.82 + amp * Math.sin(x * freq + t + phase);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      ctx.restore();
    }

    // Diagonal accent lines
    function drawDiagonals() {
      ctx.save();
      ctx.globalAlpha = 0.025;
      ctx.strokeStyle = '#c8102e';
      ctx.lineWidth = 1;
      for (let i = -5; i < 20; i++) {
        const offset = (i * 180 + (t * 8) % 180);
        ctx.beginPath();
        ctx.moveTo(offset, 0);
        ctx.lineTo(offset - H * 0.5, H);
        ctx.stroke();
      }
      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Deep bg gradient
      const bg = ctx.createLinearGradient(0, 0, W * 0.3, H);
      bg.addColorStop(0, '#070710');
      bg.addColorStop(0.5, '#0e0e18');
      bg.addColorStop(1, '#080812');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      drawDiagonals();
      drawGrid();
      drawOrbs();
      drawHorizon();
      drawParticles();
      drawScanLines();

      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', () => { resize(); });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
