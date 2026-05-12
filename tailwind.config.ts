import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: "#EEF3FF",
          100: "#DCE6FF",
          200: "#B4C7FF",
          300: "#7E9BFF",
          400: "#4A75FF",
          500: "#255CFF",
          600: "#1E47E0",
          700: "#1A38B8",
          800: "#152C8F",
          900: "#0F2270",
        },
        ball: {
          50: "#F7FBE0",
          100: "#EEF8B7",
          200: "#DCEF7B",
          300: "#C8E04A",
          400: "#B4D02A",
          500: "#9ABC1F",
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "Pretendard", "ui-sans-serif", "system-ui"],
        display: ["var(--font-pretendard)", "Pretendard", "ui-sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 24px -8px rgba(37, 92, 255, 0.18)",
        card: "0 16px 40px -16px rgba(15, 34, 112, 0.18)",
        glow: "0 0 0 6px rgba(37, 92, 255, 0.18)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-mid": "float 4.5s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        confetti: "confetti 1.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        confetti: {
          "0%": { transform: "translateY(0) rotate(0)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" },
        },
      },
      backgroundImage: {
        "court-grid":
          "linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
