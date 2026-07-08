/** Extended with the MatchFluent design tokens from config/design-tokens.json */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F7F8FC",
        surface: "#FFFFFF",
        surfaceAlt: "#EFF1F8",
        gold: {
          50: "#FDF6E3",
          300: "#E8C97A",
          500: "#D4A843",
          700: "#A07C25",
        },
        navy: {
          50: "#EEF1F8",
          100: "#D5DDEF",
          500: "#2D4270",
          700: "#1B2A4A",
          900: "#0F1A30",
        },
        teal: {
          50: "#E6F7F5",
          100: "#C0EDE8",
          400: "#16C4B0",
          500: "#0E9F8E",
          600: "#0B8A7C",
          700: "#087568",
        },
        "text-secondary": "#4A5568",
        "text-muted": "#718096",
        border: "#DDE3F0",
        "border-strong": "#B8C3DC",
        success: "#2F9E6F",
        "success-light": "#E8F8F1",
        warning: "#E07B3A",
        "warning-light": "#FEF3EB",
        error: "#C0392B",
        "error-light": "#FDECEA",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(27, 42, 74, 0.08), 0 4px 16px rgba(27, 42, 74, 0.06)",
        "card-hover":
          "0 4px 8px rgba(27, 42, 74, 0.12), 0 12px 32px rgba(27, 42, 74, 0.10)",
        cta: "0 4px 16px rgba(14, 159, 142, 0.35)",
        "cta-hover": "0 8px 24px rgba(14, 159, 142, 0.45)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #1B2A4A 0%, #0E9F8E 100%)",
        "gradient-cta": "linear-gradient(90deg, #0E9F8E 0%, #0B8A7C 100%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.4s ease-out",
        "slide-up": "slideUp 0.35s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
