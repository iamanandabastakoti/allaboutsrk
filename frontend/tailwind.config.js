/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Anta: ["Anta", "sans-serif"],
        MontserratAlternate: ["Montserrat Alternates", "sans-serif"],
        Prompt: ["Prompt", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primaryBg: "#ffffff",
        primaryText: "#000000",
        brandColor: "#002855",
        navbarBg: "#4f46e5",
        buttonColor: "#fca311",
        borderColor: "#e5e5e5",
      },
      screens: {
        sm: "320px", // => @media (min-width: 320px) { ... }
        md: "375px",
        lg: "425px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
