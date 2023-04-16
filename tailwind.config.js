/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./utils/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        NavColor: "#09314D",
        textOrange: "#FF8000",
        TextBlue: "#09314D",
        dashbordGray: "#F8FAFB",
        accent: {},
      },
    },
  },
  plugins: [],
};
