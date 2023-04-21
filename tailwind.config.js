/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/dist/**/*.{html,js}"],
  theme: {
    colors: {
      black: "hsl(0, 0%, 8%)",
      "dark-green": "hsl(0, 0%, 14%)",
      green: "hsl(153, 71%, 59%)",
      grey: "hsl(0, 0%, 85%)",
      white: "hsl(0, 0%, 100%)",
    },

    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      fontWeight: {
        medium: 500,
        bold: 700,
      },

      textDecorationColor: {
        green: "hsl(153, 71%, 59%)",
      },
    },
  },
  plugins: [],
};
