import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import LordIcon from '../ui/LordIcon';
import { stats } from '../../lib/data';

// Animated text scramble
function ScrambleText({ text, trigger }) {
  const [display, setDisplay] = useState(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#@!$%&';

  useEffect(() => {
    if (!trigger) return;
    let iter = 0;
    const interval = setInterval(() => {
      setDisplay(
        text.split('').map((ch, i) => {
          if (ch === ' ') return ' ';
          if (i < iter) return text[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      iter += 0.5;
      if (iter >= text.length) clearInterval(interval);
    }, 35);
    return () => clearInterval(interval);
  }, [trigger, text]);

  return <span>{display}</span>;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const { ref: statsRef, inView: statsVisible } = useInView({ triggerOnce: true });
  const [scramble, setScramble] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setScramble(true), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        padding: '120px 5% 80px', position: 'relative', zIndex: 2,
      }}
    >
      {/* Vertical text left side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        style={{
          position: 'absolute', left: '1.8rem', top: '50%',
          transform: 'translateY(-50%) rotate(-90deg)',
          transformOrigin: 'center',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.55rem', letterSpacing: '0.3em',
          textTransform: 'uppercase', color: 'rgba(200,16,46,0.4)',
          whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '12px',
        }}
        className="hide-mobile"
      >
        <span style={{ width: '30px', height: '1px', background: 'rgba(200,16,46,0.3)', display: 'inline-block' }} />
        basammas158@gmail.com
        <span style={{ width: '30px', height: '1px', background: 'rgba(200,16,46,0.3)', display: 'inline-block' }} />
      </motion.div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '4rem', alignItems: 'center',
        }} className="hero-grid">

          {/* LEFT */}
          <motion.div variants={container} initial="hidden" animate="show">

            {/* Tag line */}
            <motion.div variants={item} style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              padding: '6px 16px', border: '1px solid rgba(200,16,46,0.25)',
              background: 'rgba(200,16,46,0.04)',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.62rem', letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'rgba(240,237,248,0.9)',
              marginBottom: '1.8rem', borderRadius: '4px'
            }}>
              <LordIcon src="https://cdn.lordicon.com/lupuorrc.json" size={18} color="#c8102e" trigger="loop" />
              Available for opportunities
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={item}>
              <h1 style={{
                fontFamily: 'Bebas Neue, cursive',
                fontSize: 'clamp(4rem, 9vw, 8.5rem)',
                lineHeight: 0.88, letterSpacing: '0.04em',
                color: '#fff', marginBottom: '0.2rem',
              }}>
                <ScrambleText text="BASAMMA. " trigger={scramble} />

                <span style={{
                  fontFamily: 'Bebas Neue, cursive',
                  fontSize: 'clamp(4rem, 9vw, 8.5rem)',
                  lineHeight: 0.88, letterSpacing: '0.04em',
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(200,16,46,0.8)',
                  textShadow: 'none',
                  marginBottom: '1.5rem',
                }}>
                  S
                </span>
              </h1>

            </motion.div>

            {/* Role badge */}
            <motion.div variants={item} style={{ marginBottom: '1.8rem' }}>
              <span style={{
                fontFamily: 'Syne, sans-serif', fontSize: 'clamp(0.8rem,1.5vw,1rem)',
                fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
                color: '#8884a0',
              }}>
                Digital Marketing Executive{' '}
                <span style={{
                  color: '#c9a84c', fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75em',
                }}>
                  // SEO · Ads · Analytics
                </span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={item} style={{
              fontSize: '1rem', lineHeight: 1.85,
              color: 'rgba(136,132,160,0.85)',
              maxWidth: '520px', marginBottom: '2.5rem',
            }}>
              Driving{' '}
              <span style={{ color: '#f5f0e8', fontWeight: 500 }}>measurable growth</span>{' '}
              through data-driven SEO strategy, precision-targeted paid advertising, and
              content that converts. Based in{' '}
              <span style={{ color: '#c8102e' }}>Bangalore, India</span>.
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(200,16,46,0.35)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '14px 32px', background: '#c8102e',
                  color: '#fff', fontFamily: 'Syne, sans-serif',
                  fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  clipPath: 'polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)',
                  transition: 'all 0.3s', border: 'none',
                  display: 'flex', alignItems: 'center', gap: '10px'
                }}
              >
                <LordIcon src="https://cdn.lordicon.com/diihvobz.json" size={20} color="#ffffff" trigger="loop" />
                Get in Touch
              </motion.a>
              <motion.a
                href="#experience"
                onClick={(e) => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); }}
                whileHover={{ borderColor: 'rgba(200,16,46,0.6)', color: '#f5f0e8', background: 'rgba(200,16,46,0.05)' }}
                style={{
                  padding: '14px 32px', background: 'transparent',
                  border: '1px solid rgba(240,237,248,0.15)',
                  color: 'rgba(240,237,248,0.55)', fontFamily: 'Syne, sans-serif',
                  fontWeight: 600, fontSize: '0.75rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase', textDecoration: 'none',
                  transition: 'all 0.3s',
                  display: 'flex', alignItems: 'center', gap: '10px'
                }}
              >
                <LordIcon src="https://cdn.lordicon.com/fpipqwqy.json" size={20} color="#c8102e" trigger="loop" />
                View Work
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              variants={item}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4,1fr)',
                gap: '0',
                borderTop: '1px solid rgba(200,16,46,0.1)',
              }}
              className="stats-grid"
            >
              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: '1.5rem 0',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(200,16,46,0.08)' : 'none',
                  paddingRight: '1.5rem',
                  paddingLeft: i > 0 ? '1.5rem' : 0,
                }}>
                  <div style={{
                    fontFamily: 'Bebas Neue, cursive', fontSize: '2.8rem',
                    color: '#c8102e', lineHeight: 1,
                    textShadow: '0 0 20px rgba(200,16,46,0.3)',
                  }}>
                    {statsVisible
                      ? <CountUp end={s.count} duration={2} suffix={s.suffix} />
                      : `0${s.suffix}`}
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'rgba(136,132,160,0.7)', marginTop: '0.3rem',
                  }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Floating card */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="hero-card-wrap"
            style={{ perspective: '800px' }}
          >
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '280px',
                background: 'linear-gradient(135deg, rgba(200,16,46,0.08), rgba(14,14,24,0.95))',
                border: '1px solid rgba(200,16,46,0.25)',
                padding: '2.5rem 2rem',
                position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Corner brackets */}
              {[
                { top: 0, left: 0 },
                { top: 0, right: 0, borderRight: '2px solid #c8102e', borderLeft: 'none' },
                { bottom: 0, left: 0, borderBottom: '2px solid #c8102e', borderTop: 'none' },
                { bottom: 0, right: 0, borderBottom: '2px solid #c8102e', borderTop: 'none', borderRight: '2px solid #c8102e', borderLeft: 'none' },
              ].map((s, i) => (
                <div key={i} style={{
                  position: 'absolute', width: '16px', height: '16px',
                  borderTop: '2px solid #c8102e', borderLeft: '2px solid #c8102e',
                  ...s,
                }} />
              ))}

              {/* Avatar */}
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%',
                border: '2px solid rgba(200,16,46,0.5)',
                background: 'radial-gradient(circle at 35% 35%, rgba(200,16,46,0.25), rgba(14,14,24,0.9))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Bebas Neue, cursive', fontSize: '2.2rem',
                color: '#c8102e', marginBottom: '1.5rem', position: 'relative',
              }}>
                B
                <div style={{
                  position: 'absolute', inset: '-8px', borderRadius: '50%',
                  border: '1px dashed rgba(200,16,46,0.25)',
                  animation: 'rotateRing 20s linear infinite',
                }} />
              </div>

              <div style={{
                fontFamily: 'Bebas Neue, cursive', fontSize: '1.5rem',
                letterSpacing: '0.1em', color: '#fff', marginBottom: '0.25rem',
              }}>BASAMMA S</div>

              <div style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'rgba(200,16,46,0.7)', marginBottom: '1.5rem',
              }}>SEO Analyst · Bangalore</div>

              {/* Skill bars */}
              {[
                { label: 'SEO Strategy', pct: 92 },
                { label: 'Meta Ads', pct: 85 },
                { label: 'Analytics', pct: 88 },
              ].map(({ label, pct }) => (
                <div key={label} style={{ marginBottom: '1rem' }}>
                  <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    fontFamily: 'Syne, sans-serif', fontSize: '0.65rem',
                    color: 'rgba(240,237,248,0.6)', marginBottom: '5px',
                  }}>
                    <span>{label}</span>
                    <span style={{ color: '#c8102e' }}>{pct}%</span>
                  </div>
                  <div style={{ height: '2px', background: 'rgba(200,16,46,0.12)', position: 'relative' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        position: 'absolute', left: 0, top: 0, height: '100%',
                        background: 'linear-gradient(90deg, #c8102e, #ff6b35)',
                        boxShadow: '0 0 6px rgba(200,16,46,0.5)',
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Tags */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '1.2rem' }}>
                {['SEO', 'Meta Ads', 'GA4', 'Canva'].map((tag) => (
                  <span key={tag} style={{
                    padding: '3px 10px', fontSize: '0.58rem',
                    fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em',
                    border: '1px solid rgba(200,16,46,0.25)',
                    background: 'rgba(200,16,46,0.06)', color: 'rgba(200,16,46,0.8)',
                    textTransform: 'uppercase',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-card-wrap { display: none !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 560px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .hide-mobile { display: none !important; }
        }
      ` }} />
    </section>
  );
}
