/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        restaurants: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
        green: {
          50: "#edfff6",
          100: "#d5ffeb",
          200: "#aeffd8",
          300: "#70ffbc",
          400: "#2bfd98",
          500: "#00d66f",
          600: "#00c05f",
          700: "#00964e",
          800: "#067541",
          900: "#076037",
          950: "#00371d",
      },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
