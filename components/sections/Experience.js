import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollReveal from '../ui/ScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import LordIcon from '../ui/LordIcon';
import { experience } from '../../lib/data';

function ExpCard({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', gap: 0, marginBottom: '4rem' }}
      className="exp-row"
    >
      {/* Left */}
      <div style={{ paddingRight: '3rem', textAlign: 'right', paddingTop: '4px' }}
        className={index % 2 !== 0 ? 'exp-empty' : ''}>
        {index % 2 === 0 && (
          <motion.div
            whileHover={{ borderColor: 'rgba(200,16,46,0.4)', x: -4 }}
            style={{
              background: 'rgba(14,14,24,0.9)',
              border: '1px solid rgba(200,16,46,0.12)',
              padding: '2rem', position: 'relative', overflow: 'hidden',
              transition: 'all 0.4s',
            }}
            className="scanline-card"
          >
            <ExpCardContent item={item} />
          </motion.div>
        )}
      </div>

      {/* Center dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          style={{
            width: '18px', height: '18px', borderRadius: '50%',
            background: item.color,
            border: '3px solid #0e0e18',
            boxShadow: `0 0 15px ${item.color}80`,
            zIndex: 2, marginTop: '8px',
          }}
        />
        <div style={{ flex: 1, width: '1px', background: 'rgba(200,16,46,0.15)' }} />
      </div>

      {/* Right */}
      <div style={{ paddingLeft: '3rem', paddingTop: '4px' }}
        className={index % 2 === 0 ? 'exp-empty' : ''}>
        {index % 2 !== 0 && (
          <motion.div
            whileHover={{ borderColor: 'rgba(200,16,46,0.4)', x: 4 }}
            style={{
              background: 'rgba(14,14,24,0.9)',
              border: '1px solid rgba(200,16,46,0.12)',
              padding: '2rem', position: 'relative', overflow: 'hidden',
              transition: 'all 0.4s',
            }}
            className="scanline-card"
          >
            <ExpCardContent item={item} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

function ExpCardContent({ item }) {
  return (
    <>
      {/* Accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, ${item.color}, transparent)`,
      }} />

      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: item.color, marginBottom: '0.6rem',
      }}>
        {item.period} · {item.duration}
      </div>

      <div style={{
        fontFamily: 'Bebas Neue, cursive', fontSize: '1.7rem',
        letterSpacing: '0.05em', color: '#fff', lineHeight: 1.1,
      }}>
        {item.company}
      </div>

      <div style={{
        fontFamily: 'Syne, sans-serif', fontSize: '0.7rem',
        fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
        color: 'rgba(136,132,160,0.7)', marginBottom: '1.5rem',
      }}>
        {item.role} · {item.location}
      </div>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {item.bullets.map((b, i) => (
          <li key={i} style={{
            display: 'flex', gap: '10px', fontSize: '0.88rem',
            color: 'rgba(136,132,160,0.85)', lineHeight: 1.65,
          }}>
            <span style={{
              width: '4px', height: '4px', borderRadius: '50%',
              background: item.color, marginTop: '8px', flexShrink: 0,
            }} />
            {b}
          </li>
        ))}
      </ul>

      {item.achievement && (
        <div style={{
          marginTop: '1.5rem', padding: '10px 14px',
          background: `rgba(200,16,46,0.07)`,
          border: '1px solid rgba(200,16,46,0.2)',
          fontFamily: 'Syne, sans-serif', fontSize: '0.78rem',
          fontWeight: 600, color: '#c8102e',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <LordIcon src={item.achievement.icon} size={20} color="#c8102e" trigger="loop" />
          <span>{item.achievement.text}</span>
        </div>
      )}
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{
      position: 'relative', zIndex: 2,
      background: 'rgba(10,10,20,0.6)',
      padding: '120px 0',
    }}>
      {/* Grid bg */}
      <div className="grid-bg" style={{
        position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%', position: 'relative' }}>
        <ScrollReveal variant="fadeUp">
          <SectionLabel index="02" label="Experience" />
          <h2 style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 'clamp(3rem,5vw,5rem)',
            letterSpacing: '0.05em', color: '#fff',
            marginBottom: '5rem', marginTop: '0.5rem',
          }}>
            CAREER{' '}
            <span style={{
              color: 'transparent', WebkitTextStroke: '1px rgba(200,16,46,0.7)',
            }}>JOURNEY</span>
          </h2>
        </ScrollReveal>

        {experience.map((item, i) => (
          <ExpCard key={item.id} item={item} index={i} />
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 768px) {
          .exp-row { grid-template-columns: 24px 1fr !important; }
          .exp-row > div:first-child { display: none !important; }
          .exp-row > div:nth-child(2) { grid-column: 1; }
          .exp-row > div:last-child { padding-left: 1.5rem !important; grid-column: 2; }
          .exp-empty { display: none !important; }
        }
      ` }} />
    </section>
  );
}
