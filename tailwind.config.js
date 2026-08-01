/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F3D91",
          50: "#EAF0FB",
          100: "#CBDAF3",
          200: "#9CB9E7",
          300: "#6D97DA",
          400: "#3E76CE",
          500: "#1655B8",
          600: "#124A9E",
          700: "#0F3D91",
          800: "#0B2C69",
          900: "#081C42",
          950: "#050F24",
        },
        secondary: {
          DEFAULT: "#1B8A5A",
          50: "#E9F7EF",
          100: "#C6EBD7",
          200: "#9DDCBA",
          300: "#6BC998",
          400: "#3DB579",
          500: "#249C5F",
          600: "#1B8A5A",
          700: "#166F48",
          800: "#0F4E33",
          900: "#0A331F",
        },
        accent: {
          DEFAULT: "#D4AF37",
          50: "#FBF6E7",
          100: "#F5E9C3",
          200: "#EDD990",
          300: "#E4C75D",
          400: "#DBBB44",
          500: "#D4AF37",
          600: "#B08F26",
          700: "#856C1D",
          800: "#5C4A14",
          900: "#33290B",
        },
        surface: "#F8FAFC",
        ink: {
          50: "#F6F7F9",
          100: "#EEF0F3",
          200: "#DBE0E6",
          300: "#B8C0CB",
          400: "#8892A0",
          500: "#5C6577",
          600: "#414A5B",
          700: "#2E3644",
          800: "#1C222D",
          900: "#0F1319",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(15, 61, 145, 0.25)",
        card: "0 10px 40px -12px rgba(15, 23, 42, 0.15)",
        gold: "0 10px 30px -8px rgba(212, 175, 55, 0.45)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};
