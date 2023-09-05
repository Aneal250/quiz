/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02295A",
        "bg-primary": "#9699AB",
        "bg-secondary": "#969AAB",
      },
    },
  },
  plugins: [],
};
