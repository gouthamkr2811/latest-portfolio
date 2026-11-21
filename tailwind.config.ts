import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050811",
        surface: {
          DEFAULT: "rgba(12, 19, 31, 0.7)",
          card: "rgba(10, 16, 28, 0.75)",
          border: "rgba(16, 185, 129, 0.15)",
        },
        accent: {
          DEFAULT: "#10b981", // Electric Emerald
          dark: "#059669",
          light: "#34d399",
          cyan: "#06b6d4",
          teal: "#14b8a6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
