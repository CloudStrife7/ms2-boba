import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    borderRadius: {
      DEFAULT: '0.125rem',
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.25rem',
      xl: '0.5rem',
      full: '0.75rem',
    },
    extend: {
      colors: {
        cardinal: '#6D0827',
        storm: '#4C6043',
        melon: '#F59E01',
        background: '#131411',
        surface: '#131411',
        'surface-container-lowest': '#0d0f0c',
        'surface-container-low': '#1b1c19',
        'surface-container': '#242621',
        'surface-container-high': '#2e312b',
        'surface-container-highest': '#393d35',
        'surface-bright': '#393939',
        'on-surface': '#e4e2de',
        'on-surface-variant': '#b7cda9',
        outline: '#8e9288',
        'outline-variant': '#444840',
        primary: '#4C6043',
        secondary: '#6D0827',
        tertiary: '#F59E01',
        error: '#6D0827',
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
