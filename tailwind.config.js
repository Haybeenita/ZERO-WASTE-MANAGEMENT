/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        zero: {
          50: "#f3fbf2",
          100: "#e5f6e2",
          200: "#ccecc6",
          300: "#a2db9a",
          400: "#71c266",
          500: "#51ad44",
          600: "#3c8831",
          700: "#316c29",
          800: "#2a5625",
          900: "#244720",
          950: "#0f260d",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
