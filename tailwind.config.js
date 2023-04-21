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
      laptop: "1440px",
    },

    fontSize: {
      m: ["24px", { lineHeight: "32px", fontWeight: 700 }],
      "2m": [
        "32px",
        { lineHeight: "40px", letterSpacing: -1, fontWeight: 700 },
      ],
      "3m": [
        "40px",
        { lineHeight: "40px", letterSpacing: -1.14, fontWeight: 700 },
      ],
      l: ["48px", { lineHeight: "56px", fontWeight: 700, letterSpacing: -1.5 }],
      xl: [
        "88px",
        { lineHeight: "88px", fontWeight: 700, letterSpacing: -2.5 },
      ],
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
