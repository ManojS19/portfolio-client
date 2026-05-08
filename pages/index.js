import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { AnimatePresence } from 'framer-motion';

import Loader       from '../components/ui/Loader';
import Navbar       from '../components/layout/Navbar';
import Footer       from '../components/layout/Footer';
import Hero         from '../components/sections/Hero';
import Marquee      from '../components/sections/Marquee';
import About        from '../components/sections/About';
import Experience   from '../components/sections/Experience';
import Skills       from '../components/sections/Skills';
import Education    from '../components/sections/Education';
import Contact      from '../components/sections/Contact';

// No-SSR components (use browser APIs)
const LiquidBackground = dynamic(() => import('../components/canvas/LiquidBackground'), { ssr: false });
const CursorGlow       = dynamic(() => import('../components/ui/CursorGlow'),           { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Prevent scroll during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <>
      <Head>
        <title>Basamma S — Digital Marketing Executive</title>
        <meta name="description" content="Basamma S — SEO Analyst & Digital Marketing Executive with 2+ years experience in SEO, Meta Ads, and analytics. Based in Bangalore, India." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Basamma S — Digital Marketing Executive" />
        <meta property="og:description" content="Results-driven SEO Analyst specializing in organic growth, paid advertising, and data-driven strategy." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Loading screen */}
      <AnimatePresence mode="wait">
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Fixed canvas background */}
      <LiquidBackground />

      {/* Custom cursor */}
      <CursorGlow />

      {/* Main site */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
