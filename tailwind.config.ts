import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": `linear-gradient(114.16deg, hsl(37, 99%, 67%) 30.83%, hsl(316, 73%, 52%) 70.62%)`,
      }),
      dropShadow: {
        glow: ["0 0 30px rgba(255,255, 255, 0.35)"],
      },
    },
  },
  plugins: [],
};
export default config;
