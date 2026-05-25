/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kratos: {
          50:  '#EAF7F6',
          100: '#C8EAE7',
          200: '#94D6D0',
          300: '#5FC0B8',
          400: '#34A89F',
          500: '#1F8E86',
          600: '#176F69',
          700: '#125652',
          800: '#0E403D',
          900: '#0A2B29',
        },
        surface: {
          DEFAULT: '#0B0F0F',
          raised:  '#111716',
          sunken:  '#070A0A',
          paper:   '#F6F4EE',
          ink:     '#0A0E0E',
        },
        accent: {
          DEFAULT: '#E8FF59',
          warm:    '#F2B441',
        },
        muted: '#7A8584',
        danger: '#E5484D',
      },
      fontFamily: {
        sans:    ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        mono:    ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      letterSpacing: {
        wordmark: '0.18em',
      },
      borderRadius: {
        pill: '9999px',
      },
      boxShadow: {
        'glass':       '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glass-light': '0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.50)',
        'glow-kratos': '0 0 24px rgba(31,142,134,0.45)',
      },
      transitionTimingFunction: {
        'kratos': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      animation: {
        'spin-slow':    'spin 30s linear infinite',
        'precession':   'precession 40s linear infinite',
        'nucleus-pulse':'nucleus-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        precession: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        'nucleus-pulse': {
          '0%, 100%': { transform: 'scale(1)',    filter: 'brightness(1)' },
          '50%':      { transform: 'scale(1.08)', filter: 'brightness(1.25)' },
        },
      },
    },
  },
  plugins: [],
}
