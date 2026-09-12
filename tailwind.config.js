/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        digivolt: {
          evergreen: "#00401A",
          evergreenDark: "#002810",
          evergreenDeep: "#001A0A",
          evergreenLight: "#005C26",
          evergreenBorder: "#005C26",
          pitchBlack: "#000000",
          dark: "#00401A",
          darkSurface: "#002810",
          darkCard: "#001F0D",
          darkGreenBorder: "#005C26",
          darkGreenSubtle: "#002810",
          darkGreenLine: "#00401A",
          emerald: "#10B981",
          emeraldHover: "#059669",
          emeraldDark: "#047857",
          emeraldLight: "#34D399",
          emeraldGlow: "#6EE7B7",
          white: "#FFFFFF",
          black: "#000000",
        },
        waymo: {
          white: "#FFFFFF",
          offwhite: "#F8F9FA",
          gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827",
          },
          black: "#000000",
          accent: "#10B981",
          cyan: "#10B981",
          emerald: "#10B981",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      spacing: {
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
      }
    },
  },
  plugins: [],
}
