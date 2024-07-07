/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-light": "#fff",
        ghostwhite: "#f7f7fb",
        black: "#000",
        deepskyblue: "#13a3f2",
        chocolate: "#f86a23",
        orangered: "#e3370b",
        cornsilk: "#fff7e1",
        gray: {
          "100": "rgba(0, 0, 0, 0.37)",
          "200": "rgba(255, 255, 255, 0.5)",
          "300": "rgba(0, 0, 0, 0.3)",
        },
        lightcyan: "#e1f9ff",
        "neutral-400": "#d9dbe9",
        darkslategray: {
          "100": "#3a3a3a",
          "200": "#343434",
        },
      },
      spacing: {},
      fontFamily: {
        "pt-sans": "'PT Sans'",
        "pt-sans-narrow": "'PT Sans Narrow'",
        inherit: "inherit",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        mini: "15px",
        "8xs": "5px",
      },
    },
    fontSize: {
      base: "16px",
      "9xl": "28px",
      "3xl": "22px",
      "2xs": "11px",
      lg: "18px",
      "23xl": "42px",
      "15xl": "34px",
      "6xl": "25px",
      sm: "14px",
      "13xl": "32px",
      "7xl": "26px",
      lgi: "19px",
      "5xl": "24px",
      xs: "12px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
