/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        accentdarkblue: "#0C2340",
        accentbrown: "#AE9142",
        dark: "#081629",
        lightestgray: "#EDF2F9",
        txtgray: "#555555"
      },
      screens: {
        mylg: "960px",
        myxl: "1200px",
        my2xl: "1400px"

      },
      fontFamily: {
        libre: ['"Libre Franklin"', 'serif'],
        sumana: ['"Sumana"', 'serif'],
        cond: ['"Sofia Sans Extra Condensed"', 'serif']
      }
    },
  },
  plugins: [],
}

