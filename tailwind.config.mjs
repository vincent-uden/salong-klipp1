/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        fg: "#272214",
        "gold-dark": "#A98933",
        "gold-light": "#FFDA75",
      },
      fontFamily: {
        serif: ["DM Serif Display", "serif"],
        sans: ["DM Sans Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
};
