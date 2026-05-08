# Basamma S — Portfolio Website
### Next.js · JavaScript · Framer Motion · GSAP · Lenis

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Open http://localhost:3000

# 3. Build for production
npm run build && npm start
```

---

## Tech Stack

| Package | Version | Purpose |
|---|---|---|
| `next` | 14 | Framework & routing |
| `react` / `react-dom` | 18 | UI rendering |
| `framer-motion` | 11 | All animations (scroll reveal, hover, page transitions) |
| `gsap` + `@gsap/react` | 3.12 | GSAP-powered animations |
| `lenis` | 1.1 | Ultra-smooth scroll (replaces default browser scroll) |
| `react-countup` | 6.5 | Animated number counters in hero stats |
| `react-intersection-observer` | 9.13 | Triggers animations when elements enter viewport |
| `react-icons` | 5.2 | Icon library |
| `tailwindcss` | 3.4 | Utility CSS |
| `clsx` | 2.1 | Conditional classNames |

---

## Project Structure

```
basamma-portfolio/
│
├── pages/
│   ├── _document.js        # HTML shell — Google Fonts loaded here
│   ├── _app.js             # App wrapper — Lenis smooth scroll initialized here
│   └── index.js            # Main page — assembles all sections
│
├── components/
│   ├── canvas/
│   │   └── LiquidBackground.js   # Canvas 2D animated background:
│   │                               # – Floating glowing orbs (metaballs)
│   │                               # – Grid lines
│   │                               # – Diagonal accent lines
│   │                               # – Sine wave horizon
│   │                               # – Rising particles
│   │                               # – CRT scan lines
│   │
│   ├── ui/
│   │   ├── CursorGlow.js         # Custom cursor: dot + ring + ambient glow
│   │   ├── Loader.js             # Full-screen animated loading screen
│   │   ├── ScrollReveal.js       # Reusable scroll-triggered animation wrapper
│   │   └── SectionLabel.js       # Section number + label component
│   │
│   ├── layout/
│   │   ├── Navbar.js             # Fixed nav with scroll-spy, mobile drawer
│   │   └── Footer.js             # Footer with social links
│   │
│   └── sections/
│       ├── Hero.js               # Hero: text scramble, floating card, skill bars, stats
│       ├── Marquee.js            # Auto-scrolling skills ticker
│       ├── About.js              # About: sticky left panel, quote, metrics
│       ├── Experience.js         # Alternating timeline with scanline cards
│       ├── Skills.js             # Skills grid with real logos + 3D tilt hover
│       ├── Education.js          # Education + Projects + Languages
│       └── Contact.js            # Contact cards + CTA
│
├── lib/
│   └── data.js             # ← ALL content lives here. Edit this to update portfolio.
│
├── styles/
│   └── globals.css         # CSS variables, Tailwind, keyframe animations
│
├── public/                 # Static assets (add profile photo here if needed)
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Color Theme

| Token | Value | Use |
|---|---|---|
| Crimson | `#c8102e` | Primary accent — buttons, borders, highlights |
| Crimson glow | `rgba(200,16,46,0.35)` | Glow effects |
| Coal | `#0e0e18` | Main background |
| Coal mid | `#1a1a2e` | Section alternate bg |
| Cream | `#f5f0e8` | Light text on dark |
| Gold | `#c9a84c` | CGPA badges, achievement accents |
| Ember | `#ff6b35` | Warm gradient pops |

---

## Customizing Content

All portfolio data lives in **`lib/data.js`**:

```js
// Personal info
export const personal = { name, phone, email, location, ... }

// Work history
export const experience = [{ company, role, period, bullets, achievement }]

// Skills by category
export const skillCategories = [{ title, skills: [{ name, logo, color }] }]

// Education
export const education = [{ degree, school, year, cgpa }]

// Projects
export const projects = [{ title, type, desc, tags }]
```

---

## Canvas Background — How It Works

The `LiquidBackground` component uses the HTML5 Canvas 2D API (no WebGL, no Three.js — runs on all devices):

- **5 floating orbs** with radial gradient glow — bounce around the viewport with edge detection
- **Grid overlay** — subtle red-tinted grid lines for a tech/data feel
- **Diagonal lines** — slowly drifting diagonal stripes in crimson
- **Sine wave horizon** — 3 layered animated waves at 82% viewport height
- **60 micro-particles** — tiny crimson dots that float upward and wrap
- **CRT scan lines** — semi-transparent horizontal bands for depth

This replaces the common stars/galaxy look with something unique to digital marketing — a data visualization aesthetic.

---

## Animations Used

| Effect | Library | Component |
|---|---|---|
| Smooth page scroll | Lenis | `_app.js` |
| Loading screen bar | Framer Motion | `Loader.js` |
| Text scramble on load | Custom JS | `Hero.js` |
| Floating card | Framer Motion | `Hero.js` |
| Count-up stats | react-countup | `Hero.js` |
| Scroll-triggered fade/slide | Framer + IntersectionObserver | `ScrollReveal.js` |
| 3D tilt on skill cards | CSS perspective + mouse tracking | `Skills.js` |
| Alternating timeline reveal | Framer Motion | `Experience.js` |
| Staggered children | Framer Motion variants | All sections |
| Nav indicator underline | Framer Motion `layoutId` | `Navbar.js` |
| Custom cursor + lag ring | rAF + CSS | `CursorGlow.js` |
| Marquee ticker | CSS animation | `Marquee.js` |

---

Built for **Basamma S** — Digital Marketing Executive, Bangalore 🇮🇳
