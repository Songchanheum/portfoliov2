/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jua: ["JUA", "cursive"],
        d2: ["D2CODING", "sans"],
        do: ["DOHYEON", "sans"],
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
  plugins: [],
};
