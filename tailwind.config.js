/** @type {import('tailwindcss').Config} */
export default {
  // Updated content paths for Laravel's resources/ directory
  content: [
    './resources/**/*.{js,ts,jsx,tsx,php,blade.php}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#044336',
          deep: '#022F27',
          cream: '#F5F2EA',
          tint: '#E8F0ED',
          beige: '#E8E2D6',
        },
        ink: {
          DEFAULT: '#17231F',
          muted: '#66716C',
        },
        line: '#D8DED9',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
