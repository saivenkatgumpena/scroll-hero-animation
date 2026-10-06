/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#3b82f6',
          cyan: '#38bdf8',
          accent: '#2563eb',
          dark: '#0a0d14',
          card: '#0f1422',
        }
      },
      letterSpacing: {
        widest: '.25em',
        ultra: '.4em',
      }
    },
  },
  plugins: [],
}
