import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollReveal from '../ui/ScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import LordIcon from '../ui/LordIcon';
import { education, projects, languages } from '../../lib/data';

function EduCard({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 8 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
      whileHover={{ y: -10, borderColor: 'rgba(200,16,46,0.4)' }}
      style={{
        background: 'rgba(14,14,24,0.9)', border: '1px solid rgba(200,16,46,0.12)',
        padding: '2.5rem', position: 'relative', overflow: 'hidden',
        transition: 'all 0.4s',
      }}
    >
      {/* Year watermark */}
      <div style={{
        position: 'absolute', bottom: '-0.5rem', right: '1.2rem',
        fontFamily: 'Bebas Neue, cursive', fontSize: '5rem',
        color: 'rgba(200,16,46,0.05)', letterSpacing: '0.1em',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>
        {item.year}
      </div>

      {/* Top line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, #c8102e 0%, transparent 60%)',
      }} />

      <div style={{ marginBottom: '1rem' }}>
        <LordIcon src={item.icon} size={48} color="#c8102e" trigger="loop" />
      </div>

      <div style={{
        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(200,16,46,0.7)', marginBottom: '0.5rem',
      }}>
        {item.degree}
      </div>

      <div style={{
        fontFamily: 'Bebas Neue, cursive', fontSize: '1.5rem',
        letterSpacing: '0.05em', color: '#fff', lineHeight: 1.2,
        marginBottom: '0.25rem',
      }}>
        {item.school}
      </div>

      <div style={{
        fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem',
        color: 'rgba(136,132,160,0.7)', marginBottom: '1.5rem',
      }}>
        {item.city}
      </div>

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        padding: '6px 14px', border: '1px solid rgba(201,168,76,0.25)',
        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
        letterSpacing: '0.15em', color: '#c9a84c',
      }}>
        ★ CGPA: {item.cgpa}
      </div>
    </motion.div>
  );
}

function ProjectCard({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.12 }}
      whileHover={{ y: -8, borderColor: 'rgba(200,16,46,0.4)' }}
      style={{
        background: 'rgba(14,14,24,0.9)', border: '1px solid rgba(200,16,46,0.12)',
        padding: '2rem', position: 'relative', overflow: 'hidden',
        transition: 'all 0.4s',
      }}
    >
      <div style={{
        position: 'absolute', top: '-5px', right: '1rem',
        fontFamily: 'Bebas Neue, cursive', fontSize: '4rem',
        color: 'rgba(200,16,46,0.05)', lineHeight: 1, userSelect: 'none',
      }}>
        {item.id}
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <LordIcon src={item.icon} size={42} color="#c8102e" trigger="loop" />
      </div>

      <div style={{
        display: 'inline-block', padding: '3px 10px', marginBottom: '0.8rem',
        background: 'rgba(200,16,46,0.08)', border: '1px solid rgba(200,16,46,0.2)',
        fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
        letterSpacing: '0.15em', color: 'rgba(200,16,46,0.8)',
        textTransform: 'uppercase',
      }}>
        {item.type}
      </div>

      <div style={{
        fontFamily: 'Syne, sans-serif', fontSize: '0.95rem',
        fontWeight: 700, color: '#f5f0e8', lineHeight: 1.4,
        marginBottom: '0.8rem',
      }}>
        {item.title}
      </div>

      <p style={{
        fontSize: '0.85rem', color: 'rgba(136,132,160,0.8)', lineHeight: 1.7,
      }}>
        {item.desc}
      </p>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '1.2rem' }}>
        {item.tags.map((tag) => (
          <span key={tag} style={{
            padding: '3px 8px', fontSize: '0.6rem',
            fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em',
            background: 'rgba(200,16,46,0.05)',
            border: '1px solid rgba(200,16,46,0.15)',
            color: 'rgba(136,132,160,0.7)', textTransform: 'uppercase',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" style={{
      position: 'relative', zIndex: 2,
      background: 'rgba(10,10,20,0.5)',
      padding: '120px 0',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>

        {/* Education */}
        <ScrollReveal variant="fadeUp">
          <SectionLabel index="04" label="Education" />
          <h2 style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 'clamp(3rem,5vw,5rem)',
            letterSpacing: '0.05em', color: '#fff',
            marginBottom: '3rem', marginTop: '0.5rem',
          }}>
            ACADEMIC{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(200,16,46,0.7)' }}>
              FOUNDATION
            </span>
          </h2>
        </ScrollReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: '1.5rem', marginBottom: '6rem',
        }}>
          {education.map((item, i) => <EduCard key={i} item={item} index={i} />)}
        </div>

        {/* Projects */}
        <ScrollReveal variant="fadeUp">
          <SectionLabel index="05" label="Projects" />
          <h2 style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 'clamp(3rem,5vw,5rem)',
            letterSpacing: '0.05em', color: '#fff',
            marginBottom: '3rem', marginTop: '0.5rem',
          }}>
            ACADEMIC{' '}
            <span style={{ color: '#c8102e', textShadow: '0 0 30px rgba(200,16,46,0.35)' }}>
              PROJECTS
            </span>
          </h2>
        </ScrollReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
          gap: '1.5rem', marginBottom: '6rem',
        }}>
          {projects.map((p, i) => <ProjectCard key={p.id} item={p} index={i} />)}
        </div>

        {/* Languages */}
        <ScrollReveal variant="fadeUp">
          <SectionLabel index="06" label="Languages" />
          <h2 style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 'clamp(3rem,5vw,5rem)',
            letterSpacing: '0.05em', color: '#fff',
            marginBottom: '2.5rem', marginTop: '0.5rem',
          }}>
            LANGUAGES{' '}
            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(200,16,46,0.7)' }}>
              SPOKEN
            </span>
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {languages.map((lang, i) => (
            <ScrollReveal key={lang.name} variant="scaleIn" delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5, borderColor: 'rgba(200,16,46,0.4)', background: 'rgba(200,16,46,0.06)' }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '1rem 2rem', border: '1px solid rgba(200,16,46,0.12)',
                  background: 'rgba(14,14,24,0.8)', transition: 'all 0.3s',
                }}
              >
                <LordIcon src={lang.flag} size={32} color="#c8102e" trigger="loop" />
                <div>
                  <div style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 700,
                    fontSize: '0.9rem', color: '#f5f0e8', letterSpacing: '0.05em',
                  }}>
                    {lang.name}
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: 'rgba(200,16,46,0.6)',
                  }}>
                    {lang.level}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
