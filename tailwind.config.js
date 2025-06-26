/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#d4af37',
          500: '#b8941f',
          600: '#9c7f1a',
        },
        dark: {
          800: '#1a1a1a',
          900: '#121212',
          950: '#0a0a0a',
        }
      },
      fontFamily: {
        'manrope': ['Manrope', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'slideInLeft': 'slideInLeft 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
