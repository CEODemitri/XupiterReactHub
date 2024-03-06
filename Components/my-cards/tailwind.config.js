/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
          100: "#FDC196",
          200: "#F1A66F",
          300: "#EB9657",
          400: "#E08847",
          500: "#D97B37",
          600: "#CE6F2A",
          700: "#9E5723",
          800: "#803A06",
          900: "#502200",
        },
      },
    },
  },
  plugins: [],
};
