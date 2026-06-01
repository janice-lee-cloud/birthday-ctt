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
        night: "#070707",
        "soft-pink": "#FFB6C1",
        "rose-pink": "#F472B6",
        lavender: "#C4B5FD",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        handwriting: ["var(--font-handwriting)", "cursive"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        flicker: "flicker 0.15s ease-in-out infinite alternate",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        flicker: {
          "0%": { opacity: "0.85", transform: "scaleY(1)" },
          "100%": { opacity: "1", transform: "scaleY(1.08)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
