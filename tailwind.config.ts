import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#01206F",
          foreground: "#ffffff",
          light: "#E1E9FD",
        },
        secondary: {
          DEFAULT: "#C59945",
          foreground: "#ffffff",
          light: "#DFD1B6",
        },
        "dark-grey": "#202124",
        "sky-blue": "#02395C",
      },
      boxShadow: {
        nav: "0px 5px 15px 0px #00000033",
        service: "8px 9px 26.8px 2px #0059441A",
      },
    },
  },
  plugins: [],
};
export default config;
