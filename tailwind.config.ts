import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3840px',
      '6xl': '5120px',
      '7xl': '7680px',
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#dc2626", // Enhanced red-600 - more vibrant
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f59e0b", // Enhanced amber-500 - more golden
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#fef3c7", // amber-100 - warm muted
          foreground: "#92400e", // amber-800
        },
        accent: {
          DEFAULT: "#fde68a", // amber-200 - warm accent
          foreground: "#92400e", // amber-800
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Traditional Indian colors
        indian: {
          saffron: "#ff6b35", // Vibrant saffron
          deepSaffron: "#e55a2b", // Deeper saffron
          crimson: "#dc143c", // Deep crimson red
          maroon: "#800020", // Rich maroon
          gold: "#ffd700", // Pure gold
          deepGold: "#b8860b", // Dark goldenrod
          emerald: "#50c878", // Emerald green
          deepEmerald: "#006400", // Dark green
          royalBlue: "#4169e1", // Royal blue
          deepBlue: "#000080", // Navy blue
          purple: "#8b008b", // Dark magenta
          deepPurple: "#4b0082", // Indigo
          copper: "#b87333", // Copper
          bronze: "#cd7f32", // Bronze
        },
        // Traditional Punjabi colors
        punjabi: {
          red: "#b91c1c",
          deepRed: "#7f1d1d",
          amber: "#d97706",
          gold: "#f59e0b",
          saffron: "#ea580c",
          maroon: "#881337",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "indian-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(255, 107, 53, 0.3), 0 0 40px rgba(255, 107, 53, 0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(255, 107, 53, 0.5), 0 0 60px rgba(255, 107, 53, 0.3)" 
          },
        },
        "mandala-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "lotus-bloom": {
          "0%": { 
            transform: "scale(0.8) rotate(0deg)",
            opacity: "0.7"
          },
          "50%": { 
            transform: "scale(1.1) rotate(180deg)",
            opacity: "1"
          },
          "100%": { 
            transform: "scale(1) rotate(360deg)",
            opacity: "0.9"
          },
        },
        "sari-flow": {
          "0%": { transform: "translateX(-100%) skewX(-15deg)" },
          "100%": { transform: "translateX(100%) skewX(-15deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
        "indian-glow": "indian-glow 3s ease-in-out infinite",
        "mandala-spin": "mandala-spin 20s linear infinite",
        "lotus-bloom": "lotus-bloom 4s ease-in-out infinite",
        "sari-flow": "sari-flow 8s ease-in-out infinite",
      },
      fontFamily: {
        punjabi: ["Noto Sans Gurmukhi", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
