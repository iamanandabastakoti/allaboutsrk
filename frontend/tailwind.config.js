/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Anta: ["Anta", "sans-serif"],
        MontserratAlternate: ["Montserrat Alternates", "sans-serif"],
        Prompt: ["Prompt", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primaryBg: "#ffffff",
        primaryText: "#000000",
        brandColor: "#14213d",
        buttonColor: "#fca311",
        borderColor: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
