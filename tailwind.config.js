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
          primary: "#ec4899",
          secondary: "#8b5cf6",
          accent: "#f97316",
          neutral: "#1f2430",
          "base-100": "#0f1117",
          "base-200": "#161a23",
          "base-300": "#1f2430",
          info: "#38bdf8",
          success: "#34d399",
          warning: "#fbbf24",
          error: "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
