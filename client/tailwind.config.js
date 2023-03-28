/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        dark1: "#191C21",
        dark2: "#212833",
        gray: "#4E5D78",
        grayBorder: "#969FaF",
        blue: "#377DFF",
        green: "#38CB89",
        yellow: "#FFAB00",
        red: "#FF5630",
      },
    },
    fontSize: {
      heading1: ["30px", "46px"],
      heading2: ["26px", "40px"],
      heading3: ["18px", "28px"],
      display: ["16px", "24px"],
      body14: ["14px", "22px"],
      body13: ["13px", "18px"],
      body12: ["12px", "18px"],
      body10: ["10px", "16px"],
    },
  },
  plugins: [],
};
