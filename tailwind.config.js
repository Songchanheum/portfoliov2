/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      fontFamily: {
        jua: ["JUA", "cursive"],
        d2: ["D2CODING", "sans"],
        do: ["DOHYEON", "sans"],
        insta: ["INSTA", "Pretendard"],
      },
      transitionProperty: {
        height: "height",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      minHeight: {
        screenHeightWithoutHeader: "calc(100vh - 141px)",
      },
      height: {
        screenHeightWithoutHeader: "calc(100vh - 141px)",
      },
      margin: {
        header: "181px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
