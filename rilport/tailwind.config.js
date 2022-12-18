/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    colors: {
        primary: "#00539C",
        secondary: "#64748b",
        blue: "#00539C"
      },
    extend: {
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
