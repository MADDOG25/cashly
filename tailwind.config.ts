import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        dollars: "url('/image/dollars.webp')",
      },
      colors: {
        colorBg: "#FFFFFF",
        colorFont: " #000000",
        colorFont2: "#FFFFFF",
        colorAccent: "#0AD314",
      },
    },
  },
  plugins: [],
} satisfies Config;
