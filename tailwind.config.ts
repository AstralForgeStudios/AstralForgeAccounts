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
        forge: {
          black: "#0A0A0A",
          dark: "#111111",
          card: "#161616",
          border: "#2A2A2A",

          gold: "#D4AF37",
          goldLight: "#E5C55B",
          goldDark: "#B38F1F",

          silver: "#C0C0C0",
          silverDark: "#8A8A8A",

          success: "#3FB950",
          warning: "#D4AF37",
          danger: "#DC2626",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        forge: "0 0 20px rgba(212, 175, 55, 0.15)",
        card: "0 4px 20px rgba(0, 0, 0, 0.35)",
      },

      backgroundImage: {
        "dashboard-bg": "url('/images/dashboard-bg.webp')",
        "profile-banner": "url('/banners/default-banner.webp')",
      },
    },
  },

  plugins: [],
};

export default config;