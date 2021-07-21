module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    margin: {
      sm: "30%",
      md: "16px",
      lg: "24px",
      xl: "48px",
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "60vh",
      small: "20vh",
      sm: "10vh",
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
