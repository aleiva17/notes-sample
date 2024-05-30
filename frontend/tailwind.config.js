/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#211951",
          DEFAULT: "#211951",
          dark: "#836FFF"
        },
        secondary: {
          light: "#836FFF",
          DEFAULT: "#836FFF",
          dark: "#15F5BA",
        },
        accent: {
          light: "#03BB85",
          DEFAULT: "#03BB85",
          dark: "#FFDF00",
        },
        light: "#F0F3FF",
        dark: "#191919",
      }
    },
  },
  plugins: [],
}

