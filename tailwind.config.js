/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamilly: {
        lato: ["Lato Static", "sans-serif"],
        pacifico: ["Pacifico Static", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('')",
        "footer-texture": "url('')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      pink: "#f9769d",
      dark: "#171821",
      middark: "#21222d",
      purple: "#96a7ff",
      bleue: "#2345a1",
      blanc: "#fafcfc",
    },
  },
  plugins: [require("flowbite/plugin")],
};
