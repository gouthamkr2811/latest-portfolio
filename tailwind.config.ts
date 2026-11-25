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
        background: "#060814",
        surface: {
          DEFAULT: "rgba(13, 16, 32, 0.7)",
          card: "rgba(11, 14, 28, 0.75)",
          border: "rgba(139, 92, 246, 0.2)",
        },
        accent: {
          DEFAULT: "#8b5cf6", // Electric Violet
          violet: "#8b5cf6",
          purple: "#a855f7",
          cyan: "#06b6d4",   // Neon Cyan
          neon: "#22d3ee",
          indigo: "#6366f1",
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
