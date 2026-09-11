/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Single source of truth for the brand gradient stops.
        // Change these three values to re-theme the entire UI.
        brand: {
          start: "#f97316", // orange
          mid: "#ec4899", // pink
          end: "#8b5cf6", // violet
        },
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(90deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        devstack: {
          primary: "#d81b7e",
          secondary: "#7c3aed",
          accent: "#ff5722",
          neutral: "#0f172a",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#f1f5f9",
          info: "#0ea5e9",
          success: "#059669",
          warning: "#f59e0b",
          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
