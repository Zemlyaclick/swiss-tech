import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Темная таинственная палитра
        void: {
          950: '#030308',
          900: '#070712',
          800: '#0d0d1a',
          700: '#141428',
          600: '#1a1a36',
        },
        // Лазерные акценты
        laser: {
          cyan: '#00f5ff',
          blue: '#4169e1',
          purple: '#8b5cf6',
          pink: '#ec4899',
          green: '#10b981',
        },
        // Нейтральные
        mist: {
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'laser-pulse': 'laser-pulse 2s ease-in-out infinite',
        'laser-scan': 'laser-scan 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'matrix': 'matrix 20s linear infinite',
        'beam': 'beam 2s ease-out infinite',
      },
      keyframes: {
        'laser-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scaleX(1)' },
          '50%': { opacity: '1', transform: 'scaleX(1.05)' },
        },
        'laser-scan': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'glow': {
          '0%': { filter: 'brightness(1) blur(0px)' },
          '100%': { filter: 'brightness(1.3) blur(2px)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'matrix': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'beam': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(65, 105, 225, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(65, 105, 225, 0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

export default config

