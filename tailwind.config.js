/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '1.5rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    },
    fontFamily: {
      sans: ['"Archivo"', 'sans-serif'],
    },
    colors: {
      brand: '#7CA2F4',
      dark: {
        10: '#121214',
        20: '#F3F7FF',
        30: '#FFFFFF'
      }
    },
    extend: {},
  },
  plugins: [],
}

