/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#f59e0b",
          secondary: "#09090b",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
