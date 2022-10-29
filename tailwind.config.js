/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "480px",
          md: "768px",
          lg: "991px",
          xl: "1150px",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontSize: {
        bigFont: "65px",
        h1: "45px",
        h2: "36px",
      },
      // fontFamily: {
      //   'titleF': ["Libre Baskerville", serif],
      //   'body': ["Open Sans", sans-serif],
      // },
    },
  },
  plugins: [],
}