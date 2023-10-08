import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const aspectRatio = require("@tailwindcss/aspect-ratio");
const forms = require("@tailwindcss/forms");
const typography = require("@tailwindcss/typography");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      md: ["0.938rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
      "5xl": ["3rem", { lineHeight: "1.125" }],
      "6xl": ["3.75rem", { lineHeight: "1.125" }],
      "7xl": ["4.5rem", { lineHeight: "1.125" }],
      "8xl": ["6rem", { lineHeight: "1.125" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-inter_tight)", ...defaultTheme.fontFamily.sans],
        writing: ["var(--font-gochi-hand)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },
  plugins: [aspectRatio, forms, typography],
};
export default config;
