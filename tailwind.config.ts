import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        dark: '#141414',
        gray: {
          DEFAULT: '#1f1f1f',
          light: '#a3a3a3',
        },
        white: '#fafafa',
        accent: {
          DEFAULT: '#22c55e',
          hover: '#16a34a',
        },
        gold: {
          DEFAULT: '#FFB800',
          hover: '#E6A600',
        },
        red: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
        'city-scroll-left': 'city-scroll-left 45s linear infinite',
        'city-scroll-right': 'city-scroll-right 40s linear infinite',
        'city-scroll-left-slow': 'city-scroll-left-slow 55s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'city-scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'city-scroll-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'city-scroll-left-slow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
