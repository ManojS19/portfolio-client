import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollReveal from '../ui/ScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import LordIcon from '../ui/LordIcon';
import { personal, softSkills, languages } from '../../lib/data';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="about" style={{ position: 'relative', zIndex: 2, padding: '120px 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>

        {/* Top label */}
        <ScrollReveal variant="fadeLeft">
          <SectionLabel index="01" label="About Me" />
        </ScrollReveal>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr',
          gap: '6rem', alignItems: 'start', marginTop: '1rem',
        }} className="about-grid">

          {/* LEFT — sticky */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <ScrollReveal variant="slideUp">
              <h2 style={{
                fontFamily: 'Bebas Neue, cursive',
                fontSize: 'clamp(3rem,5vw,5rem)',
                letterSpacing: '0.05em', lineHeight: 0.95,
                color: '#fff', marginBottom: '2rem',
              }}>
                WHO<br />
                <span style={{
                  color: 'transparent', WebkitTextStroke: '1px rgba(200,16,46,0.7)',
                }}>I AM</span>
              </h2>
            </ScrollReveal>

            {/* Skills tags */}
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {softSkills.map(({ label, icon }) => (
                  <motion.div
                    key={label}
                    whileHover={{ borderColor: 'rgba(200,16,46,0.5)', background: 'rgba(200,16,46,0.08)', y: -2 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      padding: '6px 14px', border: '1px solid rgba(200,16,46,0.12)',
                      background: 'rgba(200,16,46,0.04)',
                      fontFamily: 'Syne, sans-serif', fontSize: '0.72rem',
                      fontWeight: 500, color: 'rgba(240,237,248,0.7)',
                      letterSpacing: '0.05em', transition: 'all 0.3s', cursor: 'default',
                      borderRadius: '4px'
                    }}
                  >
                    <LordIcon src={icon} size={18} color="#c8102e" trigger="loop" />
                    {label}
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Contact strip */}
            <ScrollReveal variant="fadeUp" delay={0.35}>
              <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
                  { label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
                  { label: 'Location', value: personal.location, href: null },
                  { 
                    label: 'Languages', 
                    value: languages.map(l => l.name).join(' · '), 
                    icons: languages.map(l => l.flag),
                    href: null 
                  },
                ].map(({ label, value, href, icons }) => (
                  <div key={label} style={{
                    display: 'flex', gap: '1rem', alignItems: 'flex-start',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(200,16,46,0.06)',
                  }}>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
                      letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: 'rgba(200,16,46,0.6)', minWidth: '70px', marginTop: '4px',
                    }}>{label}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {icons && icons.slice(0, 1).map((icon, i) => (
                        <LordIcon key={i} src={icon} size={16} color="#c8102e" trigger="loop" />
                      ))}
                      {href ? (
                        <a href={href} style={{
                          fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem',
                          color: 'rgba(240,237,248,0.7)', textDecoration: 'none',
                        }}
                          onMouseEnter={(e) => e.target.style.color = '#c8102e'}
                          onMouseLeave={(e) => e.target.style.color = 'rgba(240,237,248,0.7)'}
                        >{value}</a>
                      ) : (
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.88rem', color: 'rgba(240,237,248,0.7)' }}>{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT */}
          <div>
            <ScrollReveal variant="fadeUp">
              <p style={{
                fontSize: '1.05rem', lineHeight: 1.9,
                color: 'rgba(136,132,160,0.9)', marginBottom: '1.5rem',
              }}>
                I am a{' '}
                <span style={{ color: '#f5f0e8', fontWeight: 500 }}>
                  results-driven Digital Marketing Specialist
                </span>{' '}
                with 2 years of hands-on experience across SEO, content strategy, and
                paid advertising. My approach is methodical — rooted in data, amplified by
                creativity.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fadeUp" delay={0.1}>
              <p style={{
                fontSize: '1.05rem', lineHeight: 1.9,
                color: 'rgba(136,132,160,0.9)', marginBottom: '2rem',
              }}>
                At{' '}
                <span style={{ color: '#f5f0e8', fontWeight: 500 }}>SN Info Systems</span>,
                I drove{' '}
                <span style={{ color: '#c8102e', fontWeight: 500 }}>20–30% average traffic growth</span>{' '}
                for client websites, moved competitive keywords from{' '}
                <span style={{ color: '#c8102e', fontWeight: 500 }}>Page 5 → Page 1</span>{' '}
                in just 3 months, and led multi-platform Meta Ads campaigns delivering
                measurable lead generation results.
              </p>
            </ScrollReveal>

            {/* Highlighted quote */}
            <ScrollReveal variant="fadeLeft" delay={0.2}>
              <div style={{
                borderLeft: '3px solid #c8102e',
                paddingLeft: '1.5rem', marginBottom: '2.5rem',
                background: 'rgba(200,16,46,0.04)',
                padding: '1.5rem 1.5rem',
              }}>
                <p style={{
                  fontFamily: 'Syne, sans-serif', fontSize: '1rem',
                  fontStyle: 'italic', lineHeight: 1.7, color: '#f5f0e8',
                }}>
                  "Seeking to contribute data-driven strategies to drive measurable growth
                  in a forward-thinking organization where digital innovation meets real-world impact."
                </p>
              </div>
            </ScrollReveal>

            {/* Metric boxes */}
            <ScrollReveal variant="scaleIn" delay={0.3}>
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
                gap: '1px', background: 'rgba(200,16,46,0.12)',
                border: '1px solid rgba(200,16,46,0.12)',
              }}>
                {[
                  { num: '20-30%', label: 'Avg Traffic Uplift' },
                  { num: '3mo', label: 'Page 1 Achievement' },
                  { num: '2 yrs', label: 'Industry Experience' },
                ].map(({ num, label }) => (
                  <div key={label} style={{
                    padding: '1.5rem 1rem', background: '#0e0e18',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontFamily: 'Bebas Neue, cursive', fontSize: '2rem',
                      color: '#c8102e', letterSpacing: '0.05em',
                    }}>{num}</div>
                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'rgba(136,132,160,0.6)', marginTop: '4px',
                    }}>{label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-grid > div:first-child { position: static !important; }
        }
      ` }} />
    </section>
  );
}
