/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // mauve colors
        mauve: {
          100: "#fcc0d7",
          200: "#c79de3",
          300: "#b395c7",
          400: "#a281b8",
          500: "#6f4d85",
          600: "#4c345c",
          700: "#351c45",
          800: "#23132e",
          900: "#180126",
        },
        // dirty-orange
        // start customizing
        dirtyOrange: {
          100: "#F8F8F8",
          200: "#F0F0F0",
          300: "#E8E8E8",
          400: "#E0E0E0",
          500: "#000",
          600: "#D0D0D0",
          700: "#C8C8C8",
          800: "#C0C0C0",
          900: "#B8B8B8",
        },
      },
    },
  },
  plugins: [],
}

