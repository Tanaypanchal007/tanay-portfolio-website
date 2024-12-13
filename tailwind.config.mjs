/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#1a191d",
        cardColor: "#1d1c21",
        primaryColor: "#008f00",
        primaryText: "#ffffff",
        secondaryText: "#dddddd"
      },
      fontFamily: {
        title: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        arcade: ['ArcadeClassic', 'sans-serif']
      }
    },
  },
  plugins: [],
};
