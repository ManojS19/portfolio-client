import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollReveal from '../ui/ScrollReveal';
import SectionLabel from '../ui/SectionLabel';
import { skillCategories } from '../../lib/data';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaSearch, FaGlobe, FaCode, FaTachometerAlt, FaSitemap, FaRobot, FaLink, FaExchangeAlt } from 'react-icons/fa';
import { SiGoogleanalytics, SiCanva, SiMicrosoftoffice, SiGoogle } from 'react-icons/si';

// React-icon fallbacks for reliability when external images fail
const reactIconMap = {
  SiAhrefs: FaSearch,
  SiGoogleSearchConsole: FaSearch,
  TbSeo: FaSearch,
  TbWorldSearch: FaGlobe,
  SiMicrosoftbing: FaSearch,
  SiGoogleanalytics: SiGoogleanalytics,
  SiGoogletagmanager: FaSearch,
  SiLooker: FaSearch,
  FaFacebook: FaFacebook,
  FaInstagram: FaInstagram,
  FaLinkedin: FaLinkedin,
  FaYoutube: FaYoutube,
  FaXTwitter: FaTwitter,
  SiCanva: SiCanva,
  SiMicrosoftoffice: SiMicrosoftoffice,
  SiGooglemybusiness: SiGoogle,
  SiGoogleads: SiGoogle,
  TbCode: FaCode,
  TbSpeedboat: FaTachometerAlt,
  TbSitemap: FaSitemap,
  TbRobot: FaRobot,
  TbLink: FaLink,
  TbGauge: FaTachometerAlt,
  TbSearch: FaSearch,
  TbArrowsRightLeft: FaExchangeAlt,
};

function SkillCard({ skill, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [imgFailed, setImgFailed] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, rotateX: 10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8, scale: 1.04 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        e.currentTarget.style.transform = `translateY(-8px) scale(1.04) perspective(600px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg)`;
      }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
      style={{
        background: hovered ? 'rgba(200,16,46,0.07)' : 'rgba(14,14,24,0.8)',
        border: hovered ? '1px solid rgba(200,16,46,0.35)' : '1px solid rgba(200,16,46,0.1)',
        padding: '1.5rem 1rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem',
        textAlign: 'center', cursor: 'default', position: 'relative', overflow: 'hidden',
        transition: 'background 0.35s, border-color 0.35s, box-shadow 0.35s',
        boxShadow: hovered ? '0 15px 40px rgba(200,16,46,0.12)' : 'none',
      }}
    >
      {/* Glow bottom line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, #c8102e, transparent)',
          transformOrigin: 'center',
        }}
      />

      {/* Logo / Icon */}
      {skill.logo && !imgFailed ? (
        <img
          src={skill.logo}
          alt={skill.name}
          onError={() => setImgFailed(true)}
          style={{
            width: '44px', height: '44px', objectFit: 'contain',
            filter: hovered ? 'grayscale(0%) brightness(1.1)' : 'grayscale(15%)',
            transition: 'filter 0.3s',
          }}
        />
      ) : (
        <div style={{
          width: '44px', height: '44px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.6rem', color: skill.color || '#c8102e',
          background: `${skill.color || '#c8102e'}15`,
          borderRadius: '8px',
        }}>
          {reactIconMap[skill.fa] ? (
            (() => { const Comp = reactIconMap[skill.fa]; return <Comp size={28} color={skill.color || '#c8102e'} />; })()
          ) : '•'}
        </div>
      )}

      <span style={{
        fontFamily: 'Syne, sans-serif', fontSize: '0.62rem',
        fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
        color: hovered ? '#f5f0e8' : 'rgba(136,132,160,0.8)',
        transition: 'color 0.3s',
      }}>
        {skill.name}
      </span>
    </motion.div>
  );
}

function CategorySection({ cat, catIndex }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: catIndex * 0.05 }}
      style={{ marginBottom: '4rem' }}
    >
      {/* Category header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem',
      }}>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.6rem',
          letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(200,16,46,0.6)',
        }}>
          {String(catIndex + 1).padStart(2, '0')}
        </span>
        <span style={{
          fontFamily: 'Syne, sans-serif', fontSize: '0.78rem',
          fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
          color: '#f5f0e8',
        }}>
          {cat.title}
        </span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(200,16,46,0.1)' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '1rem',
      }}>
        {cat.skills.map((skill, si) => (
          <SkillCard key={skill.name} skill={skill} delay={si * 0.06} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative', zIndex: 2, padding: '120px 0' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5%' }}>
        <ScrollReveal variant="fadeUp">
          <SectionLabel index="03" label="Skills" />
          <h2 style={{
            fontFamily: 'Bebas Neue, cursive',
            fontSize: 'clamp(3rem,5vw,5rem)',
            letterSpacing: '0.05em', color: '#fff',
            marginBottom: '4rem', marginTop: '0.5rem',
          }}>
            TECH{' '}
            <span style={{ color: '#c8102e', textShadow: '0 0 30px rgba(200,16,46,0.4)' }}>
              ARSENAL
            </span>
          </h2>
        </ScrollReveal>

        {skillCategories.map((cat, i) => (
          <CategorySection key={cat.id} cat={cat} catIndex={i} />
        ))}
      </div>
    </section>
  );
}
