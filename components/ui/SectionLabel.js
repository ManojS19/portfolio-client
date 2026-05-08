export default function SectionLabel({ index, label }) {
  return (
    <div style={{
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.62rem', letterSpacing: '0.35em',
      textTransform: 'uppercase',
      color: '#c8102e',
      display: 'flex', alignItems: 'center', gap: '10px',
      marginBottom: '0.75rem',
    }}>
      <span style={{ color: 'rgba(200,16,46,0.4)' }}>{index}</span>
      <span style={{ width: '20px', height: '1px', background: '#c8102e', display: 'inline-block' }} />
      {label}
    </div>
  );
}
