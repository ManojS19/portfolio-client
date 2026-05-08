import { motion } from 'framer-motion';
import LordIcon from '../ui/LordIcon';
import { personal } from '../../lib/data';

export default function Footer() {
  const socialLinks = [
    { icon: 'https://cdn.lordicon.com/diihvobz.json', href: `mailto:${personal.email}`, title: 'Email' },
    { icon: 'https://cdn.lordicon.com/tftaqjwp.json', href: `tel:${personal.phone}`, title: 'Phone' },
    { icon: 'https://cdn.lordicon.com/kdduutun.json', href: '#', title: 'LinkedIn' },
  ];

  return (
    <footer style={{
      position: 'relative', zIndex: 2,
      background: '#07070f',
      borderTop: '1px solid rgba(200,16,46,0.12)',
      padding: '3rem 5%',
    }}>
      {/* Top row */}
      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid rgba(200,16,46,0.08)',
      }}>
        <div style={{
          fontFamily: 'Bebas Neue, cursive', fontSize: '2rem',
          letterSpacing: '0.15em', color: '#fff',
        }}>
          B<span style={{ color: '#c8102e' }}>.</span>SAMMA
        </div>

        <div style={{ display: 'flex', gap: '1.2rem' }}>
          {socialLinks.map((s) => (
            <motion.a
              key={s.title}
              href={s.href}
              title={s.title}
              whileHover={{ y: -5, borderColor: 'rgba(200,16,46,0.6)', background: 'rgba(200,16,46,0.08)' }}
              style={{
                width: '44px', height: '44px',
                border: '1px solid rgba(200,16,46,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none', transition: 'all 0.3s',
                borderRadius: '4px'
              }}
            >
              <LordIcon src={s.icon} size={22} color="#c8102e" trigger="loop" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem',
      }}>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
          letterSpacing: '0.15em', color: 'rgba(255,255,255,0.15)',
        }}>
          © {new Date().getFullYear()} BASAMMA S — DIGITAL MARKETING EXECUTIVE
        </p>
        <p style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
          letterSpacing: '0.15em', color: 'rgba(200,16,46,0.4)',
        }}>
          BANGALORE, INDIA
        </p>
      </div>
    </footer>
  );
}
