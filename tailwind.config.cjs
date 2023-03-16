/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#212737",
        primary: "#2cb67d",
        secondary: "#7f5af0",
        white: "#FBFEFB",
        light: "#94a1b2",
      },
    },
    fontFamily: {
      mono: ["IBM Plex Mono", "monospace"],
    },
  },
  plugins: [],
};
