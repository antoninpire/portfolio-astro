/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#202023",
        primary: "#2cb67d",
        secondary: "#7f5af0",
        white: "#FBFEFB",
        light: "#94a1b2",
        "background-light": "#f9f4ef",
        "primary-light": "#8c7851",
        "secondary-light": "#f25042",
        title: "#FBFEFB",
        text: "#FBFEFB",
        "title-light": "#020826",
        "text-light": "#716040",
        ternary: "#DF7861",
      },
      fontFamily: {
        sono: "Sono",
        "sono-bold": "Sono-Bold",
        "sono-light": "Sono-Light",
        "sono-semibold": "Sono-SemiBold",
        "sono-medium": "Sono-Medium",
      },
    },
    fontFamily: {
      mono: ["Sono", "monospace"],
      sans: ["Sono", "monospace"],
    },
  },
  darkMode: "class",
  plugins: [],
};
