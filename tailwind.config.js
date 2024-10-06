/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#5C73C4",
        primaryDark: "#1D4ED8",
        secondary: "#A7393D",
        secondaryDark: "#7c2d32",
        secondaryLight: "#a10812",
      },
    },
  },
  purge: ["./index.html", "./src/**/*.{svelte,js,ts}"], // para CSS não utilizado
  variants: {
    extend: {},
  },
  darkMode: false, // ou 'media' ou 'class'
};