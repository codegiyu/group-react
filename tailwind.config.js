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
      colors: {
        muted: '#8692A6',
        ash: "#8692A6",
        lightBlue: "#1565D8"
      },
      fontFamily: {
        inter: ["'Inter'", 'sans-serif'],
        poppins: ["'Poppins'", 'sans-serif']
      },
      fontSize: {
        sizePara: ['18px', '28px']
      },
      backgroundImage: {
        layer: "url('img/background.png')",
      },
    },
  },
  plugins: [],
}
