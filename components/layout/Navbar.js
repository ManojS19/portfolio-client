import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LordIcon from '../ui/LordIcon';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = document.querySelectorAll('section[id]');
      let cur = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 130) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 2.3 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          height: '68px', padding: '0 5%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          background: scrolled ? 'rgba(10,10,20,0.92)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(200,16,46,0.15)' : '1px solid transparent',
          transition: 'all 0.5s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ textDecoration: 'none' }}
        >
          <div style={{
            fontFamily: 'Bebas Neue, cursive', fontSize: '1.6rem',
            letterSpacing: '0.15em', color: '#fff',
          }}>
            BASAMMA<span style={{ color: '#c8102e' }}>.S</span>
          </div>
        </a>

        {/* Desktop links */}
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', alignItems: 'center' }}
          className="desktop-nav">
          {NAV.map((n) => {
            const isActive = active === n.href.slice(1);
            return (
              <li key={n.href}>
                <button
                  onClick={() => scrollTo(n.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'none',
                    fontFamily: 'Syne, sans-serif', fontSize: '0.72rem',
                    fontWeight: 600, letterSpacing: '0.2em',
                    textTransform: 'uppercase', padding: '4px 0',
                    color: isActive ? '#c8102e' : 'rgba(240,237,248,0.55)',
                    transition: 'color 0.3s', position: 'relative',
                  }}
                  className="nav-btn"
                >
                  {n.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute', bottom: -2, left: 0, right: 0,
                        height: '1px', background: '#c8102e',
                      }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <motion.a
          href="mailto:basammas158@gmail.com"
          whileHover={{ scale: 1.04, boxShadow: '0 0 20px rgba(200,16,46,0.4)' }}
          whileTap={{ scale: 0.97 }}
          className="desktop-nav"
          style={{
            padding: '9px 24px', background: 'transparent',
            border: '1px solid rgba(200,16,46,0.6)',
            color: '#c8102e', fontFamily: 'Syne, sans-serif',
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em',
            textTransform: 'uppercase', textDecoration: 'none',
            transition: 'all 0.3s', clipPath: 'polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)',
            display: 'flex', alignItems: 'center', gap: '8px'
          }}
        >
          <LordIcon src="https://cdn.lordicon.com/diihvobz.json" size={16} color="#c8102e" trigger="loop" />
          Hire Me
        </motion.a>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="hamburger-btn"
          style={{ background: 'none', border: 'none', cursor: 'none', padding: '4px', flexDirection: 'column', gap: '5px' }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span key={i} animate={{
              rotate: mobileOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
              y: mobileOpen ? (i === 0 ? 7 : i === 2 ? -7 : 0) : 0,
              opacity: mobileOpen && i === 1 ? 0 : 1,
            }} style={{ display: 'block', width: '22px', height: '1.5px', background: '#fff' }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: '280px',
              background: '#0e0e18', borderLeft: '1px solid rgba(200,16,46,0.2)',
              zIndex: 999, padding: '100px 2.5rem 2.5rem',
              display: 'flex', flexDirection: 'column', gap: '2rem',
            }}
          >
            {NAV.map((n, i) => (
              <motion.button
                key={n.href}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(n.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'none', textAlign: 'left',
                  fontFamily: 'Bebas Neue, cursive', fontSize: '2rem', letterSpacing: '0.1em',
                  color: active === n.href.slice(1) ? '#c8102e' : '#f0edf8',
                  transition: 'color 0.3s',
                }}
              >
                {n.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{
        __html: `
        .nav-btn:hover { color: rgba(240,237,248,0.9) !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }
      ` }} />
    </>
  );
}
