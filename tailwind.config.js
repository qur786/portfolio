/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF020A",
        "black-elevation": "#1E1E1E",
        "black-shadow": "#1F1E1E",
      },
      boxShadow: {
        "experience-icon-border":
          "0 0 0 4px #FF020A, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
        "experience-icon-border-success":
          "0 0 0 4px #45CE30, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        barlow: ["Barlow", "Helvetica"],
      },
      animation: {
        "slide-down": "slide-down 1s ease-in-out",
        "slide-up": "slide-down 1s ease-in-out reverse",
      },
      keyframes: {
        "slide-down": {
          "0%": {
            transform: "translateY(-200%)",
          },
          "75%": {
            transform: "translateY(20%)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
