import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "float-wide": "float-wide 12s ease-in-out infinite",
        "float-circular": "float-wide-circular 25s ease-in-out infinite",
        "float-diagonal": "float-wide-diagonal 20s ease-in-out infinite",
        "float-small-slow": "float 1s ease-in-out infinite",
        "float-small-slower": "float 12s ease-in-out infinite",
        "float-bubble": "float-bubble 10s ease-in-out infinite",
        "pulse-slow": "pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "pulse-very-slow": "pulse 20s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translate(0px, 0px)",
          },
          "25%": {
            transform: "translate(10px, -15px)",
          },
          "50%": {
            transform: "translate(-5px, -20px)",
          },
          "75%": {
            transform: "translate(-15px, -5px)",
          },
        },
        "float-wide": {
          "0%": {
            transform: "translate(0vw, 0vh)",
          },
          "25%": {
            transform: "translate(30vw, 25vh)",
          },
          "50%": {
            transform: "translate(10vw, 50vh)",
          },
          "75%": {
            transform: "translate(40vw, 75vh)",
          },
          "100%": {
            transform: "translate(0vw, 0vh)",
          },
        },
        "float-wide-circular": {
          "0%": {
            transform: "translate(0vw, 0vh)",
          },
          "25%": {
            transform: "translate(40vw, 20vh)",
          },
          "50%": {
            transform: "translate(20vw, 60vh)",
          },
          "75%": {
            transform: "translate(-20vw, 40vh)",
          },
          "100%": {
            transform: "translate(0vw, 0vh)",
          },
        },
        "float-wide-diagonal": {
          "0%": {
            transform: "translate(0vw, 0vh)",
          },
          "50%": {
            transform: "translate(60vw, 60vh)",
          },
          "100%": {
            transform: "translate(0vw, 0vh)",
          },
        },
        "float-bubble": {
          "0%, 100%": {
            transform: "translateY(0) translateX(0)",
          },
          "50%": {
            transform: "translateY(-20px) translateX(10px)",
          },
        },
      },
    },
  },
  plugins: [animate],
} satisfies Config;
