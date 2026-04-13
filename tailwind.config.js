/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:      '#020617',
        primary:   '#f97316',
        accent:    '#dc2626',
        surface:   '#0f172a',
        'surface-2': '#1e293b',
      },
      fontFamily: {
        display: ['Bebas Neue', 'Impact', 'sans-serif'],
        body:    ['Inter', 'Roboto', 'sans-serif'],
      },
      clipPath: {
        'clip-tr': 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
        'clip-br': 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 24px rgba(192,86,42,0.5)',
        'glow-accent':  '0 0 24px rgba(161,79,47,0.4)',
        'glow-sm':      '0 0 12px rgba(192,86,42,0.35)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        400: '400ms',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-14px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5' },
          '50%':       { opacity: '1' },
        },
        'shimmer-sweep': {
          '0%':   { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(250%) skewX(-12deg)' },
        },
        'particle-drift': {
          '0%':   { transform: 'translateY(0px) translateX(0px)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '0.6' },
          '100%': { transform: 'translateY(-120px) translateX(30px)', opacity: '0' },
        },
        'marquee-scroll': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ping-ring': {
          '0%':      { transform: 'scale(1)', opacity: '0.8' },
          '80%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'border-shimmer': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        float:           'float 4s ease-in-out infinite',
        'float-slow':    'float-slow 6s ease-in-out infinite',
        'glow-pulse':    'glow-pulse 2.5s ease-in-out infinite',
        'shimmer-sweep': 'shimmer-sweep 2.5s ease-in-out infinite',
        'particle-drift':'particle-drift 6s ease-in-out infinite',
        'marquee-scroll':'marquee-scroll 28s linear infinite',
        'ping-ring':     'ping-ring 2s cubic-bezier(0,0,0.2,1) infinite',
        'border-shimmer':'border-shimmer 3s ease infinite',
      },
    },
  },
  plugins: [],
};
