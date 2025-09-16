/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      boxShadow: {
        myShadow1: "3.5px -4px 0 1px hsl(240, 33%, 7%)",
        myShadow2: "-3.5px -4px 0 0 rgb(17,24,39)",
        "custom-inset":
          "3px 3px 4px 5px rgba(0, 0, 0, 0.25) ,inset 2px 5px 6px rgba(255, 255, 255, 0.37),inset 0px -5px 6px rgba(0, 0, 0, 0.37)",
      },
      colors: {
        cncDark: "hsl(240, 33%, 7%)",
        cncBlue: "hsl(232, 78%, 58%)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        "cnc-gradient": "linear-gradient(to right, #0A0A1A, #3C52E8)",
      },
    },
  },
  plugins: [],
};
