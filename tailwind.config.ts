import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        light: "#FAFAFA",
        dark:'#787676'
      },
      success: {
        base: "#72C240",
      },
      error:{
        base:'#F73032'
      },
      white: {
        base: "#fff",
      },
      purlple: {
        base: "#3A3ADB",
      },
    },
  },
  plugins: [],
};
export default config;
