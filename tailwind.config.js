/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ["Poppins", "sans-serif"],
        nav: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
