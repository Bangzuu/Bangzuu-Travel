/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        indigo: '#0B0D1A',
        plum: '#2A1346',
        magenta: '#D23CFF',
        violet: '#FF6BFF',
        mist: '#54426E',
        ivory: '#F2F1EC',
      },
      boxShadow: {
        glow: '0 0 32px rgba(210, 60, 255, 0.36)',
        'soft-violet': '0 24px 80px rgba(69, 34, 174, 0.34)',
      },
    },
  },
  plugins: [],
};
