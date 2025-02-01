import type { Config } from "tailwindcss";

export default {
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
        black: "#1F1F1F",
        gray: "var(--gray)",
        border: "var(--border)",
        "shadow-color": "#8080801A",
      },
      fontFamily: {
        giest: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      fontSize: {
        "2xs": "0.625rem",
        heading: "40px",
      },
    },
  },
  plugins: [],
} satisfies Config;
