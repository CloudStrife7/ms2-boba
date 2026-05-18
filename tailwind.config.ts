import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#131411',
        surface: '#1b1c19',
        'surface-low': '#0e0f0c',
        secondary: '#F59E01',
        primary: '#4C6043',
        accent: '#b7cda9',
        'on-surface': '#e4e2de',
        outline: '#6b7168',
        'outline-variant': '#434840',
        success: '#4ade80',
        danger: '#f87171',
        warning: '#fbbf24',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        label: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(245,158,1,0.15)',
        'glow-lg': '0 0 48px rgba(245,158,1,0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
