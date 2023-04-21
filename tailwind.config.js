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

    screens: {
      mobile: "375px",
      tablet: "768px",
      laptop: "1140px",
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
