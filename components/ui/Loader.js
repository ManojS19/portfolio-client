import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const intervals = [
      setTimeout(() => setPct(30),  200),
      setTimeout(() => setPct(60),  600),
      setTimeout(() => setPct(85),  1000),
      setTimeout(() => setPct(100), 1500),
      setTimeout(() => onDone?.(),  2200),
    ];
    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'fixed', inset: 0, zIndex: 10000,
          background: '#07070f',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '2rem',
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 'clamp(2.5rem,8vw,5rem)',
            letterSpacing: '0.2em', color: '#fff', lineHeight: 1,
          }}
        >
          BASAMMA{' '}
          <span style={{
            color: '#c8102e',
            textShadow: '0 0 30px rgba(200,16,46,0.7)',
            animation: 'flicker 3s linear infinite',
          }}>S</span>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'rgba(200,16,46,0.7)',
          }}
        >
          Digital Marketing Executive
        </motion.div>

        {/* Progress bar */}
        <div style={{
          width: '240px', height: '2px',
          background: 'rgba(200,16,46,0.12)',
          position: 'relative', overflow: 'hidden',
        }}>
          <motion.div
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              position: 'absolute', left: 0, top: 0, height: '100%',
              background: 'linear-gradient(90deg, #c8102e, #ff6b35)',
              boxShadow: '0 0 8px rgba(200,16,46,0.6)',
            }}
          />
        </div>

        {/* Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem', color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.2em',
          }}
        >
          {pct}%
        </motion.div>

        {/* Corner decorations */}
        {[
          { top: 24, left: 24, borderTop: '1px solid rgba(200,16,46,0.4)', borderLeft: '1px solid rgba(200,16,46,0.4)' },
          { top: 24, right: 24, borderTop: '1px solid rgba(200,16,46,0.4)', borderRight: '1px solid rgba(200,16,46,0.4)' },
          { bottom: 24, left: 24, borderBottom: '1px solid rgba(200,16,46,0.4)', borderLeft: '1px solid rgba(200,16,46,0.4)' },
          { bottom: 24, right: 24, borderBottom: '1px solid rgba(200,16,46,0.4)', borderRight: '1px solid rgba(200,16,46,0.4)' },
        ].map((style, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * i }}
            style={{
              position: 'absolute', width: '24px', height: '24px', ...style,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
