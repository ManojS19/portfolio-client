import { marqueeItems } from '../../lib/data';

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div style={{
      position: 'relative', zIndex: 2, overflow: 'hidden',
      borderTop: '1px solid rgba(200,16,46,0.1)',
      borderBottom: '1px solid rgba(200,16,46,0.1)',
      background: 'rgba(200,16,46,0.03)',
      padding: '14px 0',
    }}>
      <div
        className="marquee-track"
        style={{ display: 'flex', gap: '3rem', width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.65rem', letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(136,132,160,0.5)',
            whiteSpace: 'nowrap',
          }}>
            <span style={{
              width: '4px', height: '4px', background: '#c8102e',
              borderRadius: '50%', opacity: 0.7,
            }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
