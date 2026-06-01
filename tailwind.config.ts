import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      colors: {
        navy: {
          50: "#f0f4ff",
          100: "#e0eaff",
          200: "#c7d7fe",
          300: "#a5bbfd",
          400: "#8196fa",
          500: "#6371f5",
          600: "#4f50e8",
          700: "#4140cc",
          800: "#3535a4",
          900: "#2f3282",
          950: "#1a1c4b",
        },
        quantum: {
          50: "#f0fdff",
          100: "#ccf7fe",
          200: "#99edfd",
          300: "#4fdffa",
          400: "#06c8ef",
          500: "#00a8cc",
          600: "#0386ab",
          700: "#096b8b",
          800: "#0e5672",
          900: "#104860",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        "quantum-gradient": "linear-gradient(135deg, #1a1c4b 0%, #1e1b4b 50%, #0e1628 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "typing": "typing 3.5s steps(40, end), blink-caret .75s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(99, 102, 241, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 10px rgba(99, 102, 241, 0.3)",
        "glow-md": "0 0 20px rgba(99, 102, 241, 0.4)",
        "glow-lg": "0 0 40px rgba(99, 102, 241, 0.5)",
        "glow-cyan": "0 0 20px rgba(6, 200, 239, 0.4)",
        "card": "0 4px 24px rgba(0,0,0,0.08)",
        "card-dark": "0 4px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
