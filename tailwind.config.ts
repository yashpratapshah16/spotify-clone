import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        SlideX: {
          "45%": {
            transform: "translateX(-200%)",
          },
          "75%": {
            right: "translateX(100%)",
          },
        },
      },
      animation: {
        SlideX: "SlideX 20s linear",
      },
    },
  },
  plugins: [],
};
export default config;
