'use client';
import { useEffect, useState } from 'react';

export default function LordIcon({ src, size = 32, color = '#c8102e', trigger = 'loop', delay = 0, alt = null }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Dynamically load the Lordicon script if it's not already on the page
    if (!document.querySelector('script[src="https://cdn.lordicon.com/lordicon.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.lordicon.com/lordicon.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  if (!isMounted) return <div style={{ width: size, height: size }} />;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size }}>
      <lord-icon
        src={src}
        trigger={trigger}
        colors={`primary:${color},secondary:${color}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      ></lord-icon>
    </div>
  );
}
