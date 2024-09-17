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
          light2: "#F5F6FF",
          light3: "#DBE5FF",
          dark: "#181E4B",
        },
        secondary: {
          DEFAULT: "#C59945",
          foreground: "#ffffff",
          light: "#DFD1B6",
        },
        "dark-grey": "#202124",
        "sky-blue": "#02395C",
        "app-green": "#4EA990",
        "app-grey": {
          bg: "#FAFAFA",
          "contact-bg": "#F4FFFC",
          "google-review": "#F8F8F8"
        }
      },
      
      boxShadow: {
        nav: "0px 5px 15px 0px #00000033",
        service: "8px 9px 26.8px 2px #0059441A",
      },
      animation: {
        "bump-down": "bumpDown 0.4s cubic-bezier(0.65, -0.07, 0.25, 1.24)",
      },
      keyframes: {
        bumpDown: {
          "from": { top: "2rem", opacity: "0" },
        //   "to": { top: "1.5rem", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
