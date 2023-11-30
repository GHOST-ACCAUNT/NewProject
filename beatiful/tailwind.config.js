/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        fontFamily: {
          "segoe-ui": "Segoe UI",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1160px",
        },
      },
      fontFamily: {
        "segoe-ui": "Segoe UI",
      },
      colors: {
        yomon: {
          default: "#666",
          1: "#474747",
        },
        globalBlue: {
          default: "#4579CB",
        },
        globalWhite: "#FAFCFF",
        black: {
          default: "#474747",
          1: "#666",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const columnFuntion = {
        ".dfcol": {
          display: "flex",
          flexDirection: "column",
        },
        ".dfrow": {
          display: "flex",
          flexDirection: "row",
        },
        ".checkbox": {},
      };

      addUtilities(columnFuntion, ["responsive", "hover"]);
    },
  ],
};
