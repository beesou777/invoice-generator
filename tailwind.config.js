/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customTomato: "#f2f3f7",
        whiteColor: "#ffffff",
        semiBlack: "#f5f7f9",
        semiBlue: "#C2DBFE",
        hrColor: "#e8e9e9",
        redHColor: "#bb2d3b",
        redColor: "#dc3545",
        blackPercent: "#625765",
        borderBlack: "#ced4da",
      },
    },
  },
  plugins: [],
};
