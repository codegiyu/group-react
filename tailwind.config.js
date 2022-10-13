/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    extend: {
      fontFamily: {
        inter: ["'Inter'", 'sans-serif']
      },
      colors: {
        ash: "#8692A6"
      },
      fontSize: {
        sizePara: ['18px', '28px']
      }
    },
  },
  plugins: [],
}
