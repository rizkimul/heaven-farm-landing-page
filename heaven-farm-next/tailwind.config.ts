import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#28a745",
        "primary-dark": "#218838",
        secondary: "#f8f9fa",
        dark: "#333333",
        light: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
