import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollReveal from '../ui/ScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import LordIcon from '../ui/LordIcon';
import { personal } from '../../lib/data';

const cards = [
  { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}`, icon: 'https://cdn.lordicon.com/tftaqjwp.json' },
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: 'https://cdn.lordicon.com/xovdoewm.json' },
  { label: 'Location', value: personal.location, href: null, icon: 'https://cdn.lordicon.com/surcxhka.json' },
  { label: 'LinkedIn', value: 'Connect', href: '#', icon: 'https://cdn.lordicon.com/dsdlqjde.json' },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="contact" style={{
      position: 'relative', zIndex: 2,
      padding: '120px 0 80px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>

        <ScrollReveal variant="fadeUp">
          <SectionLabel index="07" label="Contact" />
        </ScrollReveal>

        {/* Large heading */}
        <div ref={ref} style={{ overflow: 'hidden', marginBottom: '5rem', marginTop: '0.5rem' }}>
          <motion.h2
            initial={{ y: 120, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Bebas Neue, cursive',
              fontSize: 'clamp(3.5rem,9vw,8rem)',
              letterSpacing: '0.04em', lineHeight: 0.9,
              color: '#fff',
            }}
          >
            LET&apos;S{' '}
            <span style={{
              color: 'transparent', WebkitTextStroke: '1px rgba(200,16,46,0.7)',
            }}>
              BUILD
            </span>
            <br />
            <span style={{ color: '#c8102e', textShadow: '0 0 40px rgba(200,16,46,0.4)' }}>
              SOMETHING
            </span>
          </motion.h2>
        </div>

        {/* Contact cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: '1px', background: 'rgba(200,16,46,0.1)',
          border: '1px solid rgba(200,16,46,0.1)',
          marginBottom: '4rem',
        }}>
          {cards.map((card, i) => (
            <ScrollReveal key={card.label} variant="fadeUp" delay={i * 0.08}>
              <motion.div
                whileHover={{ background: 'rgba(200,16,46,0.07)' }}
                style={{
                  padding: '2.5rem 2rem', background: '#0e0e18',
                  transition: 'background 0.35s', textAlign: 'center',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem',
                }}
              >
                <LordIcon src={card.icon} size={48} color="#c8102e" trigger="loop" />
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
                  letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: 'rgba(200,16,46,0.6)',
                }}>
                  {card.label}
                </div>
                {card.href ? (
                  <a href={card.href} style={{
                    fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem',
                    color: '#f5f0e8', textDecoration: 'none', transition: 'color 0.3s',
                  }}
                    onMouseEnter={(e) => e.target.style.color = '#c8102e'}
                    onMouseLeave={(e) => e.target.style.color = '#f5f0e8'}
                  >
                    {card.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: '#f5f0e8' }}>
                    {card.value}
                  </span>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal variant="scaleIn">
          <div style={{ textAlign: 'center' }}>
            <motion.a
              href="mailto:basammas158@gmail.com"
              whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(200,16,46,0.3)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '15px',
                padding: '18px 60px', background: '#c8102e', color: '#fff',
                fontFamily: 'Syne, sans-serif', fontWeight: 700,
                fontSize: '0.85rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', textDecoration: 'none',
                clipPath: 'polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%)',
                transition: 'box-shadow 0.3s', marginBottom: '1rem',
              }}
            >
              <LordIcon src="https://cdn.lordicon.com/tmvocrfr.json" size={24} color="#fff" trigger="loop" />
              Send Message
            </motion.a>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem',
              letterSpacing: '0.2em', color: 'rgba(136,132,160,0.4)',
              textTransform: 'uppercase', marginTop: '1rem',
            }}>
              Usually responds within 24 hours
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
