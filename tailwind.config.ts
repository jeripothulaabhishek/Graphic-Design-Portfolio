import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F7F3",
        foreground: "#111111",
        brand: {
          bg: "#F7F7F3",
          surface: "#FFFFFF",
          dark: "#111111",
          yellow: "#FFB800",
          cyan: "#19C8D8",
          orange: "#FF6B35",
          border: "#E5E5E0",
          muted: "#707070",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#111111",
        },
        primary: {
          DEFAULT: "#FFB800",
          foreground: "#111111",
        },
        secondary: {
          DEFAULT: "#19C8D8",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FF6B35",
          foreground: "#FFFFFF",
        },
        border: "#E5E5E0",
        muted: {
          DEFAULT: "#F0F0EC",
          foreground: "#707070",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        editorial: "0 4px 20px -2px rgba(17, 17, 17, 0.05)",
        card: "0 4px 16px -2px rgba(17, 17, 17, 0.03)",
        lift: "0 16px 36px -4px rgba(17, 17, 17, 0.08)",
      },
      keyframes: {
        "folder-lift": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(1deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "folder-lift": "folder-lift 4s ease-in-out infinite",
        marquee: "marquee 35s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
