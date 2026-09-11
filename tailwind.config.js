import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
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
  plugins: [daisyui],
};
