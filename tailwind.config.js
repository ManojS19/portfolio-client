/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          50:  '#fff0f2',
          100: '#ffe0e5',
          200: '#ffc1cb',
          300: '#ff91a4',
          400: '#ff5070',
          500: '#ff1a3c',
          DEFAULT: '#c8102e',
          600: '#c8102e',
          700: '#a00d25',
          800: '#850c22',
          900: '#710d22',
        },
        coal: {
          50:  '#f4f4f6',
          100: '#e8e8ec',
          200: '#d0d0db',
          300: '#a8a8bf',
          400: '#7a7a9c',
          500: '#5a5878',
          DEFAULT: '#0e0e18',
          600: '#4a4860',
          700: '#3a3850',
          800: '#1e1c30',
          900: '#0e0e18',
          950: '#07070f',
        },
        cream: '#f5f0e8',
        gold: '#c9a84c',
        ember: '#ff6b35',
      },
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        accent: ['Syne', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'flicker': 'flicker 3s linear infinite',
        'slide-marquee': 'marqueeSlide 25s linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%,100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(1.6)' },
        },
        flicker: {
          '0%,19%,21%,23%,25%,54%,56%,100%': { opacity: 1 },
          '20%,24%,55%': { opacity: 0.4 },
        },
        marqueeSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
